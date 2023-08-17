import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../App";

import "./NavBar.scss"

export default function NavBar() {
    const userCtx = useContext(UserContext);
    const user = userCtx?.user;

    return (
        <nav className="NavBar">
            <Link title="Movies" to={"/"}>Movies</Link>
            <Link title="Actors" to={"/actors"}>Actors</Link>
            {user && <span className="user-greeting">Welcome, {user.username}!</span>}
        </nav>
    );
}
