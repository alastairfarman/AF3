export default function Sunglasses() {
  return (
    <>
      <iframe
        id="sunglasses-iframe"
        src="https://stormy-uttermost-cheetah.glitch.me/"
        title="Sunglasses"
        allowtransparency = "true"
        style={{
          width: "100vw",
          height: "100vh",
          border: "unset",
          position: "absolute",
        }}
      ></iframe>

      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="title">
            <h1>Sunglasses Product Visualisation</h1>
            <div className="tech">
              <img src="../tech-icons/blender.png" alt="Blender logo"></img>
              <img src="../tech-icons/threejs.svg" alt="three.js logo"></img>
              <img src="../tech-icons/needle.png" alt="Needle logo"></img>
            </div>
          </div>
          <h4>BLENDER, UNITY + NEEDLE ENGINE, THREE.JS</h4>
          <div>
            <a
              href="https://alastairfarman.github.io/soccerball/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              OPEN IN NEW WINDOW<span className="bullet"> &bull;</span>
            </a>
          </div>
          <p>A project exploring product visualisation and web implementation. Originally modelled and rendered in Blender to create stop-motion interactivity, this was brought into a THREE.js environment using NeedleTools and Unity to export hi-poly models URP Shaders with alpha channel and HDRI lighting with comparitively small file size.</p>
        </div>
      </div>
      <div className="triple-img">
      <img className="" src="../media/sun/black-31.png" alt="" />
      <img className="" src="../media/sun/tort-31.png" alt="" />
      <img className="" src="../media/sun/rose-31.png" alt="" />
      </div>
    </>
  );
}
