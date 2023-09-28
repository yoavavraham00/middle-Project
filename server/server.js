const chalk = require("chalk");
const express = require("express");
const { handleError } = require("./utils/handleErrors");
const app = express();
const router = require("./router/router");
const cors = require("cors"); // Import the cors package
const logger = require("./logger/loggerService");
const connectToDb = require("./DB/dbService");
const config = require("config");
const { generateInitialCards, generateInitialUsers } = require("./initialData/initialDataService");
const User = require("./users/models/mongodb/User");
const Token = require("./users/models/Token");

const dotenv = require("dotenv");
dotenv.config();

const { MongoClient } = require("mongodb");
let db;

const connect = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  const connection = await client.connect();
  db = connection.db();
};

connect();


 // Use the specified PUBLIC_URL or default to "http://localhost:3000"
const PORT = process.env.PORT || 8080; // Use the specified PORT or default to 8080
// const CARD_SAVE_ENDPOINT = process.env.CARD_SAVE_ENDPOINT; // Use the specified CARD_SAVE_ENDPOINT or default to "/api/save-card"

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000", // Use the specified client origin or default to "http://localhost:3000"
  credentials: true, // Enable credentials (cookies, authorization headers)
};

app.use(cors(corsOptions)); // Apply CORS middleware with the updated options
app.use(logger);
app.use(express.json());
app.use(express.static("./public/CardImages"));
app.use(router);
app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

// app.post("/api/register", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Registration failed" });
//   }
// });

// app.post("/api/save-token", async (req, res) => {
//   try {
//     const { token } = req.body;
//     await Token.create({ value: token });
//     res.status(201).json({ message: "Token saved successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Token saving failed" });
//   }
// });

// app.post('/api/saved-card', async (req, res) => {
//   try {
//     const { cardId } = req.body;
//     await db.collection("saved-card").insertOne({ cardId });
//     res.status(201).json({ message: "Card saved successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Card saving failed" });
//   }
// });


app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  connectToDb();
  generateInitialCards();
  generateInitialUsers();
});



//////////////////////////////////////////////////////////////////////////////////////

// const chalk = require("chalk");
// const express = require("express");
// const { handleError } = require("./utils/handleErrors");
// const app = express();
// const router = require("./router/router");
// const cors = require('cors');
// const logger = require("./logger/loggerService");
// const connectToDb = require("./DB/dbService");
// const config = require("config");
// const {
//   generateInitialCards,
//   generateInitialUsers,
// } = require("./initialData/initialDataService");
// const User = require("./users/models/mongodb/User"); // Import your User model
// const Token = require("./users/models/Token"); // Import your Token model

// const dotenv = require("dotenv"); // Import dotenv
// dotenv.config(); // Configure dotenv

// const {MongoClient} = require('mongodb'); // Import the MongoClient class
// let db; // Create a global variable to store the connection

// const connect = async()=>{ 
//   const client = new MongoClient(process.env.MONGO_URL);
//   const connection = await client.connect();
//   db = connection.db();
//   }

//   connect();

// const PORT = process.env.PORT; // Use the PORT environment variable

// const corsOptions = {
//   origin: `http://localhost:${PORT}`, // Allow the frontend app to send requests to this server
//   credentials: true, // Enable credentials (cookies, authorization headers)
// };

// app.use(cors(corsOptions));
// app.use(logger);
// app.use(express.json());
// app.use(express.static("./public/CardImages"));
// app.use(router);
// app.use((err, req, res, next) => {
//   handleError(res, 500, err.message);
// });

// app.post('/api/register', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;  
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password, // Hash the password before saving
//     });
//     await newUser.save(); 
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Registration failed' });
//   }
// });

// app.post('/api/save-token', async (req, res) => {
//   try {
//     const { token } = req.body; 
//     await Token.create({ value: token });  
//     res.status(201).json({ message: 'Token saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Token saving failed' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
//   connectToDb();
//   generateInitialCards();
//   generateInitialUsers();
// });
