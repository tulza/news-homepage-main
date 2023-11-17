import React from "react";

const NewsBlock = ({ title, description }) => {
  return (
    <div>
      <p className="pb-2">
        <a href="#" className="sideTitle">
          {title}
        </a>
      </p>
      <p>{description}</p>
    </div>
  );
};

const Sidenews = () => {
  return (
    <div id="side-news" className="px-8">
      <h1 className="my-8">New</h1>
      <NewsBlock
        title="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <hr />
      <NewsBlock
        title="The Downsides of AI Artistry"
        description="What are the possible adverse effects of on-demand AI image generation?"
      />
      <hr />
      <NewsBlock
        title="Is VC Funding Drying Up?"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </div>
  );
};

export default Sidenews;
