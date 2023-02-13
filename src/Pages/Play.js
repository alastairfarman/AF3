import React from "react";
import HTMLReactParser from "html-react-parser";

const psych2 = `<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="ZEMzqbM" data-user="alastairfarman" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/alastairfarman/pen/ZEMzqbM">
Psych 2</a> by alastairfarman (<a href="https://codepen.io/alastairfarman">@alastairfarman</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;

const flow = `<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="dyjmNdY" data-preview="true" data-user="alastairfarman" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/alastairfarman/pen/dyjmNdY">
Flow p5</a> by alastairfarman (<a href="https://codepen.io/alastairfarman">@alastairfarman</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;

const psych3 = `<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="dyqbQKm" data-user="alastairfarman" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/alastairfarman/pen/dyqbQKm">
Psych 3</a> by alastairfarman (<a href="https://codepen.io/alastairfarman">@alastairfarman</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;

export default function Play() {
  const isSSR = typeof document === "undefined";
  let codePenScriptIsAppended = false;
  const options = {
    replace: (node) => {
      if (
        node.name === "script" &&
        node.attribs &&
        node.attribs.src === "https://static.codepen.io/assets/embed/ei.js"
      ) {
        if (isSSR) {
          return;
        }
        if (!codePenScriptIsAppended) {
          const script = document.createElement("script");
          script.src = node.attribs.src;
          script.setAttribute("async", "");
          document.head.appendChild(script);
          codePenScriptIsAppended = true;
        }
        return <React.Fragment />;
      }
    },
  };

  return (
    <>
      <div className="nav-spacer"></div>
      <div className="header">
        <div className="title">
          <h1>PLAY</h1>
        </div>
        <div className="add-info">
          <div></div>
          <h4>SOME EXPERIMENTS. WORK-IN-PROGESS</h4>
        </div>
      </div>
      <div className="pens">
        {HTMLReactParser(flow, options)}
        {HTMLReactParser(psych2, options)}
        {HTMLReactParser(psych3, options)}
      </div>
    </>
  );
}
