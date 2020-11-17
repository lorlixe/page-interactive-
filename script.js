// Fonctionnalité 1 && Fonctionnalité 1-bis : :

const myFooter = document.getElementsByTagName('footer');

let counter = 0 

myFooter[0].addEventListener('click', function(){
  counter++;
  console.log('clique')
  console.log(`${counter}`)
});

// Fonctionnalité 2 : 

let myNavbar = document.getElementById('navbarHeader');
let button = document.getElementsByTagName('button');

button[0].addEventListener('click', function(){
  myNavbar.classList.toggle('collapse')
});


// Fonctionnalité 3 :

let cardEditButton = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

cardEditButton.addEventListener('click', function() {
  this.style.color = 'red';
});

// Fonctionnalité 4 :

let editCarsBtn2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
let secondCardtext = document.getElementsByClassName('card-text')[1];
let alreadyGreen = false;

editCarsBtn2.addEventListener("click", function(){
  if (alreadyGreen){
    secondCardtext.style.color = '';
    alreadyGreen = false;
  } else {
    secondCardtext.style.color = 'green';
    alreadyGreen = true;
  }
});

// Fonctionnalité 5 : 

let navbar = document.getElementsByClassName("navbar")[0];
let bootsLink = document.getElementsByTagName("link")[0];

navbar.addEventListener("dblclick", function(){
  if (bootsLink.rel == "stylesheet") {
    bootsLink.rel = "styleDisabled";
  } else {
    bootsLink.rel = "stylesheet";
  }
});

// Fonctionnalité 6 :

const viewCardsBtn = document.querySelectorAll('button.btn-success');
const cardText = document.querySelectorAll('.card-text');
const cardImg = document.querySelectorAll('.card-img-top');


for (let i = 0; i < viewCardsBtn.length; i++) {
  viewCardsBtn[i].addEventListener('mouseover', function() {
    if (cardText[i].classList.contains('card-text')) {
      cardText[i].classList.replace('card-text','collapse')
      cardImg[i].style.width = '20%'
    } else {
      cardText[i].classList.replace('collapse', 'card-text');
      cardImg[i].style.width = '100%'
    }
  });
} 

// Fonctionnalité 7 :

const greyBtn = document.getElementsByClassName('btn btn-secondary my-2')[0];
const cards = document.getElementsByClassName('col-md-4');
const parentNode = document.getElementsByClassName('row')[1];

greyBtn.addEventListener('click', function(){
  parentNode.insertBefore(cards[cards.length -1], cards[0])
});


// Fonctionnalité 8 :

const blueArrow = document.getElementsByClassName('btn btn-primary my-2')[0];

blueArrow.addEventListener('click', function(){
  blueArrow.href = "#";
  parentNode.insertBefore(cards[0], cards[cards.length]);
});

// Fonctionnalité 9 :

const brand = document.getElementsByClassName("navbar-brand")[0];
const divRow = document.getElementsByClassName("row");
let rowCreation = false;

brand.addEventListener('click', function(){
  window.addEventListener('keydown', function(e){
    if (e.keyCode == 65){
      if (rowCreation)
        for (let i = 1; i < 7; i++){
          divRow[i].classList.remove("d-flex","justify-content-center","flex-row-reverse");
        }else{
        rowCreation = true;
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        for (let i = 2; i < 7; i++){
          divRow[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }
    }

    if (e.keyCode == 89){
      if (rowCreation){
        for (let i = 1; i < 7; i++){
          divRow[i].classList.remove("flex-row-reverse");
          divRow[i].classList.add("d-flex","justify-content-center")
        }
      }else{
        rowCreation = true;
        divRow[1].classList.add("d-flex","justify-content-center")
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row","d-flex","justify-content-center");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        let cards = document.getElementsByClassName("col-md-4");
        for (let i = 2; i < 7; i++){
          divRow[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }
    }

    if (e.keyCode == 80) {
      if (rowCreation){ //on change juste la disposition
        for (let i = 1; i < 7; i++){
          divRow[i].classList.remove("d-flex","justify-content-center")
          divRow[i].classList.add("flex-row-reverse")
        }
      }else{
        rowCreation = true;
        document.getElementsByClassName("row")[1].classList.add("flex-row-reverse")
        for (let i = 0; i < 5; i++){
          let node = document.createElement("div");
          node.classList.add("row","flex-row-reverse");
          document.getElementsByClassName("album py-5 bg-light")[0].getElementsByTagName('div')[0].appendChild(node);
        }
        let cards = document.getElementsByClassName("col-md-4");
        for (let i = 2; i < 7; i++){
            document.getElementsByClassName("row")[i].appendChild(document.getElementsByClassName("col-md-4")[1]);
        }
      }
    } 

    if (e.keyCode == 66) {
      if(rowCreation){
        rowCreation = false;
        for (let i = 1; i < 6; i++){
          divRow[1].appendChild( document.getElementsByClassName("col-md-4")[i]);
        }
        for (let i = 0; i < 5; i++){
          divRow[2].remove();
        }
      }
    }
  })
});