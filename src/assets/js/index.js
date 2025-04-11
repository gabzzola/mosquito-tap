import { resizeGameArea, setDifficulty, startTimer } from "./gameConfig.js";
import { createMosquito, handleMissedMosquito } from "./mosquito.js";

let lives = 3;
const intervalTime = setDifficulty();

window.addEventListener("resize", resizeGameArea);
startTimer();
setInterval(spawnMosquito, intervalTime);

function spawnMosquito() {
    const mosquito = createMosquito();
    
    const removeTimeout = setTimeout(() => {
        if (document.body.contains(mosquito)) {
            lives = handleMissedMosquito(lives);            
        }
    }, intervalTime);
    
    mosquito.addEventListener("click", () => clearTimeout(removeTimeout));
}
