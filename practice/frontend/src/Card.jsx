function Card(props) {
    return <div className="card">
        <img className="card-img" src={props.img}></img>
        <h1 className="card-heading">{props.heading}</h1>
        <p className="card-content">{props.content}</p>
    </div>
}

export default Card;