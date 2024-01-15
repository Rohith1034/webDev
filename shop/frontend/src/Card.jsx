function Card(props) {
    return <div className="card">
    <div className="card-carousel">
        <img className="card-img" src={props.img1}></img>
        <img className="card-img" src={props.img2}></img>
        <img className="card-img" src={props.img3}></img>
    </div>
    <h3 className="card-heading">{props.heading}</h3>
    <p className="card-content">{props.content}</p>
    <button className="prev-button">Previous</button>
    <button className="next-button">Next</button>
</div>;
}
export default Card;