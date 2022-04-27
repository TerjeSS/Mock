import useLoading from "../Components/useLoading";
import fetchJSON from "../Components/fetchJSON";

export default function Movies() {
  const { loading, data, error } = useLoading(async () =>
    fetchJSON("/api/movies")
  );
  if (loading) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error}</div>;
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
