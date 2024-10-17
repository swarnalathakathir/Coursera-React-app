import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import littlelemon_logo from "../assets/Logo.svg";


const Header = () => {
    return (
        <header>
            <div className="container">
                <section>
                    <Link to="/"><img src={littlelemon_logo} alt="Little Lemon Logo" ></img></Link>
                    <Nav />
                </section>
            </div>
        </header>
    )
}

export default Header;