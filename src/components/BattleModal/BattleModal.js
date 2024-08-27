import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import "./BattleModal.css";

const BattleModal = ({
  open,
  handleClose,
  selectedPokemon,
  opponentPokemon,
  onStartBattle,
  battleResult,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="battle-modal-box">
        <Typography id="modal-modal-title" variant="h6" align="center">
          Pokémon Battle
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="battle-modal-grid"
        >
          {selectedPokemon && opponentPokemon ? (
            <>
              <Grid item xs={6}>
                <Card className="battle-modal-card">
                  <CardContent>
                    <img
                      src={selectedPokemon.imageUrl}
                      alt={selectedPokemon.name}
                      className="battle-modal-image"
                    />
                    <Typography variant="h6" align="center">
                      {selectedPokemon.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className="battle-modal-card">
                  <CardContent>
                    <img
                      src={opponentPokemon.imageUrl}
                      alt={opponentPokemon.name}
                      className="battle-modal-image"
                    />
                    <Typography variant="h6" align="center">
                      {opponentPokemon.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          ) : (
            <Typography variant="h6" align="center" color="textSecondary">
              Select your Pokémon to start the battle!
            </Typography>
          )}
        </Grid>
        <Button
          onClick={onStartBattle}
          variant="contained"
          color="primary"
          fullWidth
          className="battle-modal-button"
          disabled={!selectedPokemon || !opponentPokemon}
        >
          Start Battle
        </Button>
        {battleResult && (
          <Typography
            variant="h5"
            align="center"
            className="battle-modal-result"
          >
            {battleResult}
          </Typography>
        )}
        <Button
          onClick={handleClose}
          variant="contained"
          color="secondary"
          fullWidth
          className="battle-modal-button-close"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default BattleModal;
