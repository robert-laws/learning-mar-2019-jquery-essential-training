# Learning - Lynda: Javascript Essential Training

[Website for Course](https://learning-mar-2019-jquery-essential-training.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/50adb733-aff6-451d-96cc-3c94459d5e00/deploy-status)](https://app.netlify.com/sites/learning-mar-2019-jquery-essential-training/deploys)

## Table of Contents

* [JQuery Quick Overview](#jquery-quick-overview)
* [Working with Page Content](#working-with-page-content)
* [Manipulating Page Content](#manipulating-page-content)
* [JQuery Events](#jquery-events)
* [Animations](#animations)
* [Ajax](#ajax)

---

## JQuery Quick Overview

The `JQuery()` or `$()` function will search through the DOM for any elements that match the selector argument. Using the `$(document).ready()` pattern the code within the ready function will be run once the DOM elements have been loaded into the page. Likewise, using `$(window).on("load", function() {...})` will run once all the content (images, etc.) have been loaded in addition to the DOM.

```javascript
// all paragraphs will be red once the DOM has loaded
$(document).ready(function() {
  $("p").css("color", "red");
});
```

Shorthand for the `$(document).ready()` formulation can be written as the following:

```javascript
$(function() {
  $("p").css("color", "red");
});
```

## Working with Page Content

Common activities with page content include selecting and filtering.

**Selectors**

```javascript
$(function() {
  $("p.introduction");
});

$(function() {
  $("#main-title > p");
});

$(function() {
  $("img[src^=award-]");
})
```

**Filters**

```javascript
$(function() {
  $("p:last");
});

$(function() {
  $("p:contains(words)");
})
```

## Manipulating Page Content

Creating elements and working with existing page content is done using `$(element)` to create a JQuery object. It can be added to the page using `.html()` to replace an element's existing content, `.append()` or `.prepend()` to add before or after the existing content. Using `.text()` will insert only text - even if it includes html syntax.

```javascript
var copyrightText = $("<small>copyright 2019</small>");
$("#contact-information").append(copyrightText);
```

**Attributes**

Attributes can be evaluated, assigned, and removed using the `.attr()` or `.removeAttr()` functions.

```javascript
$(function() {
  $("p").attr("class", "basic");
});
```

## JQuery Events

Adding event handlers to selections is done either by using the `.on()` function or by specifying the event using an event helper like `.mouseenter()`.

```javascript
$(function() {
  $("#my-button").on("click", function() {
    $("p").css("color", "red");
  });
})
```

## Animations

## Ajax