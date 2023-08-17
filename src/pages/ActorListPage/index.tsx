import "./ActorListPage.scss";

import {movies} from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";
import {useState} from "react";

export default function ActorListPage() {
    const [actors, setActors] = useState(getDefaultActors());
    return (
        <div className="ActorListPage">
            <h1>Actors</h1>
            <div className="list-container">
                {actors.map(actor => <ActorCard name={actor} />)}
            </div>

        </div>
    );
}


function getDefaultActors() {
    return movies.reduce((acc: string[], cur) =>
        acc.concat(cur.cast.filter(member => !acc.includes(member))), []);
}