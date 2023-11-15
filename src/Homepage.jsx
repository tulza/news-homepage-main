import React from "react";
import NavButtons from "./NavButtons.jsx";
import Sidenews from "./Sidenews.jsx";
import HeadlineNew from "./HeadlineNew.jsx";
import NewsListBar from "./NewsListBar.jsx";
import logo from "./assets/images/logo.svg";

const Homepage = () => {
  return (
    <>
      <div className="w-[1100px] mx-[auto] py-[100px]">
        <div
          id="nav-bar"
          className=" ctr-vert h-[75px] mb-[30px] justify-between"
        >
          {/* logo and Nav here */}
          <img src={logo} className="w-[65px] h-[40px]" />
          <NavButtons />
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
