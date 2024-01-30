import { useState } from "react";
import { getRandomPokemon } from "../utils/api";
import PokemonCard from "./PokemonCard";
import { typeHandler, arrangeData } from "../utils/type-handler";

const PokemonFetcher = () => {
	// can be condensed
	const [pokemon, setPokemon] = useState(null);
	// const [sprite, setSprite] = useState(null);
	// const [type, setType] = useState([]);

	const handleNo = () => {
		setPokemon(null);
	};

	const handleYes = () => {
		getRandomPokemon().then((res) => {
			//console.log(res);
			//setPokemon(res);
			setPokemon(arrangeData(res));
			// setSprite(res.sprites.front_default);
			// setType(typeHandler(res.types));
		});
	};

	return (
		<div>
			<h2>Would you like to see a Pokemon?</h2>
			<button onClick={handleYes}>Yes</button>
			<button onClick={handleNo}>No</button>
			{pokemon ? (
				<PokemonCard pokemon={pokemon} />
			) : (
				// sprite={sprite} type={type}
				<p>No Pokemon for you</p>
			)}
		</div>
	);
};

export default PokemonFetcher;
