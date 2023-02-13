import React from "react";

export default function Photo3() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="single-img">
        <img src="./media/add/4.jpg" alt="" />
      </div>
      <div className="double-img">
        <img src="./media/add/2.jpg" alt="" />
        <img src="./media/add/5.jpg" alt="" />
      </div>
      <div className="single-img">
        <img src="./media/add/3.jpg" alt="" />
      </div>
      <div className="single-img">
        <img src="./media/add/1.jpg" alt="" />
      </div>
      <div className="double-img">
        <img src="./media/add/8.jpg" alt="" />
        <img src="./media/add/9.jpg" alt="" />
      </div>
      <div className="single-img">
        <video autoPlay muted loop playsInline webkit-playsinline="true">
          <source src="./media/1-3.mp4" type="video/mp4" />
          This browser doesn't support video tag.
        </video>
      </div>
    </>
  );
}
