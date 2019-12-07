console.log('Waddup dawg?');
console.dir(document);

let board = [];

function play(clickedId){
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId);
    
    if (playerSpan.innerText === "X"){
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedId] = "X";
    } else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedId] = "O";
    }
    console.log(board);
    
    // const topLeft = document.getElementById("0");
    // const topMiddle = document.getElementById("1");
    // const topRight = document.getElementById("2");
    // const middleLeft = document.getElementById("3");
    // const middleMiddle = document.getElementById("4");
    // const middleRight = document.getElementById("5");
    // const bottomLeft = document.getElementById("6");
    // const bottomMiddle = document.getElementById("7");
    // const bottomRight = document.getElementById("8");

    const topLeft = board[0];
    const topMiddle = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleMiddle = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomMiddle = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
        alert(topLeft + " is the winner!");
        return;
    } 
     if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight){
        alert(middleLeft + " is the winner!");
        return;
    } 
     if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomMiddle === bottomRight){
        alert(bottomLeft + " is the winner!");
        return;
    } 
     if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(topLeft + " is the winner!");
        return;
    } 
     if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        alert(topMiddle + " is the winner!");
        return;
    } 
     if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(topRight + " is the winner!");
        return;
    } 
     if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight){
        alert(topLeft + " is the winner!");
        return;
    } 
     if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft){
        alert(topRight + " is the winner!");
        return;
    }

    
    let boardFull = true;
    for (i = 0; i < 9; i++){
        if (board[i] === undefined){
            boardFull = false;
        } 
    }
            if (boardFull === true){
                alert("Cat's Game!")
            }
}