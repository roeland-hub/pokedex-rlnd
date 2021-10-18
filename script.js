  (function(){
    //Bunch of code...
let input = document.getElementById("poke-search");
let searchButton = document.getElementById("search-button");
let fetchId = input.value;
let name = document.getElementById('name');
let id = document.getElementById('id');


searchButton.addEventListener('click', function() {
    fetchId = input.value
    fetchPokemon()
 })

 function fetchPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon/${fetchId}`)
        .then((response) => response.json())
        .then((data) => {
            name.innerHTML = data.name;
            id.innerHTML = data.id;
        }) //generateHtml(pokemon))
    
    // const generateHtml = (data) => {
    //     console.log(data)
    //     const html = `
    //         <div class"name">${data.name}</div>
    //         <img src=${data.sprites.front_default}>
    //         <div class="details">
    //             <span>Height: ${data.height}</span>
    //             <span>Weight: ${data.weight}</span>
    //         </div>
    //     `
    //     const pokemonDiv = document.querySelector('.pokemon')
    //     pokemonDiv.innerHTML = html
    // }
   }


  })();