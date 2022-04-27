import {Link} from "react-router-dom";

export function Homepage(){
    return (
        <>
            <h1>Welcome home</h1>

            <Link to={"/movies"}>List Movies</Link>
        </>
    )
}