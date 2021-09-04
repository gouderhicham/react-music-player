import React, { useState, Suspense } from "react";
import data from "./util";
import "./styles/App.scss";
const Song = React.lazy(() => import("./components/Song"));
const Player = React.lazy(() => import("./components/Player"));
const Library = React.lazy(() => import("./components/Library"));
const Nav = React.lazy(() => import("./components/Nav"));

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toggled, setToggled] = useState(false);
  //shit
  return (
    <div className={`App ${toggled ? "slide" : ""}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav toggled={toggled} setToggled={setToggled} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Song currentSong={currentSong} isPlaying={isPlaying} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Library
          setCurrentSong={setCurrentSong}
          songs={songs}
          isPlaying={isPlaying}
          currentSong={currentSong}
          setSongs={setSongs}
          toggled={toggled}
          setToggled={setToggled}
        />
      </Suspense>
    </div>
  );
}
export default App;
