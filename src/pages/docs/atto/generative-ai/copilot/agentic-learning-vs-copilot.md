---
title: "Understanding Agentic Learning and Run with Copilot"
page_title: "Understanding Agentic Learning and Run with Copilot"
metadesc: "Learn the difference between Agentic Learning and Run with Copilot in Testsigma. Discover how they improve test design and validate execution."
noindex: false
order: 4.7434
page_id: "understanding-agentic-learning-and-run-with-copilot"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Run with Copilot"
  url: "#run-with-copilot"
- type: link
  name: "Agentic Learning"
  url: "#agentic-learning"
- type: link
  name: "Compare Run with Copilot and Agentic Learning "
  url: "#compare-run-with-copilot-and-agentic-learning"
---

---

Testsigma provides two AI-powered features to improve the quality and reliability of test cases. While both features enhance the automation process, they serve distinct roles in the testing lifecycle. **Agentic Learning** assists in the design and discovery of the correct test flow, while **Run with Copilot** verifies that the test executes correctly within a real environment.

---

## **Run with Copilot**

**Run with Copilot** validates a generated test case through real-time execution. This feature runs the test steps in a selected environment to ensure the automation is ready for deployment.

### **Capabilities**

Use **Run with Copilot** to perform the following tasks:
   - Execute generated test steps to identify failures.
   - Identify issues with element detection.
   - Validate that assertions and test data are correct.
   - Debug steps before saving the test case to the library.

### **When to Use Run with Copilot**

Select **Run with Copilot** to confirm that a test runs successfully from start to finish. Use this feature to verify the following conditions:
   - The test runs without errors.
   - The AI identifies all page elements correctly.
   - The test data work as expected in the specific environment.

---

## **Agentic Learning**

**Agentic Learning** identifies the correct test flow when information is missing or incorrect. It functions as an exploratory tester by learning the application's behavior and adjusting the test case to match the actual user journey.

### **Capabilities**

Use **Agentic Learning** to perform the following tasks:
   - Identify application navigation paths.
   - Locate and add missing steps to the test flow.
   - Correct steps that deviate from the expected workflow.
   - Learn common behavior patterns within the application.

### **When to Use Agentic Learning**

Select **Agentic Learning** in the following scenarios:
   - The generated test flows are incomplete.
   - Steps are missing or are in the incorrect order.
   - The application navigation path is unclear.

---

## **Compare Run with Copilot and Agentic Learning**

Use the following table to understand when to use **Run with Copilot** and **Agentic Learning** while generating and validating test cases:

| Feature | Run with Copilot | Agentic Learning |
|    :----:   |    :----:   |    :----:    |   
| Primary Goal | Execute and validate the generated steps | Discover and correct the test flow |
| Approach | Executes the defined steps to verify they work correctly | Explores the application to identify missing or incorrect steps |
| Focus Area | Ensuring reliable step execution | Improving the accuracy of the test flow |
| When It Runs | After generation, before saving the test case | During test generation and learning |
| User Involvement | Interactive debugging and validation | Mostly autonomous with minimal user |
| Outcome | Test case ready for automation and execution | Refined and complete test flow |

---