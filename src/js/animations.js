// animations

// style animation div
$(".example-area__samples div").css({border: "1px solid #555", backgroundColor: "lightblue", padding: "1rem"});

$(".example-area__samples div:last").css({border: "1px solid #555", backgroundColor: "lightgreen", padding: "1rem", margin: "1rem", width: "150px"});

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