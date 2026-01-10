import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import rnnProjectImg from "../assets/scratch rnn showcase.png"
import recReadImg from "../assets/rec file reader.png"
import debondModuleImg from "../assets/powerbi burner pic.jpg"
import palantirFoundryImg from "../assets/palantir foundry.png"
import imageBaseImg from "../assets/ImageBase.png"
import "./projects.css"
import Cards from "../components/cards.jsx"

const rnnProjectLink = "https://github.com/gachan2090/scratch-RNN"
const rnnProjHeader = "ScratchRNN"
const rnnText = "Built a generative AI model for predictive temperature modeling in Tokyo using pure NumPy, SciPy, and Pandas. Implemented forward and backward propagation from scratch, achieving >99% accuracy while gaining deep understanding of cost function optimization and RNN fundamentals."

const recReaderProjectLink = 'https://github.com/gachan2090/rec-reader-grapher'
const recReaderProjHeader = "RecRead"
const recReaderText = "Developed a Python-based application to analyze factory production .rec files using Object-Oriented-Programming (OOP), PyQTConfig, NumPy, Pandas, and Matplotlib. Streamlined statistical analysis and automated graph generation, building upon human-centered design principles and reducing engineering time by 20 hours per week and saving ~$1.1M annually."

const imageBaseLink = "https://github.com/gachan2090/ImageBase"
const imageBaseHeader = "ImageBase"
const imageBaseText = "Created a full-stack home server for photo backup to reduce reliance on cloud storage. Built with PostgreSQL (metadata), Django REST API (backend), and ReactTS (frontend). Learned database design, API development, system architecture, and intranet security."

const debondModuleLink = "https://github.com/gachan2090/scratch-RNN"
const debondModuleHeader = "Debond Dashboard"
const debondModuleText = "Designed a centralized Power BI dashboard integrating ERP, MES, SPC, and quality systems. Delivered actionable performance metrics and quarterly trends, reducing SPC flagging by 90%, boosting equipment availability by 55%, and increasing production run rates by 50%. Resulted in $3.5M+ savings annually."

const palantirFoundryLink = "https://github.com/gachan2090/scratch-RNN"
const palantirFoundryHeader = "Test Analytics"
const palantirFoundryText = "Designed and implemented views quantifying key performance indicators (KPIs) for manufacturing operations using Palantir Foundry. Automated data pipelines and created interactive dashboards, enabling insights into test data and creating actionable recommendations for process changes, such as control capability (CpK) improvement and test value distribution centralization within the 3-sigma standard."

function Projects() {
    useEffect(() => {
        setTimeout(() => {
        window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <>
        <div className="cardWrap-projects">
            <Cards link={"/"} text={"Return Home"}></Cards>
            <Cards link={debondModuleLink} headers={debondModuleHeader} text={debondModuleText} image={debondModuleImg}/>
            <Cards link={palantirFoundryLink} headers={palantirFoundryHeader} text={palantirFoundryText} image={palantirFoundryImg}/>
            <Cards link={recReaderProjectLink} headers={recReaderProjHeader} text={recReaderText} image={recReadImg}/>
            <Cards link={imageBaseLink} headers={imageBaseHeader} text={imageBaseText} image={imageBaseImg}/>
            <Cards link={rnnProjectLink} headers={rnnProjHeader} text={rnnText} image={rnnProjectImg}/>
            <Cards link={"/"} text={"Return Home"}></Cards>
        </div>
        </>
    );
};

export default Projects;
