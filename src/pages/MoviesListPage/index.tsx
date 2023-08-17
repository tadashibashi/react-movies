import "./MoviesListPage.scss";
import {movies} from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Link} from "react-router-dom";

function Movie() {
    return null;
}

export default function MoviesListPage() {

    return (
        <div className="MoviesListPage">
            <h1>Movies</h1>
            <div className="list-container">
                {
                    movies.map((movie, i) =>
                        <Link to={"/movies/" + i}>
                            <MovieCard key={"movie-" + i} movie={movie}/>
                        </Link>)
                }
            </div>

        </div>
    );
}