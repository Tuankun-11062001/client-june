import React from "react";
import loader from "../assets/loader.gif";
export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-container-gif">
          <img src={loader} alt="loader" />
        </div>
        <h4 className="loader-container-title">Loading...</h4>
      </div>
    </div>
  );
};
