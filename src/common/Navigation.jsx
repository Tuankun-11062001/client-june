import React from "react";
import { hooks } from "../store";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { getUserByToken } from "../user/apis/loginApi";
import { actions } from "../store";
export const Navigation = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // get context
  const [stateLocal, dispatchLocal] = hooks.useContextLocal();
  const { user } = stateLocal;

  // func get user by token
  const getUser = () => {
    getUserByToken({ token }).then((res) => {
      dispatchLocal(actions.saveUser(res.data));
    });
  };

  const handlerOpenList = (e) => {
    const parent = e.target.parentElement;
    const listOptions = parent.querySelector(".navigation-left-user-list");
    listOptions.classList.toggle("active");
  };

  const handlerLogOut = () => {
    dispatchLocal(actions.clearUser());
    localStorage.clear();

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div>
      <div className="navigation layout-app">
        <div className="navigation-container">
          <Link to="/" className="navigation-logo">
            June Store
          </Link>
          <div className="navigation-left">
            <div className="navigation-left-input">
              <span>
                <BiSearch />
              </span>
              <input placeholder="search..." onSubmit={console.log("enter")} />
            </div>
            <Link to="/cart" className="navigation-left-cart">
              <FiShoppingCart />
              <span className="navigation-left-cart-number"></span>
            </Link>
            <div className="navigation-left-notification">
              <IoMdNotificationsOutline />
              <span className="navigation-left-notification-number"></span>
            </div>
            {user.username !== undefined ? (
              <div className="navigation-left-user">
                <div
                  className="navigation-left-user-image"
                  onClick={handlerOpenList}
                >
                  <img src={user.image} alt={user.username} />
                </div>
                <ul className="navigation-left-user-list">
                  <li className="navigation-left-user-item">
                    <Link to="/userinfo">Info User</Link>
                  </li>
                  <li className="navigation-left-user-item">
                    <Link to="/">Product has bought</Link>
                  </li>
                  <li className="navigation-left-user-item">
                    <button
                      className="navigation-left-user-item"
                      onClick={handlerLogOut}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : token ? (
              getUser()
            ) : (
              <Link to="/login" className="navigation-left-login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
