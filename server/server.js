import express from "express";
import * as path from "path";
import Movies from "./Movies.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { MoviesAPI } from "./moviesAPI.js";

const app = express();
const movies = Movies();

dotenv.config();

//MongoDB
const mongoClient = new MongoClient(process.env.MONGO_URL);

mongoClient.connect().then(async () => {
  console.log("Connected to database");
});

//Middleware

app.use(express.static(path.resolve("../client/dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

//Endpointsd
app.use("/api/movies", MoviesAPI(mongoClient.db("sample_mflix")));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on${server.address().port}`);
});
