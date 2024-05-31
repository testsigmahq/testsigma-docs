---
title: "Trigger Test Plans Remotely & Wait Until Completion"
metadesc: "This article discusses in detail on how to trigger a Test Plan remotely using REST API and wait until the Test Run completion before publishing the test results"
noindex: false
order: 21.82
page_id: "Trigger Test Plan remotely and wait until Completion"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Checking the Test Run Results"
  url: "#checking-the-test-run-results"
- type: link
  name: "Powershell script"
  url: "#powershell-script"
- type: link
  name: "Bash Script"
  url: "#bash-script"
---

---

If you are adding automated testing as an AUTOMATED stage in your CI/CD Pipeline, you will need to trigger the Tests from the Pipeline and get the test results into the Pipeline as well. You can use Testsigma Test Plan Execution Results API to do that..

You should already be familiar with creating and running Test Plans. See [Manage Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key.  To know more about obtaining API Keys, refer - [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)

---
##**Checking the Test Run Results**

The below steps give an overview of how the script given at the bottom of this page works:

1. Start the Test Plan Run using the ‘Test Plan Trigger API’
See [How to trigger Test Plans remotely.](https://testsigma.com/docs/api/test-plans/)<br>The Response of the Trigger Test Plan API Call returns the ID of the specific Test Plan Run called ‘Run ID’. This Run ID can be used to check the status of the Test Plan Run once it starts.

2. Get the ‘id’ key in the JSON Response of Trigger Test Plan API
The Run ID for the Test Plan Run is under the key ‘id’. This is unique for the current Test Plan Run.

3. Use the above ‘id’ with the ‘Test Plan Status API’ to check Test Plan Run Status.
See [How to check Test Plan Status.](https://testsigma.com/docs/api/test-plans/#test-plan-status-api)

4. Check if the value of the ‘status’ key is “STATUS\_COMPLETED”
We can poll the Test Plan Execution Results API with this Run ID at regular intervals to check for the status of the specific Test Plan execution by reading the ‘status’ key in the JSON Response for the Test Plan Execution Results API Call.

5. If no, go to Step 3.

6. If yes, check the ‘result’ key to get the Test Plan Result.

We have provided the Powershell and Bash scripts for the same below. Please feel free to make changes as required and plug the same into your CI Pipeline.

---
##**Powershell script**

The Script triggers the executions and also waits until the Timeout(MAX\_WAIT\_TIME\_FOR\_SCRIPT\_TO\_EXIT) for the execution to complete.

```shell
###################################################################################
#TESTSIGMA_API_KEY -> API key generated in Testsigma App under Configurations > API Keys

#TESTSIGMA_TEST_PLAN_ID -> Testsigma Test Plan ID. You can get this ID from Testsigma App in Test Plans > TEST_PLAN_NAME > CI/CD Integration Tab

#MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT -> Maximum time the script will wait for Test Plan execution to complete.
The script will exit if the script execution exceeds this mentioned Maximum time.
However, the Test Plan will continue to run in Testsigma. You can check test results by logging to Testsigma later once you get the Execution passed or failed email/Slack/Teams notification.

#REPORT_FILE_PATH -> File path to save report Ex: <DIR_PATH>/report.xml, ./report.xml, C:\report.xml

#$RUN_TIME_PARAMS -> Here, you can pass Runtime parameters such as Deployment URL to the Test Plan
@{key1="$env:buildURL";key2="value2"}
####################################################################################



####### START USER INPUTS ######

$TESTSIGMA_API_KEY="<API_KEY>"

$TESTSIGMA_TEST_PLAN_ID="3058"



$REPORT_FILE_PATH="./junit-report.xml"

$MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT=180

$RUN_TIME_PARAMS=@{}

####### END USER INPUTS ########

#### Please do not change the values below this if you are not sure what you are doing. ####

$TESTSIGMA_TEST_PLAN_REST_URL="https://app.testsigma.com/api/v1/execution_results"
$TESTSIGMA_JUNIT_REPORT_URL="https://app.testsigma.com/api/v1/reports/junit"

$POLL_INTERVAL_FOR_RUN_STATUS=5
$NO_OF_POLLS=($MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT/$POLL_INTERVAL_FOR_RUN_STATUS)
$SLEEP_TIME=($POLL_INTERVAL_FOR_RUN_STATUS * 60)
$global:LOG_CONTENT=""
$global:APP_URL=""
$global:EXECUTION_STATUS=-1
$RUN_ID=""
$global:IS_TEST_RUN_COMPLETED=-1
$PSDefaultParameterValues['Invoke-RestMethod:SkipHeaderValidation'] = $true
$PSDefaultParameterValues['Invoke-WebRequest:SkipHeaderValidation'] = $true
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}" -f $TESTSIGMA_API_KEY)))
function get_status{
    $global:RUN_RESPONSE=Invoke-RestMethod  $status_URL -Method GET -Headers @{Authorization=("Bearer {0}" -f $TESTSIGMA_API_KEY);'Accept'='application/json'} -ContentType "application/json"

    $global:EXECUTION_STATUS=$RUN_RESPONSE.status
    $global:APP_URL=$RUN_RESPONSE.app_url
    Write-Host "Execution Status: $EXECUTION_STATUS"

}
function checkTestPlanRunStatus{
  $global:IS_TEST_RUN_COMPLETED=0
  for($i=0; $i -le $NO_OF_POLLS;$i++){
    get_status
    Write-Host "Execution Status before going for wait: $EXECUTION_STATUS ,Status_message:"($RUN_RESPONSE.message)
    if ($EXECUTION_STATUS -eq "STATUS_IN_PROGRESS"){
      Write-Host "Sleep/Wait for $SLEEP_TIME seconds before next poll....."
      sleep $SLEEP_TIME
    }else{
      $global:IS_TEST_RUN_COMPLETED=1
      Write-Host "Automated Tests Execution completed...`nTotal script execution time:$(($i)*$SLEEP_TIME/60) minutes"
      break
    }
  }
}

