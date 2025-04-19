import React from "react";
import "./Memories.css";

function Memories({ goTo }) {
  return (
    <div className="memories">
      <h2>Our Memories Together 💖</h2>
      <div className="photo-gallery">
        <img src="./image-1.jpeg" alt="Memory 1" />
        <img src="./image-2.jpeg" alt="Memory 2" />
        <img src="./image-3.jpeg" alt="Memory 3" />
      </div>
      <div className="navigation">
        <button onClick={() => goTo("onething")}>⬅️</button>
        <button onClick={() => goTo("world")}>➡️</button>
      </div>
    </div>
  );
}

export default Memories;
