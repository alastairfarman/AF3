import { useEffect, useRef } from "react";

export default function ProjectInfo(props) {
  const projectDiv = useRef(null);

  useEffect(() => checkHover());

  function checkHover() {
    if (props.isHover === true) {
      displayArea(props.category);
      projectDiv.current.style.height = "3rem";
      projectDiv.current.style.opacity = "100%";
    } else {
      projectDiv.current.style.height = "0rem";
      projectDiv.current.style.opacity = "0%";
    }
  }

  function displayArea(category) {
    // if (category === "frontend") {
    //   projectDiv.current.style.gridColumnStart = 1;
    //   projectDiv.current.style.gridColumnEnd = 5;
    // } else if (category === "3d") {
    //   projectDiv.current.style.gridColumnStart = 5;
    //   projectDiv.current.style.gridColumnEnd = 9;
    // } else if (category === "retouch") {
    //   projectDiv.current.style.gridColumnStart = 10;
    //   projectDiv.current.style.gridColumnEnd = 13;
    // } else if (category === "photo") {
    //   projectDiv.current.style.gridColumnStart = 13;
    //   projectDiv.current.style.gridColumnEnd = 16;
    // }
  }

  if (props.isHover === true) {
    return (
      <>
        <div className="project-info" ref={projectDiv}>
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
