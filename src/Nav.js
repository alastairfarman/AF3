import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProjectInfo from "./ProjectInfo";
import Dot from "./Dot";

export default function Nav() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [project, setProject] = useState();
  const [category, setCategory] = useState();

  const click_ref = useRef(null);

  let fontFamilyIndex = 0;

  useEffect(() => {
    const letters = document.getElementsByClassName("letter");

    const fontFamilies = ["GT-Flexa", "Fraunces-It"];

    function selectFont(fontFamilyIndex) {
      if (fontFamilyIndex === 0) {
        applyFont(fontFamilyIndex);
        setTimeout(() => changeNameNavElementFlexa(), 2000);
      } else if (fontFamilyIndex === 1) {
        applyFont(fontFamilyIndex);
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
            ].style.fontVariationSettings = `"opsz" 144, "wght" 900, "SOFT" 100, "WONK" 1`;
          } else {
            letters[
              i
            ].style.fontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
          }
        }
      }
    }

    function changeNameNavElementFlexa() {
      document.getElementById("nav").style.textTransform = "capitalize";
      const defaultFontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
      const fontVariationSettingsTwo = `"wght" 800, "wdth" 50, "ital" 0`;
      const adjacentSettings = `"wght" 600, "wdth" 30, "ital" 0`;

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
      document.getElementById("nav").style.textTransform = "capitalize";

      const defaultFontVariationSettings = `"opsz" 144, "wght" 900, "SOFT" 100, "WONK" 1`;
      const fontVariationSettingsTwo = `"opsz" 9, "wght" 900, "SOFT" 100, "WONK" 1`;
      const adjacentSettings = `"opsz" 50, "wght" 900, "SOFT" 100, "WONK" 1`;

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

    click_ref.current = handleDotClick;
    function handleDotClick() {
      fontFamilyIndex === 1 ? (fontFamilyIndex = 0) : fontFamilyIndex++;

      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      async function load() {
        for (var i = 0; i < letters.length; i++) {
          if (letters[i].id !== "dot") {
            letters[i].style.transform = "translate(0, -500px)";
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
    const staticBar = document.getElementById("static-bar");
    categories.style.height = "2rem";
    categories.style.opacity = "100%";
    staticBar.style.backgroundColor = "rgba(244,244,244,1)";

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
    staticBar.style.backgroundColor = null;
    staticBar.style.backdropFilter = null;

    for (let i = 0; i < categoriesElements.length; i++) {
      // navSections[i].classList.remove("nav-hover");
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
    document.getElementById("nav").style.filter = "hue-rotate(180deg)";
  }
  function handleDotStopHover() {
    document.getElementById("nav").style.filter = "hue-rotate(0deg)";
  }

  function handleAboutHover(e) {

  }

  function handleAboutStopHover(e) {
  }

  return (
    <>
      <div id="static-bar">
        <div id="nav">
          <span
            className="letter"
            id="about"
            onMouseEnter={handleAboutHover}
            onMouseLeave={handleAboutStopHover}
            onClick={() => navigate("")}
          >
            <div>HOME</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
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
            data-project="A Skincare Product Visualisation"
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
            data-project="'A core memory'"
            data-category="3d"
          >
            i
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="'Drive'"
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
            data-project="Performance Physique"
            data-category="retouch"
          >
            F
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique"
            data-category="retouch"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique"
            data-category="retouch"
          >
            r
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique"
            data-category="retouch photo"
          >
            m
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique"
            data-category="retouch photo"
          >
            a
          </span>
          <span
            className="letter"
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            onClick={handleClick}
            data-project="Performance Physique"
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
            <Dot />
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
