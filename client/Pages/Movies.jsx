import useLoading from "../Components/useLoading";

export default function Movies({ listMovies }) {
  const { loading, data, error } = useLoading(listMovies);
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }
  return (
    <div>
      <h1>List of movies</h1>
      {data.map((m) => {
        return (
          <div>
            <h1>{m.name}</h1>
            <h3>Released: {m.released}</h3>
            <p>{m.plot}</p>
          </div>
        );
      })}
    </div>
  );
}
