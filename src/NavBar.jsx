import React from "react";

const NavButton = ({ label }) => {
  return (
    <a href="#" className="nav-button">
      {label}
    </a>
  );
};

const NavBar = ({}) => {
  return (
    <>
      <div className="flex gap-x-8">
        <NavButton label="Home" />
        <NavButton label="New" />
        <NavButton label="Popular" />
        <NavButton label="Trending" />
        <NavButton label="Categories" />
      </div>
    </>
  );
};

export default NavBar;
