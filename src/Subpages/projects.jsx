import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import rnnProjectImg from "../assets/scratch rnn showcase.png"
import recReadImg from "../assets/rec file reader.png"
import "./projects.css"

const rnnProjectLink = "https://github.com/gachan2090/scratch-RNN"
const rnnProjHeader = "ScratchRNN"
const rnnText = "This is the description for my Recurrent Neural Network (RNN) project using pure NumPy, Pandas, and SciPy."

const recReaderProjectLink = 'https://github.com/gachan2090/rec-reader-grapher'
const recReaderProjHeader = "RecRead"
const recReaderText = "This is the description for my Recurrent Neural Network (RNN) project using pure NumPy, Pandas, and SciPy."

const imageBaseLink = "https://github.com/gachan2090/ImageBase"
const imageBaseHeader = "ImageBase"
const imageBaseText = "This is the description for my Recurrent Neural Network (RNN) project using pure NumPy, Pandas, and SciPy."

const debondModuleLink = "https://github.com/gachan2090/scratch-RNN"
const debondModuleHeader = "Debond Dashboard"
const debondModuleText = "This is the description for my Recurrent Neural Network (RNN) project using pure NumPy, Pandas, and SciPy."

const palantirFoundryLink = "https://github.com/gachan2090/scratch-RNN"
const palantirFoundryHeader = "Palantir Foundry"
const palantirFoundryText = "This is the description for my Recurrent Neural Network (RNN) project using pure NumPy, Pandas, and SciPy."

function Something(props){
    return (
        <Link to={props.link} className="link-styles-projects" id="projectsCard">
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

function Projects() {
    useEffect(() => {
        setTimeout(() => {
        window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <>
        <div className="cardWrap-projects">
            <Something link={rnnProjectLink} headers={rnnProjHeader} text={rnnText} image={rnnProjectImg}/>
            <Something link={recReaderProjectLink} headers={recReaderProjHeader} text={recReaderText} image={recReadImg}/>
            <Something link={imageBaseLink} headers={imageBaseHeader} text={imageBaseText} image={rnnProjectImg}/>
            <Something link={debondModuleLink} headers={debondModuleHeader} text={debondModuleText} image={rnnProjectImg}/>
            <Something link={palantirFoundryLink} headers={palantirFoundryHeader} text={palantirFoundryText} image={rnnProjectImg}/>
        </div>
        </>
    );
};

export default Projects;