function saveFinalResponseToAFile{
  if ($IS_TEST_RUN_COMPLETED -eq 0){
      $global:LOG_CONTENT="Wait time exceeded specified maximum time(MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT). Please visit below URL for Test Plan Run status.$APP_URL"
     Write-Host "LogContent:$LOG_CONTENT nResponse content:"($RUN_RESPONSE | ConvertTo-Json -Compress)

	 }
	 else{
	 Write-Host "Fetching reports:$TESTSIGMA_JUNIT_REPORT_URL/$RUN_ID"
	 $REPORT_DATA=Invoke-RestMethod  $TESTSIGMA_JUNIT_REPORT_URL/$RUN_ID -Method GET -Headers @{Authorization=("Bearer {0}" -f $TESTSIGMA_API_KEY);'Accept'='application/xml'} -ContentType "application/json"
	 Write-Host "report data: $REPORT_DATA"

	# Add-Content -Path $REPORT_FILE_PATH -Value ($REPORT_DATA)
	$REPORT_DATA.OuterXml | Out-File $REPORT_FILE_PATH
		}
    Write-Host "Reports File::$REPORT_FILE_PATH"

}

Write-Host "No of polls: $NO_OF_POLLS"
Write-Host "Polling Interval:$SLEEP_TIME"
Write-Host "Junit report file path: $REPORT_FILE_PATH"

$REQUEST_BODY_TABLE=@{executionId="$TESTSIGMA_TEST_PLAN_ID"}
$REQUEST_BODY_TABLE.Add("runtimeData",$RUN_TIME_PARAMS)

$REQUEST_BODY = $REQUEST_BODY_TABLE | ConvertTo-Json -Compress
Write-Host "Json payload" $REQUEST_BODY
try{
$TRIGGER_RESPONSE=Invoke-RestMethod -Method POST -Headers @{Authorization=("Bearer {0}" -f $TESTSIGMA_API_KEY);'Accept'='application/json'} -ContentType 'application/json' -Body $REQUEST_BODY -uri $TESTSIGMA_TEST_PLAN_REST_URL
}catch{

 Write-Host "Code:" $_.Exception.Response.StatusCode.value__
 Write-Host "Description:" $_.Exception.Response.StatusDescription
 Write-Host "Error encountered in executing a test plan. Please check if the test plan is already in running state."
 exit 1
}

