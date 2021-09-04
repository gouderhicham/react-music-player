import React from "react";

function LibrarySong({ isPlaying, setSongs, songs, song, setCurrentSong }) {
  //define the current audio on the page
  let radio = document.querySelector("audio");
  // set the song that we are clicking on it to play
  const selectSong = () => {
    setCurrentSong(song);
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
    setSongs(filteredSongs);
  };
  // active or not active function  =>
  let filteredSongs = songs.map((s) => {
    if (s.id === song.id) {
      return { ...s, active: true };
    } else {
      return { ...s, active: false };
    }
  });
  //functino to see if the song is active
  function setActive() {
    if (song.active === true) {
      return "active";
    } else {
      return "";
    }
  }
  // return the final jsx
  return (
    <div onClick={selectSong} className={`library-song ${setActive()} `}>
      <img src={song.cover} alt="Gouder hicham" />
      <div className="text">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
export default LibrarySong;
