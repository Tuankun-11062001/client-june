import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Notification = ({ message, close }) => {
  return (
    <div className="notification">
      <div className="notification-container">
        <div className="notification-head">
          <span></span>
          <h2 className="notification-head-title">Notification</h2>
          <button className="notification-head-button">
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="notification-body">
          <p className="notification-body-info">{message}</p>
          <button className="notification-body-button" onClick={close()}>
            Understand
          </button>
        </div>
      </div>
    </div>
  );
};