$RUN_ID=$TRIGGER_RESPONSE.id
Write-Host "Execution triggered RunID: $RUN_ID"
$status_URL = "$TESTSIGMA_TEST_PLAN_REST_URL/$RUN_ID"
Write-Host  $status_URL

checkTestPlanRunStatus
saveFinalResponseToAFile

```




---
##**Bash Script**

```shell
#!/bin/bash
#**********************************************************************
#
# TESTSIGMA_API_KEY -> API key generated under Testsigma App >> Configuration >> API Keys
#
# TESTSIGMA_TEST_PLAN_ID -> Testsigma Test Plan ID.
# You can get this from Testsigma App >> Test Plans >> <TEST_PLAN_NAME> >> CI/CD Integration
#
# MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT -> Maximum time in minutes the script will wait for TEST Plan execution to complete. 
# The script will exit if the Maximum time is exceeded. However, the Test Plan will continue to run. 
# You can check test results by logging to Testsigma.
#
# JUNIT_REPORT_FILE_PATH -> Filename with directory path to save the report.
# For Example, <DIR_PATH>/report.xml, ./report.xml
# 
# RUNTIME_DATA_INPUT -> Specify runtime parameters/variables to be used in the tests in comma-separated manner
# For example, "url=https://the-internet.herokuapp.com/login,variable1=value1"
#
# BUILD_NO -> Specify Build number if you want to track the builds in Testsigma. It will show up in the Test Results page
# For example, we are using $(date +"%Y%m%d%H%M") to use current data and time as build number.
#
#********START USER_INPUTS*********
TESTSIGMA_API_KEY=eyJhbGciOixxxxxxxxxxxxxxxTNpgv0w
TESTSIGMA_TEST_PLAN_ID=2090
MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT=1
JUNIT_REPORT_FILE_PATH=./junit-report-$(date +"%Y%m%d%H%M").xml
RUNTIME_DATA_INPUT="url=https://the-internet.herokuapp.com/login,test=1221"
BUILD_NO=$(date +"%Y%m%d%H%M")
#********END USER_INPUTS***********

#********GLOBAL variables**********
POLL_COUNT=5
SLEEP_TIME=$(((MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT*60)/$POLL_COUNT))
JSON_REPORT_FILE_PATH=./testsigma.json
TESTSIGMA_TEST_PLAN_REST_URL=https://app.testsigma.com/api/v1/execution_results
TESTSIGMA_JUNIT_REPORT_URL=https://app.testsigma.com/api/v1/reports/junit
MAX_WAITTIME_EXCEEDED_ERRORMSG="Given Maximum Wait Time of $MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT minutes exceeded waiting for the Test Run completion. 
Please log-in to Testsigma to check Test Plan run results. You can visit the URL specified in \"app_url\" JSON parameter in the response to go to the Test Plan results page directly. 
For example, \"app_url\":\"https://dev.testsigma.com/#/projects/31/applications/53/version/72/report/executions/197/runs/819/environments\""
#**********************************

#Read arguments
for i in "$@"
  do
  case $i in
    -k=*|--apikey=*)
    TESTSIGMA_API_KEY="${i#*=}"
    shift
    ;;
    -i=*|--testplanid=*)
    TESTSIGMA_TEST_PLAN_ID="${i#*=}"
    shift
    ;;
    -t=*|--maxtimeinmins=*)
    MAX_WAIT_TIME_FOR_SCRIPT_TO_EXIT="${i#*=}"
    shift
    ;;
    -r=*|--reportfilepath=*)
    JUNIT_REPORT_FILE_PATH="${i#*=}"
    shift
    ;;
    -d=*|--runtimedata=*)
    RUNTIME_DATA_INPUT="${i#*=}"
    shift
    ;;
    -b=*|--buildno=*)
    BUILD_NO="${i#*=}"
    shift
    ;;
   -h|--help)
    echo "Arguments: "
    echo " [-k | --apikey] = <TESTSIGMA_API_KEY>"
    echo " [-i | --testplanid] = <TESTSIGMA_TEST_PLAN_ID>"
    echo " [-t | --maxtimeinmins] = <MAX_WAIT_TIME_IN_MINS>"
    echo " [-r | --reportfilepath] = <JUNIT_REPORT_FILE_PATH>"
    echo " [-d | --runtimedata] = <OPTIONAL COMMA SEPARATED KEY VALUE PAIRS>"
    echo " [-b | --buildno] = <BUILD_NO_IF_ANY>"

    printf "Example:\n bash testsigma_cicd.sh --apikey=YSWfniLEWYK7aLrS-FhYUD1kO0MQu9renQ0p-oyCXMlQ --testplanid=230 --maxtimeinmins=180 --reportfilepath=./junit-report.xml \n\n"
    printf "With Runtimedata parameters:\n bash testsigma_cicd.sh --apikey=YSWfniLEWYK7aLrS-FhYUD1kO0MQu9renQ0p-oyCXMlQ --testplanid=230 --maxtimeinmins=180
    --reportfilepath=./junit-report.xml --runtimedata=\"buildurl=http://test1.url.com,data1=testdata\" --buildno=773\n\n"

    shift
    exit 1
    ;;
  esac
