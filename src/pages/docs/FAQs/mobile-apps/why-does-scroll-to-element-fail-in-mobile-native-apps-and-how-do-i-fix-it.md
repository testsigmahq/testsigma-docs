---
title: "Why Does Scroll to Element Fail in Mobile Native Apps and How Do I Fix It??"
metadesc: "Learn why Scroll to Element fails in mobile native apps and how to fix it by using Swipe NLPs to bring off-screen elements into the viewport before scrolling."
order: 25.27
page_id: "why-does-scroll-to-element-fail-in-mobile-native-apps-and-how-do-i-fix-it"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Swipe NLPs to Use Before Scroll to Element"
  url: "#swipe-nlps-to-use-before-scroll-to-element"
- type: link
  name: "Steps to Use Swipe NLps"
  url: "#steps-to-use-swipe-nlps"
---

---

In mobile native apps, the Scroll to Element NLP only works when the target element is already rendered within the current screen viewport. If the element exists on the page but hasn't scrolled into view yet, the NLP has no visible target to act on, causing the step to fail silently or do nothing. This article discusses how to resolve this by using a Swipe NLP before Scroll to Element to manually bring the element into the viewport first.

---

## **Swipe NLPs to Use Before Scroll to Element**

Use one of the following Swipe NLPs depending on which direction you need to scroll:

| NLP | Effect |
| --- | --- |
| Swipe from middle to top on the screen | Scrolls the screen upward, reveals content below the current view |
| Swipe from bottom to top on the screen | A more aggressive scroll, reveals content further below |
| Swipe from top to bottom on the screen | Scrolls back upward, use if you've scrolled past the element |

![NLPs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Swipe_1.png)

---

## **Steps to Use Swipe NLPs**

1. Open your test case and navigate to the step where you want to interact with an off-screen element.

2. If you are unsure about how many scrolls are required to view the element, then use the **While** loop to scroll through the page.

3. Click **Step Inside Loop** to add a step inside the loop.
   ![Srep Inside Loop](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/swipe_2.1.png)

4. Enter the Swipe NLP in the step action field.
   ![Swipe NLP](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/swipe_2.2.png)

5. If needed, add additional swipe steps to move the element further into view.

6. Click **Run** to execute the test case and verify that the element comes into view before the scroll action.
   ![Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/swipe_2.3.png)

---