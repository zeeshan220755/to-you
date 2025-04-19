import React, { useEffect } from "react";
import Landing from "./components/Landing";
import Meaning from "./components/Meaning";
import OneThing from "./components/OneThing";
import Memories from "./components/Memories";
import YouMeanTheWorld from "./components/YouMeanTheWorld";
import Ending from "./components/Ending";
import "./App.css";

function App() {
  useEffect(() => {
    const audio = new Audio("./bg-music.mp3"); // path to your audio file
    audio.loop = true; // Loop the music
    audio.play();

    return () => {
      audio.pause(); // Stop the audio when the component unmounts
    };
  }, []);

  const [currentScreen, setCurrentScreen] = React.useState("landing");

  const goTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === "landing" && <Landing goTo={goTo} />}
      {currentScreen === "meaning" && <Meaning goTo={goTo} />}
      {currentScreen === "onething" && <OneThing goTo={goTo} />}
      {currentScreen === "memories" && <Memories goTo={goTo} />}
      {currentScreen === "world" && <YouMeanTheWorld goTo={goTo} />}
      {currentScreen === "ending" && <Ending goTo={goTo} />}
    </div>
  );
}

export default App;
