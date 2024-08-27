export const handleSelectPokemon = (
  pokemon,
  setSelectedPokemon,
  pokemons,
  setOpponentPokemon,
  setBattleModalOpen
) => {
  setSelectedPokemon(pokemon);
  const availablePokemons = pokemons.filter((p) => p.id !== pokemon.id);
  const randomOpponent =
    availablePokemons[Math.floor(Math.random() * availablePokemons.length)];
  setOpponentPokemon(randomOpponent);
  setBattleModalOpen(true);
};

export const handleStartBattle = (
  selectedPokemon,
  opponentPokemon,
  pokemons,
  setBattleResult,
  setWinner,
  setBattleModalOpen,
  setResultModalOpen,
  setRefreshHistory // Actuliza el historial
) => {
  if (selectedPokemon && opponentPokemon) {
    fetch("http://localhost:3000/api/v1/battle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pokemon1Id: selectedPokemon.id,
        pokemon2Id: opponentPokemon.id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setBattleResult(`${result.winner} wins!`);
        const winnerPokemon = pokemons.find((p) => p.name === result.winner);
        setWinner(winnerPokemon);
        setBattleModalOpen(false);
        setResultModalOpen(true);
        setRefreshHistory((prev) => !prev); // Cambiar el estado para actualizar el historial
      })
      .catch((error) => console.error("Error starting battle:", error));
  }
};