done

get_status(){
  # Old method
  # RUN_RESPONSE=$(curl -u $TESTSIGMA_USER_NAME:$TESTSIGMA_PASSWORD --silent --write-out "HTTPSTATUS:%{http_code}" -X GET $TESTSIGMA_TEST_PLAN_RUN_URL/$HTTP_BODY/status)

  RUN_RESPONSE=$(curl -H "Authorization:Bearer $TESTSIGMA_API_KEY"\
    --silent --write-out "HTTPSTATUS:%{http_code}" \
    -X GET $TESTSIGMA_TEST_PLAN_REST_URL/$RUN_ID)
  
  # extract the body
  RUN_BODY=$(echo $RUN_RESPONSE | sed -e 's/HTTPSTATUS\:.*//g')
  # extract the response status
  RUN_STATUS=$(echo $RUN_RESPONSE | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')
  # extract exec status
  EXECUTION_STATUS=$(echo $RUN_BODY | getJsonValue status)
}

function checkTestPlanRunStatus(){
  IS_TEST_RUN_COMPLETED=0
  for ((i=0;i<=POLL_COUNT;i++))
  do
    get_status
    if [ $EXECUTION_STATUS = "STATUS_IN_PROGRESS" ]; then
      echo "Poll #$(($i+1)) - Test Execution in progress... Wait for $SLEEP_TIME seconds before next poll.."
      sleep $SLEEP_TIME
    elif [ $EXECUTION_STATUS = "STATUS_COMPLETED" ]; then
      IS_TEST_RUN_COMPLETED=1
      echo "Poll #$(($i+1)) - Tests Execution completed..."
      TOTALRUNSECONDS=$(($(($i+1))*$SLEEP_TIME))
      echo "Total script run time: $(convertsecs $TOTALRUNSECONDS)"
      break
    else
      echo "Unexpected Execution status. Please check run results for more details."
    fi
  done
}

function saveFinalResponseToJSONFile(){
  if [ $IS_TEST_RUN_COMPLETED -eq 0 ]
    then
      echo "$MAX_WAITTIME_EXCEEDED_ERRORMSG"
  fi
  
  echo "$RUN_BODY" >> $JSON_REPORT_FILE_PATH
  echo "Saved response to JSON Reports file - $JSON_REPORT_FILE_PATH"
}

function saveFinalResponseToJUnitFile(){
  if [ $IS_TEST_RUN_COMPLETED -eq 0 ]
    then
      echo "$MAX_WAITTIME_EXCEEDED_ERRORMSG"
      exit 1
  fi

  echo ""
  echo "Downloading the Junit report..."

  curl --progress-bar -H "Authorization:Bearer $TESTSIGMA_API_KEY" \
    -H "Accept: application/xml" \
    -H "content-type:application/json" \
    -X GET $TESTSIGMA_JUNIT_REPORT_URL/$RUN_ID --output $JUNIT_REPORT_FILE_PATH

  echo "JUNIT Reports file - $JUNIT_REPORT_FILE_PATH"
}

function getJsonValue() {
  json_key=$1
  awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/\042'$json_key'\042/){print $(i+1)}}}' | tr -d '"'
}

