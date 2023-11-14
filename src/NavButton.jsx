import React from "react";

const NavButton = ({ label }) => {
  return (
    <div className="justify-self-center algin-self-center p-2">
      <a href="#">{label}</a>
    </div>
  );
};

export default NavButton;
