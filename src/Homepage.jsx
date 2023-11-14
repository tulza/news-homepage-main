import React from "react";
import NavButton from "./navButton.jsx";

const Homepage = () => {
  return (
    <>
      <div
        id="nav-bar"
        className="outline outline-red-500 m-[48px] flex justify-between pb-10"
      >
        <img src=".\assets\images\logo.svg" className="w-[65px] h-[40px]"></img>
        <div
          id="nav-buttons-area"
          className=" flex outline outline-4 outline-blue-500 gap-x-[8px] "
        >
          <NavButton label="Home" />
          <NavButton label="New" />
          <NavButton label="Popular" />
          <NavButton label="Trending" />
          <NavButton label="Categories" />
        </div>
      </div>
      <div id="content-container" className="mx-[48px] outline">
        <div id="headline">
          <img
            src=".\assets\images\image-web-3-desktop.jpg"
            className="headline-conten"
          />
          <div className="bg-black h-[200px] text-slate-50">
            <h2 className="text-slate-50">New</h2>
          </div>
          <div className="bg-black">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
