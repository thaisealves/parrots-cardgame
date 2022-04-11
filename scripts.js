let quantity = prompt("Com quantas cartas você quer jogar? (4 a 14)");

while (Number(quantity) < 4 || Number(quantity) > 14 || Number(quantity) % 2 !== 0) {
    quantity = prompt("Seu número deve ser par e entre 4 e 14");
}

let turned = [];
let clicked = [];
let turnedImg;
let count = 0;

// putting the names twice so we can have te PAIR of cards we want, it has to always be in pairs so the memory game makes sense... source from the back of the cards
let backs = ["images/parrot1", "images/parrot1", "images/parrot2", "images/parrot2", "images/parrot3", "images/parrot3", "images/parrot4", "images/parrot4", "images/parrot5", "images/parrot5",
    "images/parrot6", "images/parrot6", "images/parrot7", "images/parrot7"]

//"cutting" from the first indice till it gets the number we passed on the quantity
let cardsShuffle = backs.slice(0, quantity);
cardsShuffle.sort(comparing)

function comparing() {
    return Math.random() - 0.5;
}

function numCard() {
    let list = document.querySelector(".cards");
    console.log(list)

    for (let i = 0; i < cardsShuffle.length; i++) {
        //here we'll have the number of cards we asked, because it's the length from the part that we sliced from the array 
        list.innerHTML +=
            `<button class="card">
        <div class="into-card" onclick="hideFront(this)" >
            <div  class="card-front">
            <img src="/images/front.png">
            </div>
            
            <div class="card-back">
            <img src="${cardsShuffle[i]}.gif" >
            </div>
        </div>
           </button> 
        `
    }
}
numCard()

function hideFront(element) {
    count++;   //counting the amount of clicks

    // if i've only turned 2 cards, this will happen: flipping the card and putting it in the array
    if (count <= 2) {
        element.classList.add("flipped")
        turned.push(element.parentNode.innerHTML)
        clicked.push(element)
    }

    let imgTurned2 = (turned[turned.length - 2])
    let imgTurned = (turned[turned.length - 1])

    if (count === 2) {

        if (turned.length - 2 >= 0 && imgTurned !== imgTurned2 && clicked.length % 2 === 0) {

            setTimeout(function () {
                clicked[clicked.length - 1].classList.remove("flipped")
                clicked[clicked.length - 2].classList.remove("flipped")
                count = 0;
            }, 1000)

        }
        else {
            setTimeout(function () {
                count = 0;
            }, 100)
        }
    }
     if ((document.querySelectorAll(".flipped").length) === Number(quantity)) {
         setTimeout(function (){alert(`Você ganhou em ${(clicked.length)} jogadas e em ${time} segundos!`)
         let ans = prompt("Você quer jogar de novo? (sim ou não)");
        while (ans !== "sim" && ans !== "não") {
            ans = prompt("A resposta precisa ser escrita como 'sim' ou 'não'");
            
        }
        if (ans === "sim") {
            window.location.reload();
        }
        else if (ans === "não") {
            clearInterval(interval);
            alert("Poxaaa, que pena... Te espero na próxima")
        }
        }, 500)
    }
   
}


// bonus timer part
let time = 0;
let interval = setInterval(counting, 1000)

function counting() {
    time++;
    document.querySelector(".timer").innerHTML = time + "s";
}