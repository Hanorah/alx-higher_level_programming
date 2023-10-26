#!/usr/bin/node
const axios = require('axios');
const apiUrl = process.argv[2]; // Get the API URL from the command-line arguments
const characterId = 18; // ID of the character "Wedge Antilles"

axios.get(apiUrl)
  .then(response => {
    if (response.status === 200) {
      const filmsData = response.data.results;
      const filmsWithWedgeAntilles = filmsData.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`));
      console.log(filmsWithWedgeAntilles.length);
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
