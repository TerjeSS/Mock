import express from "express";
import * as path from "path";
import Movies from "./Movies.js";

const app = express();
const movies = Movies();

//Middleware
app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});
//Endpoints
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

const server = app.listen(process.env.port || 3000, () => {
  console.log(`Listening on${server.address().port}`);
});
