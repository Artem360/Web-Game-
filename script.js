let userInput 
let counter = 0
let userMinRange 
let userMaxRange
let lastUserNum = undefined
let random = undefined

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
function exit(){
    document.querySelector(".game").style.visibility = "hidden"
    alert("Reset page if u wont to play again")
}
function valid(){
    let enterUser = document.querySelector(".enterInput").value
    let enter_val = parseInt(enterUser);
    if((enterUser !== '')&&(isNaN(enter_val) === false)){
        userInput = enter_val
        userMinRange = parseInt(document.querySelector(".min").value)
        userMaxRange = parseInt(document.querySelector(".max").value)
        if(userMinRange >= userMaxRange){
            document.querySelector(".promptText").innerHTML = "Please enter a valid interval!"
        }
        else{
            if(random === undefined){
                random = randomNumber(userMinRange,userMaxRange + 1)
            }
            tryToGuess(userInput,random,lastUserNum)
        }
    }
    else{
        document.querySelector(".promptText").innerHTML = "Enter a number!!! Please."
    }
}




function tryToGuess(userNum,randomNum,lsatNum) {
    if(userNum == randomNum) {
        counter = counter + 1 
        document.querySelector(".checkText").innerHTML = `Congratulations, you guessed for ${counter} try (:`
        document.querySelector(".promptText").style.visibility = "hidden"
        counter = 5
    }
    else if (counter === 5) {
        exit()
    }
    else {
        document.querySelector(".checkText").innerHTML = "You do not guess ):"
        counter = counter + 1
        if (lsatNum === undefined){
            document.querySelector(".promptText").textContent = `Try again.\nYou have ${(counter - 5)*(-1)} try`
            lastUserNum = userNum
        }
        else if (lsatNum === userNum){
            document.querySelector(".promptText").innerHTML = `You entered the same number!!!\nYou have ${(counter - 5)*(-1)} try`
        }
        else{
            let a = lsatNum - randomNum
            let b = userNum - randomNum
            if(a < b){
                document.querySelector(".promptText").innerHTML = `Didn't guess, but warmer!!!\nYou have ${(counter - 5)*(-1)} try`
            }
            else if (a > b){
                document.querySelector(".promptText").innerHTML = `I guess it's colder!!!\nYou have ${(counter - 5)*(-1)} try`
            }
            else{
                document.querySelector(".promptText").innerHTML = `Random number between your last number and this number! You have ${(counter - 5)*(-1)} try`
            }
            lastUserNum = userNum
            
        }
        
        

    }
}

document.querySelector(".exitBtn").addEventListener("click",exit);
document.querySelector(".checkBtn").addEventListener("click",valid) 