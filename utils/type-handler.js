// export const typeHandler = (types) => {
// 	const typeArray = types.map((element) => {
// 		return element.type.name;
// 	});
// 	return typeArray;
// };

export const arrangeData = (pokemon) => {
	//console.log(pokemon);
	const typeArray = pokemon.types.map((element) => {
		return element.type.name;
	});
	return [pokemon, typeArray];
};
