import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import gradPhoto from './assets/grad_photo.jpg' 

function TitleBanner() {
  return <div id = "BannerContainer" class = "fadeIn">
      <h1 id = "titleText">
        Garlen (嘉麟) Chan
        </h1> 
    </div>
};

function VerticalLine(){
  return <div id = "divWrapper"><div id = 'timelineBase' class = "fadeInSlow">
  </div></div>
};

function PersonalBio(){
  return (<div id = "WholeBioWrapper" class="fadeInKindaSlow">
    <div id="ImageWrapper">
    <img src={gradPhoto} id = "BioImage"></img></div>
    <div id = "BioTextWrapper">
      <p id = "BioText">
        Hello! My name is Garlen and I am a Process Engineer at 
        Intel Corporation! <br></br><br></br>During my time as a PE, I slowly learned 
        my passion for data analytics and data engineering, having built
        data pipelines for my team to promote engineering efficiency in 
        correct decision making. Utilizing my SQL and Python skills, I was
        able to build dashboards,PyQt applets, and metrics that encouraged
        teams to be more efficient with data analysis. <br></br><br></br><br></br>
        In my freetime, I enjoy creating new things, and this portfolio built
        on React is one of these hobbyist creations. Please scroll down and 
        learn more of the work that I have completed so far!  
      </p>

    </div>
  </div>)

};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<div>
  <TitleBanner />
  <PersonalBio />
  <VerticalLine />
  </div>
);