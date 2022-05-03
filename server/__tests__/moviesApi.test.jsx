import request from "supertest";
import express from "express";

const app = express();

describe("movies api", () => {
  it("should list existing movies", function () {
    request(app).get("/api/movies").expect(200);
  });
});
