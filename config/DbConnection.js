const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

const dbConnect = () => {
  mongoose.connect(process.env.Mongo_Url)
    .then(() => {
      console.log('DB connection successful');
    })
    .catch((err) => {
      console.error('Error in connecting DB:', err);
      process.exit(1);
    });
};

module.exports = { dbConnect };
