import React, { useEffect, useRef, useState } from "react";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  setSongs,
  songs,
}) => {
  const colorOne = currentSong.color[0];
  const colorTwo = currentSong.color[1];
  // defining the html elems that im gonna use in the stupid shit way
  const audioR = useRef(null);
  //setting the time states so we can see them update with seconds
  const [time, setTime] = useState({
    currentTime: 0,
    durationTime: 0,
    fillPercentage: 0,
  });
  // the function that gonna play the current song and change the pause svg to play svg
  const playSong = () => {
    if (isPlaying === false) {
      audioR.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioR.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  // the funcction that gonna formate time to display it on the input sides
  function formatTime(ss) {
    let date = new Date(0);
    date.setSeconds(ss || 0);
    return date.toISOString().substr(14, 5);
  }
  // the function that gonna get the current song info (duration , time ,fillPercentage..) in secs
  const updateTime = (e) => {
    let currentTimeFormated = Math.floor(e.target.currentTime);
    let currentdurationFormated = Math.floor(e.target.duration);
    let fill = Math.floor(
      (currentTimeFormated * 100) / currentdurationFormated
    );
    setTime({
      ...time,
      currentTime: currentTimeFormated,
      durationTime: currentdurationFormated,
      fillPercentage: fill,
    });
  };
  // update the time while we are scrolling the input and change the currentTime property the same as the input value
  const rangeValue = (e) => {
    audioR.current.currentTime = e.target.value;
    setTime({
      ...time,
      currentTime: e.target.value,
    });
  };
  // the function that gonna change the current song by skipping back or forrward
  function skipSong(e) {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let direction = e.target.parentElement.classList.value;
    switch (direction) {
      case "skip-for":
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        playMs();
        break;
      default:
        if (direction === "skip-back") {
          if ((currentIndex - 1) % songs.length === -1) {
            currentIndex = songs.length;
          }
          setCurrentSong(songs[(currentIndex - 1) % songs.length]);
          playMs();
        }
        break;
    }
  }
  // play music if we skip will the song in playing function
  function playMs() {
    let radio = document.querySelector("audio");
    if (isPlaying === true) {
      const playPro = radio.play();
      if (playPro !== null || playPro !== undefined) {
        playPro
          .then((au) => {
            radio.play();
          })
          .catch((error) => {
            console.log("playback prevented");
          });
      }
    }
  }
  // change active song each time the prop song or currentsong update
  useEffect(() => {
    setSongs(filteredSongs);
  }, [currentSong]);
  // loop for each song to set it's active true by passing the current song from app component to match the song after looping in the m all
  let filteredSongs = songs.map((s) => {
    if (s.id === currentSong.id) {
      return { ...s, active: true };
    } else {
      return { ...s, active: false };
    }
  });
  // function that gonna replay the song from pausing after finishing
  function checkIftimeEnd() {
    playMs();
    return (time.currentTime = 0);
  }
  ///////////////////////////////////////jsx
  return (
    <div className="player">
      <div className="time-controll">
        <p>{formatTime(time.currentTime)}</p>
        <div className="tracker">
          <input
            onChange={rangeValue}
            type="range"
            min={0}
            max={time.durationTime || 0}
            value={
              time.currentTime < time.durationTime
                ? time.currentTime
                : checkIftimeEnd() || 0
            }
          />
          <div
            className="filling-tracker"
            style={{
              width: `${time.fillPercentage || 0}%`,
              background: `linear-gradient(to right, ${colorOne}, ${colorTwo})`,
            }}
          ></div>
        </div>
        <p>{formatTime(time.durationTime)}</p>
      </div>
      <div className="play-controll">
        <div onClick={skipSong} className="skip-back">
          <img
            alt="Gouder hicham , hicham , gouder"
            src={require("../svgs/left.svg")}
          />
        </div>
        <div onClick={playSong} className="play">
          <img
            alt="Gouder hicham"
            src={require(`../svgs/${isPlaying ? "pause" : "play"}.svg`)}
          />
        </div>
        <div onClick={skipSong} className="skip-for">
          <img alt="" src={require("../svgs/right.svg")} />
        </div>
        <audio
          onLoadedMetadata={updateTime}
          ref={audioR}
          onTimeUpdate={updateTime}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
};
export default Player;

