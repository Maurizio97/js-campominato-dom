// DONE=> 1. l'utente sceglie il livello di difficoltà
// DONE=> 2 in base alla scelta creo una variabile che mi salva il livello
    // 2.1 se scegli 1 compare il gioco con una griglia 10 x 10
    // 2.2 se scegli 2 compare il gioco con una griglia 9 x 9
    // 2.3 se scegli 3 compare il gioco con una griglia 7 x 7
// DONE=> 3 creo una funzione per creare un elemento
// DONE=> 4 creo un ciclo che mi permetta di inserire i quadrati nel DOM
    // DONE=> 4.1 se l'utente clicca su una delle caselle del gioco la casella cambia colore



// creo un promt per la scelta del livello
const choiseLiv = parseInt(prompt("scegli il livello digitando 1, 2 o 3"));
/* let btnChoise = document.querySelector("button");
let choise;
console.log(btnChoise);

let choiseLiv;
btnChoise.addEventListener("click",

    function choiseLiv() {
        choise = document.querySelector("select").value;
        console.log(choise); 
    }
) */
const squareCont = document.querySelector(".container-game");
console.log(squareCont);

//variabile contenente il livello scelto
if(choiseLiv == 1){
    gridGen(100, "liv-1");
} else if(choiseLiv == 2){
    gridGen(81, "liv-2");
} else if (choiseLiv == 3){
    gridGen(49, "liv-3");
}


function gridGen(liv, classLiv) {
// 4. ciclo per inserire i quadrati nel dom
for ( let i = 1; i <= liv ; i++){
    // 3. variabile con l'elemento creato
    let gameSquare = genElement("div", "square");
    let spanSquare = document.createElement("span");
    gameSquare.appendChild(spanSquare);
    gameSquare.classList.add(classLiv);
    spanSquare.append(i);

    gameSquare.addEventListener("click",

        function(){
            this.classList.add("active");
        }

    );
    squareCont.append(gameSquare);
}
}

/* funzioni utili */
//funzione per generare un elemento
function genElement(typeEl, classEl ){
    let elem = document.createElement(typeEl);
    elem.classList.add(classEl)
    return elem
}

