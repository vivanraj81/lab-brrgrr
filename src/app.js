// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  let items = document.querySelector('.pat')
  // you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    // items.style.display = "inherit";
  } else {
    patty.style.display = "none";
    // items.style.display = "none";
    
  }
  renderIngredientsBoard()
  renderIngredientsBoard2()
  renderIngredientsBoard3()
  renderIngredientsBoard4()
  renderIngredientsBoard5()
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.querySelector("#cheese");
  let items = document.querySelector('.che')
  if (state.Cheese) {
    Cheese.style.display = "inherit";
    // items.style.display = "inherit";
  } else {
    Cheese.style.display = "none";
    // items.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.querySelector("#tomato");
  let items = document.querySelector('.tom')
  if (state.Tomatoes) {
    Tomatoes.style.display = "inherit";
    // items.style.display = "inherit";
  } else {
    Tomatoes.style.display = "none";
    // items.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let Onions = document.querySelector("#onion");
  let items = document.querySelector('.oni')
  if (state.Onions) {
    Onions.style.display = "inherit";
    // items.style.display = "inherit";
  } else {
    Onions.style.display = "none";
    // items.style.display = "none";
  }

}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.querySelector("#lettuce");
  let items = document.querySelector('.letu')
  if (state.Lettuce) {
    Lettuce.style.display = "inherit";
    // items.style.display = "inherit";
  } else {
    Lettuce.style.display = "none";
    // items.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
  renderPrice()
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state

const buttons = document.querySelectorAll('.button');
const ingredient = document.querySelectorAll('.menu-container .items');
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    button.classList.toggle('active');



  });
});


//Challenge 2 - Render only the items selected in the ingredients board based on the state

  function renderIngredientsBoard() {
    let items = document.querySelector('.patt')
    if (state.Patty) {
      items.style.display = "inherit";
    } else {
      items.style.display = "none";
    }
  }
  
  
  function renderIngredientsBoard2(){
  let items =document.querySelector('.chee')
  if (state.Cheese) {
    items.style.display = "inherit";
  } else{
    items.style.display = "none";
  }
}

function renderIngredientsBoard3(){

  let items =document.querySelector('.toma')
  if (state.Tomatoes) {
    items.style.display = "inherit";
  } else{
    items.style.display = "none";
  }
}


function renderIngredientsBoard4(){
  let items =document.querySelector('.onio')
  if (state.Onions) {
    items.style.display = "inherit";
  } else{
    items.style.display = "none";
  }
}

function renderIngredientsBoard5(){
  let items =document.querySelector('.lettu')
  if (state.Lettuce) {
    items.style.display = "inherit";
  } else{
    items.style.display = "none";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients



function renderPrice() {
  var price =
    (state.Patty*ingredients.Patty)+
    (state.Cheese*ingredients.Cheese)+
    (state.Tomatoes*ingredients.Tomatoes)+
    (state.Onions*ingredients.Onions)+
    (state.Lettuce*ingredients.Lettuce)+20;
  document.querySelector(".price-details").innerText = "INR " + price;
}
