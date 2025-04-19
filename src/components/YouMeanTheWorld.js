import React from "react";
import "./YouMeanTheWorld.css";

function YouMeanTheWorld({ goTo }) {
  return (
    <div className="youmean">
      <h2>You Mean The World To Me 🌍💖</h2>
      <p>
        Without you, life would be like a blank canvas, waiting for color. Your
        love fills my soul, painting every moment with joy, love and purpose. ❤️
      </p>

      <div className="navigation">
        <button onClick={() => goTo("memories")}>⬅️</button>
        <button onClick={() => goTo("ending")}>➡️</button>
      </div>
    </div>
  );
}

export default YouMeanTheWorld;
