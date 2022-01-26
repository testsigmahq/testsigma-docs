---
title: "Filters & Custom Reports"
order: 13.27
page_id: "Filters & Custom Reports"
warning: false
---


### Filters and Custom Reports

When a Test Plan is executed, you can filter out the data based on different criteria.
Filters in Run Results will help you create custom reports for your team. 

To generate filtered reports, please follow below steps. 

 1. Navigation to Test development > Run Results as shown below.

    ![run results page from test development menu in Testsigma to access reports](https://docs.testsigma.com/images/analytics-reports/test-development-run-results-access-reports.png)


2. Select the test plan that you want to filter.

   ![filter option on run results page in Testsigma to access reports](https://docs.testsigma.com/images/analytics-reports/filter-option-run-results-access-reports.png)
  
3. Click on the filters icon. A filters dialogue box will appear on the right, as displayed below:

   ![filter overlay on run results page in Testsigma to access reports](https://docs.testsigma.com/images/analytics-reports/filter-overlay-run-results-access-reports.png)

4. You can filter by Result, Type, Priority, Created By, Assignee and Reviewer.

  

## How to use Filters in your Test Plan??

 

- If you want to filter out the results based on Test Plan Run result type, you need to select the appropriate Result type in the filter as shown below.
  
	![gif demonstrating how to use filters in your test plan](https://docs.testsigma.com/images/analytics-reports/gif-use-filters-test-plan.gif)
  

- If you want to filter out the results based on Test case Assignee , you need to select the appropriate Assignee in the filter as shown below.


	![gif demonstrating how to use filters in your test plan and filter results using Assignee name](https://docs.testsigma.com/images/analytics-reports/gif-use-filters-test-plan-assignee-name.gif)  

  

- Similarly you can apply other filters to filter your test cases based on Created By, Priority and Type, etc.

  
	![filter-by-result-and-assignee-together](https://docs.testsigma.com/images/analytics-reports/filter-by-result-and-assignee-together.png)
  

### Exporting filtered reports

Once filter is applied, you can export the filtered data to an excel or a JUNIT XML report.
  
![export your test plan after filter is applied on the run results](https://docs.testsigma.com/images/analytics-reports/export-testplan-after-filter.png)
  
## Test Plan Run History Filters and reports

When you create a Test Plan and execute it multiple times, you can easily filter out the Test Plan Runs based on selected criteria.

1. Click on the filter icon as shown below

	![filter icon for the run history section](https://docs.testsigma.com/images/analytics-reports/filter-button-on-run-history.png)  

2. Once clicked on filters icon , a filter dialog with options will be displayed

	  ![filter options for the run history](https://docs.testsigma.com/images/analytics-reports/filters-for-run-history.png)

  
3. Below gif demonstrates how to filter out the Test Plan runs based on the Result.
  
	  ![gif demonstrating how to filter test plans on the run result status](https://docs.testsigma.com/images/analytics-reports/gif-filter-test-plan-runs.gif)
  


  
4. To view the report across Test Plan runs, click on the graph icon as shown below .


	![graph option for displaying the test plan runs in the run history in the form of a graph](https://docs.testsigma.com/images/analytics-reports/show-graph-option-run-history.png)  

  

Once clicked on graph icon, you can see a dialogue page appears within the page as shown in the screenshot below.

  
![Graph Result details](https://docs.testsigma.com/images/analytics-reports/run-result-details-graph.png)  

This graph shows that the test plan was executed thrice and in all executions there were 2 Test cases ran.

When you hover on the bars, you can see a message tagged on it showing how many test cases got passed and how many failed as shown in the GIF below.

  

![Graph result details](https://docs.testsigma.com/images/analytics-reports/gif-run-result-details-graph.gif)  


You can also search your Test Plan runs by entering the build no/run ID in the search field as shown below.

  
![build no based search](https://docs.testsigma.com/images/analytics-reports/gif-search-run-history.gif)  

## Test case result list view

In any Test Plan run, Test cases can be part of different Test Suites and Test suites can be part of different Test Machines. In order to view the Test cases result based on the Test suite or the Test machine, you need to select the appropriate list view in the drop down as shown below.
  
![Test case result list](https://docs.testsigma.com/images/analytics-reports/run-results-test-case-results.png)

When you select Test Case Results, all individual test case results will be displayed with execution status. Here we have 2 test cases that are displayed as one is passed and the other one failed.

![Test case result list view](https://docs.testsigma.com/images/analytics-reports/run-details-test-case-results.png)
  
  

Now , let's select Test Suite Results , the result will be displayed based on no. of. Test suites you have  in the test plan as shown below.
  
![Test case result list view](https://docs.testsigma.com/images/analytics-reports/gif-run-details-test-suite-results.gif)


Now, let's select Test machine Results to view the result of each Test Machine/Test Device. 
On Left hand side you can see the result of tests execution in individual Test Machines.
On Right hand side, you can see the detailed Test case result status report.  

![Test Machine result list view](https://docs.testsigma.com/images/analytics-reports/gif-run-details-test-machine-results.gif)
  

At the top right corner, there is a small details icon visible. It gives you customised details about test execution of test cases/ test suite/ test machine .

Click on the details icon as shown below

![Test Plan result list view](https://docs.testsigma.com/images/analytics-reports/details-icon-for-test-machine-results.png)


When you click on the details icon you can see the Run Details popup page at the corner as shown  below.

  
![Test Plan result details view](https://docs.testsigma.com/images/analytics-reports/gif-run-details-test-machine-results.gif)









