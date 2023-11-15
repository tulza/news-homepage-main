import React from "react";
import NavBar from "./NavBar.jsx";
import Sidenews from "./Sidenews.jsx";
import HeadlineNew from "./HeadlineNew.jsx";
import NewsListBar from "./NewsListBar.jsx";

const Homepage = () => {
  return (
    <>
      <div className="w-[1100px] mx-[auto] py-[100px]">
        <div
          id="nav-bar"
          className=" ctr-vert h-[75px] mb-[30px] justify-between"
        >
          {/* logo and Nav here */}
          <img src=".\assets\images\logo.svg" className="w-[65px] h-[40px]" />
          <NavBar />
        </div>
        {/* main content of the page here */}
        <div id="main-content" className="mb-16">
          <HeadlineNew />
          <Sidenews />
        </div>
        <NewsListBar />
      </div>
    </>
  );
};

export default Homepage;
