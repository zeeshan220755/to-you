import React, { useState } from "react";
import "./MissYou.css";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Your smile is my safe space.",
  "Without your voice, the world feels quiet.",
  "I miss holding your hand and feeling complete.",
  "Even coffee tastes dull without you.",
  "You're my peace, my chaos, my everything.",
];

function MissYou({ onNext, onBack }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextCard = () => {
    if (index < messages.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    } else {
      onNext();
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  return (
    <div className="missyou-page">
      <h2>I Miss You Because...</h2>

      <div className="card-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.4 }}
          >
            <p className="typewriter">{messages[index]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="navigation">
        <button onClick={prevCard} disabled={index === 0}>
          ⬅️ Previous
        </button>
        <button onClick={nextCard}>
          {index === messages.length - 1 ? "Next Section ➡️" : "➡️ Next"}
        </button>
      </div>
    </div>
  );
}

export default MissYou;
