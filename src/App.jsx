import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const header1 = "Projects ⚒️";
const header2 = "Resume 📝";
const header3 = "About Me 😎";

const text1 = "View my portfolio of projects that I have designed and contributed to throughout my extensive engineering experience, both personal and professional."
const text2 = "Check out my resume and learn more about my versatile breadth of knowledge in Process Engineering and Data Analytics."
const text3 = "Learn more about my hobbies, interests, fun facts, and ambitions! Get to know my path and my fundamental building blocks."

function Card(props){
  return (
  <div className="Card">
    <h1 className="cardHeader">
      {props.headers}
    </h1>
    <p className="cardDescription">
      {props.text}
    </p>
    <h1 className="arrowEmote">
      ↘️
    </h1>
  </div>
  )
}

function App(){
  useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }, []);

    return (
    <>
    <div className="siteStructure">
      <div className="headerWrap">
        <h1 className="title">
          ⋆⭒˚.⋆ Garlen (嘉麟）Chan ⋆.˚⭒⋆
        </h1>
      </div>
      <div className="cardWrap">
        <Link to="/projects" className="link-styles" id="projectsCard">
          <Card headers={header1} text={text1}/>
        </Link>
        <Link to="/resume" className="link-styles" id="resumeCard">
          <Card headers={header2} text={text2}/>
        </Link>
        <Link to="/aboutme" className="link-styles" id="aboutMeCard">
          <Card headers={header3} text={text3}/>
        </Link>
      </div>
    </div>
    </>
  );

}

export default App;