import React from "react";

export default function Flower() {
  const numPetals = 5;
  const petalRadius = 75;
  const petalSpacing = (2 * Math.PI) / numPetals;
  const flowerCenterX = 250;
  const flowerCenterY = 250;

  const petals = [];
  for (let i = 0; i < numPetals; i++) {
    const angle = i * petalSpacing;
    const cx = flowerCenterX + Math.sin(angle) * 120;
    const cy = flowerCenterY + Math.cos(angle) * 120;
    petals.push(
      <ellipse
        key={i}
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
          transform: "scale(0.3)"
        }}
        cx={cx}
        cy={cy}
        rx={petalRadius}
        ry={petalRadius}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 500 500"
      width={500}
      height={500}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="gradient-0"
          x1={250}
          x2={250}
          y1="116.274"
          y2="383.726"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop style={{ stopColor: "rgba(34, 193, 195, 1)" }} offset={0} />
          <stop style={{ stopColor: "rgba(253, 187, 45, 1)" }} offset={1} />
        </linearGradient>
      </defs>

      <ellipse
        className="big-circle"
        style={{
          paintOrder: "stroke",
          fill: "#f4f4f4",
          fillRule: "nonzero",
        }}
        cx={flowerCenterX}
        cy={flowerCenterY}
        rx="250"
        ry="250"
      />

      {petals}

      <ellipse
        className="big-circle"
        id="big-circle"
        style={{
          stroke: "rgb(244,244,244)",
          strokeWidth: "50px",
          paintOrder: "stroke",
          fill: "#f4f4f4",
          fillRule: "nonzero",
        }}
        cx={flowerCenterX}
        cy={flowerCenterY}
        rx="65"
        ry="65"
      />

      <path
        d="M 405 250 A 155 155 0 0 1 250 405 A 155 155 0 0 1 95 250 A 155 155 0 0 1 250 95 A 155 155 0 0 1 405 250 Z"
        
        style={{
          stroke: "rgb(0, 0, 0)",
          paintOrder: "fill",
          fillRule: "nonzero",
          fill: "none",
          strokeWidth: "0px",
        }}
        id="path-1"
      />

      <text
        id="CLICKME1"
        style={{
          fill: "#222222",
          fontFamily: '"GT-Flexa"',
          fontSize: "124px",
          whiteSpace: "prex",
          fontVariationSettings: `"wght" 800'`,
        }}
        x="64.862"
        y="14.284"
      >
        <textPath startOffset={0} xlinkHref="#path-1">
          CLICK ME
        </textPath>
      </text>

      <text
        id="CLICKME2"
        style={{
          fill: "#222222",
          fontFamily: '"GT-Flexa"',
          fontSize: "124px",
          whiteSpace: "pre",
        }}
        x="64.862"
        y="14.284"
      >
        <textPath startOffset={500} xlinkHref="#path-1">
          CLICK ME
        </textPath>
      </text>
    </svg>
  );
}
