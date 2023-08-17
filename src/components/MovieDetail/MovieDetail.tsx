import {IMovie} from "../../data.ts";

import "./MovieDetail.scss";

export default function MovieDetail({movie}: {movie: IMovie}) {
    return (
        <article className="MovieDetail">
            <div className="container" style={{backgroundImage: "url(" + movie.posterPath + ")"}}>
                <div className="info-card">
                    <h1 className="title">{movie.title}</h1>
                    <p className="released">Released: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                    <h3>Cast</h3>
                    <ul className="cast">
                        {movie.cast.map(member => <li>{member}</li>)}
                    </ul>

                </div>
            </div>
        </article>
    );
}