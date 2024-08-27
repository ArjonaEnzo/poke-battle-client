import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import BattleModal from "./components/BattleModal/BattleModal";
import BattleResultModal from "./components/BattleResultModal/BattleResultModal";
import BattleHistory from "./components/BattleHistory/BattleHistory";
import { Container, Grid } from "@mui/material";
import { handleSelectPokemon, handleStartBattle } from "./utils/battleLogic";
import "./App.css"; // Importa el archivo CSS

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDictionary, setPokemonDictionary] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [battleResult, setBattleResult] = useState("");
  const [winner, setWinner] = useState(null);
  const [battleModalOpen, setBattleModalOpen] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [refreshHistory, setRefreshHistory] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/pokemons")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        const dictionary = {};
        data.forEach((pokemon) => {
          dictionary[pokemon.id] = pokemon.name;
        });
        setPokemonDictionary(dictionary);
      })
      .catch((error) => console.error("Error fetching pokemons:", error));
  }, []);

  return (
    <Container maxWidth="lg" className="app-container">
      <Grid container spacing={3} className="grid-spacing">
        <Grid item xs={12} md={8}>
          <PokemonList
            pokemons={pokemons}
            onSelectPokemon={(pokemon) =>
              handleSelectPokemon(
                pokemon,
                setSelectedPokemon,
                pokemons,
                setOpponentPokemon,
                setBattleModalOpen
              )
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BattleHistory
            pokemonDictionary={pokemonDictionary}
            refresh={refreshHistory}
          />
        </Grid>
      </Grid>
      {selectedPokemon && opponentPokemon && (
        <BattleModal
          open={battleModalOpen}
          handleClose={() => setBattleModalOpen(false)}
          selectedPokemon={selectedPokemon}
          opponentPokemon={opponentPokemon}
          onStartBattle={() =>
            handleStartBattle(
              selectedPokemon,
              opponentPokemon,
              pokemons,
              setBattleResult,
              setWinner,
              setBattleModalOpen,
              setResultModalOpen,
              setRefreshHistory
            )
          }
          battleResult={battleResult}
        />
      )}
      {winner && (
        <BattleResultModal
          open={resultModalOpen}
          onClose={() => setResultModalOpen(false)}
          winner={winner}
        />
      )}
    </Container>
  );
};

export default App;
