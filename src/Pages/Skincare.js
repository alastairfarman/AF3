import React from "react";

export default function Skincare() {
  return (
    <>
      <div className="fade-in">
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
                  OPEN IN NEW WINDOW<span className="bullet"> &bull;</span>
                </a>
              </div>
              <h4>BLENDER, REACT</h4>
            </div>
            <p>
              An experiment with using blender animations to enhance the product
              journey on a website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
