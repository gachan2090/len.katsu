import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import "./projects.css"

const rnnProjectLink = "https://github.com/gachan2090/scratch-RNN"
const rnnProjHeader = "ScratchRNN"
const rnnText = "testtesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttest"

const recReaderProjectLink = 'https://github.com/gachan2090/rec-reader-grapher'
const recReaderProjHeader = "RecRead"
const recReaderText = "testtesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttest"

const imageBaseLink = "https://github.com/gachan2090/ImageBase"
const imageBaseHeader = "ImageBase"
const imageBaseText = "testtesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttest"

const debondModuleLink = "https://github.com/gachan2090/scratch-RNN"
const debondModuleHeader = "Debond Dashboard"
const debondModuleText = "testtesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttest"

const palantirFoundryLink = "https://github.com/gachan2090/scratch-RNN"
const palantirFoundryHeader = "Palantir Foundry"
const palantirFoundryText = "testtesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest\ntesttesttesttesttesttesttesttesttesttest"

function Something(props){
    return (
        <Link to={props.link} className="link-styles" id="projectsCard">
            <h1 className="cardHeader">
                {props.headers}
            </h1>
            <p className="cardDescription">
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
        <div className="cardWrap">
            <Something link={rnnProjectLink} headers={rnnProjHeader} text={rnnText} />
            <Something link={recReaderProjectLink} headers={recReaderProjHeader} text={recReaderText} />
            <Something link={imageBaseLink} headers={imageBaseHeader} text={imageBaseText} />
            <Something link={debondModuleLink} headers={debondModuleHeader} text={debondModuleText} />
            <Something link={palantirFoundryLink} headers={palantirFoundryHeader} text={palantirFoundryText} />
        </div>
        </>
    );
};

export default Projects;