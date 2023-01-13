export default function Sk8() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="tech">
            <img src="../tech-icons/blender.png" alt="Blender logo"></img>
          </div>
          <h1>Sk8</h1>
          <p>Sk8 explores modelling and materials in blender.</p>
          <div id="sk8-wheel-array">
            <div className="sk8-wheel-container">
              <video className="sk8-wheel" autoPlay muted loop height={"200px"}>
                <source src="../media/sk8-v2.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
              <video
                className="sk8-wheel-hover"
                autoPlay
                muted
                loop
                height={"200px"}
              >
                <source src="../media/sk8.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
            </div>
            <div className="sk8-wheel-container">
              <video className="sk8-wheel" autoPlay muted loop height={"200px"}>
                <source src="../media/sk8-v2.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
              <video
                className="sk8-wheel-hover"
                autoPlay
                muted
                loop
                height={"200px"}
              >
                <source src="../media/sk8.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
            </div>
            <div className="sk8-wheel-container">
              <video className="sk8-wheel" autoPlay muted loop height={"200px"}>
                <source src="../media/sk8-v2.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
              <video
                className="sk8-wheel-hover"
                autoPlay
                muted
                loop
                height={"200px"}
              >
                <source src="../media/sk8.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
            </div>
            <div className="sk8-wheel-container">
              <video className="sk8-wheel" autoPlay muted loop height={"200px"}>
                <source src="../media/sk8-v2.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
              <video
                className="sk8-wheel-hover"
                autoPlay
                muted
                loop
                height={"200px"}
              >
                <source src="../media/sk8.webm" type="video/mp4" />
                This browser doesn't support video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="../media/sk8-bearing.png" alt=""></img>
      </div>
      <div className="double-img">
        <img src="../media/sk8-loading.png" alt=""></img>
        <img src="../media/sk8-ridges.png" alt=""></img>
      </div>
    </>
  );
}
