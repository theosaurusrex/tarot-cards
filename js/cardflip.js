//var cardThreeFlipped = false;
var cardOneFlipped = false;
var cardTwoFlipped = false;
var cardThreeFlipped = false;

var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card2');
var card3 = document.querySelector('.card3');

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


// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
//   cardOneFlipped = !cardOneFlipped;
//   console.log("cardOneFlipped is " + cardOneFlipped);
//   checkCards();  
// });

//card1 update

card1.addEventListener( 'click', cardOneClicked);
card1.addEventListener( 'touchstart', cardOneClicked);

function cardOneClicked() {
  card1.classList.toggle('is-flipped');
  cardOneFlipped = !cardOneFlipped;
  console.log("cardOneFlipped is " + cardOneFlipped);
  checkCards();  
}

//card 2

card2.addEventListener( 'click', cardTwoClicked);
card2.addEventListener( 'touchstart', cardTwoClicked);

function cardTwoClicked() {
  card2.classList.toggle('is-flipped');
  cardTwoFlipped = !cardTwoFlipped;
  console.log("cardTwoFlipped " + cardTwoFlipped);
  checkCards();
}


// var card2 = document.querySelector('.card2');
// card2.addEventListener( 'click', function() {
//   card2.classList.toggle('is-flipped');
//   cardTwoFlipped = !cardTwoFlipped;
//   console.log("cardTwoFlipped " + cardTwoFlipped);
//   checkCards();
// });

//third card

card3.addEventListener( 'click', cardThreeClicked);
card3.addEventListener( 'touchstart', cardThreeClicked);

function cardThreeClicked() {
  card3.classList.toggle('is-flipped');
    cardThreeFlipped = !cardThreeFlipped;
    console.log("cardThreeFlipped " + cardThreeFlipped);
    checkCards();
}
//Initially disable btn to drawThree
