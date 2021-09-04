import React from "react";
import { v4 as randomId } from "uuid";
import LibrarySong from "../components/LibrarySong";

const Library = ({
  setToggled,
  toggled,
  isPlaying,
  currentSong,
  setSongs,
  songs,
  setCurrentSong,
}) => {
  // if toggled is true than reveal the library
  const checkToggle = () => {
    if (toggled === true) {
      return "toggle";
    } else {
      return "";
    }
  };
  return (
    <div className={`library ${checkToggle()}`}>
      <div className="header">
        <h1>
          <img className="list" src={require("../svgs/list.svg")} alt="Gouder hicham" />
          Library
        </h1>
        <img
          onClick={() => {
            setToggled((toggled = false));
          }}
          className="close"
          src={require("../svgs/close.svg")}
          alt="Gouder hicham"
        />
      </div>
      {songs.map((song) => (
        <LibrarySong
          toggled={toggled}
          key={randomId()}
          song={song}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          songs={songs}
          currentSong={currentSong}
          setSongs={setSongs}
        />
      ))}
    </div>
  );
};

export default Library;
