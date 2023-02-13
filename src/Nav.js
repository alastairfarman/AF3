import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";
import Dot from "./Dot";
import Flower from "./Flower";
import Psych from "./Psych";

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
      const defaultFontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
      const fontVariationSettingsTwo = `"wght" 600, "wdth" 25, "ital" 0`;
      const adjacentSettings = `"wght" 450, "wdth" 25, "ital" 0`;

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

      for (var i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot" && letters[i].id !== "about") {
          letters[i].addEventListener("mouseenter", (e) => {
            e.target.style.fontVariationSettings = fontVariationSettingsTwo;

            if (
              e.target &&
              e.target.previousElementSibling &&
              e.target.parentNode &&
              e.target.previousElementSibling === e.target.parentNode.firstChild
            ) {
            } else {
              e.target.previousElementSibling.style.fontVariationSettings =
                adjacentSettings;
            }
            e.target.nextElementSibling.style.fontVariationSettings =
              adjacentSettings;
          });
          letters[i].addEventListener("mouseleave", (e) => {
            e.target.style.fontVariationSettings = defaultFontVariationSettings;
            e.target.previousElementSibling.style.fontVariationSettings =
              defaultFontVariationSettings;
            e.target.nextElementSibling.style.fontVariationSettings =
              defaultFontVariationSettings;
          });
        }
      }
    }
    function changeNameNavElementFrauncesIt() {
      const defaultFontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;
      const fontVariationSettingsTwo = `"opsz" 1, "wght" 900, "SOFT" 100, "WONK" 1`;
      const adjacentSettings = `"opsz" 144, "wght" 750, "SOFT" 100, "WONK" 1`;

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

      for (var i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot" && letters[i].id !== "about") {
          letters[i].addEventListener("mouseenter", (e) => {
            e.target.style.fontVariationSettings = fontVariationSettingsTwo;
            if (
              e.target &&
              e.target.previousElementSibling &&
              e.target.parentNode &&
              e.target.previousElementSibling === e.target.parentNode.firstChild
            ) {
            } else {
              e.target.previousElementSibling.style.fontVariationSettings =
                adjacentSettings;
            }
            e.target.nextElementSibling.style.fontVariationSettings =
              adjacentSettings;
          });
          letters[i].addEventListener("mouseleave", (e) => {
            e.target.style.fontVariationSettings = defaultFontVariationSettings;
            e.target.previousElementSibling.style.fontVariationSettings =
              defaultFontVariationSettings;
            e.target.nextElementSibling.style.fontVariationSettings =
              defaultFontVariationSettings;
          });
        }
      }
    }

    function disableGrad() {
      document.getElementById("defaultCanvas0").style.display = "none";
    }

    function enableGrad() {
      document.getElementById("defaultCanvas0").style.display = "block";
    }

    click_ref.current = handleDotClick;
    function handleDotClick() {
      fontFamilyIndex === 1 ? disableGrad() : enableGrad();

      fontFamilyIndex === 1 ? (fontFamilyIndex = 0) : fontFamilyIndex++;

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

          text.style.fontFamily = "Fraunces-IT";
          text.style.fontSize = "90px";
          text.style.fontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;
          text2.style.display = "none";
          text2.style.fontFamily = "Fraunces-IT";
          text2.style.fontSize = "90px";
          text2.style.fontVariationSettings = `"opsz" 144, "wght" 700, "SOFT" 100, "WONK" 1`;

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
    const staticBar = document.getElementById("static-bar");
    categories.style.height = "0rem";
    categories.style.opacity = "0%";
    staticBar.style.backdropFilter = null;

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

  function handleAboutHover(e) {}

  function handleAboutStopHover(e) {}

  return (
    <>
      <div id="static-bar">
        <Psych />
        <div id="nav">
          <span
            className="letter"
            id="about"
            onMouseEnter={handleAboutHover}
            onMouseLeave={handleAboutStopHover}
            onClick={() => navigate("")}
          >
            <div>ABOUT</div>
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
            data-project="Skincare Product Visualisation"
            data-category="frontend 3d"
          >
            s
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Sk8"
            data-category="3d"
          >
            t
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Rest 2066"
            data-category="3d"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Something"
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
          <span> </span>
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
            <span id="photo">Photo</span>
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
