import express from "express";
import cors from "cors";
import { paises, clubes } from "./datos.js";

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/paises", (req, res) => {
  res.status(200).send(paises);
});

app.get("/paises/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send({ error: "El id debe ser un número entero positivo." });
  }

  const pais = paises.find((elemento) => elemento.id === id);

  if (!pais) {
    return res.status(404).send({ error: "No se encontró el país." });
  }

  res.status(200).send(pais);
});

app.get("/clubes", (req, res) => {
  const nombrePais = req.query.pais;

  if (nombrePais === undefined) {
    return res.status(200).send(clubes);
  }

  if (typeof nombrePais !== "string" || nombrePais.trim() === "") {
    return res.status(400).send({ error: "Debes indicar un nombre de país válido." });
  }

  const pais = paises.find(
    (elemento) => elemento.nombre.toLowerCase() === nombrePais.trim().toLowerCase()
  );

  if (!pais) {
    return res.status(404).send({ error: "No se encontró el país." });
  }

  const clubesDelPais = clubes.filter((elemento) => elemento.paisId === pais.id);
  res.status(200).send(clubesDelPais);
});

app.get("/clubes/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send({ error: "El id debe ser un número entero positivo." });
  }

  const club = clubes.find((elemento) => elemento.id === id);

  if (!club) {
    return res.status(404).send({ error: "No se encontró el club." });
  }

  res.status(200).send(club);
});

app.get("/paises/:id/clubes", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send({ error: "El id debe ser un número entero positivo." });
  }

  const pais = paises.find((elemento) => elemento.id === id);

  if (!pais) {
    return res.status(404).send({ error: "No se encontró el país." });
  }

  const clubesDelPais = clubes.filter((elemento) => elemento.paisId === pais.id);
  res.status(200).send(clubesDelPais);
});

app.get("/titulos/:club", (req, res) => {
  const id = Number(req.params.club);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send({ error: "El id del club debe ser un número entero positivo." });
  }

  const club = clubes.find((elemento) => elemento.id === id);

  if (!club) {
    return res.status(404).send({ error: "No se encontró el club." });
  }

  res.status(200).send(club.titulos);
});

app.use((req, res) => {
  res.status(404).send({ error: "La ruta solicitada no existe." });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
