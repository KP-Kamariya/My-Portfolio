import React from "react";
import "./Loader.css";
import loadingGif from "./assets/loading.gif"; // તમારું gif path

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loadingGif} alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;