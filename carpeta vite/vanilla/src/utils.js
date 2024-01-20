export const apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
export const getImage = (number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
};