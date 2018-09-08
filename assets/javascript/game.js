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
var cityPic = document.getElementById("cityImage");
var againButton = document
//Array with cities for computer to choose randomly
var cities = [
    "SAINT JOHN'S", "NASSAU", "BRIDGETOWN", "BELMOPAN", "OTTAWA",
    "SAN JOSE", "HAVANA", "ROSEAU", "SANTO DOMINGO", "SAN SALVADOR",
    "SAINT GEORGE'S", "GUATEMALA CITY", "PORT AU PRINCE", "TEGUCIGALPA",
    "KINGSTON", "MEXICO CITY", "MANAGUA", "PANAMA CITY", "BASSETERRE",
    "CASTRIES", "KINGSTOWN", "PORT OF SPAIN", "WASHINGTON"
];
var nations = {
    antigua : {  
        capital : "SAINT JOHN'S", 
        capitalPic : "https://c1.staticflickr.com/4/3925/14683899888_d4d7b28284_b.jpg", 
        description : "St. John's is the capital and largest city of Antigua and Barbuda, located in the West Indies in the Caribbean Sea and with a population of 22,193, St. John's is the commercial centre of the nation and the chief port of the island of Antigua."
    },
    bahamas : {
        capital: "NASSAU",
        capitalPic: "data:image/jpeg;base64,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",
        description: "Nassau is the capital and commercial centre of the Commonwealth of the Bahamas. The city has an estimated population of 274,400 as of 2016, just over 70% of the population of the country (391,000).Lynden Pindling International Airport, the major airport for the Bahamas, is located about 16 kilometres (9.9 mi) west of Nassau city centre, and has daily flights to major cities in Canada, the Caribbean, the United Kingdom and the United States. The city is located on the island of New Providence, which functions much like a business district. Nassau is the site of the House of Assembly and various judicial departments and was considered historically to be a stronghold of pirates.The city was named in honour of William III of England, Prince of Orange-Nassau, deriving its name from Nassau, Germany."
    },
     barbados: {  
        capital : "BRIDGETOWN", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/3/39/Bridgetown_barbados_chamberlain_bridge.jpg", 
        description : "Bridgetown is the capital and largest city of Barbados. Formerly The Town of Saint Michael, the Greater Bridgetown area is located within the parish of Saint Michael. Bridgetown is sometimes locally referred to as <The City>, but the most common reference is simply <Town>. As of 2014, its metropolitan population stands at roughly 110,000."
    },
    belize : {  
        capital : "BELMOPAN", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Belmopan_Parliament.jpg/200px-Belmopan_Parliament.jpg", 
        description : "Belmopan is the capital city of Belize. Its population in 2010 was 16,451. Although the smallest capital city in the continental Americas by population, Belmopan is the third-largest settlement in Belize, behind Belize City and San Ignacio. Founded as a planned community in 1970, Belmopan is one of the newest national capital cities in the world. Since 2000 Belmopan has been one of two settlements in Belize to hold official city status, along with Belize City."
    },
    canada : {  
        capital : "OTTAWA", 
        capitalPic : "https://c.pxhere.com/photos/11/2f/canada_ottawa_parliament-701922.jpg!d", 
        description : "Ottawa is the capital city of Canada. It stands on the south bank of the Ottawa River in the eastern portion of southern Ontario. Ottawa borders Gatineau, Quebec; the two form the core of the Ottawa–Gatineau census metropolitan area (CMA) and the National Capital Region (NCR). As of 2016, Ottawa had a city population of 964,743 and a metropolitan population of 1,323,783 making it the fourth-largest city and the fifth-largest CMA in Canada."
    },
    costa_rica : {  
        capital : "SAN JOSE", 
        capitalPic : "https://s2.eestatic.com/2016/05/17/actualidad/Actualidad_125498519_5032260_1706x960.jpg", 
        description : "San José is the capital and largest city of Costa Rica. Located in the mid-west of the Central Valley, San José is the seat of national government, the focal point of political and economic activity, and the major transportation hub of this Central American nation. The population of San José Canton was 288,054 in 2011, and San José’s municipal land area measures 44.2 square kilometers (17.2 square miles), and an estimated 333,980 residents in 2015. The metropolitan area stretches beyond the canton limits and has an estimated population of over 2 million in 2017.[5] The city is named in honor of Joseph of Nazareth."
    },
    cuba : {  
        capital : "HAVANA", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/El_Capitolio_Havana_Cuba.jpg/1200px-El_Capitolio_Havana_Cuba.jpg", 
        description : "Havana is the capital city, largest city, province, major port, and leading commercial center of Cuba. The city has a population of 2.1 million inhabitants, and it spans a total of 781.58 km2 (301.77 sq mi) – making it the largest city by area, the most populous city, and the fourth largest metropolitan area in the Caribbean region. The city extends mostly westward and southward from the bay, which is entered through a narrow inlet and which divides into three main harbors: Mari melena, Guanabacoa and Antares. The sluggish Almendares River traverses the city from south to north, entering the Straits of Florida a few miles west of the bay."
    },
    dominica : {  
        capital : "ROSEAU", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/RoseauWide..jpg/1800px-RoseauWide..jpg", 
        description : "Roseau es la capital de Dominica y su ciudad más antigua e importante. Según el censo de 2007 tiene una población de 16.582 habitantes."
    },
    dominican_republic : {  
        capital : "SANTO DOMINGO", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/3/38/Santo_Domingo_Panorama.jpg", 
        description : "Santo Domingo officially Santo Domingo de Guzmán, is the capital and largest city in the Dominican Republic and the largest metropolitan area in the Caribbean by population. In 2010, its population was counted as 965,040, rising to 2,908,607 when its surrounding metropolitan area was included. The city is coterminous with the boundaries of the Distrito Nacional (<D.N.>, <National District>), itself bordered on three sides by Santo Domingo Province."   
    },
    salvador : {  
        capital : "SAN SALVADOR", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Centro_historico_san_salvador.jpg/800px-Centro_historico_san_salvador.jpg", 
        description : "San Salvador (<Holy Savior>) is the capital and the most populous city of El Salvador and its eponymous department. It is the country's political, cultural, educational and financial center. The Metropolitan Area of San Salvador which comprises the capital itself and 13 of its municipalities has a population of 2,404,097 while the national capital of El Salvador which is San Salvador has a population of 1,767,102."
    },
    grenada : {  
        capital : "SAINT GEORGE'S", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/2009_07-28_St._George%27s_Bay_%284%29.JPG/1200px-2009_07-28_St._George%27s_Bay_%284%29.JPG", 
        description : "St. George's is the capital of Grenada. The town is surrounded by a hillside of an old volcano crater and is on a horseshoe-shaped harbor. St. George's is a popular Caribbean tourist destination. The town has developed in recent years, while preserving its history, culture, and natural environment. The town is home of St. George’s University School of Medicine and it is also where the country's international airport is located, Maurice Bishop International Airport. The main exports are cocoa bean cacao, nutmeg, and mace spice."
    },
    guatemala : {  
        capital : "GUATEMALA CITY", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Guatemala_City_%28663%29.jpg/1200px-Guatemala_City_%28663%29.jpg", 
        description : "Guatemala City locally known as Guatemala or Guate, officially Nueva Guatemala de la Asunción (New Guatemala of the Assumption), is the capital and largest city of the Republic of Guatemala, and the most populous in Central America. The city is located in the south-central part of the country, nestled in a mountain valley called Valle de la Ermita. In 2012, it had a population of 2,110,100."
    },
    haiti : {  
        capital : "PORT AU PRINCE", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Port_au_prince-haiti.JPG/1200px-Port_au_prince-haiti.JPG", 
        description : "Port-au-Prince is the capital and most populous city of Haiti. The city's population was estimated at 987,310 in 2015 with the metropolitan area estimated at a population of 2,618,894. The metropolitan area is defined by the IHSI as including the communes of Port-au-Prince, Delmas, Cite Soleil, Tabarre, Carrefour, and Pétion-Ville."
    },
    honduras : {  
        capital : "TEGUCIGALPA", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/5/56/The_City_of_Tegucigalpa%2C_in_the_central_region_of_Honduras.jpg", 
        description : "Tegucigalpa formally Tegucigalpa, Municipality of the Central District,, colloquially referred to as Téguz, is the capital and largest city of Honduras along with its twin sister, Comayagüela. Tegucigalpa is located in the southern-central highland region known as the department of Francisco Morazán of which it is also the departmental capital. It is situated in a valley, surrounded by mountains. Tegucigalpa and Comayagüela, being sister cities, are physically separated by the Choluteca River. The Central District is the largest of the 28 municipalities in the Francisco Morazán department."
    },
    jamaica : {  
        capital : "KINGSTON", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/1/10/View_of_Kingston.jpg", 
        description : "Kingston is the capital and largest city of Jamaica, located on the southeastern coast of the island. It faces a natural harbour protected by the Palisadoes, a long sand spit which connects the town of Port Royal and the Norman Manley International Airport to the rest of the island. In the Americas, Kingston is the largest predominantly English-speaking city south of the United States."
    },
    mexico : {  
        capital : "MEXICO CITY", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Mexico_City-12.jpg", 
        description : "Mexico City, or the City of Mexico and abbreviated as CDMX, is the capital of Mexico and the most populous city in North America. Mexico City is one of the most important cultural and financial centres in the Americas. It is located in the Valley of Mexico (Valle de México), a large valley in the high plateaus in the center of Mexico, at an altitude of 2,240 meters (7,350 ft). The city has 16 boroughs."
    },
    nicaragua : {  
        capital : "MANAGUA", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Carretera_A_Masaya_Y_Downtown_Managua.jpg/640px-Carretera_A_Masaya_Y_Downtown_Managua.jpg", 
        description : "Managua is the capital and largest city of Nicaragua, and the center of eponymous department. Located on the southwestern shore of Lake Managua, it had an estimated population 1,042,641 in 2016 within the city's administrative limits[4] and a population of 1,401,687 in the metropolitan area, which additionally includes the municipalities of Ciudad Sandino, El Crucero, Nindirí, Ticuantepe and Tipitapa."
    },
    panama : {  
        capital : "PANAMA CITY", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/7/71/Panama_City_Skyline_2017.jpg", 
        description : "Panama City is the capital and largest city of Panama. It has an urban population of 880,691, with over 1.5 million in its metropolitan area. The city is located at the Pacific entrance of the Panama Canal, in the province of Panama. The city is the political and administrative center of the country, as well as a hub for banking and commerce."
    },
    saint_kitts : {  
        capital : "BASSETERRE", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/0/06/Basseterre.jpeg", 
        description : "Basseterre, estimated population 13,000 in 2011, is the capital of Saint Kitts and Nevis. Geographically, the Basseterre port is located at 17°18′N 62°44′W, on the south western coast of Saint Kitts Island, and it is one of the chief commercial depots of the Leeward Islands. The city lies within Saint George Basseterre Parish. Basseterre is one of the oldest towns in the Eastern Caribbean.[2]"
    },
    saint_lucia : {  
        capital : "CASTRIES", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/e/ea/CastriesStLucia.JPG", 
        description : "Castries is the capital and largest city of Saint Lucia, an island country in the Caribbean. The city has a population of 70,000 and stretches over an area of 80 km2 (31 sq mi). Castries is in a flood gut and is built on reclaimed land. It houses the seat of government and the head offices of many of foreign and local businesses. The city's design is in a grid pattern. Its sheltered harbour receives cargo vessels, ferry boats, and cruise ships."
    },
    saint_vincent : {  
        capital : "KINGSTOWN", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/a/a1/Kingstown.jpg", 
        description : "Kingstown is the capital, chief port, and main commercial centre of Saint Vincent and the Grenadines. With a population of 16,500 (2010), Kingstown is the most populous settlement in the country. It is the centre for the island's agricultural industry and a port of entry for tourists. The city lies within the parish of Saint George in the south-west corner of Saint Vincent."
    },
    trinidad_tobago : {  
        capital : "PORT OF SPAIN", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/f/f6/Port_of_SpainT%26T_03_2012_0986.JPG", 
        description : "Port of Spain is the capital city of Trinidad and Tobago and the country's third-largest city, after Chaguanas and San Fernando. The city has a municipal population of 37,074 (2011 census), a metropolitan population of 81,142 (2011 estimate) and a transient daily population of 250,000. It is located on the Gulf of Paria, on the northwest coast of the island of Trinidad and is part of a larger conurbation stretching from Chaguaramas in the west to Arima in the east with an estimated population of 600,000."
    },
    america : {  
        capital : "WASHINGTON", 
        capitalPic : "https://upload.wikimedia.org/wikipedia/commons/1/13/WashMonument_WhiteHouse.jpg", 
        description : "Washington, D.C., formally the District of Columbia and commonly referred to as Washington or D.C., is the capital of the United States of America. Founded after the American Revolution as the seat of government of the newly independent country, Washington was named after George Washington, first President of the United States and Founding Father. Washington is the principal city of the Washington metropolitan area, which has a population of 6,131,977. As the seat of the United States federal government and several international organizations, the city is an important world political capital. Washington is one of the most visited cities in the world, with more than 20 million annual tourists."
    },
}
console.log(cityPic)
//Start game at the press of any key from the user
document.onkeyup = function startGame () {
    var userGuesses = 15;
    //Computer choose a random word from array cities
    var randomCity = cities[Math.floor(Math.random() * cities.length)];
   
    //Consolelog randomCity
    console.log(randomCity);
    //Hides intro 
    
    console.log(cityPic)
    //Empty array to store the characters of randomCity as "_" each one
    var cityHidden = [];
    //for loop that goes through the lenght of randomCity and create a "_" for each character storing them inside cityHidden
    for (var i = 0; i < (randomCity.length); i++) {
        cityHidden[i] = "_";
        if (randomCity[i] === " ") {
            cityHidden[i] = " ";
        }
        else if (randomCity[i] === "'") {
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
                if (randomCity === nations.antigua.capital) {
                    cityPic.src = nations.antigua.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.antigua.description
                    console.log(nations.antigua.description)
                }
                else  if (randomCity === nations.bahamas.capital) {
                    cityPic.src = nations.bahamas.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.bahamas.description
                    console.log(nations.bahamas.description)
                }
                else  if (randomCity === nations.barbados.capital) {
                    cityPic.src = nations.barbados.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.barbados.description
                    console.log(nations.bahamas.description)
                }
                else  if (randomCity === nations.belize.capital) {
                    cityPic.src = nations.belize.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.belize.description
                }
                else  if (randomCity === nations.canada.capital) {
                    cityPic.src = nations.canada.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.canada.description
                }
                else  if (randomCity === nations.costa_rica.capital) {
                    cityPic.src = nations.costa_rica.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.costa_rica.description   
                }
                else  if (randomCity === nations.cuba.capital) {
                    cityPic.src = nations.cuba.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.cuba.description  
                }
                else  if (randomCity === nations.dominica.capital) {
                    cityPic.src = nations.dominica.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.dominica.description
                }
                else  if (randomCity === nations.dominican_republic.capital) {
                    cityPic.src = nations.dominican_republic.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.dominican_republic.description  
                }
                else  if (randomCity === nations.salvador.capital) {
                    cityPic.src = nations.salvador.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.salvador.description 
                }
                else  if (randomCity === nations.grenada.capital) {
                    cityPic.src = nations.grenada.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.grenada.description
                }
                else  if (randomCity === nations.guatemala.capital) {
                    cityPic.src = nations.guatemala.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.guatemala.description
                }
                else  if (randomCity === nations.haiti.capital) {
                    cityPic.src = nations.haiti.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.haiti.description
                }
                else  if (randomCity === nations.honduras.capital) {
                    cityPic.src = nations.honduras.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.honduras.description
                }
                else  if (randomCity === nations.jamaica.capital) {
                    cityPic.src = nations.jamaica.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.jamaica.description
                }
                else  if (randomCity === nations.mexico.capital) {
                    cityPic.src = nations.mexico.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.mexico.description
                }
                else  if (randomCity === nations.nicaragua.capital) {
                    cityPic.src = nations.nicaragua.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.nicaragua.description
                }
                else  if (randomCity === nations.panama.capital) {
                    cityPic.src = nations.panama.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.panama.description
                }
                else  if (randomCity === nations.saint_kitts.capital) {
                    cityPic.src = nations.saint_kitts.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.saint_kitts.description
                }
                else  if (randomCity === nations.saint_lucia.capital) {
                    cityPic.src = nations.saint_lucia.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.saint_lucia.description
                }
                else  if (randomCity === nations.saint_vincent.capital) {
                    cityPic.src = nations.saint_vincent.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.saint_vincent.description
                }
                else  if (randomCity === nations.trinidad_tobago.capital) {
                    cityPic.src = nations.trinidad_tobago.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.trinidad_tobago.description
                }
                else  if (randomCity === nations.america.capital) {
                    cityPic.src = nations.america.capitalPic;
                    document.getElementById("cityText").innerHTML = nations.america.description
                }
                $("#button").on("click", function() {
                    startGame();
                    cityPic.src = "https://via.placeholder.com/350x350"
                    document.getElementById("cityText").innerHTML = ("")
                    letters.textContent = "Letters guessed: "

                  });
               

            }
            letters.textContent = "Letters guessed: " + keysPressed.join("");
            gameWins.textContent = "Wins: " +wins;
        }

    }
}



//var filteredKeys = keysPressed.filter(function(key){
//    return key[0] === userGuess;
//})
//function filterKey (keysPressed, 0, letter) {
//    var filteredKeys = keysPressed.filter(function(key) {
//        return key[0] === letter;
//    }

//}


















