import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./PokemonBattle.css";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonBattle = ({
  selectedPokemon,
  opponentPokemon,
  onStartBattle,
  battleResult,
}) => {
  return (
    <div className="battle-arena-container">
      <Typography variant="h4" align="center" gutterBottom>
        Battle Arena
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <PokemonCard pokemon={selectedPokemon} showButton={false} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PokemonCard pokemon={opponentPokemon} showButton={false} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={onStartBattle}
        className="battle-button"
      >
        Start Battle
      </Button>
      {battleResult && (
        <Typography variant="h5" align="center" className="battle-result">
          {battleResult}
        </Typography>
      )}
    </div>
  );
};

export default PokemonBattle;
