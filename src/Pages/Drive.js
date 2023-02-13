import React from "react";
export default function Drive() {
  return (
    <>
          <div className="nav-spacer"></div>
      <div className="double-img">
        <img src="./media/drive.png" alt="" />
        <video autoPlay muted loop playsInline webkit-playsinline="true">
            <source src="./media/drive.mp4" type="video/mp4" />
            This browser doesn't support video tag.
          </video>
      </div>
    </>
  );
}
