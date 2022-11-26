---
title: "Element identification"
metadesc: "How to identify element in flutter applications"
noindex: false
order: 6.7
page_id: "Element identification"
warning: false

---

Testsigma supports automating mobile apps built using Flutter SDK if the app meets certain prerequisites to enable element identification on these apps. This article describes what needs to be done by the app developer if certain elements are not identifiable during automation.
When Flutter renders the Widgets tree, it also maintains a second tree, called Semantics Tree. Mobile Automation on Flutter apps relies on this Semantics Tree to find elements in the application. This means during the development of the app, the developer has to ensure that all the widgets that are involved in automation need to have Semantic labels set in order to be identifiable during automation.
Most built-in widgets in Flutter have Semantic properties set, which makes those elements identifiable. Custom widgets, however, may not have semantic labels. In some cases, Semantics for multiple widgets may be merged together using MergeSemantics class. Some widgets may be wrapped with ExcludeSemantics. 
