const gameContainer = document.getElementById("game");
//generate array for cards
const COLORS = [];
const cards = [];
cards.length=0;
let i=0;
let guess=""
//sets array size based on slider value
//generate random colors
function randomcolors(){
  const slider = document.getElementById("slider").value
  COLORS.length = slider
  let counter = COLORS.length-1;//not sure why
  while(counter>0){
    //creates Hexadecimal equivalent string
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    //check for Hexadecimal length of 6
    while(randomColor.length<6){
      randomColor = Math.floor(Math.random()*16777215).toString(16)
    }
        //creates pair of same colors
    COLORS[counter]="#"+randomColor;
    counter--;
    COLORS[counter]="#"+randomColor;
    counter--;
    }
}

randomcolors()

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
<<<<<<< HEAD
   flipcard(event)
   if(i==1){
    guess=event.target
    guess.setAttribute("id",'flipped')
   }
  if(i==2){
  checkmatch(guess,event)
  }
}
//   if(i<2 && event.target.id!="flipped"){
//     event.target.style.backgroundColor=event.target.className
//     event.target.id="flipped"
//         //cards[i]=event.target.className
//     i++;
//     return;
//   }else if(i==2 && event.target.className!="flipped"){//if match
//   //if(cards[0] == cards[1] && guess1.getAttribute("id")!="flipped"
//   //  && guess2.getAttribute('id')!="flipped"){
//     console.log("The Guess function ran");
//     //console.log(cards[0],cards[1])
//       // const guess1 = document.getElementById("guess 0")
//          guess1.setAttribute("id","match")
//       // const guess2 = document.getElementById("guess 1")
//          guess2.setAttribute("id","match")
//       i=0;
//       cards.length="";
//       return;
//   }else if(i==2 && event.target.className!=guess1.className){
//       setTimeout(function(){
//          guess1.setAttribute("style","")
//          guess1.setAttribute("id","")
//          event.target.setAttribute("style","")
//          event.target.setAttribute("id","")
//         console.log(guess1,event.target.className)
//         i=0;
//       cards.length="";
//       },1000)
//       return
//     }
//     let guess1=event.target
// }
function flipcard(event){
  if(i<=2 && event.target.style.backgroundcolor!=event.target.className){
    event.target.style.backgroundColor=event.target.className
  i++;
  }
  else return;
}

function checkmatch(guess,event){
  if(event.target.getAttribute("id")!="flipped" && guess.className==event.target.className){
    console.log("match!")
    i=0
    return;
  }else{
    setTimeout(clearcard(guess,event),1000)
    return;
  }
//if id = flipped and className == className
//reset guesser
//else id="" and backgroundColor == ""
}

function clearcard(guess,event){
  guess.style.backgroundColor=""
  guess.setAttribute('id',"")
  event.target.style.backgroundColor=""
  event.target.setAttribute("id","")
  i=0;
  guess=""
=======
  if(i<=1 && event.target.getAttribute('id')!="flipped"){
    flipcard(event)
  }else{
    guesscheck(guess,event)
  }
  // if(i<2 && event.target.id!="flipped"){
  //   event.target.style.backgroundColor=event.target.className
  //   event.target.id="flipped"
  //       //cards[i]=event.target.className
  //   i++;
  //   return;
  // }else if(i==2 && event.target.className!="flipped"){//if match
  // //if(cards[0] == cards[1] && guess1.getAttribute("id")!="flipped"
  // //  && guess2.getAttribute('id')!="flipped"){
  //   console.log("The Guess function ran");
  //   //console.log(cards[0],cards[1])
  //     // const guess1 = document.getElementById("guess 0")
  //        guess1.setAttribute("id","match")
  //     // const guess2 = document.getElementById("guess 1")
  //        guess2.setAttribute("id","match")
  //     i=0;
  //     cards.length="";
  //     return;
  // }else if(i==2 && event.target.className!=guess1.className){
  //     setTimeout(function(){
  //        guess1.setAttribute("style","")
  //        guess1.setAttribute("id","")
  //        event.target.setAttribute("style","")
  //        event.target.setAttribute("id","")
  //       console.log(guess1,event.target.className)
  //       i=0;
  //     cards.length="";
  //     },1000)
  //     return
  //   }
  //   let guess1=event.target
}

function flipcard(event){
  event.target.style.backgroundColor = event.target.className
  event.target.setAttribute('id','flipped')
  i++;
  if(i=0){
    const guess = event.target
  }
  return guess;
}

function guesscheck(guess,event){
  if(guess.className==event.target.className && guess.getAttribute("id")=='flipped'
  && event.target.getAttribute('id')=='flipped'){
    guess=""
    i=0;
    return;
  }else{
    setTimeout(function(){
      guess.style.backgroundColor=""
      guess.style.setAttribute('id','')
      event.target.backgroundColor=""
      event.target.setAttribute('id','')
      return;
  },1000)
}
>>>>>>> 567f020153ec1a6f62139b867853bb9bfbcdf058
}

  //using Start Game button using Slider value
const startGame=document.querySelector('#gameinput')
startGame.addEventListener("submit",GameStart)


function GameStart(g){
  g.preventDefault()
  gameContainer.innerHTML=""
  randomcolors();
  shuffle(COLORS)
  createDivsForColors(shuffledColors);
  }

// when the DOM loads
//createDivsForColors(shuffledColors)
