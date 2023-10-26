#!/usr/bin/node
const axios = require('axios');
const movieId = process.argv[2];

// Define the Star Wars API endpoint for movies
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

// Send a GET request to the movie endpoint
axios.get(apiUrl + movieId)
  .then(response => {
    if (response.status === 200) {
      const movieData = response.data;
      console.log("Characters in " + movieData.title + ":");

      // Iterate through the characters in the same order as they appear in the 'characters' array
      const characterPromises = movieData.characters.map(characterUrl => {
        return axios.get(characterUrl)
          .then(charResponse => {
            const characterData = charResponse.data;
            console.log(characterData.name);
          })
          .catch(charError => {
            console.error('Error:', charError.message);
          });
      });

      // Wait for all character requests to complete
      return Promise.all(characterPromises);
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

