//Hang man game!

//Intro "Press any key to start"

//Computer chooses random word from array

//Word is shown as "_ _ _ _" 

//Win, loose counter is drawn up

// Guess remaining and goes down with each wrong key pressed

// Each worn letter chosen is stored and shown as to not repeat it, if repeated nothing happens

var userGuesses = 15;
var intro = document.getElementById("startGame");
var numb = 1;
var progress = document.querySelector("#progress");
var guesses = document.querySelector("#guesses");
var letters = document.querySelector("#letters");
var message = document.querySelector("#message")
var gameWins = document.querySelector("#wins");
var wins = 0;
var cityPic = document.getElementById("cityImage").src;

//Array with cities for computer to choose randomly
var cities = [
    "SAINT JOHN'S", "NASSAU", "BRIDGETOWN", "BELMOPAN", "OTTAWA",
    "SAN JOSE", "HAVANA", "	ROSEAU", "SANTO DOMINGO", "SAN SALVADOR",
    "SAINT GEORGE'S", "GUATEMALA CITY", "PORT AU PRINCE", "TEGUCIGALPA",
    "KINGSTON", "MEXICO CITY", "MANAGUA", "PANAMA CITY", "BASSETERRE",
    "CASTRIES", "KINGSTOWN", "PORT OF SPAIN", "WASHINGTON"
];
var nations = {
    antigua : {  
        capital : "SAINT JOHN'S", 
        capitalPic : "https://c1.staticflickr.com/4/3925/14683899888_d4d7b28284_b.jpg", 
        Description : "St. John's is the capital and largest city of Antigua and Barbuda, located in the West Indies in the Caribbean Sea and with a population of 22,193, St. John's is the commercial centre of the nation and the chief port of the island of Antigua."
    }
}
console.log(cityPic)
//Start game at the press of any key from the user
document.onkeyup = function startGame () {
    var userGuesses = 15;
    //Computer choose a random word from array cities
    //var randomCity = cities[Math.floor(Math.random() * cities.length)];
    var randomCity = "SAINT JOHN'S"
    //Consolelog randomCity
    console.log(randomCity);
    //Hides intro 
    cityPic = ("hi")
    console.log(cityPic)
    //Empty array to store the characters of randomCity as "_" each one
    var cityHidden = [];
    //for loop that goes through the lenght of randomCity and create a "_" for each character storing them inside cityHidden
    for (var i = 0; i < (randomCity.length); i++) {
        cityHidden[i] = "_";
        if (randomCity[i] === " ") {
            cityHidden[i] = " ";
        }
        if (randomCity[i] === "'") {
            cityHidden[i] = "'";
        }
    }
    console.log(cityHidden.join(""));
    //Consoloe log randomCity as "_ _ _ _"
    progress.textContent = cityHidden.join("").toString();
    console.log(cityHidden)
    guesses.textContent = "Guesses: " + userGuesses;
    //When user presses a Key an event is registered
    message.textContent = ("Press a new key!");
    var keysPressed = [""];
    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        //if loop to check how many gueses remain
        if (userGuesses === 0) {
            message.textContent = (" You Lost!! Press any key to play again");
            progress.textContent =randomCity
            document.onkeyup = function () {
                startGame();
            }
        }

        var filteredKeys = keysPressed.filter(function (key) {
            return key[0] === userGuess;
        })
        console.log(filteredKeys);
        console.log(userGuess);
        if (filteredKeys == userGuess) {
            message.textContent = ("pick another letter")
        }
        else if (userGuesses > 0) {
            keysPressed[numb] = event.key.toUpperCase();
            numb++;
            userGuesses--;
            console.log(userGuess);
            guesses.textContent = "Guesses: " + userGuesses;
            console.log(numb);
            for (var g = 0; g < (randomCity.length); g++) {
                if (randomCity[g] === userGuess) {
                    cityHidden[g] = userGuess;
                    console.log(cityHidden[g]);
                }
            }
            
            progress.textContent = cityHidden.join("").toString();
            if (randomCity === (cityHidden.join(""))) {
                message.textContent = ("win , press any key to start again");
                wins++;
                if (randomCity === nations.antigua.capital ){
                    function changePic (a) {
                        cityPic = nations.antigua.capitalPic;
                    console.log(cityPic);
                    console.log("im working");
                    }
                    
                }
              
                document.onkeyup = function () {
                    startGame();
                    
                }

            }
            letters.textContent = "Letters guessed: " + keysPressed.join("");
            gameWins.textContent = "Wins: " +wins;
        }

    }
}


var pic = function(x,y,z) {
    
}

//var filteredKeys = keysPressed.filter(function(key){
//    return key[0] === userGuess;
//})
//function filterKey (keysPressed, 0, letter) {
//    var filteredKeys = keysPressed.filter(function(key) {
//        return key[0] === letter;
//    }

//}


















