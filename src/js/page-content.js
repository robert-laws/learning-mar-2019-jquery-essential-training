// basic selectors
$("section.one-page-content p").css("color", "red");

// basic filters
$("section.two-page-content p:gt(2)").css("color", "green");
$("section.two-page-content p:first").css("color", "blue");
// $("section.two-page-content p:not(p:eq(2))").css("color", "yellow");

// advanced selectors
$("section.three-page-content div.one + p").css("color", "red");

// attribute filters
$("section.four-page-content p[id^=sam]").css("color", "green");

// advanced filters
$("section.five-page-content p:contains('hammer')").css("color", "red");

// traversing documents
$("section.six-page-content p#name").next().css("color", "blue");

$("section.six-page-content p").each(function(index, elem) {
  $(elem).css("fontStyle", "italic");
});

// full example
$("section.seven-page-content p[data-type=apple]").css("color", "green");
$("section.seven-page-content p[data-type=cherry]").css("color", "red");
$("section.seven-page-content p[data-type=orange]").css("color", "orange");