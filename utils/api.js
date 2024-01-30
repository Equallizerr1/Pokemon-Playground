import axios from "axios";

export const getRandomPokemon = async () => {
	const pokemon_id = Math.floor(Math.random() * 1025) + 1;
	const [first, second, third] = await Promise.all([
		axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`),
		axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_id}`),
	]);
	console.log(first, second);
	return [first, second];
	// return axios
	// 	.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
	// 	.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_id}`)
	// 	.then((responses) => {
	// 		console.log(responses);
	// 		return responses.data;
	// 	});
};
