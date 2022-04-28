import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./homepage";
import Movies from "./Movies";
import fetchJSON from "../Components/fetchJSON";

export function Application() {
  const listMovies = async () => {
    return await fetchJSON("/api/movies");
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route
            path={"/movies"}
            element={<Movies listMovies={listMovies} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
