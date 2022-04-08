function numCard(){
    let quantity = prompt("Com quantas cartas você quer jogar? (4 a 14)");
    while(Number(quantity)<4 || Number(quantity)>14 || Number(quantity)%2 !== 0){
        quantity = prompt("Seu número deve ser par e entre 4 e 14");
    }
  
    let list = document.querySelector(".cards");
    console.log(list)
    for (let i = 0; i < Number(quantity); i++){
        list.innerHTML += 
        `<button onclick="hideFront(this)" class="card-front">
            <img src="/images/front.png">
        </button>`
    }
}
numCard()

function hideFront(element){
    element.classList.add("hide-front")

}