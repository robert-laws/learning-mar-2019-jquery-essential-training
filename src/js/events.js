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
