// Import the necessary modules
const Film = require('../models/Film');

// Define the controller functions
async function getAllData() {
  try {
    // Query the collection to retrieve all films
    const films = await Film.find();
    console.dir(Film);
    return films;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return { error: 'Failed to retrieve data' };
  }
}

async function getDataById(id) {
  try {
    // Query the collection to retrieve a film by ID
    const film = await Film.findById(id);
    return film;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return { error: 'Failed to retrieve data' };
  }
}

// Export the controller functions
module.exports = {
  getAllData,
  getDataById
};
