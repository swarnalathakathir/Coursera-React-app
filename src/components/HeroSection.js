import React from "react";
import { Link } from "react-router-dom";
import food1 from "../assets/restauranfood.jpg";

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="container">
                <article>
                    <div className="contentSection">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                        <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                    </div>
                    <div className="imgSection">
                        <img src={food1} />
                    </div>
                </article>
            </div>            
        </section>
    )
}

export default HeroSection; 