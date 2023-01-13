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

  useEffect(() => {
    const letters = document.getElementsByClassName("letter");
    let fontSettingsIndex = 1;
    let fontFamilyIndex = 0;

    const fontFamilies = ["GT-Flexa", "Fraunces-It"];

    setInterval(() => selectFont(fontFamilyIndex), 7000);

    //this shouldnt fire a new set font each time - can it check if font has changed or button clicked? current behaviour causes font to change before being removed if you click just before fire

    function selectFont(fontFamilyIndex) {
      if (fontFamilyIndex === 0) {
        changeNameNavElementFlexa();
        applyFont(fontFamilyIndex);
      } else if (fontFamilyIndex === 1) {
        changeNameNavElementFrauncesIt();
        applyFont(fontFamilyIndex);
      }
    }

    selectFont(fontFamilyIndex);

    function applyFont(fontFamilyIndex) {
      for (let i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot") {
          letters[i].style.fontFamily = fontFamilies[fontFamilyIndex];
        }
      }
    }

    // function changeNameNavElementRandom() {
    //   //set variable font parameters, negative italic number means 1/3 chance it is NOT italic
    //   const weight = Math.floor(Math.random() * (800 - 120 + 1)) + 120;
    //   const width = Math.floor(Math.random() * (150 - 25 + 1)) + 25;
    //   const italic = Math.random() * (1 - -0.5) + -0.5;

    //   const fontVariationSettings = `"wght" ${weight}, "wdth" ${width}, "ital" ${italic}`;

    //   //reduce font size based on overall width to prevent page stretching. rangeLimiter changes the strength of the effect

    //   let normalisedWeight = (weight - 120) / (800 - 120);
    //   let normalisedWidth = (width - 25) / (150 - 25);
    //   let overallWidthValue =
    //     (normalisedWeight + normalisedWidth + normalisedWidth) / 3;
    //   let rangeLimiter = 0.5;
    //   let shrinkFactor = 1 - overallWidthValue * rangeLimiter;

    //   for (let i = 0; i < letters.length; i++) {
    //     if (letters[i].id !== "dot") {
    //       letters[i].style.fontSize = `calc((180vw / 15) * ${shrinkFactor})`;
    //     }
    //   }

    //   //apply the settings to letters individually (allows grid to work and potential adjustments per letter later)
    //   for (let i = 0; i < letters.length; i++) {
    //     if (letters[i].id !== "dot") {
    //       letters[i].style.fontVariationSettings = fontVariationSettings;
    //     }
    //   }
    // }

    function changeNameNavElementFlexa() {
      document.getElementById("nav").style.textTransform = "capitalize";
      const defaultFontVariationSettings = `"wght" 400, "wdth" 25, "ital" 0`;
      const fontVariationSettingsTwo = `"wght" 800, "wdth" 65, "ital" 1`;
      const fontVariationSettingsThree = `"wght" 100, "wdth" 85, "ital" 0`;
      const fontVariationSettingsFour = `"wght" 800, "wdth" 5, "ital" 0`;

      const settingsArray = [
        defaultFontVariationSettings,
        fontVariationSettingsTwo,
        fontVariationSettingsThree,
        fontVariationSettingsFour,
      ];

      for (let i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot") {
          letters[i].style.fontVariationSettings =
            settingsArray[fontSettingsIndex];
        }
      }

      fontSettingsIndex === 3 ? (fontSettingsIndex = 0) : fontSettingsIndex++;
    }
    function changeNameNavElementFrauncesIt() {
      document.getElementById("nav").style.textTransform = "capitalize";

      const defaultFontVariationSettings = `"opsz" 144, "wght" 560, "SOFT" 40, "WONK" 1`;
      const fontVariationSettingsTwo = `"opsz" 144, "wght" 800, "SOFT" 100, "WONK" 1`;
      const fontVariationSettingsThree = `"opsz" 144, "wght" 250, "SOFT" 0, "WONK" 1`;
      const fontVariationSettingsFour = `"opsz" 144, "wght" 900, "SOFT" 0, "WONK" 1`;

      const settingsArray = [
        defaultFontVariationSettings,
        fontVariationSettingsTwo,
        fontVariationSettingsThree,
        fontVariationSettingsFour,
      ];

      for (let i = 0; i < letters.length; i++) {
        if (letters[i].id !== "dot") {
          letters[i].style.fontVariationSettings =
            settingsArray[fontSettingsIndex];
        }
      }

      fontSettingsIndex === 3 ? (fontSettingsIndex = 0) : fontSettingsIndex++;
    }

    click_ref.current = handleDotClick;
    function handleDotClick() {
      fontFamilyIndex === 1 ? (fontFamilyIndex = 0) : fontFamilyIndex++;

      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      async function load() {
        for (var i = 0; i < letters.length; i++) {
          if (letters[i].id !== "dot") {
            letters[i].style.transform = "translate(0, -500px)";
          }
          await timer(50);
        }
      }

      load();

      setTimeout(() => {
        selectFont(fontFamilyIndex);
        for (var i = 0; i < letters.length; i++) {
          if (letters[i].id !== "dot") {
            letters[i].style.transform = "translate(0, 0px)";
          }
        }
      }, 1000);
    }
  }, []);

  const categories = document.getElementById("categories");

  function categoryHoverTrue(category) {
    const sectionOne = document.getElementById("nav-section-1");
    const sectionTwo = document.getElementById("nav-section-2");
    const sectionThree = document.getElementById("nav-section-3");
    const sectionFour = document.getElementById("nav-section-4");

    categories.style.height = "2rem";
    categories.style.opacity = "100%";

    switch (category) {
      case "frontend":
        sectionOne.classList.add("nav-hover");
        break;
      case "frontend 3d":
        sectionOne.classList.add("nav-hover");
        sectionTwo.classList.add("nav-hover");
        break;
      case "3d":
        sectionTwo.classList.add("nav-hover");
        break;
      case "retouch":
        sectionThree.classList.add("nav-hover");
        break;
      case "retouch photo":
        sectionThree.classList.add("nav-hover");
        sectionFour.classList.add("nav-hover");
        break;
      case "photo":
        sectionFour.classList.add("nav-hover");
        break;
      default:
    }
  }
  function categoryHoverFalse() {
    const navSections = document.getElementsByClassName("nav-section");

    categories.style.height = "0rem";
    categories.style.opacity = "0%";

    for (let i = 0; i < navSections.length; i++) {
      navSections[i].classList.remove("nav-hover");
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

  return (
    <>
      <div id="static-bar">
        <div id="nav">
          <span></span>
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
            data-category="frontend 3d"
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
            data-project="'Rest stop 2066'"
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
          <span
            id="nav-section-1"
            className="nav-section"
            data-section="frontend"
          ></span>
          <span
            id="nav-section-2"
            className="nav-section"
            data-section="3d"
          ></span>
          <span
            id="nav-section-3"
            className="nav-section"
            data-section="retouch"
          ></span>
          <span
            id="nav-section-4"
            className="nav-section"
            data-section="photo"
          ></span>
          <div id="categories">
            <span>Frontend</span>
            <span>3D</span>
            <span>Retouch</span>
            <span>Photo</span>
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
