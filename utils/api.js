import axios from "axios";

export const getRandomPokemon = () => {
	const pokemon_id = Math.floor(Math.random() * 1025) + 1;
	return axios
		.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
		.then((response) => {
			return response.data;
		});
};
