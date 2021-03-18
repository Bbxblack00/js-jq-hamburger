// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript.
//  Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.


$('.fa-bars').click(function() {
  $('.hamburger-menu').css('display', 'block');
});

$('.fa-times').click(function() {
  $('.hamburger-menu').css('display', 'none');
});
