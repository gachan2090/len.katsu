import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import gradPhoto from "./assets/grad_photo.jpg";

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
  return (
    <div>
      <header id="BannerContainer" className="fadeIn">
        <h1 id="titleText">
          Garlen (嘉麟) Chan's <br></br>
          Gallery
        </h1>
      </header>

      <main>
        <section id="WholeBioWrapper" className="fadeInKindaSlow">
          <div id="ImageWrapper">
            <img src={gradPhoto} id="BioImage" alt="Graduation" />
          </div>
          <div id="BioTextWrapper">
            <p id="BioText">
              Hello! My name is Garlen and I am a Process Engineer at Intel Corporation.
              <br />
              <br />
              Utilizing Python, SQL, and Power BI, I developed a passion for data analytics
              and data science. In my free time, I utilize React to build other passion
              projects, like this project gallery. Feel free to scroll and see my works!
            </p>
          </div>
        </section>

        <section id="divWrapper">
          <div id="timelineBase" className="fadeInSlow"></div>
          <div id="timelineLayerWrapper">
            <FadeInSection>
              <div id="timelineLayer1" className="projShowcase">
                <h1>.rec Reader</h1>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div id="timelineLayer2" className="projShowcase">
                <h1>Debond Module Dashboard</h1>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div id="timelineLayer3" className="projShowcase">
                <h1>Log File Analyzer</h1>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);