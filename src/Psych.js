import Sketch from "react-p5";
import React from "react";

export default function Psych() {
  let t = 0;
  let rectWidth;

  const resizeCanvas = (p5) => {
    p5.resizeCanvas(p5.windowWidth, 150 + p5.windowWidth / 20);
    rectWidth = p5.width / 100;
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, 500).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 360, 100, 100);
    p5.noStroke();
    p5.frameRate(60);
    resizeCanvas(p5);
    p5.windowResized = () => resizeCanvas(p5);
  };
  const draw = (p5) => {
    t += 0.002;
    // Create a background gradient of colors
    for (let y = 0; y < p5.height; y += 10) {
      for (let x = 0; x < p5.width; x += 10) {
        let c = p5.color(
          (p5.noise(x / 900, y / 900, t) * 360 + (x / p5.width) * 100) % 30,
          80,
          80
        );
        p5.fill(c);
        p5.rect(x, y, 10, 10);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
