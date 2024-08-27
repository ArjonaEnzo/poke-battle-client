import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "./BattleResultModal.css";
import PokemonCard from "../PokemonCard/PokemonCard";

const BattleResultModal = ({ open, onClose, winner }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="battle-result-modal-box">
        <Typography variant="h4" align="center" gutterBottom>
          Battle Result
        </Typography>
        {winner ? (
          <PokemonCard pokemon={winner} showButton={false} />
        ) : (
          <Typography align="center" color="textSecondary">
            No winner determined yet.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          className="battle-result-modal-button"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default BattleResultModal;
