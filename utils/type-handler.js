// export const typeHandler = (types) => {
// 	const typeArray = types.map((element) => {
// 		return element.type.name;
// 	});
// 	return typeArray;
// };

export const arrangeData = (pokemon) => {
	const typesArray = pokemon[0].data.types;
	const pokemonTypesMap = typesArray.map((element) => {
		return element.type.name + " ";
	});
	return [pokemon, pokemonTypesMap];
};
