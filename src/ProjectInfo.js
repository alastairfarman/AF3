import React, { useEffect, useRef } from "react";

export default function ProjectInfo(props) {
  const projectDiv = useRef(null);

  useEffect(() => checkHover());

  function checkHover() {
    if (props.isHover === true) {
      projectDiv.current.style.height = "2.6rem";
      projectDiv.current.style.opacity = "100%";
      projectDiv.current.style.backgroundColor = "rgba(244,244,244,1)";
      projectDiv.current.style.transition =
        "height 1s, opacity 1s ease-in-out, background-color 0.3s ease-in-out 0.6s";
    } else {
      projectDiv.current.style.height = "0rem";
      projectDiv.current.style.opacity = "0%";
      projectDiv.current.style.transition = "height 1s, opacity 1s ease-in-out";
    }
  }

  if (props.isHover === true) {
    return (
      <>
        <div
          className="project-info"
          ref={projectDiv}
          style={{
            textTransform: "uppercase",
            backgroundColor: "rgba(244,244,244,0)",
          }}
        >
          {props.project}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="project-info" ref={projectDiv}></div>
      </>
    );
  }
}
