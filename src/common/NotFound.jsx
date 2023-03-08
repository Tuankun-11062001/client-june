import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/notfound1.gif";
export const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <div className="notfound-container-image">
          <img src={notFound} alt="" />
        </div>
        <div className="notfound-container-description">
          <h2>Not Found</h2>
          <Link to="/">Quay ve trang chu</Link>
        </div>
      </div>
    </div>
  );
};
