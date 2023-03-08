import React, { useState } from "react";
import { SideBar_infoUser } from "../../common/sideBar_infoUser";
import { EditUserInfo } from "../../common/EditUserInfo";
import { hooks, actions } from "../../store";
import { ID1, ID2, ID3, ID4, ID5 } from "./ElementOfUserInfo";
export const UserInfo = () => {
  const [idNav, setIdNav] = useState("1");
  const [stateBox, dispatchBox] = hooks.useContextBox();
  const { openEditUserBox } = stateBox;

  const handerOpenEditUserBox = () => {
    dispatchBox(actions.openEditUserBox());
  };

  const handlerCloseEditUserBox = () => {
    dispatchBox(actions.closeEditUserBox());
  };

  const dataByIdNav = () => {
    switch (idNav) {
      case "1":
        return <ID1 openEditUserBox={() => handerOpenEditUserBox} />;
      case "2":
        return <ID2 />;
      case "3":
        return <ID3 />;
      case "4":
        return <ID4 />;
      case "5":
        return <ID5 />;
      default:
        return;
    }
  };

  console.log("re-render", idNav);

  return (
    <>
      <div className="layout-app">
        <div className="infoUser">
          <SideBar_infoUser setIdNav={setIdNav} />
          <div className="infoUser-content">{dataByIdNav()}</div>
        </div>
      </div>
      {openEditUserBox && (
        <EditUserInfo closeBox={() => handlerCloseEditUserBox} />
      )}
    </>
  );
};
