import React from "react";
import headlineImage from "./assets/images/image-web-3-desktop.jpg";

const HeadlineNew = () => {
  return (
    <div>
      <img src={headlineImage} className="mb-8 w-full" />
      <div className="grid grid-cols-2">
        <h1 className="big-text font-extrabold text-6xl">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col">
          <p className="mb-10">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div>
            <a href="#" id="read-more">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineNew;
