import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
import "./BattleHistory.css";

const BattleHistory = ({ pokemonDictionary, refresh }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/battle/history")
      .then((response) => response.json())
      .then((data) => setHistory(data))
      .catch((error) => console.error("Error fetching battle history:", error));
  }, [refresh]);

  return (
    <Paper className="battle-history-container">
      <Typography variant="h5" gutterBottom align="center">
        Battle History
      </Typography>
      <List>
        {history
          .slice()
          .reverse()
          .map((battle, index) => (
            <ListItem key={index} className="battle-history-item">
              <ListItemText
                primary={`${pokemonDictionary[battle.pokemon1Id]} vs ${
                  pokemonDictionary[battle.pokemon2Id]
                }`}
                secondary={`Winner: ${pokemonDictionary[battle.winnerId]}`}
              />
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default BattleHistory;
