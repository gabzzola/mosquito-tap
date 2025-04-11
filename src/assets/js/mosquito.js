import { randomPosition } from "./gameConfig.js";

export function handleMissedMosquito(lives) {    
    const mosquito = document.getElementById("mosquito");
    if (mosquito) mosquito.remove();

    if (lives <= 0) {
        window.location.href = "game_over.html";
        return;
    }
    
    const heart = document.getElementById(`heart${lives}`);    
    if (heart) heart.src = "../assets/img/empty_heart.png";

    return lives - 1;    
}

export function createMosquito() {    
    const { posX, posY } = randomPosition();    
    const mosquito = createElement(posX, posY);
    document.body.appendChild(mosquito);
    
    return mosquito;
}

function createElement(posX, posY) {
    const mosquito = document.createElement("img");

    mosquito.id = "mosquito";    
    mosquito.alt = "Mosquito";
    mosquito.src = "../assets/img/mosquito.png";    
    mosquito.className = `${defineSize()} ${defineSide()}`;

    mosquito.style.position = "absolute";
    mosquito.style.left = `${posX}px`;
    mosquito.style.top = `${posY}px`;

    mosquito.addEventListener("click", () => mosquito.remove());

    return mosquito;
}

function defineSize() {
    const sizes = ["mosquitoA", "mosquitoB", "mosquitoC"];
    return sizes[Math.floor(Math.random() * sizes.length)];
}

function defineSide() {
    const sides = ["sideA", "sideB"];
    return sides[Math.floor(Math.random() * sides.length)];
}
