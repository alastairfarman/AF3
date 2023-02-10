export default function Drive() {
  return (
    <>
          <div className="nav-spacer"></div>
      <div className="single-img">
        <img src="./media/drive.png" alt="" />
        <video autoPlay muted loop>
            <source src="./media/drive.mp4" type="video/mp4" />
            This browser doesn't support video tag.
          </video>
      </div>
    </>
  );
}
