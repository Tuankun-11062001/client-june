import React from "react";
import { Loader } from "../../common/Loader";
import { SideBar } from "../../common/SideBar";
import { Slide } from "../../common/Slide";
import { Product } from "../components/Product";

export const Home = () => {
  return (
    <div className="layout-app">
      <div className="home">
        <SideBar />
        <div className="home-content">
          <Slide />
          <div className="home-content-select">
            <select>
              <option value="random">Random</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="prices lower to higher">
                Prices lower to higher
              </option>
              <option value="prices higher to lower">
                Prices higher to lower
              </option>
            </select>
          </div>
          <ul className="home-content-listProducts">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        </div>
      </div>
    </div>
  );
};
