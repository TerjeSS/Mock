import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {Homepage} from "./homepage";
import Movies from "./Movies";

export function Application() {
    return (
        <>
          <BrowserRouter>
                <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/movies"} element={<Movies/>} />
                </Routes>
          </BrowserRouter>
        </>
    );
}