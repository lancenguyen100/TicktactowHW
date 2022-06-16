// //Define basic variables for the game
// const player_X_1 = "x"
// const player_O_2 = "circle"
// // let playerTurn  = true
// // let canPlay = false
// // let turns = 0

// // Indexes within the board
//     // [0, 1, 2]
//     // [3, 4, 5]
//     // [6, 7, 8]

//Winning conditions
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]


// //  Get divs cells
//    // let b1 = document.getElementById("b1")
//    // let b2 = document.getElementById("b2")
//    // let b3 = document.getElementById("b3")
//    // let b4 = document.getElementById("b4")
//    // let b5 = document.getElementById("b5")
//    // let b6 = document.getElementById("b6")
//    // let b7 = document.getElementById("b7")
//    // let b8 = document.getElementById("b8")
//    // let b9 = document.getElementById("b9")











//Indicator to track player's turn
//Changes turn by switching value of indicator(TOKEN)
let playerTurn = true

//Keep track of turns to end game in a draw state
let turns = 0
let playerDisplayX = "X"
let playerDisplayO = "O"



//ID state to refer later in the game
let endGame = document.getElementById("winner")
let rotatePlayer = document.getElementById("player-turn")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")


//Array to keep track of squares
let gameArray = [true, true, true, true, true, true, true, true, true]


//Event to determine "X" || "O" goes inside box
b1.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[0] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b1.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b1.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[0] = false
        }   checkWin ()
    }
})

b2.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[1] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b2.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b2.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[1] = false
        }   checkWin ()
    }
})

b3.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[2] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b3.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b3.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[2] = false
        }   checkWin ()
    }
})

b4.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[3] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b4.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b4.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[3] = false
        }   checkWin ()
    }
})

b5.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[4] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b5.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b5.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[4] = false
        }   checkWin ()
    }
})

b6.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[5] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b6.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b6.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[5] = false
        }   checkWin ()
    }
})

b7.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[6] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b7.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b7.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[6] = false
        }   checkWin ()
    }
})

b8.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[7] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b8.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b8.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[7] = false
        }   checkWin ()
    }
})

b9.addEventListener("click", function (event){
    if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
        if (gameArray[8] === true){
            if (playerTurn === true){
                // console.log("Yo!")
                b9.innerText = ("X")
                playerTurn = false
            }else if (playerTurn === false){
                b9.innerText = ("O")
                playerTurn = true
            }
            turns = turns +1
            gameArray[8] = false
        }   checkWin ()
    }
})

//Checking combinations for winning
function checkWin (){
    if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
        b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
        b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
        b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
        b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
        b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
        b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
    ){ 
        

        

 document.getElementById("winner").innerText = "WINNER HAS BEEN CROWNED! + playerDisplay + HAS WON!"
        endGame.innerText = "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"
        // console.log("Winner HAS BEEN CROWNED!")
    
    } else if (turns === 9) {document.getElementById("winner").innerText = "It's a Tie. Click Restart Game! to play again!"}

//Check/Display the turn of players(Draw condition is questionable)
    //   if (turns === 9) {
    //     document.getElementById("winner").innerText = "It's a Tie. Click Restart Game! to play again!"

      if (turns === 1) {
        document.getElementById("player-turn").innerText = "Player O Turn!"
    } if (turns === 2) {
        document.getElementById("player-turn").innerText = "Player X Turn!"
    } if (turns === 3) {
        document.getElementById("player-turn").innerText = "Player O Turn!"
    } if (turns === 4) {
        document.getElementById("player-turn").innerText = "Player X Turn!"
    } if (turns === 5) {
        document.getElementById("player-turn").innerText = "Player O Turn!"
    } if (turns === 6) {
        document.getElementById("player-turn").innerText = "Player X Turn!"
    } if (turns === 7) {
        document.getElementById("player-turn").innerText = "Player O Turn!"
    } if (turns === 8) {
        document.getElementById("player-turn").innerText = "Player X Turn!"
    } if (turns === 9) {
        document.getElementById("player-turn").innerText = "Player O Turn!"
    }   
}

restartButton.addEventListener('click', function (event){
    location.reload()
 })











 


//COPY OF CODES ABOVE JUST IN CASE IT BREAKS! DON'T DELETE!!!!

// //Indicator to track player's turn
// //Changes turn by switching value of indicator(TOKEN)
// let playerTurn = true

