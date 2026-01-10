import {Link} from "react-router-dom";
import React from "react";
import Cards from "../components/cards.jsx";
import emuImage from "../assets/emu-logo.svg";
import "./aboutme.css";

const introText = "This site is under construction. Come back soon! Learn more about my hobbies, interests, fun facts, and ambitions! Get to know my path and my fundamental building blocks."

const About = () => {
    return (
        <div className="about-page-standin">
            <Cards link="/" headers="About Me" text={introText} image={emuImage}/>
        </div>
    );
};

export default About;