// DONE=> 1. l'utente sceglie il livello di difficoltÃ 
// DONE=> 2 in base alla scelta creo una variabile che mi salva il livello
    // 2.1 se scegli 1 compare il gioco con una griglia 10 x 10
    // 2.2 se scegli 2 compare il gioco con una griglia 9 x 9
    // 2.3 se scegli 3 compare il gioco con una griglia 7 x 7
// DONE=> 3 creo una funzione per creare un elemento
// DONE=> 4 creo un ciclo che mi permetta di inserire i quadrati nel DOM
    // DONE=> 4.1 se l'utente clicca su una delle caselle del gioco la casella cambia colore
  /* PARTE 2 */
  // DONE=> 1 creo una funzione che generi dei numeri random
    // 1.1 creo una variabile per salvare il range
    // 1.2 in base al livello genera dei numeri in un range
    // 1.3 i numeri non saranno mai ripetuti
// se il numero fa parte della lista di quelli generati la cella diventa rossa e il gioco finisce


// creo un promt per la scelta del livello
/* const choiseLiv = parseInt(prompt("scegli il livello digitando 1, 2 o 3")); */

const squareCont = document.querySelector(".container-game");

let bomb = [];
let rangeBomb;
let counterClick = document.querySelector("attempts");
let btnChoise = document.querySelector("button");
/* let click = 0;
console.log(click); */
console.log(btnChoise);

let choiseLiv;
btnChoise.addEventListener("click",

    function () {
        squareCont.innerHTML = ` `
        let choise;
        choise = document.querySelector("select").value;
        //variabile contenente il livello scelto
        if(choise == "easy"){
            rangeBomb = 100;
            gridGen(100, "liv-1");

        } else if(choise == "medium"){
            rangeBomb = 81;
            gridGen(81, "liv-2");

        } else if (choise == "hard"){
            rangeBomb = 49;
            gridGen(49, "liv-3");
        }

        console.log(bomb);
    }
)



/* funzioni utili */
//funzione per generare un elemento
function genElement(typeEl, classEl ){
    let elem = document.createElement(typeEl);
    elem.classList.add(classEl)
    return elem
}

function gridGen(liv, classLiv) {
    // creo un ciclo nella quale creerÃ² una serie di numeri random
    while (bomb.length < 16) {
    //creo una variabile che diventa vera ogni volta che un numero Ã¨ uguale a quelli della lista
    let found = false;
    // genero un numero random 
    let numGen = genNumRandom(1, rangeBomb);
    //confronto il numero generato con tutti quelli della lista partendo dal primo
    for(let i = 0; i < bomb.length; i++) {
        // se il numero Ã¨ uguale a uno di quelli della lista la variabile di controllo diventa vera
        if ( bomb[i] == numGen){
            found = true
        }
    }
    //se il numero generato non Ã¨ uguale a nesun numero della lista lo salvo nell'array    
    if (!found){
        bomb.push(numGen);
    }
}
    for ( let i = 1; i <= liv ; i++){
        let gameSquare = genElement("div", "square");
        let spanSquare = document.createElement("span");
        gameSquare.appendChild(spanSquare);
        gameSquare.classList.add(classLiv);
        spanSquare.append(i);
    
        if(bomb.includes(i)){
            gameSquare.classList.add('hit');
        }

        gameSquare.addEventListener("click",
    
            function(){
                this.classList.add("active");
                if(this.className === `square ${classLiv} hit active`){
                    const bombs = document.getElementsByClassName('hit');
                    /* counterClick.innerText = ++click; */
                    for ( let j = 0; j < bombs.length ; j++){
                        bombs[j].classList.add('bomb');
                    }
                }

            }
    
        );
        squareCont.append(gameSquare);
    }
}

//funzione genera numeri random
function genNumRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

