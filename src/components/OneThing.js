import React from "react";
import "./OneThing.css";

function OneThing({ goTo }) {
  return (
    <div className="onething">
      <h2>ThingS I Love About You 💗</h2>
      <p>
        Your love, respect and care for me.
        <br />
        Your presence in my life is a gift.
        <br />
        You make me feel special and loved.
        <br />
        You are my rock, my support, and my everything.
        <br />
        I cherish every moment we spend together.
        <br />
        You are my best friend and my soulmate.
        <br />
      </p>
      <div className="navigation">
        <button onClick={() => goTo("meaning")}>⬅️</button>
        <button onClick={() => goTo("memories")}>➡️</button>
      </div>
    </div>
  );
}

export default OneThing;
