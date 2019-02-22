console.log('Welcome to the website...');

$('document').ready(function() {
  $('.site-header').css('background-color', 'lightblue');
});

$('document').ready(function() {
  $('.one p:first').css('color', 'red');
});

$("document").ready(function() {
  $(".two p:not(.basic)").css("font-weight", "bold");
});

$("document").ready(function() {
  var newParagraph = $("<p>");
  newParagraph.append("<em>Greetings to all</em>");
  $(".three").html(newParagraph);
});

$("document").ready(function() {
  $(".three p").prepend("Actor says: ");
});

$("document").ready(function() {
  $(".five p").text("<h1>An Example Title</h1>");
});

$("document").ready(function() {
  $(".six p").on("mouseover", onMouseOver);
  $(".six p").on("mouseleave", onMouseLeave);
});
function onMouseOver(evt) {
  $(".six p").css("color", "red");
}
function onMouseLeave(evt) {
  $(".six p").css("color", "black");
}

$("document").ready(function() {
  $(".seven button").click(function() {
    $(".seven #box").animate({left: 500, borderWidth: 5}, 400)
  });
});