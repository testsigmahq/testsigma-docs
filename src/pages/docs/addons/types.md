---
title: "Types of addons in Testsigma"
metadesc: "This article discusses the ways in which you can extend automation in Testsigma using addons | Learn the types of addons you can create in Testsigma"
noindex: false
order: 18.7
page_id: "Types of addons in Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "In Testsigma you can create addons for the following use case"
  url: "#in-testsigma-you-can-create-addons-for-the-following-use-case"
---

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on What is an addon?](https://testsigma.com/docs/addons/what-is-an-addon/).
> 2. [Documentation on prerequisites for creating an addon](https://testsigma.com/docs/addons/create/).

---
## In Testsigma you can create addons for the following use case:

Both the Classic and Modern engines support all five addon types below. See [Modern addons in Testsigma](https://testsigma.com/docs/addons/modern/overview/) for the Modern (TypeScript) equivalents.

1. **Custom Actions:** Testsigma has a comprehensive, built-in actions that lets you automate most user actions in simple English. But sometimes you may need to automate actions unique to your AUT. You can build your own actions and automate those unique actions using addons. For more information on building a custom action in addons, refer to the [documentation on building a custom action in addons](https://testsigma.com/tutorials/addons/how-create-addons-actions/).

2. **Test Data Generator:** Testsigma has default data generators to generate test data for your automation. For more information on viewing default data generators, refer to the [documentation on viewing default data generators](https://testsigma.com/docs/test-data/data-generators/default-list/) But you can create your own data generators. Refer to the [documentation on building a custom data generator](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).

3. **Conditional If:** You can create an action to execute a sequence of steps if the condition is matched. You can write your own logic for the conditional if. Refer to the [documentation on adding conditional if actions](https://testsigma.com/tutorials/addons/how-create-addons-conditional-if/).

4. **While Loops:** You can create an action to execute a sequence of steps until the condition is matched. You can write your own logic for the while loop. Refer to the [documentation on adding while actions](https://testsigma.com/tutorials/addons/how-create-addons-while-loops/).

5. **Post-Plan Hooks:** You can define actions that run after a test plan finishes, regardless of its outcome. Use these hooks to automate tasks that need to occur after a test plan finishes. Refer to the [documentation on creating post-plan hook addon](https://testsigma.com/docs/addons/create-a-post-plan-hook-add-on/).
