var roller = document.getElementById("roller");

function rollTwenty() {
    return Math.ceil(Math.random() * 20);
}

function rollDie(){
    roller.innerText = rollTwenty();
}