// //Keep track of turns to end game in a draw state
// let turns = 0
// let playerDisplayX = "X"
// let playerDisplayO = "O"



// //ID state to refer later in the game
// let endGame = document.getElementById("winner")
// let rotatePlayer = document.getElementById("player-turn")
// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")


// //Array to keep track of squares
// let gameArray = [true, true, true, true, true, true, true, true, true]


// //Event to determine "X" || "O" goes inside box
// b1.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[0] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b1.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b1.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[0] = false
//         }   checkWin ()
//     }
// })

// b2.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[1] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b2.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b2.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[1] = false
//         }   checkWin ()
//     }
// })

// b3.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[2] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b3.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b3.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[2] = false
//         }   checkWin ()
//     }
// })

// b4.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[3] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b4.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b4.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[3] = false
//         }   checkWin ()
//     }
// })

// b5.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[4] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b5.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b5.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[4] = false
//         }   checkWin ()
//     }
// })

// b6.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[5] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b6.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b6.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[5] = false
//         }   checkWin ()
//     }
// })

// b7.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[6] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b7.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b7.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[6] = false
//         }   checkWin ()
//     }
// })

// b8.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[7] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b8.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b8.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[7] = false
//         }   checkWin ()
//     }
// })

// b9.addEventListener("click", function (event){
//     if (endGame.innerText != "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"){
//         if (gameArray[8] === true){
//             if (playerTurn === true){
//                 // console.log("Yo!")
//                 b9.innerText = ("X")
//                 playerTurn = false
//             }else if (playerTurn === false){
//                 b9.innerText = ("O")
//                 playerTurn = true
//             }
//             turns = turns +1
//             gameArray[8] = false
//         }   checkWin ()
//     }
// })

// //Checking combinations for winning
// function checkWin (){
//     if (b1.innerText != "" && b1.innerText === b2.innerText && b1.innerText === b3.innerText ||
//         b4.innerText != "" && b4.innerText === b5.innerText && b4.innerText === b6.innerText ||
//         b7.innerText != "" && b7.innerText === b8.innerText && b7.innerText === b9.innerText ||
//         b1.innerText != "" && b1.innerText === b4.innerText && b1.innerText === b7.innerText ||
//         b2.innerText != "" && b2.innerText === b5.innerText && b2.innerText === b8.innerText ||
//         b3.innerText != "" && b3.innerText === b6.innerText && b3.innerText === b9.innerText ||
//         b1.innerText != "" && b1.innerText === b5.innerText && b1.innerText === b9.innerText ||
//         b3.innerText != "" && b3.innerText === b5.innerText && b3.innerText === b7.innerText
//     ){ 
        

        

//  document.getElementById("winner").innerText = "WINNER HAS BEEN CROWNED! + playerDisplay + HAS WON!"
//         endGame.innerText = "WINNER HAS BEEN CROWNED! " + playerDisplayX || playerDisplayO + " HAS WON!"
//         // console.log("Winner HAS BEEN CROWNED!")
    
//     } else if (turns === 9) {document.getElementById("winner").innerText = "It's a Tie. Click Restart Game! to play again!"}

// //Check/Display the turn of players(Draw condition is questionable)
//     //   if (turns === 9) {
//     //     document.getElementById("winner").innerText = "It's a Tie. Click Restart Game! to play again!"

//       if (turns === 1) {
//         document.getElementById("player-turn").innerText = "Player O Turn!"
//     } if (turns === 2) {
//         document.getElementById("player-turn").innerText = "Player X Turn!"
//     } if (turns === 3) {
//         document.getElementById("player-turn").innerText = "Player O Turn!"
//     } if (turns === 4) {
//         document.getElementById("player-turn").innerText = "Player X Turn!"
//     } if (turns === 5) {
//         document.getElementById("player-turn").innerText = "Player O Turn!"
//     } if (turns === 6) {
//         document.getElementById("player-turn").innerText = "Player X Turn!"
//     } if (turns === 7) {
//         document.getElementById("player-turn").innerText = "Player O Turn!"
//     } if (turns === 8) {
//         document.getElementById("player-turn").innerText = "Player X Turn!"
//     } if (turns === 9) {
//         document.getElementById("player-turn").innerText = "Player O Turn!"
//     }   
// }

// restartButton.addEventListener('click', function (event){
//     location.reload()
//  })








