import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";
import Flower from "./Flower";

export default function Nav() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [project, setProject] = useState();
  const [category, setCategory] = useState();

  const click_ref = useRef(null);

  useEffect(() => {
    let fontFamilyIndex = 0;

    const letters = document.getElementsByClassName("letter");

    const fontFamilies = ["GT-Flexa", "Fraunces-It"];

    for (var i = 0; i < letters.length; i++) {
      if (letters[i].id !== "dot" && letters[i].id !== "about") {
        letters[i].addEventListener("mouseenter", (e) => {
          e.target.style.opacity = "1";

          for (var i = 0; i < letters.length; i++) {
            if (
              letters[i] !== e.target &&
              letters[i].id !== "dot" &&
              letters[i].id !== "about"
            ) {
              letters[i].style.opacity = "0.00";
            }
          }

          if (
            e.target &&
            e.target.previousElementSibling &&
            e.target.parentNode &&
            e.target.previousElementSibling === e.target.parentNode.firstChild
          ) {
          } else {
            e.target.previousElementSibling.style.opacity = "0.05";
          }
          e.target.nextElementSibling.style.opacity = "0.05";
        });
        letters[i].addEventListener("mouseleave", (e) => {
          for (var i = 0; i < letters.length; i++) {
            letters[i].style.opacity = "1";
          }
          e.target.style.opacity = "1";
          e.target.previousElementSibling.style.opacity = "1";
          e.target.nextElementSibling.style.opacity = "1";
        });
      }
    }

    function selectFont(fontFamilyIndex) {
      applyFont(fontFamilyIndex);
      if (fontFamilyIndex === 0) {
        setTimeout(() => changeNameNavElementFlexa(), 2000);
      } else if (fontFamilyIndex === 1) {
        setTimeout(() => changeNameNavElementFrauncesIt(), 2000);
      }
    }

    selectFont(fontFamilyIndex);

    function applyFont(fontFamilyIndex) {
      for (let i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot") {
          letters[i].style.fontFamily = fontFamilies[fontFamilyIndex];
          if (fontFamilyIndex === 1) {
            letters[
              i
            ].style.fontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;
          } else {
            letters[
              i
            ].style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
          }
        }
      }
    }

    function changeNameNavElementFlexa() {
      document.getElementById("categories").style.fontFamily = "GT-Flexa";
      document.getElementById(
        "categories"
      ).style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
      document.getElementById(
        "categories"
      ).nextElementSibling.style.fontFamily = "GT-Flexa";
      document.getElementById(
        "categories"
      ).nextElementSibling.style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
    }
    function changeNameNavElementFrauncesIt() {
      document.getElementById("categories").style.fontFamily = "Fraunces-It";
      document.getElementById(
        "categories"
      ).style.fontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;
      document.getElementById(
        "categories"
      ).nextElementSibling.style.fontFamily = "Fraunces-It";
      document.getElementById(
        "categories"
      ).nextElementSibling.style.fontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;
    }

    function disableGrad() {
      document.getElementById("static-bar").style.backgroundColor =
        "rgba(244,244,244,1.0)";
      document.getElementById("defaultCanvas0").style.transition = "none";
    }

    function enableGrad() {
      document.getElementById("static-bar").style.backgroundColor =
        "rgba(244,244,244,0.0)";
      document.getElementById("defaultCanvas0").style.transition =
        "opacity 0.5s ease-in 2s";
    }

    click_ref.current = handleDotClick;
    function handleDotClick() {
      function fnc() {
        disableGrad();
        document.body.style.fontFamily = "GT-Flexa";
        document.body.style.fontVariationSettings = `"wght" 300, "wdth" 55, "ital" 0`;
        document.body.style.fontSize = "1rem";
        var h1 = document.getElementsByTagName("h1");
        for (i = 0; i < h1.length; i++) {
          h1[i].classList.remove("bold");
        }
        fontFamilyIndex = 0;
      }

      function fnc2() {
        enableGrad();
        document.body.style.fontFamily = "Fraunces-It";
        document.body.style.fontSize = "0.9rem";
        var h1 = document.getElementsByTagName("h1");

        for (i = 0; i < h1.length; i++) {
          h1[i].className += "bold";
        }

        document.body.style.fontVariationSettings = `"opsz" 20, "wght" 350, "SOFT" 100, "WONK" 1`;
        fontFamilyIndex++;
      }

      fontFamilyIndex === 1 ? fnc() : fnc2();

      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      const petals = document.getElementsByClassName("petal");

      async function loadflower() {
        let text = document.getElementById("CLICKME1");
        let text2 = document.getElementById("CLICKME2");

        if (petals[0].style.transform === "scale(1)") {
          text.style.display = "block";
          text.style.fontFamily = "GT-Flexa";
          text.style.fontSize = "124px";
          text.style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
          text2.style.display = "block";
          text2.style.fontFamily = "GT-Flexa";
          text2.style.fontSize = "124px";
          text2.style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;

          for (let i = 0; i < petals.length; i++) {
            petals[i].style.transform = "scale(0)";
            await timer(150);
          }
        } else {
          text.style.display = "none";

          text2.style.display = "none";

          for (let i = 0; i < petals.length; i++) {
            petals[i].style.transform = "scale(1)";
            await timer(150);
          }
        }
      }

      loadflower();

      async function load() {
        for (var i = 0; i < letters.length; i++) {
          if (letters[i].id !== "dot") {
            letters[i].style.transform = "translate(0, -500px)";
            letters[i].style.pointerEvents = "none";
            slideBackLetter(letters[i]);
          }
          await timer(50);
        }
      }

      load();

      function slideBackLetter(letter) {
        setTimeout(() => {
          selectFont(fontFamilyIndex);
          letter.style.transform = "translate(0, 0px)";

          setTimeout(() => {
            letter.style.pointerEvents = "auto";
          }, 2000);
        }, 1500);
      }
    }
  }, []);

  function categoryHoverTrue(category) {
    const categories = document.getElementById("categories");
    const frontendCat = document.getElementById("frontend");
    const threedCat = document.getElementById("threed");
    const retouchCat = document.getElementById("retouch");
    const photoCat = document.getElementById("photo");
    categories.style.height = "2rem";
    categories.style.opacity = "100%";

    switch (category) {
      case "frontend":
        // sectionOne.classList.add("nav-hover");
        frontendCat.classList.add("cat-hover");
        break;
      case "frontend 3d":
        // sectionOne.classList.add("nav-hover");
        // sectionTwo.classList.add("nav-hover");
        frontendCat.classList.add("cat-hover");
        threedCat.classList.add("cat-hover");
        break;
      case "3d":
        // sectionTwo.classList.add("nav-hover");
        threedCat.classList.add("cat-hover");
        break;
      case "retouch":
        // sectionThree.classList.add("nav-hover");
        retouchCat.classList.add("cat-hover");
        break;
      case "retouch photo":
        // sectionThree.classList.add("nav-hover");
        // sectionFour.classList.add("nav-hover");
        retouchCat.classList.add("cat-hover");
        photoCat.classList.add("cat-hover");
        break;
      case "photo":
        // sectionFour.classList.add("nav-hover");
        photoCat.classList.add("cat-hover");
        break;
      default:
    }
  }
  function categoryHoverFalse() {
    const categories = document.getElementById("categories");
    const categoriesElements = document.getElementById("categories").children;
    categories.style.height = "0rem";
    categories.style.opacity = "0%";

    for (let i = 0; i < categoriesElements.length; i++) {
      categoriesElements[i].classList.remove("cat-hover");
    }
  }

  function handleHover(e) {
    setIsHover(true);
    setProject(e.target.dataset.project);
    setCategory(e.target.dataset.category);
    categoryHoverTrue(e.target.dataset.category);
  }
  function handleStopHover() {
    setIsHover(false);
    categoryHoverFalse();
  }

  function handleClick(e) {
    const pathname = e.target.dataset.project.toLowerCase().replace(/\s/g, "-");
    navigate(pathname);
  }

  function handleDotHover() {
    document
      .getElementById("big-circle")
      .setAttribute(
        "style",
        "fill: #222222; stroke: #f4f4f4;  stroke-width: 50px; paint-order: stroke; fill-rule: nonzero;"
      );
  }
  function handleDotStopHover() {
    document
      .getElementById("big-circle")
      .setAttribute(
        "style",
        "fill: #f4f4f4; stroke: #f4f4f4; stroke-width: 50px; paint-order: stroke; fill-rule: nonzero;"
      );
  }

  function handleAboutHover(e) {
    const home = e.target;
    const container = document.createElement("div");

    const xSquares = 7;
    const ySquares = 4;
    const numSquares = xSquares * ySquares;
    const displayTime = 1000; // in milliseconds
    const intervalTime = displayTime / numSquares;

    container.classList.add("container");
    container.style.height = ySquares * 10 + "px";
    container.style.width = xSquares * 10 + "px";

    // Create an array of random indexes
    const randomIndexes = Array.from({ length: numSquares }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );

    // Display the squares in the random order
    randomIndexes.forEach((index, i) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.top = (index % ySquares) * 10 + "px";
      square.style.left = Math.floor(index / ySquares) * 10 + "px";
      container.appendChild(square);

      setTimeout(() => {
        square.style.backgroundColor = "transparent";
      }, i * intervalTime);

      setTimeout(() => {
        square.style.backgroundColor = randomColor();
      }, i * intervalTime + intervalTime / 2);
    });

    home.appendChild(container);

    function randomColor() {
      const colors = ["#FF863F", "#FFA641", "#FFB740", "#FF6E40", "#FF4940"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    home.addEventListener("mouseleave", handleAboutStopHover);

    function handleAboutStopHover(e) {
      const home = e.target;
      const container = home.lastChild;
      const squares = container.querySelectorAll(".square");
      const numSquares = squares.length;
      const displayTime = 1000; // in milliseconds
      const intervalTime = displayTime / numSquares;

      // Create an array of random indexes
      const randomIndexes = Array.from(
        { length: numSquares },
        (_, i) => i
      ).sort(() => Math.random() - 0.5);

      // Remove the squares in the random order
      randomIndexes.forEach((index, i) => {
        setTimeout(() => {
          squares[index].style.backgroundColor = "transparent";
        }, i * intervalTime);
      });

      // Remove the container element after all squares have been removed
      setTimeout(() => {
        home.removeChild(container);
      }, numSquares * intervalTime);
    }
  }

  return (
    <>
      <div id="static-bar">
        <div id="nav">
          <span
            className="letter"
            id="about"
            onMouseEnter={handleAboutHover}
            onClick={() => navigate("")}
          >
            <div>HOME</div>
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique BMI Calculator"
            data-category="frontend"
          >
            A
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Soccerball"
            data-category="frontend"
          >
            l
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Sunglasses Product Visualisation"
            data-category="frontend 3d"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Cosmetics Product Visualisation"
            data-category="frontend 3d"
          >
            s
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Play"
            data-category="frontend"
          >
            t
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Sk8"
            data-category="3d"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Rest 2066"
            data-category="3d"
          >
            i
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Drive"
            data-category="3d"
          >
            r
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
          >
            {" "}
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Retouch 1"
            data-category="retouch"
          >
            F
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Retouch 2"
            data-category="retouch"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Retouch 3"
            data-category="retouch"
          >
            r
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Photo 1"
            data-category="retouch photo"
          >
            m
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Photo 2"
            data-category="retouch photo"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Photo 3"
            data-category="retouch photo"
          >
            n
          </span>
          <span
            className="letter"
            id="dot"
            onClick={() => click_ref.current()}
            onMouseEnter={handleDotHover}
            onMouseLeave={handleDotStopHover}
          >
            <Flower />
          </span>
          <div id="categories">
            <span id="frontend">Frontend</span>
            <span id="threed">3D</span>
            <span id="retouch">Retouch</span>
            <span id="photo">Photography</span>
          </div>
          <ProjectInfo
            isHover={isHover}
            project={project}
            category={category}
          />
        </div>
      </div>
    </>
  );
}
