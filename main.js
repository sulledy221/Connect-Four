// Declare all state variables
const board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]; 
let currentPlayer = 1
// Remember render function
const row = document.getElementsByTagName('tr');
const column = document.getElementsByTagName('td');
const notch = document.querySelector('.notch');
const playerTurn = document.querySelector('player-turn');
const playAgain = document.querySelector('.button');
const game = document.querySelector('.game');


console.log('column - ', column)
for (let i = 0;  i < column.length;  i++){
    console.log('column[i] - ', column[i])
    column[i].addEventListener('click', (e) => {
        console.log(`${e.target.id}`) 
        let currentRow = Math.floor((parseInt(e.target.id) -1) /7)
        let currentColumn = (parseInt(e.target.id) -1) %7
        if (board[currentRow][currentColumn]==null){
            board[currentRow][currentColumn] = currentPlayer
            currentPlayer *= -1
            render()
        }
        console.log(board)
    })
}
function render(){
    console.log('Render is working');
    board.forEach(function(e, i){
        e.forEach(function(f, j){
            let idx = i*7+(j+1)
            if(board[i][j] ==1){
                console.log(idx)
                document.getElementById(`${idx}`).style.backgroundColor='red'
            } else if (board[i][j] == -1){
                document.getElementById(`${idx}`).style.backgroundColor='black'
            }
        })
    })
}
// function 
// // if (player1)
// // need eventlistner to handle click
// // function that checks for winning move
// // steps
// // 1. Handle click should update board array
// // 2. Check for a winner on the updated board array 
// // 3. Call check winner 
// // 4. Call render function, not a winner next turn 




// // function checkForWinner(){

// // }