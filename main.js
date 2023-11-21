/*
Project: Ranked Match Calculator
Author: Eduardo Nascimento
Date: 11/21/2023 
*/

//Using the readline-sync library to input user data
const readline = require('readline-sync')

//variables declaration
let player = "Player"
let level = ""

console.log("******************************")
console.log("***** INPUT PLAYER's SCORE *****")
console.log("******************************")
console.log("The " +player+" have: ")

//Enter player's wins and losses number    
let win = readline.questionInt("Enter player\'s win number: ")
readline.promptLoop
let losses = readline.questionInt("Enter player\'s losses number: ")
readline.promptLoop

let scoreResult = score(win, losses)
let playerLevel = scoreLevel()
summary()

function score (win, losses){
    return win - losses
}

//Set player's Level
function scoreLevel(){
    if (scoreResult <= 10){
        level = "Iron"
        } else if (scoreResult > 10 && scoreResult <= 20){
            level = "Bronze"
            } else if (scoreResult > 20 && scoreResult <= 50){
                level = "Silver"
                } else if (scoreResult > 50 && scoreResult <= 80){
                    level = "Gold"
                    } else if (scoreResult > 80 && scoreResult <= 90){
                        level = "Diamond"
                        } else if (scoreResult > 90 && scoreResult <= 100){
                            level = "Legendary"
                            } else {
                                level = "Immortal"
                                } 
    return level
}

//Print player's data summary
function summary (){
    console.log("\n******** PLAYER'S DATA SUMMARY ********")
    console.log("*****************************************")
    console.log("Name: " +player)
    console.log("Wins number: " +win)
    console.log("Losses number: " +losses)
    console.log("Total Score: " +scoreResult)
    console.log("The player has a score of " +scoreResult+ " is at " +playerLevel+ " level!")
    console.log("*************************************")
}

