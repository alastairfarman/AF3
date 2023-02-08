export default function Sk8() {
  return (
    <>
      <div className="fade-in">
        <div className="nav-spacer"></div>
        <div className="header-container">
          <div className="header">
            <div className="title">
              <h1>Sk8</h1>
              <div className="tech">
                <img src="../tech-icons/blender.png" alt="Blender logo"></img>
              </div>
            </div>
            <p>
              Sk8 is a personal project to further explore modelling techniques,
              materials and animation in Blender, as well as render options and
              video output with alpha channels for web implementation.
            </p>
            <div className="scroll">          SCROLL
</div>
          </div>
          
        </div>
        <div id="kickflip">
          <video autoPlay muted loop>
            <source src="../media/sk8/kickflip.webm" type="video/mp4" />
            This browser doesn't support video tag.
          </video>
        </div>
        <div className="hero-img">
          <img src="../media/sk8/sk8-bearing.png" alt=""></img>
        </div>

        <div className="double-img">
          <img src="../media/sk8/sk8-loading.png" alt=""></img>
          <img src="../media/sk8/sk8-ridges.png" alt=""></img>
        </div>
      </div>
    </>
  );
}
