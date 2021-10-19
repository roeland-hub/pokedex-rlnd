(function(){
    
let input = document.getElementById("poke-search");
let searchButton = document.getElementById("search-button");
let fetchId = input.value;
// let name = document.getElementById('name');
let id = 1;
let pokeMoveOne = document.querySelector(".poke-move-one");
let pokeMoveTwo = document.querySelector(".poke-move-two");
let pokeMoveThree = document.querySelector(".poke-move-three");
let pokeMoveFour = document.querySelector(".poke-move-four");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");



searchButton.addEventListener('click', function() {
    
    fetchId = input.value
    fetchPokemon()
 })




 function fetchPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${fetchId}`)
        .then((response) => response.json())
        .then(function(pokeData){

            console.log(pokeData);
    
    renderPokemon(pokeData)
   })
   
 }
 function renderPokemon (pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement('div');

    let pokeName = document.createElement('h1')
    pokeName.innerHTML = pokeData.name

    let pokeId = document.createElement('h2')
    pokeId.innerHTML = pokeData.id

    let pokeImg = document.createElement('img')
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fetchId}.png`
    console.log(pokeImg);

    pokeContainer.append(pokeName, pokeId, pokeImg);
    allPokemonContainer.appendChild(pokeContainer);

    let  dataMoves = pokeData["moves"];
    let dataFirstMove = dataMoves[0];
    let dataSecondMove = dataMoves[1];
    let dataThirdMove = dataMoves[2];
    let dataForthMove = dataMoves[3];

    console.log(dataFirstMove);

            
        if(dataFirstMove == false && dataSecondMove == false && dataThirdMove == false){  
            pokeMoveOne.classList.remove("hide");
            pokeMoveOne.innerHTML = "";
        }
        if (dataFirstMove) {
            pokeMoveOne.classList.remove("hide");
            pokeMoveOne.textContent = dataFirstMove["move"]["name"];
        } else {
            pokeMoveOne.classList.add("hide");
            pokeMoveOne.textContent = "";
        }
        if (dataSecondMove) {
            pokeMoveTwo.classList.remove("hide");
            pokeMoveTwo.textContent = dataSecondMove["move"]["name"];
        } else {
            pokeMoveTwo.classList.add("hide");
            pokeMoveTwo.textContent = "";
        }
        if (dataThirdMove) {
            pokeMoveThree.classList.remove("hide");
            pokeMoveThree.textContent = dataThirdMove["move"]["name"];
        } else {
            pokeMoveThree.classList.add("hide");
            pokeMoveThree.textContent = "";
        }
        if (dataForthMove) {
            pokeMoveFour.classList.remove("hide");
            pokeMoveFour.textContent = dataForthMove["move"]["name"];
        } else {
            pokeMoveFour.classList.add("hide");
             pokeMoveFour.textContent = "Move ";
        }
    };

    prevButton.addEventListener("click", function(){
        id--;
        if (id < 1){
            id = 898;
        }
        fetchPokemon();
    });
    
    nextButton.addEventListener("click", function(){
        id++;
        if (id > 898){
            id = 1;
        }
        fetchPokemon();
    });
 
})();