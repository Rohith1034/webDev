var turn = 0;
var gameBoard = [[null, null, null], [null, null, null], [null, null, null]];

document.addEventListener("click", function (event) {
    event.preventDefault();

    var temp = event.target.id;
    var row = parseInt(temp) <= 3 ? 0 : parseInt(temp) <= 6 ? 1 : 2;
    var col = (parseInt(temp) - 1) % 3;

    if (gameBoard[row][col] === null) {
        var parentelement = document.getElementById(temp);
        var childelement = document.createElement('h1');

        if (turn === 0) {
            childelement.textContent = "X";
            childelement.classList.add("xelement");
        } else if (turn === 1) {
            childelement.textContent = "O";
            childelement.classList.add("oelement");
        }

        childelement.style.display = "inline";
        parentelement.appendChild(childelement);

        gameBoard[row][col] = turn;
        checkWinner();
        turn = 1 - turn; // Switch turns between 0 and 1
    }
});

function checkWinner() {
    var winningCombos = [
        // Rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        var a = combo[0];
        var b = combo[1];
        var c = combo[2];

        if (gameBoard[Math.floor(a / 3)][a % 3] !== null &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(b / 3)][b % 3] &&
            gameBoard[Math.floor(a / 3)][a % 3] === gameBoard[Math.floor(c / 3)][c % 3]) {
            alert("Player " + (gameBoard[Math.floor(a / 3)][a % 3] + 1) + " wins!");
            // Step 1: Access the DOM element where you want to add the H1 heading
            const container = document.getElementById('');

            // Check if the container element exists before appending the H1
            if (container !== null) {
                // Step 2: Create a new H1 element
                const h1Element = document.createElement('h1');

                // Step 3: Set the content of the H1 element
                h1Element.textContent = 'This is an H1 heading added dynamically with JavaScript';

                // Step 4: Append the H1 element to the container
                container.appendChild(h1Element);
            } else {
                console.error("Container element not found!");
            }

        }
    }
}
