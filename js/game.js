const board = document.getElementById("board");
const message = document.getElementById("message");

let letters = ["A","B","C","D","E","F","G","H","I"];
letters = letters.sort(() => Math.random() - 0.5);

let firstTile = null;

function drawBoard() {
    board.innerHTML = "";

    letters.forEach((letter, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = letter;
        tile.dataset.index = index;

        tile.addEventListener("click", () => selectTile(tile));
        board.appendChild(tile);
    });
}

function selectTile(tile) {
    if (!firstTile) {
        firstTile = tile;
        tile.classList.add("selected");
    } else {
        swapTiles(firstTile, tile);
        firstTile.classList.remove("selected");
        firstTile = null;
        drawBoard();
        checkWin();
    }
}

function swapTiles(tile1, tile2) {
    const i1 = tile1.dataset.index;
    const i2 = tile2.dataset.index;

    let temp = letters[i1];
    letters[i1] = letters[i2];
    letters[i2] = temp;
}

function checkWin() {
    const correct = ["A","B","C","D","E","F","G","H","I"];
    if (JSON.stringify(letters) === JSON.stringify(correct)) {
        message.textContent = "🎉 ¡Felicidades! Ordenaste el ABC correctamente";
    }
}

drawBoard();
