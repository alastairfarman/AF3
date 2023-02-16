import React from "react";
export default function Content() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="about">
        <div>
          I have 10 years of experience in retouch, photography and ecommerce in
          the fashion industry. At the tail-end of the pandemic I started
          playing with 3D software, and in June 2022 I began self-teaching
          frontend web development focusing on JavaScript and React through The
          Odin Project, YouTube and other online educational sources. I'm
          particularly interested in user interaction and incorporating
          different media into smooth experiences and combining what I'm
          learning with my previous career experience.
        </div>
        <div className="links">
          <h3>
            <a
              href="https://uk.linkedin.com/in/alastair-farman-87174058"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LINKEDIN
            </a>
          </h3>
          <h3>
            <a
              href="./Alastair-Farman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              CV
            </a>
          </h3>
          <h3>
            <a
              href="https://github.com/alastairfarman"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GITHUB
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}
