//Hang man game!

//Intro "Press any key to start"

//Computer chooses random word from array

//Word is shown as "_ _ _ _" 

//Win, loose counter is drawn up

// Guess remaining and goes down with each wrong key pressed

// Each worn letter chosen is stored and shown as to not repeat it, if repeated nothing happens

var userGuesses= 15;
var intro = document.getElementById("startGame");


var cities = [
    "saint johns","nassau","bridgetown","belmopan","ottawa",
    "san jose","havana","roseau", "santo domingo",
    "saint georges","guatemala city","port au prince","tegucigalpa",
    "kingston","mexico City","managua","panama city","basseterre",
    "castries","kingstown","port of spain","washington"
];
    //Computer choose a random word from cities
    document.onkeyup = function() {
        var randomCity = cities[Math.floor(Math.random()* cities.length)];
        console.log(randomCity);
        intro.style.display = "none";
  

        var cityHidden = [];
        for (var i=0; i < (randomCity.length); i++) {
            cityHidden[i] = "_";  
            if (randomCity[i] === " ") {
                cityHidden[i] = " ";
            } 
        }
     
    
            console.log(cityHidden.join(" "));
          
            document.onkeyup = function(event) {
          
              
                //for loop for keys already guessed
                    var userGuess = event.key.toLowerCase();
                // array to store keys guessed
                 console.log(userGuess);
                    userGuesses--;
                 console.log(userGuesses);
                //Show keys already guessed
                for (var g = 0; g < (randomCity.length); g++) {
                    if (randomCity[g] === userGuess ) { 
                        cityHidden[g] = userGuess;
                    }
                }
                console.log(cityHidden.join(" ")); 
                if (randomCity === (cityHidden.join(""))) {
                    console.log("win");
                }
                
            }
        }
        
         
            


        



    
   

 

   
  
  



      

