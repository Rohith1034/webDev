import React from "react";

function Card(props) {
    return <div className="card">
        <img className="card-img" src={props.img} alt="card-img"></img>
        <h2 className="card-heading">{props.heading}</h2>
        <p className="card-content">{props.content}</p>
    </div>;
}

export default Card;