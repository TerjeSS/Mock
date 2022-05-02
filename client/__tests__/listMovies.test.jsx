import Movies from "../Pages/Movies";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import * as React from "react";

describe("Movies component", () => {
  it("shows loading screen", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<Movies />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("should show movies", async () => {
    const movies = [{ name: "movie 1" }, { name: "movie 2" }];
    const domElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(<Movies listMovies={() => movies} />, domElement);
    });
    expect(
      Array.from(domElement.querySelectorAll("h2")).map((e) => e.innerHTML)
    ).toEqual(["movie 1", "movie 2"]);

    expect(domElement.innerHTML).toMatchSnapshot();
  });

  it("should display error", async () => {
    const domElement = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <Movies
          listMovies={() => {
            throw new Error("Something went wrong");
          }}
        />,
        domElement
      );
    });
    expect(domElement.querySelector("#error-text").innerHTML).toEqual(
      "Error: Something went wrong"
    );
  });
});
