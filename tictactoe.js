//Globale Variablen 
let nameP1 = "";
let nameP2 = "";
let colorPlayer1 = "";
let colorPlayer2 = "";

let player1Num = 1;
let player2Num = 6;


let currentPlayer = 0;

let Winner = "";
let winnerFound = false;

let count1 = 0;
let count2 = 0;

let gameMatrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]

let song = new Audio("Sound/win.mp3");

function playSong() {
    song.play();
}


// Farbe und Namen

function nameAndColor() {
    nameP1 = document.getElementById('namePlayer1').value;
    nameP2 = document.getElementById('namePlayer2').value;

    colorPlayer1 = document.getElementById('colorPlayer1').value;
    colorPlayer2 = document.getElementById('colorPlayer2').value;

    document.getElementById('gamefield').style.display = 'grid';
    document.getElementById('input').style.display = 'none';


    document.getElementById('pl1').style.display = 'none';
    document.getElementById('pl2').style.display = 'none';
    document.getElementById('pl1').innerHTML = nameP1;
    document.getElementById('pl2').innerHTML = nameP2;

    document.getElementById('wolke').style.display = 'inline'

    document.getElementById('player1').style.display = 'inline'
    document.getElementById('player2').style.display = 'inline'

    document.getElementById('player1').innerHTML = `${nameP1}`
    document.getElementById('player2').innerHTML = `${nameP2}`

    document.getElementById('player1').style.color = `${colorPlayer1}`
    document.getElementById('player2').style.color = `${colorPlayer2}`



}


// X und O setzten Player1 = 1, Player2 = 4

function boxC(box,x ,y ) {

    
    

    if (gameMatrix[x][y] >= 0) {
        alert('Du kannst hier nichts setzen!')
        return;
    }

    if (winnerFound == true) {
        alert('Es hat bereits einen Winner gegeben')
        return;
    }

    if (currentPlayer%2 == 0 ) {
        document.getElementById('player2').style.color = 'grey'
        document.getElementById('player1').style.color = `${colorPlayer1}`
        gameMatrix[x][y] = player1Num;
    } else if(currentPlayer%2 == 1){
        document.getElementById('player1').style.color = 'grey'
        document.getElementById('player2').style.color = `${colorPlayer2}`
        gameMatrix[x][y]= player2Num;
    }


    // Bilder 
    
    if (gameMatrix[x][y] == player1Num) {
        box.innerHTML = `<img src="./Bilder/kreis.png" alt="" width="20">`;
    } else if (gameMatrix[x][y] == player2Num) {
        box.innerHTML = `<img src="./Bilder/x.png" alt="" width="20">`;
    }

    CheckWinner();

    if (currentPlayer >= 8 && Winner == '') {
        Winner = 'Unentschieden'
    }   

    if (Winner == "Player 1" || Winner == "Player 2" || Winner == 'Unentschieden') {
        document.getElementById('buttons').style.display = 'inline';
        if (Winner == "Player 1") {
            document.getElementById('showWinner').style.display = 'inline'
            document.getElementById('showWinner').innerHTML = `${nameP1} hat gewonnen`;
            count1++;
            playSong()
            winnerFound = true;
        }else if (Winner == "Player 2") {
            document.getElementById('showWinner').style.display = 'inline'
            document.getElementById('showWinner').innerHTML = `${nameP2} hat gewonnen`
            count2++;
            playSong()
            winnerFound = true;
        }else{
            document.getElementById('showWinner').style.display = 'inline'
            document.getElementById('showWinner').innerHTML = `<p>Unentschieden</p>`;
            winnerFound = true;
        }
    }
                
    currentPlayer++;
}


//Buttons zum Result ansehen und Play Again

function playAgain() {
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[0].length; j++) {
            gameMatrix[i][j] = -1;
           
        }        
    } 
    document.getElementById('box').innerHTML = ''
    document.getElementById('box1').innerHTML = ''
    document.getElementById('box2').innerHTML = ''
    document.getElementById('box3').innerHTML = ''
    document.getElementById('box4').innerHTML = ''
    document.getElementById('box5').innerHTML = ''
    document.getElementById('box6').innerHTML = ''
    document.getElementById('box7').innerHTML = ''
    document.getElementById('box8').innerHTML = ''


    document.getElementById('showWinner').style.display = 'none'
    currentPlayer = 0;
    Winner = ''
    winnerFound = false;
}

function showResults() {
    
    document.getElementById('Results1').innerHTML = `${nameP1} Score: ${count1}`
    document.getElementById('Results1').style.color = colorPlayer1;
    document.getElementById('Results2').innerHTML = `${nameP2} score: ${count2}`
    document.getElementById('Results2').style.color = colorPlayer2;
    
}

// Check Winner


function CheckWinner() {
    


    // 1. Zeile
    if (gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2] == player2Num*3) {
        Winner = "Player 2";
    }

     // 2. Zeile
     if (gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2] == player2Num*3) {
        Winner = "Player 2";
    }

     // 3. Zeile
     if (gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2] == player2Num*3) {
        Winner = "Player 2";
    }


     // 1. Spalte
     if (gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0] == player2Num*3) {
        Winner = "Player 2";
    }

    // 2. Spalte
    if (gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1] == player2Num*3) {
        Winner = "Player 2";
    }

    // 3. Spalte
    if (gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2] == player2Num*3) {
        Winner = "Player 2";
    }

    // 1. Diagonale
    if (gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2] == player2Num*3) {
        Winner = "Player 2";
    }

     // 2. Diagonale
     if (gameMatrix[0][2] + gameMatrix[1][1] + gameMatrix[2][0] == player1Num*3) {
        Winner = "Player 1";
    }else if (gameMatrix[0][2] + gameMatrix[1][1] + gameMatrix[2][0] == player2Num*3) {
        Winner = "Player 2";
    }

    

    return Winner;
    
}


function endGame() {
    location.reload();
}
