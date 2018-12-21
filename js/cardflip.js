//var cardThreeFlipped = false;
var cardOneFlipped = false;
var cardTwoFlipped = false;
var cardThreeFlipped = false;

var card = document.querySelector('.card');

//document.getElementById("drawThree").disabled = true;
document.getElementById("drawThree").disabled = true;
//enable btn to draw three if all cards are flipped
function checkCards (){

  if(cardOneFlipped && cardTwoFlipped && cardThreeFlipped){
    document.getElementById("drawThree").disabled = false;
    console.log("All cards are face up");
  }
  // disable btn if any card is face down
  else if(!cardOneFlipped||!cardTwoFlipped||!cardThreeFlipped){
    document.getElementById("drawThree").disabled = true;
    console.log("one or more cards are face-down");

  };
};

//clicks behavior on cards

card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  cardOneFlipped = !cardOneFlipped;
  console.log("cardOneFlipped is " + cardOneFlipped);
  checkCards();  
});

//card 2
var card2 = document.querySelector('.card2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
  cardTwoFlipped = !cardTwoFlipped;
  console.log("cardTwoFlipped " + cardTwoFlipped);
  checkCards();
});

//third card
var card3 = document.querySelector('.card3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
    cardThreeFlipped = !cardThreeFlipped;
    console.log("cardThreeFlipped " + cardThreeFlipped);
    checkCards();
});
//Initially disable btn to drawThree
