import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

function TitleBanner() {
  return <div id = "BannerContainer" class = "fadeIn">
      <h1 id = "titleText">
        Welcome to Garlen's Portfolio!
        </h1> 
    </div>
};

function VerticalLine(){
  return <div id = "divWrapper"><div id = 'timelineBase' class = "fadeInSlow">
  </div></div>
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<div>
  <TitleBanner />
  <VerticalLine />
  </div>
);