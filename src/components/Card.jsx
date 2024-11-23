import React from "react";
import "./Card.css";

const Card = ({type, ...props}) => {

    const cardStyle = type === "special";

    return(
        <div className={`card ${cardStyle ? "special-card" : "testimonial-card"}`}>
            {
                cardStyle ? (
                    <div className="special-content">
                        <img src={props.image} alt="food"/>
                        <h1>{props.title}</h1>
                        <p>{props.price}</p>
                        <p>{props.description}</p>
                        <button>{props.action}</button>
                    </div>
                ) : (
                    <div className="testimonial-content">
                        <h2>{props.title}</h2>
                        <img src={props.image} alt="profile"/>
                        <h2>{props.username}</h2>
                        <p>{props.description}</p>
                    </div>
                )
            }
        </div>
    )
} 

export default Card;