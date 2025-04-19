import React from "react";
import "./Landing.css";

function Landing({ goTo }) {
  return (
    <div className="landing">
      <h1>🌸 Hey My Baby 🌸</h1>
      <p>I just wanted to say how much I miss you... 💭💖</p>
      <button onClick={() => goTo("meaning")}>Click Me</button>
    </div>
  );
}

export default Landing;
