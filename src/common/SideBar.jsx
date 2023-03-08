import React from "react";
import sideBarIcon from "../assets/SideBarIcon";
export const SideBar = () => {
  return (
    <ul className="sidebar">
      <li className="sidebar-item active">
        <div className="sidebar-item-left">
          {sideBarIcon.lastestIcon()}
          <p>Lastest products</p>
        </div>
        <p className="sidebar-item-numberProduct">(30 products)</p>
      </li>
      <li className="sidebar-item ">
        <div className="sidebar-item-left">
          {sideBarIcon.lastestIcon()}
          <p>Lastest products</p>
        </div>
        <p className="sidebar-item-numberProduct">(30 products)</p>
      </li>
    </ul>
  );
};
