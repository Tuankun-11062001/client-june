import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export const ID1 = ({ openEditUserBox }) => {
  return (
    <>
      <div className="infoUser-content-banner">
        <img
          src="https://images.unsplash.com/photo-1665162858084-aa2cf78eba8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <div className="infoUser-content-banner-user">
          <div className="infoUser-content-banner-user-image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="infoUser-content-banner-user-info">
            <h3 className="infoUser-content-banner-user-name">Tuan Nguyen</h3>
            <p className="infoUser-content-banner-user-favourite">
              Sport - movie - natural
            </p>
            <ul className="infoUser-content-banner-user-social">
              <li className="infoUser-content-banner-user-social-item">
                <a href="http://facebook.com" target="_blank">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="infoUser-content-banner-user-social-item">
                <a href="http://facebook.com" target="_blank">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="infoUser-content-banner-user-social-item">
                <a href="http://facebook.com" target="_blank">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="infoUser-content-detail">
        <div className="infoUser-content-detail-group">
          <span>Name: </span>
          <p>Tuaan Nguyen</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Date: </span>
          <p>11-06-2001</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Email: </span>
          <p>TuanNguyen@gmail.com</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Number phone: </span>
          <p>12345678</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Region: </span>
          <p>VN</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Province: </span>
          <p>Lam Dong</p>
        </div>
        <div className="infoUser-content-detail-group">
          <span>Address: </span>
          <p>03 nguyen truong to - loc tien</p>
        </div>
      </div>
      <button
        className="infoUser-content-buttonChange"
        onClick={openEditUserBox()}
      >
        Change Info
      </button>
    </>
  );
};
