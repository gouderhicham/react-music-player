import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "It's you ",
      cover: require("../src/images/gouderhichamone-min.jpg"),
      artist: "Ali Gatie",
      audio: "https://gouderhicham-music.netlify.app/music/itsYouu.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Being with you",
      artist: "Gouder hicham",
      cover: require("../src/images/gouderhichamtwo-min.jpg"),
      audio: "https://gouderhicham-music.netlify.app/music/deathBedd.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Without me",
      cover: require("../src/images/gouderhichamthree-min.jpg"),
      artist: "Juice Wrld",
      audio: "https://gouderhicham-music.netlify.app/music/withoutMee.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fresh outta London",
      cover: require("../src/images/gouderhichamfour-min.jpg"),
      artist: "Mohammed Ali",
      audio: "https://gouderhicham-music.netlify.app/music/freshh.mp3",
      color: ["#FDDB95", "#D28165"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tic Toc",
      cover: require("../src/images/gouderhichamfive-min.jpg"),
      artist: "Kesha",
      audio: "https://gouderhicham-music.netlify.app/music/tikk.mp3",
      color: ["#F2C5AE", "#1D74D7"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Losing hope",
      cover: require("../src/images/gouderhichamsix-min.jpg"),
      artist: "Kado MAISTER",
      audio: "https://gouderhicham-music.netlify.app/music/hopee.mp3",
      color: ["#F29D86", "#7B3832"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cold Heart",
      cover: require("../src/images/gouderhichamseven-min.jpg"),
      artist: "Lul Kuhl",
      audio: "https://gouderhicham-music.netlify.app/music/coldd.mp3",
      color: ["#598DCE", "#FFFEF9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "BRB",
      cover: require("../src/images/gouderhichameight-min.jpg"),

      artist: "Lul Kuhl",
      audio: "https://gouderhicham-music.netlify.app/music/brbb.mp3",
      color: ["#C5888D", "#6A547C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Barking BMG",
      cover: require("../src/images/gouderhichamnein-min.jpg"),
      artist: "Arnolod gönter",
      audio: "https://gouderhicham-music.netlify.app/music/barkingg.mp3",
      color: ["#681727", "#FCCC9B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Copines",
      cover: require("../src/images/gouderhichamten-min.jpg"),

      artist: "Aya Nakamura",
      audio: "https://gouderhicham-music.netlify.app/music/copinn.mp3",
      color: ["#213C51", "#E55C30"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Stereo Heart",
      cover: require("../src/images/gouderhicham-ele-min.jpg"),

      artist: "Darwin Waterson",
      audio: "https://gouderhicham-music.netlify.app/music/norap.mp3",
      color: ["#CF9BC9", "#CADEDF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Coding dream",
      cover: require("../src/images/gouderhicham-ther-min.jpg"),
      artist: "Gambul Waterson",
      audio: "https://gouderhicham-music.netlify.app/music/heart.mp3",
      color: ["#F3C5C7", "#472B42"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Copinos",
      cover: require("../src/images/gouderhicham-twe-min.jpg"),
      artist: "Aya Nakamura",
      audio: "https://gouderhicham-music.netlify.app/music/cop.mp3",
      color: ["#E09599", "#120729"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
// note !! : we can use the music mp3 file but links help more with performance