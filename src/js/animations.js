// animations

// style animation div
$(".animations-example-area div").css({border: "1px solid #555", backgroundColor: "lightblue", padding: "1rem"});

$(".animations-example-area div:last").css({border: "1px solid #555", backgroundColor: "lightgreen", padding: "1rem", margin: "1rem", width: "150px"});

// hide/show/toggle
$("#animations-hide").click(function() {
  $(".animations-one div").hide();
});

$("#animations-show").click(function() {
  $(".animations-one div").show(1000, "linear");
});

$("#animations-toggle").click(function() {
  $(".animations-one div").toggle("slow", completeFunction);
});

function completeFunction() {
  $(this).text("New Text...");
}

// fade in, out, to
$("#animations-fade-out").click(function() {
  $(".animations-two div").fadeOut();
});

$("#animations-fade-in").click(function() {
  $(".animations-two div").fadeIn(750);
});

$("#animations-fade-to").click(function() {
  $(".animations-two div").fadeTo(1000, 0.5);
});

$("#animations-fade-to-multi").click(function() {
  $(".animations-two div").fadeTo(1000, 0.5).fadeTo(500, 0.75).fadeTo(750, 0).fadeTo(1250, 1.0);
});

// sliding up, down, toggle
$("#animations-slide-up").click(function() {
  $(".animations-three div").slideUp();
});

$("#animations-slide-down").click(function() {
  $(".animations-three div").slideDown("fast");
});

$("#animations-slide-toggle").click(function() {
  $(".animations-three div").slideToggle("slow");
});

// custom animations
$("#animations-animate-one").click(function() {
  $(".animations-four div").animate({width: "300px"});
});

$("#animations-animate-two").click(function() {
  $(".animations-four div").animate({height: "70px"}, 1000);
});

$("#animations-animate-three").click(function() {
  $(".animations-four div").animate({height: "100px", width: "600px"}, 1000, "swing");
});

// ajax


function getData() {
  $.ajax({
    url: "assets/data/info.txt",
    type: "GET",
    dataType: "text",
    success: successFunction,
    error: errorFunction,
    complete: function(xhr, status) {
      console.log("completed ajax request");
    }
  });
}

$(document).ready(function() {
  getData();
});

function successFunction(res) {
  $(".ajax-one div p").append(res);
}

function errorFunction(xhr, status, strError) {
  console.log("error...");
}

// convenience functions
$(".ajax-two div").load("assets/data/info.html #p2");

// working with xml and ajax data

// xml
function getXMLData() {
  $.get("assets/data/person.xml", function(res) {
    var name = res.getElementsByTagName("name")[0];
    var title = res.getElementsByTagName("title")[0];
    var nameVal = name.firstChild.nodeValue;
    var titleVal = title.firstChild.nodeValue;
    $(".ajax-three div").append(nameVal + " - " + titleVal);
  });
}

$(document).ready(function() {
  getXMLData();
});

// json
$(document).ready(function() {
  $.getJSON("assets/data/people.json")
    .done(function(namesData) {
      namesData.names.forEach(function(elem) {
        $(".ajax-four div").append(elem.first_name + " ");
        $(".ajax-four div").append(elem.last_name + " - ");
        $(".ajax-four div").append(elem.title);
        $(".ajax-four div").append("<hr>");
      });
    });
})