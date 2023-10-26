#!/usr/bin/node
const axios = require('axios');

const apiUrl = process.argv[2]; // Get the API URL from the command-line arguments

axios.get(apiUrl)
  .then(response => {
    if (response.status === 200) {
      const tasks = response.data;

      // Create an object to store the count of completed tasks for each user
      const completedTasksByUser = {};

      // Iterate through the tasks and count completed tasks by user
      for (const task of tasks) {
        if (task.completed) {
          if (completedTasksByUser[task.userId]) {
            completedTasksByUser[task.userId]++;
          } else {
            completedTasksByUser[task.userId] = 1;
          }
        }
      }

      console.log(completedTasksByUser);
    } else {
      console.error('Error:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
