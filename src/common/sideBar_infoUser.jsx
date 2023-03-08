import React, { useEffect, useState } from "react";
import sideBarIcon from "../assets/SideBarIcon";
import { FiKey } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
export const SideBar_infoUser = ({ setIdNav }) => {
  useEffect(() => {
    const parentUl = document.querySelector(".sidebar");
    const childLi = parentUl.querySelectorAll(".sidebar-item");

    for (let child of childLi) {
      child.addEventListener("click", () => {
        for (let childActive of childLi) {
          if (childActive.classList.contains("active")) {
            childActive.classList.remove("active");
          }
        }
        if (!child.classList.contains("active")) {
          child.classList.add("active");
        }
        setIdNav(child.dataset.id);
      });
    }
  }, []);

  return (
    <ul className="sidebar">
      <li className="sidebar-item active" data-id="1">
        <div className="sidebar-item-left">
          <span>
            <AiOutlineUser />
          </span>
          <p>User info</p>
        </div>
      </li>
      <li className="sidebar-item " data-id="2">
        <div className="sidebar-item-left">
          <span>
            <FiKey />
          </span>
          <p>Change Password</p>
        </div>
      </li>
      <li className="sidebar-item " data-id="3">
        <div className="sidebar-item-left">
          <span>
            <MdDeliveryDining />
          </span>
          <p>Deliver</p>
        </div>
      </li>
      <li className="sidebar-item " data-id="4">
        <div className="sidebar-item-left">
          <span>
            <GiReceiveMoney />
          </span>
          <p>Has bought</p>
        </div>
      </li>
      <li className="sidebar-item " data-id="5">
        <div className="sidebar-item-left">
          <span>
            <IoTicketSharp />
          </span>
          <p>Voucher</p>
        </div>
      </li>
    </ul>
  );
};
