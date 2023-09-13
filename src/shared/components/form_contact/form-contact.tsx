"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submitting form", name, email, message, surname);
    // Aquí podrías enviar la información del formulario al servidor utilizando fetch o axios, por ejemplo.
  };

  return (
    <Container sx={{ mt: 9, mb:10 }} maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ ninHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4" align="center">
              Contáctanos
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="name"
                fullWidth
                type="text"
                label="Nombre"
                autoComplete="off"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                name="surname"
                fullWidth
                type="text"
                label="Apellido"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={(event) => setSurname(event.target.value)}
              />
              <TextField
                name="email"
                fullWidth
                type="email"
                label="Email"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                name="phone"
                fullWidth
                type="text"
                label="Teléfono"
                autoComplete="off"
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={(event) => setPhone(event.target.value)}
              />
              
              <TextField
                name="message"
                fullWidth
                type="text"
                label="Deje su mensaje aqui"
                multiline
                autoComplete="off"
                maxRows={4}
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Enviar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;
