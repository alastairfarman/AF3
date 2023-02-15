import React from "react";

export default function Skincare() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1>Skincare Product Visualisation</h1>
          </div>
          <div className="add-info">
            <div>
              <a
                href="https://alastairfarman.github.io/a-skincare/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <span className="bullet">&bull; </span>OPEN IN NEW WINDOW
              </a>
            </div>
            <h4>BLENDER, REACT</h4>
          </div>
          <p>
            An experiment using 3d animations to enhance a product journey on a
            website.
          </p>
        </div>
        <div className="single-img-txt">
          <video autoPlay muted loop>
            <source src="./media/skin.webm" type="video/mp4" />
            This browser doesn't support video tag.
          </video>
          <div className="image-desc">
            <p>
              This is still a work in progress, but the idea is to explore video
              transitions to create a more engaging experience with 3d renders.
              As an alternative to creating a 3d environment with something like
              threejs, you can trade interactivity for more sophisticated
              renders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
