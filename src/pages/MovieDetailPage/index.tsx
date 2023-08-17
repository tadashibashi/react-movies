import "./MovieDetailPage.scss";
import {useParams} from "react-router-dom";
import MovieDetail from "../../components/MovieDetail/MovieDetail";

import {IMovie, movies} from "../../data.ts";

export default function MovieDetailPage() {
    const params = useParams<{id: string}>();

    let movie: IMovie|null = null;
    if (params.id) {
        movie = movies[parseInt(params.id)];
    }

    return (
        <div className="MovieDetailPage">
            { movie ? <MovieDetail movie={movie} /> : <p>Sorry, that movie was not found...</p>}
        </div>
    );
}