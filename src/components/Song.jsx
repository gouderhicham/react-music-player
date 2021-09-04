import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  // define the value that gonna determinate wether the animation should run or stop and !!NOT reset it 
  let running = isPlaying ? "running" : "paused";
  return (
    <div className="song-container">
      <img
        className="song-img"
        style={{
          animationPlayState: running,
        }}
        src={currentSong.cover}
        alt="Gouder hicham"
      />
      <h1>{currentSong.name}</h1>
      <h2>By: {currentSong.artist}.</h2>
    </div>
  );
};
export default Song;
