# Contributing to Testsigma

Testsigma docs are built using [Gatsby](https://www.gatsbyjs.com/) and deployed to https://testsigma.com/docs/.

If you feel insecure about how to start contributing, feel free to ask us on our [Discord Server](https://discord.com/invite/5caWS7R6QX), in the #contributors channel. 


## **Code Of Conduct**
Read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing

## **Getting Started** 

We use [Github Flow](https://guides.github.com/introduction/flow/index.html), so all code changes happen through pull requests. [Learn more](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/). 

 1. Please make sure there is an issue associated with the work that you're doing. If it doesn’t exist, [create an issue](https://github.com/testsigmahq/testsigma-docs/issues/new/choose).
 2. If you're working on an issue, please comment that you are doing so to prevent duplicate work by others also.
 3. Fork the repo and create a new branch from the <code>main</code> branch.
 4. Please name the branch as <code>issue-[issue-number]-[issue-name(optional)]</code>. For example, if you are fixing Issue #205 name your branch as <code>issue-205 or  issue-205-newdoc-for-rest-api-tesing</code> .
 6. Squash your commits and refer to the issue using `Fix #<issue-no>` in the commit message, at the start.
 7. Rebase <code>main</code> with your branch and push your changes.

### **Setup for local development**

 1. Git clone:  `git clone git@github.com:testsigmahq/testsigma-docs.git`
 2. `cd testsigma-docs`
 3. Create a branch `git checkout -b issue-[issue-number]-[issue-name(optional)]`
 4. `cd testsigma-docs`
 5. `npm install`
 6. `npm start `

Now you can access docs on your local server using http://localhost:8000/docs/

## **Committing code**

The main branch (protected) contains the code that is tested and released. 
Pull requests should be made against the <code>main</code> branch. <code>main</code> contains all of the new features and fixes that are under testing and ready to go out in the next release.

Once you are done with the code changes on your local machine, follow the below steps to commit.

### **Commit & Create Pull Requests**

1. Please make sure there is an issue associated with the work that you're doing. If it doesn’t exist, [create an issue](https://github.com/testsigmahq/testsigma-docs/issues/new/choose).
2. Squash your commits and refer to the issue using `Fix #<issue-no>` in the commit message, at the start.
3. Rebase <code>main</code> with your branch and push your changes.
4. Once you are confident in your code changes, create a pull request in your fork to the <code>main</code> branch in the testsigmahq/testsigma-docs base repository.
5. Link the issue of the base repository in your Pull request description. [Guide](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)

For all contributions, a CLA (Contributor License Agreement) needs to be signed [here](https://cla-assistant.io/testsigmahq/testsigma-docs) before (or after) the pull request has been submitted. A bot will prompt contributors to sign the CLA via a pull request comment, if necessary.

### **Commit messages**

- The first line should be a summary of the changes, not exceeding 50 characters, followed   by an optional body that has more details about the changes. Refer to [this link](https://github.com/erlang/otp/wiki/writing-good-commit-messages) for more information on writing good commit messages.
- Don't add a period/dot (.) at the end of the summary line.

## **Notes**
- Docs are currently deployed manually. Changes will not reflect immediately after a PR gets merged. 
- The search is powered by [Algolia](https://www.algolia.com/) and is updated every day. Your local changes will not be reflected in search results.
