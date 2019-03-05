console.log('Welcome to the website...');

$('document').ready(function() {
  $('.site-header').css('background-color', 'lightblue');
});

$('document').ready(function() {
  $('main.quick .one p:first').css('color', 'red');
});

$("document").ready(function() {
  $("main.quick .two p:not(.basic)").css("font-weight", "bold");
});

$("document").ready(function() {
  var newParagraph = $("<p>");
  newParagraph.append("<em>Greetings to all</em>");
  $("main.quick .three").html(newParagraph);
});

$("document").ready(function() {
  $("main.quick .three p").prepend("Actor says: ");
});

$("document").ready(function() {
  $("main.quick .five p").text("<h1>An Example Title</h1>");
});

$("document").ready(function() {
  $("main.quick .six p").on("mouseover", onMouseOver);
  $("main.quick .six p").on("mouseleave", onMouseLeave);
});
function onMouseOver(evt) {
  $("main.quick .six p").css("color", "red");
}
function onMouseLeave(evt) {
  $("main.quick .six p").css("color", "black");
}

$("document").ready(function() {
  $("main.quick .seven button").click(function() {
    $("main.quick .seven #box").animate({left: 500, borderWidth: 5}, 400)
  });
});