function populateRuntimeData() {
  IFS=',' read -r -a VARIABLES <<< "$RUNTIME_DATA_INPUT"
  RUN_TIME_DATA='"runtimeData":{'
  DATA_VALUES=
  for element in "${VARIABLES[@]}"
  do
    DATA_VALUES=$DATA_VALUES","
    IFS='=' read -r -a VARIABLE_VALUES <<< "$element"
    DATA_VALUES="$DATA_VALUES"'"'"${VARIABLE_VALUES[0]}"'":"'"${VARIABLE_VALUES[1]}"'"'
  done
  DATA_VALUES="${DATA_VALUES:1}"
  RUN_TIME_DATA=$RUN_TIME_DATA$DATA_VALUES"}"
}

function populateBuildNo(){
  if [ -z "$BUILD_NO" ]
    then
      echo ""
  else
    BUILD_DATA='"buildNo":'$BUILD_NO
  fi
}

function populateJsonPayload(){
  JSON_DATA='{"executionId":'$TESTSIGMA_TEST_PLAN_ID
  populateRuntimeData
  populateBuildNo
  if [ -z "$BUILD_DATA" ];then
      JSON_DATA=$JSON_DATA,$RUN_TIME_DATA"}"
  elif [ -z "$RUN_TIME_DATA" ];then
      JSON_DATA=$JSON_DATA,$BUILD_DATA"}"
  elif [ -z "$BUILD_DATA" ] && [ -z "$RUN_TIME_DATA" ];then
      JSON_DATA=$JSON_DATA"}"
  else
     JSON_DATA=$JSON_DATA,$RUN_TIME_DATA,$BUILD_DATA"}"
  fi
  echo "InputData="$JSON_DATA
}

function convertsecs(){
  ((h=${1}/3600))
  ((m=(${1}%3600)/60))
  ((s=${1}%60))
  printf "%02d hours %02d minutes %02d seconds" $h $m $s
}

function setExitCode(){
  RESULT=$(echo $RUN_BODY | getJsonValue result)
  APPURL=$(echo $RUN_BODY | getJsonValue result)
  echo $RESULT
  echo $([[ $RESULT =~ "SUCCESS" ]])
  if [[ $RESULT =~ "SUCCESS" ]];then
    EXITCODE=0
  else
    EXITCODE=1
  fi
}
#******************************************************

echo "************ Testsigma: Start executing automated tests ************"

populateJsonPayload

# store the whole response with the status at the end
HTTP_RESPONSE=$(curl -H "Authorization:Bearer $TESTSIGMA_API_KEY" \
  -H "Accept: application/json" \
  -H "content-type:application/json" \
  --silent --write-out "HTTPSTATUS:%{http_code}" \
  -d $JSON_DATA -X POST $TESTSIGMA_TEST_PLAN_REST_URL )

# extract the body from response
HTTP_BODY=$(echo $HTTP_RESPONSE | sed -e 's/HTTPSTATUS\:.*//g')

# extract run id from response
RUN_ID=$(echo $HTTP_RESPONSE | getJsonValue id)

# extract the status code from response
HTTP_STATUS=$(echo $HTTP_RESPONSE | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')

# print the run ID or the error message
NUMBERS_REGEX="^[0-9].*"
if [[ $RUN_ID =~ $NUMBERS_REGEX ]]; then
  echo "Run ID: $RUN_ID"
else
  echo "$RUN_ID"
fi

EXITCODE=0
# example using the status
if [ ! $HTTP_STATUS -eq 200  ]; then
  echo "Failed to start Test Plan execution!"
  echo "$HTTP_RESPONSE"
  EXITCODE=1
  #Exit with a failure.
else
  echo "Number of maximum polls to be done: $POLL_COUNT"
  checkTestPlanRunStatus
  saveFinalResponseToJUnitFile
  saveFinalResponseToJSONFile
  setExitCode
fi

echo "************************************************"
echo "Result JSON Response: $RUN_BODY"
echo "************ Testsigma: Completed executing automated tests ************"
exit $EXITCODE

```