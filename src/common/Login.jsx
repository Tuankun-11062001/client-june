import React, { useState } from "react";
import { hooks } from "../store";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../user/apis/loginApi";
import { Loader } from "./Loader";
import { actions } from "../store";
import { Notification } from "./Notification";

export const Login = () => {
  // direction hooks
  const navigate = useNavigate();

  // context app
  const [stateApi, dispatchApi] = hooks.useContextApi();
  const [stateBox, dispatchBox] = hooks.useContextBox();
  const [stateLocal, dispatchLocal] = hooks.useContextLocal();

  const { clickLoading, error } = stateApi;
  const { openNotificationBox } = stateBox;

  // formdata login
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // func change character fromdata
  const handlerChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // func submit login
  const handlerLogin = () => {
    dispatchApi(actions.clickLoading());
    login(formData)
      .then((res) => {
        dispatchApi(actions.success(res.data));
        dispatchLocal(actions.saveUser(res.data));
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((res) => {
        dispatchApi(actions.error(res.response.data.message));
        dispatchBox(actions.openNotificationBox());
      });
  };

  // func closr notification
  const closeNotificationBox = () => {
    dispatchBox(actions.closeNotificationBox());
  };

  // test

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-head">
            <span></span>
            <h2 className="login-head-title">Login</h2>
            <button className="login-head-button">
              <IoIosCloseCircleOutline />
            </button>
          </div>
          <div className="login-form">
            <div className="login-form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handlerChangeFormData}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handlerChangeFormData}
              />
            </div>
            <button className="login-form-button" onClick={handlerLogin}>
              Login
            </button>
          </div>
          <div className="login-footer">
            <a href="#">Forgot password?</a>
            <p>
              You now have account? <Link to="/signup">Signup here</Link>
            </p>
          </div>
          <div className="login-social">
            <p>You can login with</p>
            <ul className="login-social-list">
              <li className="login-social-item">
                <Link to="/">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="login-social-item">
                <Link to="/">
                  <RiInstagramFill />
                </Link>
              </li>
              <li className="login-social-item">
                <Link to="/">
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {clickLoading && <Loader />}
      {openNotificationBox && (
        <Notification message={error} close={() => closeNotificationBox} />
      )}
    </>
  );
};
