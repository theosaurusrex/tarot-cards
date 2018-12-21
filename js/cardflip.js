var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
//card 2
var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});
//third card
var card3 = document.querySelector('.card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});
//if all card_.classlist is-flipped equals true, enabledraw three button
//if (card3)