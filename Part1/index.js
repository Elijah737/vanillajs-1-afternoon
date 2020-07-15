console.log('connected')

let board = []

// board squares
// topLeft = document.getElementById('0')
// topMiddle = document.getElementById('1')
// topRight = document.getElementById('2')

// middleLeft = document.getElementById('3')
// MiddleMiddle = document.getElementById('4')
// middleRight = document.getElementById('5')

// bottomLeft = document.getElementById('6') 
// bottomMiddle = document.getElementById('7')
// bottomRight = document.getElementById('8')


function play(clickedId){
    const clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText === 'O'
        clickedElement.innerText == 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText === 'X'
        clickedElement.innerText === 'O'
        board[clickedId] = 'O'
    }
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];

    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];

    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} is the winner`);
        return;
    }

    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }

    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }

    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }

    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }

    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }

    let boardFull = true;
    for(i=0; i<=8; i++){
        if(board[i] === undefined) {
            boardFull = false;
        }
    }
    if(boardFull === true){
        alert("Cat's game, there is no winner");
    }

}


// function winning(one, two, three){
//     return "if ( " + one + " !== undefined && " + one + " === "+ two +" && "+ one +" === "+ three +") {
//         alert(`${' one '} is the winner`);
//         return;
//       }"
// }