#!/usr/bin/node
const axios = require('axios');
const fs = require('fs');

const url = process.argv[2]; // Get the URL from the command-line arguments
const filePath = process.argv[3]; // Get the file path to store the response

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      fs.writeFile(filePath, response.data, 'utf-8', (writeError) => {
        if (!writeError) {
          console.log(`Data from ${url} has been saved to ${filePath}`);
        } else {
          console.error('Error writing to the file:', writeError);
        }
      });
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
