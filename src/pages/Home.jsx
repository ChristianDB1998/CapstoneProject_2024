import React from "react";
import "./styles/Home.css";
import Card from "../components/Card";
import Button from "../components/Button";
import SpecialData from "../data/special";
import TestimonialData from "../data/testimonial";


const Home = () => {

    return(
        <>
            <section className="hero">
                <div className="hero-item">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned restaurant, located on Maldove Street in Chicago, Illionos. We focus on traditional recipes served with a modern twist.</p>
                    <Button>Reserve A Table</Button>
                </div>
                <div className="hero-item">
                    <picture>
                        <img src="/hero-image.jpg" alt="restaurant food"/>
                    </picture>
                    
                </div>
            </section>
            <section className="special" id="menu">
                    <div className="special-item">
                        <h1>Weekly Specials</h1>
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
                    <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                </div>
                <div className="about-item">
                    <img className="image-one" src="/about-image-1.jpg" alt="about"/>
                    <img className="image-two" src="/about-image-2.jpg" alt="about"/>
                </div>
            </section>
        </>
    );
}

export default Home;