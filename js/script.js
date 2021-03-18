// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript.
//  Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.


$('.header-right > a').click(function() {
  $('.hamburger-menu').css('display', 'block');
});

$('.hamburger-menu > a').click(function() {
  $('.hamburger-menu').css('display', 'none');
});
