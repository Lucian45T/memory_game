let numberOfGameCards;
let saved = 0;
let onePush = 0, onePushchooseCard = 0;
const Symbols = ["😀", "😁", "😂", "🤣" , "😍", "😘",
     "🤩", "❤️", "💙", "💕", "🤬", "😱", "🥺", "😬", "😴", "🫠",
    "👍", "👌", "💪", "👀", "🌟", "💯", "🍀", "🔥", "🌈", "🍔",
"☕", "🐶", "🎵", "🚀", "🦄", "😎"];

let firstSymbol = "🟩";
let twoSymbols = 0;
let doublingSymbols = [];
let doublingSymbols_copy = [];
let chosenIndex = [];

function opacityCard(element) {
    document.getElementById(element).classList.add("active");
}

function doublingSymbol(inputValue) {
    const symbolLength = inputValue * inputValue / 2;
    let e = 0;
    for (let i = 1; i <= 2; ++i) {
        for (let j = 0; j < symbolLength; ++j) {
            doublingSymbols[e] = Symbols[j]; 
            ++e;
        }
    }
}

function chosenSymbol(doublingSymbols2) {
    const currentSymbol1 = Math.floor(Math.random() * doublingSymbols2.length);
    return currentSymbol1;
}

function chooseCard() {
    if (onePushchooseCard === 0) {
    const idValue = document.getElementById("sizeGrid").value;
    const numberOfGameCardsChosen = idValue * idValue;
    chosenIndex.length = numberOfGameCardsChosen;
    ++onePushchooseCard;
    }
    const chosen = Math.floor(Math.random() * chosenIndex.length);
    chosenIndex.splice(chosen, 1);
    return chosen;   
}

function createGridButton() {   
    numberOfGameCards = document.getElementById("sizeGrid").value;
    if (onePush === 0 && numberOfGameCards % 2 == 0 && numberOfGameCards <= 8) {
        doublingSymbol(numberOfGameCards);
        const randomIndex = chosenSymbol(doublingSymbols);
        const currentSymbol1 = doublingSymbols[randomIndex];
        let currentSymbol;
        let chosenCard = [];
        for (let i = 0; i < 2; ++i) {
            chosenCard[i] = chooseCard();
            console.log(chosenCard[i]);
        }
        for (let i = 0; i < numberOfGameCards; ++i) {
            for (let j = 0; j < numberOfGameCards; ++j) {
                for (let card of chosenCard) {
                    if (card === saved) {
                        currentSymbol = currentSymbol1;
                        console.log(card);
                        break;
                    }else if (card !== saved){
                        currentSymbol = firstSymbol;
                    }
                }
            document.getElementById("container").innerHTML += 
            `<button type="button"
            class="gameCard" id="${saved}" 
            onclick="pushButton(${saved},'${currentSymbol}');"></button>`;
            opacityCard(saved);
            addFirstSymbol(saved);
            ++saved;
            }
            document.getElementById("container").innerHTML += `<br>`;
        }
        ++onePush;
    }    
}

function pushButton(elementId, elementId2) {
    if (document.getElementById(elementId).classList.contains("btn-warning")){
        document.getElementById(elementId).classList.remove("btn-warning");
        document.getElementById(elementId).classList.add("btn-primary");
        document.getElementById(elementId).innerHTML = `<span id="myEmoji" 
        class="emoji">🟩</span>`;
        console.log("remove");
    }    
    else {
        document.getElementById(elementId).classList.remove("btn-primary")
        document.getElementById(elementId).classList.add("btn-warning");
        rotate(elementId, elementId2);
        console.log("add");
        return elementId2;
    }
}

function rotate(elementId, elementId2) {
    document.getElementById(elementId).innerHTML = elementId2;
}

function addFirstSymbol(element) {
    document.getElementById(element).innerHTML = `<span id="myEmoji" 
    class="emoji">🟩</span>`;
}

function reAddFirstSymbol(elementId) {
    console.log(document.getElementById(elementId));
     document.getElementById(elementId).innerHTML = `<span id="myEmoji" 
    class="emoji">🟩</span>`;
}

function removeCard(elementId, elementId2) {
    if (elementId !== 0) return;
    return (document.getElementById(elementId).classList.remove("active"));
}

function twoOpenedCards(elementId, elementId2) {
    for (let i = 0; i < doublingSymbols.length; ++i) {
        if (pushButton(elementId, elementId2) == doublingSymbols[i]) {
        }
    } 
}
   




 
