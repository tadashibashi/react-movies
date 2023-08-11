import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../App";

export default function NavBar() {
    const userCtx = useContext(UserContext);
    const user = userCtx?.user;

    return (
        <nav>
            <Link title="Movies" to={"/"}>Movies</Link>
            <Link title="Actors" to={"/actors"}>Actors</Link>
            {user && <span>{user.username}'s List </span>}
        </nav>
    );
}
