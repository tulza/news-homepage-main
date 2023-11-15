import React from "react";

const Item = ({ image, number, title, description }) => {
  return (
    <div className="news-bar block grid grid-cols-2">
      <img src={image} className="w-full"></img>
      <div>
        <h1>{number}</h1>
        <a href="#">{title}</a>
        <p>{description}</p>
      </div>
    </div>
  );
};

const NewsListBar = () => {
  return (
    <div className="grid grid-cols-3">
      <Item
        image="./assets/images/image-retro-pcs.jpg"
        number="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
      />
      <Item
        image="./assets/images/image-top-laptops.jpg"
        number="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
      />
      <Item
        image="./assets/images/image-gaming-growth.jpg"
        number="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
};

export default NewsListBar;
