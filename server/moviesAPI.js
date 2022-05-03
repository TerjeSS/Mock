import { Router } from "express";

export function MoviesAPI(db) {
  const router = new Router();
  router.get("/", async (req, res) => {
    const movies = await db
      .collection("movies")
      .find()
      .map(({ title, year, plot, genre }) => ({ title, year, plot, genre }))
      .limit(50)
      .toArray();
    res.json(movies);
  });

  router.post("/new", (req, res) => {
    res.send("Not ready yet");
  });
  return router;
}
