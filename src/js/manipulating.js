// manipulating page content

// creating content
// inserting html content
$("#contact p:first").html("<span>Get in touch here.</span>");
// inserting plain text
$("#contact p:last").text("<p>Learn more about us</p>");

// inserting content - inside collection
// appending content
$("#headlines ul").append("<li>New Appended Item</li>");
// prepending content
$("#headlines ul").prepend("<li>New Prepended Item</li>");
// alternate wording for append
$("<li>Last Appended Item</li>").appendTo("#headlines ul");

// inserting content - outside selection
// before content
$("#list ul").before("<h6>The List Title</h6>");
// after content
$("#list ul").after("<p><em>fine print...</em></p>");
// alternate wording for after
$("<small>extra fine print</small>").insertAfter("#list ul");

// altering existing content
// wrap
$("section#details").wrap("<div id='details-wrapper' />");
// wrapAll
$("section#details li").wrap("<em />");
// empty content
$("section#details li:last").empty();
// remove content
$("section#details li:first").remove();
// replaceWith callback function
$("section#details li").replaceWith(function() {
  if($(this).text().indexOf("Three") != -1) {
    return "<p>the text is matched</p>";
  } else {
    return this.outerHTML;
  }
});

// manipulating attributes
// attr
$("#names p").attr("title", "names title");

$("#names p:first").attr("id", "first-listed-name");

// removeAttr
$("#names p:last").removeAttr("title");

$("#names p:nth-child(2)").attr({ id: "selected-id", class: "selected-class"});

// working with css content
var colorValue = $("#css-content p:first").css("color");
$("#css-content p:last").text(colorValue);

// adding css
$("#css-content p:last").css("fontWeight", "bold");

// using an object for multiple styles
$("#css-content p#sample-text").css({fontStyle: "italic", color: "red", fontSize: "2rem"});

// hasClass
var classPresent = $("#css-content p#third-text").hasClass("text-large");
$("#css-content p#third-text").append(" (is class .text-large present: " + classPresent + ")");

// addClass
$("#css-content p#third-text").addClass("color-crimson");

$(document).ready(function() {
  $("#btn-on").click(function(e) {
    $("#click-text").toggleClass("changing-text");
  });

  $("#btn-add").click(function(e) {
    $("#click-text").addClass("color-crimson");
  });

  $("#btn-remove").click(function(e) {
    $("#click-text").removeClass("color-crimson");
  });
});

// working with data
var dataResult = JSON.stringify($("#text-data p:first").data(), null, "  ");
$("#text-data p:first").next().text("data value: " + dataResult);

$("#text-data").attr('data-use', 100);
$("#text-data").data('use', 66);
// alert(JSON.stringify($("#text-data").data(), null, "  "));




// challenge
if(document.querySelector("#blue-checkbox")) {
  document.querySelector("#blue-checkbox").addEventListener('change', function(event) {
    updateColorList("blue", event.target.checked);
  });
  
  document.querySelector("#red-checkbox").addEventListener('change', function(event) {
    updateColorList("red", event.target.checked);
  });
  
  function updateColorList(color, isChecked) {
    if(isChecked == true) {
      $("#hide-show li." + color).removeClass("hide");
    } else {
      $("#hide-show li." + color).addClass("hide");
    }
  }
}