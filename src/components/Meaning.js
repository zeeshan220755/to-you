import React, { useState } from "react";
import "./Meaning.css";

const reasons = [
  "I miss holding your hand and feeling complete 🤲❤️.",
  "You make me feel SEEN and HEARD 👀👂.",
  "Your laughter is my favorite sound 🎶.",
  "Every moment with you is a treasure 💎⏳.",
  "You make my life, a living dream ✨💭.",
  "You are my sunshine 🌞💖.",
  "Without your voice, the world feels quiet 🤫🌍.",
  "You're my peace, my life, my everything 🕊️💫🌏.",
];

function Meaning({ goTo }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < reasons.length - 1) setIndex(index + 1);
    else goTo("onething");
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
    else goTo("landing");
  };

  return (
    <div className="meaning">
      <h2>I miss YOU 💕 Because...</h2>
      <div className="card">
        <p>{reasons[index]}</p>
      </div>
      <div className="buttons">
        <button onClick={back}>⬅️</button>
        <button onClick={next}>
          {index === reasons.length - 1 ? "➡️" : "➡️"}
        </button>
      </div>
    </div>
  );
}

export default Meaning;
