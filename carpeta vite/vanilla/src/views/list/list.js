import axios from 'axios';
import { apiURL, getImage } from '../../utils';

let pokemon;

axios.get(apiURL).then((body) => {
  const pokemon = body.data.results;

  let html = '';
  pokemon.forEach((pokemon, index) => {
    html = html + `<div class="pokemon"><p>${pokemon.name}</p><img src="${getImage(index + 1)}"></div>`;
  });

  document.querySelector('.pokemons').innerHTML = html;
});

document.querySelector('.search').addEventListener('input', (event) => {
  console.log(event.target.value)

  filteredPokemon = pokemon.filter(pokemonItem => {
    return pokemonItem.name.includes(event.target.value)
  })

  let html = '';
  filteredPokemon.forEach((pokemon, index) => {
    html = html + `<div class="pokemon"><p>${pokemon.name}</p><img src="${getImage(index + 1)}"></div>`;
  });

  document.querySelector('.pokemons').innerHTML = html;
})


/*
*Input de texto
*un event listener para saber qué está escribiendo el usuario
*guardar el valor que escribe el usuario 
*recorrer el array que 
*/