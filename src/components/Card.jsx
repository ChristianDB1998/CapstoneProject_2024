import React from "react";
import "./styles/Card.css";
import Button from "./Button";

const Card = ({type, ...props}) => {

    const cardStyle = type === "special";

    return(
        <div className={`card ${cardStyle ? "special-card" : "testimonial-card"}`}>
            {
                cardStyle ? (
                    <div className="special-content">
                        <img src={props.image} alt="food"/>
                        <div className="special-text-container">
                            <h2>{props.title}</h2>
                            <h3>${props.price}.00</h3>
                            <p>{props.description}</p>
                            <Button>Order Online</Button>
                        </div>
                    </div>
                ) : (
                    <div className="testimonial-content">
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