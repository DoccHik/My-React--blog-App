import React from "react";
import Posts from "./components/Posts/Posts";

const MainContent = () => {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <Posts />
        </div>
      </div>
    </>
  );
};

export default MainContent;
