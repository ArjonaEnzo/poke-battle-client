import React from "react";
import { Grid, Typography } from "@mui/material";
import "./PokemonList.css";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = ({ pokemons, onSelectPokemon }) => {
  return (
    <div className="pokemon-list-container">
      <Typography variant="h4" align="center" gutterBottom>
        Select your Pokemon
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="pokemon-list-grid"
      >
        {pokemons && pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
              <PokemonCard
                pokemon={pokemon}
                onSelectPokemon={onSelectPokemon}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" align="center" color="textSecondary">
            No Pokémon available.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default PokemonList;
