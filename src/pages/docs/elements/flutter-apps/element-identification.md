---
title: "Element identification"
metadesc: "Testsigma supports automating mobile apps built using Flutter SDK, if app enables element identification. Learn how to identify element in flutter applications"
noindex: false
order: 6.7
page_id: "Element identification"
warning: false

---



<br>

Testsigma supports automating mobile apps built using Flutter SDK if the app meets certain prerequisites to enable element identification on these apps. This article describes what needs to be done by the app developer if certain elements are not identifiable during automation.<br>

When Flutter renders the Widgets tree, it also maintains a second tree, called *Semantics Tree*. Mobile automation on Flutter apps relies on this semantics tree to find elements in the application. This means during the development of the app, the developer has to ensure that all the widgets that are involved in automation need to have semantic labels set in order to be identifiable during automation.
Most built-in widgets in Flutter have semantic properties set, which makes those elements identifiable. Custom widgets, however, may not have semantic labels. In some cases, Semantics for multiple widgets may be merged together using **MergeSemantics** class. Some widgets may be wrapped with **ExcludeSemantics**. Make sure that **MergeSemantics** and **ExcludeSemantics** are not used on widgets that need to be selectable during recording.<br>

If **ExcludeSemantics** is used on a widget, it will not be selectable.<br>

If **MergeSemantics** is used inside any Widget, semantic labels of child widgets are merged and will appear as a single element for selection during mobile recording.<br>

For example, in the screenshot shown below, two text widgets appear as being merged together. *You have pushed the button this many times: 0* shows up as a single selectable element rather than two separate elements.<br>
![SS1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Screenshot_1.png)<br>

To fix such issues, custom widgets must be wrapped with a semantics widget with ‘label’ property set or MergeSemantics/ExcludeSemantics wrapper should be removed.
![SS2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Screenshot_2.png)<br>
To verify this is done properly and to view an outline of a widget, set `showSemanticsDebugger: true` for the widget.
![SS3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Screenshot_3.png)<br>

This will display the elements with their outline based on the semantics of the widget.
![SS4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Screenshot_4.png)