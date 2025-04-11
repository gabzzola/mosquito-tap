function getDifficulty() {
    const params = new URLSearchParams(window.location.search);
    return params.get("difficulty");
}

export function setDifficulty() {
    const difficulty = getDifficulty();

    const difficulties = {
        easy: 1750,
        medium: 1450,
        difficult: 1150
    };
    return difficulties[difficulty];
}

export function startTimer() {
    let time = 60;
    const timerElement = document.getElementById("timer");
    
    timerElement.innerHTML = time;
    const interval = setInterval(() => {    
        if (time > 0) {
            timerElement.innerHTML = --time;
        } else {
            clearInterval(interval);
            window.location.href = "win.html";
        }
    }, 1000);
}

export function resizeGameArea() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
}

export function randomPosition() {
    const { width, height } = resizeGameArea();
    return {
        posX: Math.max(0, Math.floor(Math.random() * (width - 110))),
        posY: Math.max(0, Math.floor(Math.random() * (height - 110)))
    };
}
