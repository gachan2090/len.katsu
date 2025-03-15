import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import gradPhoto from "./assets/grad_photo.jpg";
import recFileImage from "./assets/rec file reader.png"
import scratchRNNImage from "./assets/scratch rnn showcase.png"
import githubSVG from "./assets/github-mark.svg"

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
}


function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div>
      <header id="BannerContainer" className="fadeIn">
        <h1 id="titleText">
        ⊹₊⟡⋆
        </h1>
        <h1 id="titleText">
          Garlen (嘉麟) Chan's <br></br>
          Gallery
        </h1>
        <h1 id="titleText">
        ⊹₊⟡⋆
        </h1>
      </header>

      <main>
        <section id="WholeBioWrapper" className="fadeInKindaSlow">
          <div id="ImageWrapper">
            <img src={gradPhoto} id="BioImage" alt="Graduation" />
            </div>
          <div id="BioTextWrapper">
            <p id="BioTitle">
              About me:
              <p id="BioText">
              </p>
            </p>
            <p id="BioText">
              My name is Garlen, and I am a Process Engineer at Intel Corporation. <br></br><br></br>
              Utilizing Python, SQL, and Power BI, I developed a passion for data analytics
              and data science. In my free time, I like working on other passion projects, 
              such as this project gallery built with React. Feel free to scroll and see my works!
            </p>
            <p id="BioText">
            </p>
          </div>
        </section>

        <section id="divWrapper">
          <div id="timelineBase" className="fadeInSlow"></div>
          <div id="timelineLayerWrapper">
            <FadeInSection>
              <div id="timelineLayer1" className="projShowcase">
                <h1>Rec Reader</h1>
                <p>
                  An intuitive GUI app built on Python's Tkinter framework
                  that strips, parses, and analyzes files with the .rec 
                  extension. The app allows for process data visualization for deeper level
                  data analysis.
                </p>
                <img src={recFileImage} className="timelineImageProperties"></img>
                <a href="https://github.com/gachan2090/rec-reader-grapher" target="_blank">
                  <span><img src={githubSVG} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: "5px"}} width="20" height="20"></img>Github</span>
                </a>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div id="timelineLayer2" className="projShowcase">
                <h1>Debond Module Dashboard</h1>
                <p>
                  A PowerBI dashboard built on uniting large-scale manufacturing datasets
                  from numerous databases. This dashboard became a pivotal 
                  part of our team's daily operations, enabled better real-time insights and
                  promoted velocity in our decision making.
                </p>
                <img src="https://www.clearpeaks.com/wp-content/uploads/2024/02/Integrating-Python-and-Power-BI-for-Advanced-Data-Analysis-ClearPeaks-Blog.png" className="timelineImageProperties" style={{marginBottom: "40px"}}></img>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div id="timelineLayer3" className="projShowcase">
                <h1>Scratch-RNN</h1>
                <p>
                  A passion project built to challenge myself in creating my own recurrent
                  neural network (RNN) from scratch, utilizing NumPy libraries for matrix
                  transformations and matplotlib to visualize the fitted and predicted data.
                </p>
                <img src={scratchRNNImage} className="timelineImageProperties"></img>
                <a href="https://github.com/gachan2090/scratch-RNN" target="_blank">
                  <span><img src={githubSVG} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: "5px"}} width="20" height="20"></img>Github</span>
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  );
}

const container = document.getElementById("root");
container.scrollTo({
  top: 0,
  behavior: "instant",
});
const root = ReactDOM.createRoot(container);
root.render(<App/>);
