import React from "react";
export default function Sk8() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div id="kickflip">
        <video autoPlay muted loop playsInline webkit-playsinline="true">
          <source src="./media/sk8/kickflip.webm" type="video/mp4" />
          This browser doesn't support video tag.
        </video>
      </div>
      <div className="hero-img">
        <img src="./media/sk8/deck2.png" alt=""></img>
      </div>
      <div className="hero-img">
        <img src="./media/sk8/deck.png" alt=""></img>
      </div>
      <div className="hero-img">
        <img src="./media/sk8/sk8-bearing.png" alt=""></img>
      </div>

      <div className="double-img">
        <img src="./media/sk8/sk8-loading.png" alt=""></img>
        <img src="./media/sk8/sk8-ridges.png" alt=""></img>
      </div>
    </>
  );
}
