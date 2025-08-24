import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import gradPhoto from "./assets/grad_photo.jpg";
import recFileImage from "./assets/rec file reader.png"
import scratchRNNImage from "./assets/scratch rnn showcase.png"
import githubSVG from "./assets/github-mark.svg"
import linkedInSVG from "./assets/linkedin.svg"
import emuLogoSVG from "./assets/emu-logo.svg"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

let header1 = "Projects";
let header2 = "Resume";
let header3 = "About me";

function Card(props){
  return (
  <div className="Card">
    <h1 className="cardHeader">
      {props.headers}
    </h1>
    <section className="cardDesc">
      <p1>Description</p1>
    </section>
  </div>)
}


function App(){
  useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }, []);

    return (
    <>
    <div className="cardWrap">
      <Card headers={header1}/>
      <Card headers={header2}/>
      <Card headers={header3}/>
    </div>
    </>
  );

}

export default App;