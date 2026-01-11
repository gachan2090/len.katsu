import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "../pages/projects.css"

function Cards(props){
    return (
        <Link to={props.link} className="link-styles-projects" id="projectsCard" target="_blank" rel="noopener noreferrer">
            <span className="header-and-image">
                <h1 className="cardHeader-projects">
                    {props.headers}
                </h1>
                <img src={props.image}></img>
            </span>
            <p className="cardDescription-projects">
                {props.text}
            </p>
        </Link>
    )
}

export default Cards;