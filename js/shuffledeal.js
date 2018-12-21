
//tarot card names, without image type
var tarotImages = [
  "Empress",
  "Fool",
  "Emperor",
  "Death_Card",
  "Devil",
  "Priestess",
  "Priest",
  "Wizard",
  "Ace_of_Pentacles",
  "Two_of_Pentacles",
  "Three_of_Pentacles",
  "Four_of_Pentacles",
  "Five_of_Pentacles",
  "Six_of_Pentacles",
  "Seven_of_Pentacles",
  "Eight_of_Pentacles",
  "Nine_of_Pentacles",
  "Ten_of_Pentacles",
  "Page_of_Pentacles",
  "Knight_of_Pentacles",
  "Queen_of_Pentacles",
  "King_of_Pentacles",
  "Ace_of_Swords",
  "Ace_of_Swords",
  "Two_of_Swords",
  "Three_of_Swords",
  "Four_of_Swords",
  "Five_of_Swords",
  "Six_of_Swords",
  "Seven_of_Swords",
  "Eight_of_Swords",
  "Nine_of_Swords",
  "Ten_of_Swords",
  "Page_of_Swords",
  "Knight_of_Swords",
  "Queen_of_Swords",
  "King_of_Swords",
  ];

//Initial shuffle cards function at beginning user state

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//1.0:Currently shuffling array in this document above
var random = shuffle(tarotImages);

for (i=0; i<3; i++) {
  document.getElementById("tarotImage"+(i+1)).style.backgroundImage = "url(images/card-faces/" + random[i] +".jpg)";
  console.log(random[i]);  
  
};
//-------------------------end 1.0 shuffle of array within this document-------------------------------

//-------------------------begin 2.0 shuffle of cards.json to replace array above from 1.0-----------------------------

//Get cards.json array into this document

fetch('./js/cards.json').then(response => {
        return response.json();
}).then(data => {
    console.log("working json fxn in shuffleDeal.js");
    
}).catch(err => {
    console.log("broken json fxn in shuffleDeal.js")
})

//shuffle cards.json
var random = shuffle(tarotImages);

for (i=0; i<3; i++) {
  document.getElementById("tarotImage"+(i+1)).style.backgroundImage = "url(images/card-faces/" + random[i] +".jpg)";
  console.log(random[i].name);  
  
};
//-------------------------End Shuffle 2.0-------------------------------------------------------------------------
//-------------------------begin image to DOM assignments------------------------------------------------------

//Initial Image name to document

var firstImageName = "The " + String(tarotImages[0].replace("_", " ").replace("_", " "));
console.log(firstImageName);
var secondImageName = "The " +  String(tarotImages[1].replace("_", " ").replace("_", " "));
var thirdImageName = "The " + String(tarotImages[2].replace("_", " ").replace("_", " "));

//ImageShowing boolean to tell if card is showing
Boolean(firstImageShowing = false);
// var imageNameOne =false;

function firstImageNameShow() {
  console.log("Show name for first image starts "+firstImageShowing);
    
    if ( firstImageShowing ){      
    
      console.log("when true, Show name for first image is "+firstImageShowing);
      
      var imageNameOne = document.getElementById("tarotName1").innerHTML;
      
      document.getElementById("tarotName1").innerHTML = firstImageName;
      
      firstImageShowing = false;
       console.log("After true runs, show name for first image switched to "+firstImageShowing);
    } else {
      console.log("Show name for first image switched to "+firstImageShowing); 

      imageNameOne = document.getElementById("tarotName1").innerHTML;
    
      document.getElementById("tarotName1").innerHTML = firstImageName;
      firstImageShowing = true;
    };    
}

function secondImageNameShow() {
    var imageNameTwo = document.getElementById("tarotName2").innerHTML;
    
    document.getElementById("tarotName2").innerHTML = secondImageName;
}
function thirdImageNameShow() {
    var imageNameThree = document.getElementById("tarotName3").innerHTML;
    
    document.getElementById("tarotName3").innerHTML = thirdImageName;
}


