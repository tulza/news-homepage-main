import React from "react";

const NewBlock = ({ newTitle, description }) => {
  return (
    <>
      <h1 className="side-news">{newTitle}</h1>
      <h2>{description}</h2>
    </>
  );
};

export default NewBlock;
