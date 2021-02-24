"use strict";

const { response } = require("express");
const express = require("express");
const routes = express.Router();

const movies = [
  {
    id: 1,
    title: "Ace Ventura: When Nature Calls",
    year: 1995,
    animated: false,
  },
  {
    id: 2,
    title: "Godzilla",
    year: 1954,
    animated: false,
  },
  {
    id: 3,
    title: "The Lion King",
    year: 1994,
    animated: true,
  },
];

let nextId = 5;

// GET /movies - respond with a JSON array of movies
routes.get("/movies", (req, res) => {
  res.json(movies);
});
// GET ONE
routes.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404);
    res.send(`No movie with id ${id} exists.`);
  }
});

//POST
routes.post("/movies", (req, res) => {
  const movie = req.body;
  movie.id = nextId++;
  movies.push(movie);

  res.status(201);
  res.json(movie);
});

//PUT

//DELETE
routes.delete("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies.splice(index, 1);
  }
  res.status(204);

  res.send();
});

//export routes for server.js
module.exports = routes;
