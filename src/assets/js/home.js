function startGame() {
    const difficulty = document.getElementById("difficulty").value;

    if (!difficulty) {
        alert("Para começar o jogo você precisa selecionar uma dificuldade!");
        return false;
    }
    window.location.href = `index.html?difficulty=${difficulty}`;
}
