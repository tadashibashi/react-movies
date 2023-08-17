import {IMovie} from "../../data.ts";

import "./MovieCard.scss";

export default function MovieCard({movie}: {movie: IMovie}) {
    return (
        <article className="MovieCard">
            <div className="container" style={{backgroundImage: "url(" + movie.posterPath + ")"}}>
                <div className="info-card">
                    <h2 className="title">{movie.title}</h2>
                    <p className="released">Released: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                </div>
            </div>
        </article>
    );
}