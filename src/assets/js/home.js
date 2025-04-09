function startGame() {
    let gameLevel = document.getElementById("gameLevel").value;

    if (gameLevel === "") {
        alert("Para começar o jogo você precisa selecionar um nível!");
        return false;
    }
    window.location.href = "index.html?" + gameLevel;
}
