import React from "react";

const Nav = ({ setToggled, toggled }) => {
  // change the toggled value so we can use it later to reveal the library 
  const toggleNav = () => {
      setToggled(!toggled)
  };
  //jsx
  return (
    <nav onClick={toggleNav}>
      <p>PlayList</p>
      <img src={require("../svgs/music.png")} alt="Gouder hicham , gouder , hicham" />
    </nav>
  );
};

export default Nav;