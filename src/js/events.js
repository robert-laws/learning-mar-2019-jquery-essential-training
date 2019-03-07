// events

// binding an event to a button click
$("#events-one-click-on").on("click", function() {
  $(".events-one p:first").toggleClass("red");
});

$("#events-two-click-on").on("click", function() {
  $(".events-one p:first").css("fontSize", addSize)
});

let size = 1.7;
function addSize() {
  size = size + 0.1;
  return size + "rem";
}

// event helpers
$(".events-two p:first").hover(function(evt) {
  $(this).toggleClass("blue");
});

$(".events-two p:last").mouseenter(function() {
  $(this).css("color", "red");
});

// JQuery event object
$(".events-three input:first").keydown(function(event) {
  $(".events-three p:first").text(event.which);
});