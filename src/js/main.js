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