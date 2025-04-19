import React from "react";
import "./Ending.css";

function Ending({ goTo }) {
  return (
    <div className="ending">
      <h2>I Love You So Much! 💞</h2>
      <p>
        Forever and always, you will have my heart. I am so lucky to have you in
        my life. 💖 (Ummmah 🌷🫂)
      </p>
      <button className="final-button" onClick={() => goTo("landing")}>
        ❤️ Go Back To Start ❤️
      </button>
    </div>
  );
}

export default Ending;