//============= Draw three new cards function ===========================


  // update DOM by ID
  //   var parent = document.getElementById("div1");
  //   var child = document.getElementById("p2");
  //   var para = document.createElement("p");
  //   var node = document.createTextNode("This is new.");
  //   para.appendChild(node);
  //   parent.replaceChild(para,child);

//Disable drawThree button
drawThree.disabled = true|false
function disableDrawThree() {
        document.getElementById("drawThree").disabled = true;
      };

//draw three button click function

function drawThree() {
  console.log("when draw three is clicked, first image showing = "+firstImageShowing);
  // flip cards to original facedown state, after click of "draw three new cards
  //    flip cards to original facedown state
    if(firstImageShowing = true){
      
    document.getElementById("firstCardFlip").click(); 
    firstImageShowing = !firstImageShowing;
    console.log("firstImageShowing is="+firstImageShowing)
    }
  else if (firstImageShowing = false){
      console.log("dont flip");
    }; 
  ;

  if(secondImageShowing = true){
  document.getElementById("secondCardFlip").click()} 
  else if(  secondImageShowing = false) {
    console.log('do not flip second card');
  };
  if(thirdImageShowing = true){
  document.getElementById("thirdCardFlip").click(); 
  thirdImageShowing = false;
  };
  //shift cards out of array, after click of "draw three new cards
    for (i=0; i<3; i++) {
      tarotImages.shift();
    };
    //draw next top three cards and clear name, after click of "draw three new cards
    for (i=0; i<3; i++) {
      document.getElementById("tarotImage"+(i+1)).style.backgroundImage = "url(images/card-faces/" + random[i] +".jpg)";
      console.log(random[i]);  
  
    
    
    //rename name variables
     firstImageName = "The " + String(tarotImages[0].replace("_", " ").replace("_", " "));
    console.log(firstImageName + " rename".replace("_", " ").replace("_", " "));
     secondImageName = "The " + String(tarotImages[1].replace("_", " ").replace("_", " "));
     thirdImageName = "The " + String(tarotImages[2].replace("_", " ").replace("_", " "));
    
//===========  remove image title on document =================

//first remove name
    imageNameOne = document.getElementById("tarotName1").innerHTML;
    
    document.getElementById("tarotName1").innerHTML = "";
//second remove name
    imageNameTwo = document.getElementById("tarotName2").innerHTML;
    
    document.getElementById("tarotName2").innerHTML = "";

//thirdImage remove name
    imageNameThree = document.getElementById("tarotName3").innerHTML;
    
    document.getElementById("tarotName3").innerHTML = "";

};


  
};
//==========  Shuffle the deck  ==============================
//button id="shuffle-button" onclick="shuffleDeck()

// clear and reset cards



// Shuffle the cards
function shuffleDeck() {
  //flip cards to initial state

    //flip cards to original facedown state
    if(firstImageShowing = true){
    document.getElementById("firstCardFlip").click(); 
    firstImageShowing = !firstImageShowing;;
    console.log("do flip");
    }else if (firstImageShowing = false){
      console.log("dont flip");
    };
    if(secondImageShowing = true){
    document.getElementById("secondCardFlip").click(); 
    secondImageShowing = false;
    };
    if(thirdImageShowing = true){
    document.getElementById("thirdCardFlip").click(); 
    thirdImageShowing = false;
    };



  //clear card data
  //first remove name
  imageNameOne = document.getElementById("tarotName1").innerHTML;
    
    document.getElementById("tarotName1").innerHTML = "";
//second remove name
    imageNameTwo = document.getElementById("tarotName2").innerHTML;
    
    document.getEFlementById("tarotName2").innerHTML = "";

//thirdImage remove name
    imageNameThree = document.getElementById("tarotName3").innerHTML;
    
    document.getElementById("tarotName3").innerHTML = "";

  //shuffle cards
    function shuffle(o) {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  var random = shuffle(tarotImages);

  for (i=0; i<3; i++) {
    document.getElementById("tarotImage"+(i+1)).style.backgroundImage = "url(images/card-faces/" + random[i] +".jpg)";
    console.log(random[i]);  
    
  };
  // ideas-resources: 
  //     https://threejs.org/examples/css3d_periodictable.html 
  //     https://deck-of-cards.js.org/
  
};
