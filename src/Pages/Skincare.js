export default function Skincare() {
  return (
    <>
      <div className="fade-in">
        <div className="nav-spacer"></div>
        <div className="header-container">
          <div className="header">
            <div className="title">
              <h1>Skincare Product Visualisation</h1>
              {/* <div className="tech">
                <img src="./tech-icons/blender.png" alt="Blender logo"></img>
              </div> */}
            </div>
            <div className="add-info">
            <div>
              <a
                href="https://stormy-uttermost-cheetah.glitch.me/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                OPEN IN NEW WINDOW<span className="bullet"> &bull;</span>
              </a>
            </div>
            <h4>BLENDER, UNITY + NEEDLE ENGINE, THREE.JS</h4>
          </div>
            <p>
              An experiment with using blender animations to enhance the product journey on a website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
