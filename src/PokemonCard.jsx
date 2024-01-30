import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
		•
	</Box>
);

export default function PokemonCard(props) {
	console.log(props.pokemon[0][1].data.flavor_text_entries);
	const pokemonName = props.pokemon[0][0].data.name;
	const pokemonSprite = props.pokemon[0][0].data.sprites.front_default;
	const pokemonTypes = props.pokemon[1];
	const pokemonFlavorText =
		props.pokemon[0][1].data.flavor_text_entries[0].flavor_text;
	return (
		<Card sx={{ minWidth: 500, maxWidth: 500 }}>
			<CardContent>
				<CardMedia sx={{ height: 500 }} image={pokemonSprite} />
				<Typography variant="h3" component="div">
					{pokemonName}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Type: {pokemonTypes}
				</Typography>
				<Typography variant="body1">{pokemonFlavorText}</Typography>
			</CardContent>
			<CardActions>
				<Button size="medium">Learn More</Button>
			</CardActions>
		</Card>
	);
}
