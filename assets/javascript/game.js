//Hang man game!

//Intro "Press any key to start"

//Computer chooses random word from array

//Word is shown as "_ _ _ _" 

//Win, loose counter is drawn up

// Guess remaining and goes down with each wrong key pressed

// Each worn letter chosen is stored and shown as to not repeat it, if repeated nothing happens

var userGuesses = 15;
var intro = document.getElementById("startGame");
var numb = 0;


//Array with cities for computer to choose randomly
var cities = [
    "saint johns", "nassau", "bridgetown", "belmopan", "ottawa",
    "san jose", "havana", "roseau", "santo domingo",
    "saint georges", "guatemala city", "port au prince", "tegucigalpa",
    "kingston", "mexico City", "managua", "panama city", "basseterre",
    "castries", "kingstown", "port of spain", "washington"
];
//Start game at the press of any key from the user
document.onkeyup = function () {
    //Computer choose a random word from array cities
    var randomCity = cities[Math.floor(Math.random() * cities.length)];
    //Consolelog randomCity
    console.log(randomCity);
    //Hides intro 
    intro.style.display = "none";

    //Empty array to store the characters of randomCity as "_" each one
    var cityHidden = [];
    //for loop that goes through the lenght of randomCity and create a "_" for each character storing them inside cityHidden
    for (var i = 0; i < (randomCity.length); i++) {
        cityHidden[i] = "_";
        if (randomCity[i] === " ") {
            cityHidden[i] = " ";
        }
    }
    //Consoloe log randomCity as "_ _ _ _"
    console.log(cityHidden.join(" "));
    console.log(userGuesses);
    //When user presses a Key an event is registered

    var keysPressed = [];
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        keysPressed[numb] = event.key.toLowerCase();
        numb++;
      
        if (userGuess === keysPressed.filter(i === i === userGuess)) {
            console.log("working");
        }
        
        
        
        
        for (var j = 0; j < keysPressed.length; j++) {
            if (keysPressed[j] === userGuess) {
                console.log("pick another letter");
                userGuesses === userGuesses;
                console.log(userGuesses);
            }
            else  {
            userGuesses--;
            }
        }
        //if loop to check how many gueses remain
        if (userGuesses === 0) {
            console.log(" You Lost!! Press any key to play again");
            document.onkeyup = function () {
                location.reload();
            }
        }
        else if (userGuesses > 0) {
            //Create variable for the key the user pressed
            
            console.log(userGuess);
            //Consolelog userGuess
            console.log(userGuesses);
            console.log(keysPressed);
            //Each guess subtracts one from userGuesses
           
            //Console log how many userGuesses are left
            //for loop to go through the characters of randomCity 
            for (var g = 0; g < (randomCity.length); g++) {
                //if statement to chech if a character matches the key the user presses, update the cityHidden arrat to show the letter accordingly
                if (randomCity[g] === userGuess) {
                    cityHidden[g] = userGuess;
                }
            }
            //Console.log a string that contains the elements of cityHidden, keeping track of user progress
            console.log(cityHidden.join(" "));
            //if statement to check if randomCity is equal to the cityHidden joint string, if it is console.log win
            if (randomCity === (cityHidden.join(""))) {
                console.log("win , press any key to start again");
                document.onkeyup = function () {
                    location.reload();
                }

            }
        }
    }
}






















