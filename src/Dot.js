export default function Dot() {
  return (
    <svg
      viewBox="30.83 -3.792 448.501 505.637"
      width={505}
      height={505}
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
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={200}
        cy={165}
        rx="60"
        ry="60"
      />
      <ellipse
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={300}
        cy={165}
        rx="60"
        ry="60"
      />
      <ellipse
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={350}
        cy={250}
        rx="60"
        ry="60"
      />

      <ellipse
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={150}
        cy={250}
        rx="60"
        ry="60"
      />

      <ellipse
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={200}
        cy={335}
        rx="60"
        ry="60"
      />
      <ellipse
        className="petal"
        style={{
          stroke: "rgb(0, 0, 0)",
          strokeWidth: "0px",
          paintOrder: "fill",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={300}
        cy={335}
        rx="60"
        ry="60"
      />

<ellipse
      className="big-circle"
        style={{
          stroke: "rgb(244,244,244)",
          strokeWidth: "50px",
          paintOrder: "stroke",
          fill: "#222222",
          fillRule: "nonzero",
        }}
        cx={250}
        cy={250}
        rx="50"
        ry="50"
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
      <path
        d="M 405 250 C 405 335.604 335.604 405 250 405 C 164.396 405 95 335.604 95 250 C 95 164.396 164.396 95 250 95 C 335.604 95 405 164.396 405 250 Z"
        style={{
          stroke: "rgb(0, 0, 0)",
          paintOrder: "fill",
          fillRule: "nonzero",
          fill: "none",
          strokeWidth: "0px",
        }}
        id="path-2"
      />
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
        <textPath startOffset={500} xlinkHref="#path-2">
          CLICK ME
        </textPath>
      </text>
    </svg>
  );
}
