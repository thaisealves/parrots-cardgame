let quantity = prompt("Com quantas cartas você quer jogar? (4 a 14)");
while (Number(quantity) < 4 || Number(quantity) > 14 || Number(quantity) % 2 !== 0) {
    quantity = prompt("Seu número deve ser par e entre 4 e 14");
}

let turned = [];

// putting the names twice so we can have te PAIR of cards we want, it has to always be in pairs so the memory game makes sense... 
let backs = ["images/parrot1","images/parrot1", "images/parrot2", "images/parrot2", "images/parrot3","images/parrot3", "images/parrot4","images/parrot4","images/parrot5","images/parrot5",
"images/parrot6","images/parrot6","images/parrot7","images/parrot7"]

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
    element.classList.add("flipped")
    
    let turnedImg = document.querySelector(".flipped").querySelectorAll("img")

    
    turned.push(turnedImg)
    console.log(turned.length)
    

    let imgTurned = (turned[turned.length - 1])
    let imgTurned2 = (turned[turned.length - 2])

console.log(turned.length)
    console.log(imgTurned[1].src)
    console.log(imgTurned2[1].src)

    if (turned.length - 2 >= 0 && imgTurned[1].src !== imgTurned2[1].src) {
        setTimeout(unflipped, 1000)
    }

    // se as cartas não foram iguais, remove("flipped"), tirar o toggle e deixar só o add 

}

function unflipped() {
   let unturning = document.querySelectorAll(".flipped")
   console.log(unturning.length - 1)

}
