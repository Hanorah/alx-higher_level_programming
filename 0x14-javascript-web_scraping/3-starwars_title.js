#!/usr/bin/node
const axios = require('axios');
const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      console.log(response.data.title);
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

