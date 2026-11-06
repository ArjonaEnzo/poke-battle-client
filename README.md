# Poke Battle Client

React front end for [poke-battle-api](https://github.com/ArjonaEnzo/poke-battle-api). Pick a Pokémon from the list, the app assigns a random opponent, and the battle runs on the API. You then see the winner and the battle history.

## Stack

React 18 (Create React App) · Material UI · NES.css for the retro look · Axios and fetch for the API calls.

## Structure

- `components/PokemonList` and `PokemonCard`: the selectable roster.
- `components/BattleModal`: confirms the matchup before the fight.
- `components/BattleResultModal`: shows the winner.
- `components/BattleHistory`: past battles, refreshed after each fight.
- `utils/battleLogic.js`: opponent selection and the call to `POST /battle`.

## Run it locally

Start the API first (it listens on `http://localhost:3000/api/v1`), then:

```bash
git clone https://github.com/ArjonaEnzo/poke-battle-client.git
cd poke-battle-client
pnpm install
PORT=3001 pnpm start
```

The API URL is hardcoded to `http://localhost:3000/api/v1` in `src/api.js` and `src/utils/battleLogic.js`.

Built in August 2024 together with the API.
