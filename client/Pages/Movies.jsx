import useLoading from "../Components/useLoading";
import React from "react";

export default function Movies({ listMovies }) {
  const { loading, data, error } = useLoading(listMovies);
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div id={"error-text"}>{error.toString()}</div>;
  }
  return (
    <div>
      <h1>List of movies</h1>
      {data.map((m) => {
        return (
          <div key={m.name}>
            <h2>{m.name}</h2>
            <h3>Released: {m.released}</h3>
            <p>{m.plot}</p>
          </div>
        );
      })}
    </div>
  );
}
