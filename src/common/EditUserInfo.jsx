import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const EditUserInfo = ({ closeBox }) => {
  return (
    <div className="changeInfoUser">
      <div className="changeInfoUser-container">
        <div className="changeInfoUser-head">
          <span></span>
          <h2 className="changeInfoUser-head-title">change Info User</h2>
          <button className="changeInfoUser-head-button" onClick={closeBox()}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="changeInfoUser-form">
          <div className="changeInfoUser-form-group">
            <label htmlFor="username">Name</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="email">Date</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="password">Email</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="re-password">Number phone</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="re-password">Region</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="re-password">Province</label>
            <input />
          </div>
          <div className="changeInfoUser-form-group">
            <label htmlFor="re-password">Address</label>
            <input />
          </div>
          <button className="changeInfoUser-form-button">change</button>
        </div>
      </div>
    </div>
  );
};
