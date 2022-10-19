const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }
    console.log("DB Online");
  } catch (error) {
    console.error(error);
    throw new Error('Error al inicializar la base de datos.');
  }
};

module.exports = { dbConnection };