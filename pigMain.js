let score = [0, 0];
let activePlayer = 0;
let total = 0;
document.querySelector('.coFirst').style.color = "green";

function rollDice() {
    document.querySelector('div .winner').innerHTML = "";
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    total += diceNumber;
    document.querySelector('.total').innerHTML = total;
    drawDice(diceNumber)
    if (diceNumber === 1) {
        total = 0;
        holdDice();
        return;
    }
}

function holdDice() {
    score[activePlayer] += total;
    document.querySelector('.playerFirst').innerHTML = score[0];
    document.querySelector('.playerSeconnd').innerHTML = score[1];
    if (score[activePlayer] >= 100) {
        activePlayer + 1 === 1 ? document.querySelector('.winner').innerHTML = document.querySelector('.nameFirst').innerHTML + " WINNER" : document.querySelector('.winner').innerHTML = document.querySelector('.nameSeconnd').innerHTML + " WINNER";
        score = [0, 0];
        document.querySelector('.playerFirst').innerHTML = score[0];
        document.querySelector('.playerSeconnd').innerHTML = score[1];
    }
    document.querySelector('.coFirst').style.color = "black";
    document.querySelector('.coSeconnd').style.color = "black";
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.coFirst').style.color = activePlayer === 0 ? "green" : "black";
    document.querySelector('.coSeconnd').style.color = activePlayer === 1 ? "green" : "black";
    total = 0;
    document.querySelector('.total').innerHTML = total;
}

function drawDice(num) {
    switch (num) {
        case 1:
            document.querySelector('div .dice').innerHTML = '<img src="dice/1.png" alt="">'
            break;
        case 2:
            document.querySelector('div .dice').innerHTML = '<img src="dice/2.png" alt="">'
            break;
        case 3:
            document.querySelector('div .dice').innerHTML = '<img src="dice/3.png" alt="">'
            break;
        case 4:
            document.querySelector('div .dice').innerHTML = '<img src="dice/4.png" alt="">'
            break;
        case 5:
            document.querySelector('div .dice').innerHTML = '<img src="dice/5.png" alt="">'
            break;
        case 6:
            document.querySelector('div .dice').innerHTML = '<img src="dice/6.png" alt="">'
            break;
    }
}

function setNames() {
    document.querySelector('div h2 .nameFirst').innerHTML = document.querySelector('.overlay .popup .nameOfFirst').value
    document.querySelector('div h2 .nameSeconnd').innerHTML = document.querySelector('.overlay .popup .nameOfSeconnd').value
}

