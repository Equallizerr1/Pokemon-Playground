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
	console.log(props.pokemon[0]);
	const pokemonData = props.pokemon[0];
	const pokemonTypes = props.pokemon[1];
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardMedia
				sx={{ height: 350 }}
				image={pokemonData.sprites.front_default}
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{pokemonData.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Type: {pokemonTypes}
				</Typography>
				<Typography variant="body2">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
