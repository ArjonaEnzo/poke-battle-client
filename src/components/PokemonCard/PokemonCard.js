import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onSelectPokemon, showButton = true }) => {
  return (
    <Card className="pokemon-card">
      <CardContent className="pokemon-card-content">
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="pokemon-card-image"
        />
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {pokemon.name}
        </Typography>
        <Typography>HP: {pokemon.hp}</Typography>
        <Typography>Attack: {pokemon.attack}</Typography>
        <Typography>Defense: {pokemon.defense}</Typography>
        <Typography>Speed: {pokemon.speed}</Typography>
        {showButton && onSelectPokemon && (
          <Button
            variant="contained"
            color="inherit"
            onClick={() => onSelectPokemon(pokemon)}
            className="pokemon-card-button"
          >
            Select for Battle
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
