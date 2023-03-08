import React from "react";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { actions, hooks } from "../store";
import { Notification } from "./Notification";
import { register } from "../user/apis/loginApi";
import { Loader } from "./Loader";
export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [message, setMessage] = useState("");
  const [stateApi, dispatchApi] = hooks.useContextApi();
  const [stateBox, dispatchBox] = hooks.useContextBox();

  const { openNotificationBox } = stateBox;
  const { clickLoading } = stateApi;

  // func logic
  const handlerChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerSubmitForm = () => {
    const { username, email, password, rePassword } = formData;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      dispatchBox(actions.openNotificationBox());
      return setMessage("Missing something check it again");
    }

    if (password !== rePassword) {
      dispatchBox(actions.openNotificationBox());
      return setMessage("Password dont match, please try again");
    }

    dispatchApi(actions.clickLoading());

    register(formData)
      .then((res) => {
        dispatchApi(actions.success({}));
        dispatchBox(actions.openNotificationBox());
        return setMessage(
          "Sign in successfully, now come back login to your account"
        );
      })
      .catch((res) => {
        dispatchApi(actions.error({}));
        dispatchBox(actions.openNotificationBox());
        return setMessage(
          res.response.data.message + " Please, Change your username"
        );
      });
  };

  const closeNotificationBox = () => {
    dispatchBox(actions.closeNotificationBox());
  };
  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <div className="signup-head">
            <span></span>
            <h2 className="signup-head-title">Signup</h2>
            <button className="signup-head-button">
              <IoIosCloseCircleOutline />
            </button>
          </div>
          <div className="signup-form">
            <div className="signup-form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handlerChangeFormData}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Username"
                name="email"
                value={formData.email}
                onChange={handlerChangeFormData}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handlerChangeFormData}
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="re-password">Re-Password</label>
              <input
                id="re-password"
                type="password"
                placeholder="Re-Password"
                name="rePassword"
                value={formData.rePassword}
                onChange={handlerChangeFormData}
              />
            </div>
            <button className="signup-form-button" onClick={handlerSubmitForm}>
              signup
            </button>
          </div>
          <div className="signup-footer">
            <span></span>
            <p>
              You have account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
      {openNotificationBox && (
        <Notification message={message} close={() => closeNotificationBox} />
      )}
      {clickLoading && <Loader />}
    </>
  );
};
