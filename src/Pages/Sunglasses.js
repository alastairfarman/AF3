import React, { useRef, useEffect } from "react";

export default function Sunglasses() {
  const buttonRef = useRef();
  const sunElement = useRef();

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#f4f4f4";
  }, []);

  function handleClick() {
    if (sunElement.current.classList.contains("to-front")) {
      sunElement.current.classList.remove("to-front");
      buttonRef.current.innerText = "SHOW";
    } else {
      sunElement.current.classList.add("to-front");
      buttonRef.current.innerText = "HIDE";
    }
  }

  const timeoutId = setTimeout(() => {
    if (sunElement.current) {
      handleClick();
    }
  }, 15000);

  window.addEventListener("beforeunload", function () {
    clearTimeout(timeoutId);
  });

  return (
    <>
      <iframe
        id="sunglasses-iframe"
        ref={sunElement}
        src="https://stormy-uttermost-cheetah.glitch.me/"
        title="Sunglasses"
        allowtransparency="true"
        style={{
          width: "100vw",
          height: "100vh",
          border: "unset",
          position: "fixed",
        }}
      ></iframe>
      <button
        ref={buttonRef}
        style={{
          background: "#222222",
          color: "#f4f4f4",
          width: "150px",
          height: "auto",
          border: "unset",
          position: "fixed",
          fontFamily: "GT-Flexa",
          fontSize: "2rem",
          bottom: "0",
          left: "0",
          zIndex: "3",
          padding: "0.5rem",
          margin: "1rem",
          borderRadius: "50px",
        }}
        onClick={handleClick}
      >
        LOADING
      </button>
      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1>Sunglasses Product Visualisation</h1>
          </div>
          <div className="add-info">
            <div>
              <a
                href="https://stormy-uttermost-cheetah.glitch.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                OPEN IN NEW WINDOW<span className="bullet"> &bull;</span>
              </a>
            </div>
            <h4>BLENDER, UNITY + NEEDLE ENGINE, THREE.JS</h4>
          </div>
          <p>
            A project exploring product visualisation and web implementation.
            Originally modelled and rendered in Blender to create stop-motion
            interactivity, this was brought into a THREE.js environment using
            NeedleTools and Unity to export hi-poly models URP Shaders with
            alpha channel and HDRI lighting with comparitively small file size.
          </p>
        </div>
      </div>
      <div className="small-img">
        <img className="" src="./media/sun/sunmodel.png" alt="" />
      </div>
      <div className="single-img">
        <img className="" src="./media/sun/sunnoies.png" alt="" />
      </div>
      <div className="triple-img">
        <img className="" src="./media/sun/black-31.png" alt="" />
        <img className="" src="./media/sun/tort-31.png" alt="" />
        <img className="" src="./media/sun/rose-31.png" alt="" />
      </div>
      <div className="single-img-txt">
        <video autoPlay muted loop>
          <source src="./media/sun/sun.webm" type="video/mp4" />
          This browser doesn't support video tag.
        </video>
        <div className="image-desc">
          <p>
            A 360 view was created by rendering individual frames from a
            rotation animation then controlled by user slider input. This was
            built alongside a functional shopping cart. The next step here would
            be to optimise the 3d model geometry to reduce file size and improve
            performance, then integrate that into a product page.
          </p>
        </div>
      </div>
    </>
  );
}
