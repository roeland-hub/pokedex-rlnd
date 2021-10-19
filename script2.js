console.log('hello');
// 
let pokeInput = document.getElementById('poke-input');
let runButton = document.getElementById('run-button');

let pokeName = document.querySelector('.poke-name');
let pokeNum = document.querySelector('.poke-id');
let pokeImage = document.querySelector('.poke-image')

let moveOne = document.getElementById('moveOne');
let moveTwo = document.getElementById('moveTwo')
let moveThree = document.getElementById('moveThree');
let moveFour = document.getElementById('moveFour');

let prevButton = document.getElementById('prev-button'); 
let nextButton = document.getElementById('next-button');
var pokeId 
var id = 1;

runButton.addEventListener('click', function(){
    pokeId = pokeInput.value;
    fetchPokemon() 
});

pokeInput.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        pokeId = pokeInput.value;
        fetchPokemon()
    }
});

prevButton.addEventListener('click', function(){
    pokeId--;
    if(id < 1){
        id = 898;
    }
    fetchPokemon()
});

nextButton.addEventListener('click', function(){
    pokeId++;
    if(id > 898){
        id = 1;
    }
    fetchPokemon()
});

function fetchPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(response => {return response.json();})
        .then(data => {
            console.log(data);

            pokeName.innerHTML = data['name'];
            pokeNum.innerHTML = data['id'];
            pokeImage.src = data['sprites']['front_default'];

            let firstMove = data.moves[Math.floor(Math.random() * data.moves.length)]
            console.log(firstMove);
            moveOne.innerHTML= (firstMove['move']['name']);

            let secondMove = data.moves[Math.floor(Math.random() * data.moves.length)]
            moveTwo.innerHTML= (secondMove['move']['name']);

            let thirdMove = data.moves[Math.floor(Math.random() * data.moves.length)]
            moveThree.innerHTML= (thirdMove['move']['name']);

            let fourthMove = data.moves[Math.floor(Math.random() * data.moves.length)]
            moveFour.innerHTML= (fourthMove['move']['name']);
        })
};

