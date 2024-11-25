import React from "react";
import "./styles/Home.css";
import Card from "../components/Card";
import Button from "../components/Button";
import SpecialData from "../data/special.";
import TestimonialData from "../data/testimonial";


const Home = () => {

    return(
        <>
            <section className="hero">
                <div className="hero-item">
                    <h1>Little Lemon</h1>
                    <span>Chicago</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate modi sapiente ea quibusdam pariatur optio incidunt repellat iusto dolorum, ab expedita a amet harum ullam odit quia consequatur iste.</p>
                    <Button>Reserve A Table</Button>
                </div>
                <div className="hero-item">
                    <img src="/logo192.png" alt="hero"/>
                </div>
            </section>
            <section className="special" id="menu">
                    <div className="special-item">
                        <h2>Specials</h2>
                        <Button>Online Menu</Button>
                    </div>
                    <div className="special-item">
                        {SpecialData.map((card, index) => (
                                <Card 
                                    type="special"
                                    key={index}
                                    image={card.image}
                                    title={card.title}
                                    price={card.price}
                                    description={card.description}
                                />
                        ))}
                    </div>
            </section>
            <section className="testimonial">
                <div className="testimonial-item">
                    <h1>Testimonial</h1>
                </div>
                <div className="testimonial-item">
                    {TestimonialData.map((card, index) => (
                        <Card
                            type="testimonial"
                            key={index}
                            title="Rating"
                            image={card.image}
                            username={card.username}
                            description={card.description}
                        />
                    ))}
                </div>
            </section>
            <section className="about" id="about">
                <div className="about-item">
                    <h1>Little Lemon</h1>
                    <span>Chicago</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate modi sapiente ea quibusdam pariatur optio incidunt repellat iusto dolorum, ab expedita a amet harum ullam odit quia consequatur iste.</p>
                </div>
                <div className="about-item">
                    <img className="image-one" src="/logo192.png" alt="about"/>
                    <img className="image-two" src="/logo192.png" alt="about"/>
                </div>
            </section>
        </>
    );
}

export default Home;