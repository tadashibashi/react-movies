import "./ActorCard.scss";

export default function ActorCard({name}: {name: string}) {
    return (
        <article className="ActorCard">
            <div className="container" style={{backgroundImage: `url(https://picsum.photos/${Math.floor(Math.random() * 1000)})`}}>
                <div className="info-card">
                    <h2 className="title">{name}</h2>
                </div>
            </div>
        </article>
    );
}