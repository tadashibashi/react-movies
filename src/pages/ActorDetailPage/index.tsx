import "./ActorListPage.css";
import {useParams} from "react-router-dom";

export default function ActorDetailPage() {
    const params = useParams();

    return (
        <div>
            <h1>Actor Detail Page</h1>
            <h3>{params["actor"]}</h3>
        </div>
    );
}