 let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]; 


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
    const winner = checkWinner();
    console.log("the winner - ", winner)
    if (winner) {
        document.getElementById('winner-text').innerHTML = `${players[winner].name} wins!`
    }
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

let winningArray = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ];

    const checkWinner = () => {
        let winner = undefined;
        const playerOneNumb = [];
        const playerTwoNumb = [];

        board.forEach((rows, rowIndex) => {
            rows.forEach((numb, numbIndex) => {
                if (numb === null) return null;
                const value = (rowIndex * 7) + numbIndex
                if (numb > 0) playerOneNumb.push(value);
                if (numb < 0) playerTwoNumb.push(value);
            })
        })

    winningArray.forEach(win => {
        const playerOneWin = win.every(numb => playerOneNumb.includes(numb))
        const playerTwoWin = win.every(numb => playerTwoNumb.includes(numb))
        if (playerOneWin) winner = 1
        if (playerTwoWin) winner = -1
    })
    return winner;
    }

