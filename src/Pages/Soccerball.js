export default function Soccerball() {
  return (
    <>
      <div className="nav-spacer"></div>
      <div className="header-container">
        <div className="header">
          <div className="tech">
            <img src="../tech-icons/React.svg" alt="React Logo"></img>
            <img src="../tech-icons/threejs.svg" alt="three.js logo"></img>
            <img src="../tech-icons/blender.png" alt="Blender logo"></img>
          </div>
          <h1>Soccerball</h1>
          <p>
            Soccerball is a simple project exploring three.js, cannon-es and
            using device APIs. The initial idea was to experiment with device
            motion controls, before deciding to include physics and 3D to create
            a completely pointless but briefly entertaining fiddle toy.
          </p>
        </div>
      </div>
      <div className="single-img">
        <video autoPlay muted loop>
          <source src="../media/soccerball.webm" type="video/mp4" />
          This browser doesn't support video tag.
        </video>
        <div className="image-desc">
          <p>
            The app checks if the device needs permission to access the motion
            API, and once granted activates the cannon-es physics engine. The
            physics 'arena' and three.js camera are then rotated around the
            center of the scene to match the rotation of the device, allowing
            the ball to interact with the scene as though it were in the device.
          </p>
        </div>
      </div>
      <div className="single-img">
        <div className="image-desc">
          <p>
            The ball is a modified BlenderKit model imported into three.js that
            has its position and rotation linked to a cannon-es physics sphere.
            There is a default sphere loaded at the same time if the glb file
            fails to load.
          </p>
        </div>
        <img src="../media/soccerball-3.png" alt=""></img>
      </div>
      <div className="single-img">
        <img src="../media/soccerball-2.png" alt=""></img>
        <div className="image-desc">
          <p>
            The scene uses a simple directional light to create a shadow that
            moves and deforms with the scene as the device rotates, and a loaded
            HDRI map for object reflections and shadow fill.
          </p>
        </div>
      </div>
    </>
  );
}
