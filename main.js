// Declare all state variables board = [
    let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]; 

const colOne = [1, 8, 15, 22, 29, 36];
const colTwo = [2, 9, 16, 23, 30, 37];
const colThree = [3, 10, 17, 24, 31, 38];
const colFour = [4, 11, 18, 25, 32, 39];
const colFive = [5, 12, 19, 26, 33, 40];
const colSix = [6, 13, 20, 27, 34, 41 ];
const colSeven = [7, 14, 21, 28, 35, 42 ];
let currentPlayer = 1;
const players = {
    '1': {
        name: 'Player 1',
        score: 0
    },
    '-1': {
        name: 'Player 2',
        score: 0
    }
};



function notchClicked(e){
    let click = parseInt(e.target.id);
    let first  = click % 7 + 35;
    let second  = click % 7 + 28;
    let third  = click % 7 + 21;
    let fourth = click % 7 + 14;
    let fifth = click % 7 + 7;
    let sixth = click % 7;
    if (board[Math.floor(first / 7)][first % 7] == 0){
        board[Math.floor(first / 7)][first % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(board[Math.floor(second / 7)][second % 7] == 0){
        board[Math.floor(second / 7)][second % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(board[Math.floor(third / 7)][third % 7] == 0){
        board[Math.floor(third / 7)][third % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(board[Math.floor(fourth / 7)][fourth % 7] == 0){
        board[Math.floor(fourth / 7)][fourth % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(board[Math.floor(fifth / 7)][fifth % 7] == 0){
        board[Math.floor(fifth / 7)][fifth % 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else if(board[Math.floor(sixth/ 7)][sixth% 7] == 0){
        board[Math.floor(sixth/ 7)][sixth% 7] = currentPlayer === 'Player One' ? 1 : -1;
    } else {
        alert('cannot select')
    }
    console.log(board)
}


// Remember render function
const row = document.getElementsByTagName('tr');
const column = document.getElementsByTagName('td');
const playerTurnEl = document.querySelector('player-turn');
const playAgain = document.querySelector('.button');
const game = document.querySelector('.game');


    

console.log('column - ', column)
for (let i = 0;  i < column.length;  i++){
    column[i].addEventListener('click', (e) => {
        console.log(`${e.target.id}`) 
        let currentRow = Math.floor((parseInt(e.target.id)) /7)
        let currentColumn = (parseInt(e.target.id)) %7
        
        for(let i = 5; i >= 0; i-- ){
            if (board[i][currentColumn]==null){
                board[i][currentColumn] = currentPlayer
                currentPlayer *= -1
                render()
                return
            }
        }

        console.log(board)
    })
}


function render(){
    console.log('Render is working');
    board.forEach(function(e, i){
        e.forEach(function(f, j){
            let idx = i*7+(j)
            if(board[i][j] === 1){
                console.log(idx)
                document.getElementById(`${idx}`).classList.add('red')
            } else if (board[i][j] === -1){
                document.getElementById(`${idx}`).classList.add('black')
            }
        })
    })
}



function reset() {
    console.log("clicked reset")
    board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]; 
    for (let i = 0;  i < column.length;  i++){
        column[i].className = "notch"
    }
}


 