import React, { useState } from "react";
import { actions, hooks } from "../../../store";
import { Notification } from "../../../common/Notification";
import { editPassword } from "../../apis/user";
import { Loader } from "../../../common/Loader";

export const ID2 = () => {
  const [stateBox, dispatchBox] = hooks.useContextBox();
  const [stateApi, dispatchApi] = hooks.useContextApi();

  const { clickLoading } = stateApi;
  const { openNotificationBox } = stateBox;

  const [message, setMessage] = useState("");

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });

  const handlerChangeDataPassword = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerSubmitDataPassword = () => {
    const { oldPassword, reNewPassword, newPassword } = passwordData;

    if (oldPassword === "" || newPassword === "" || reNewPassword === "") {
      dispatchBox(actions.openNotificationBox());
      setMessage("Missing some field");
    }

    if (newPassword !== reNewPassword) {
      dispatchBox(actions.openNotificationBox());
      return setMessage("Password not match");
    }

    const customData = {
      ...passwordData,
      token: localStorage.getItem("token"),
    };
    dispatchApi(actions.clickLoading());

    editPassword(customData)
      .then((res) => {
        dispatchApi(actions.success({}));
        dispatchBox(actions.openNotificationBox());
        return setMessage(res.data.message);
      })
      .catch((res) => {
        dispatchApi(actions.error({}));
        dispatchBox(actions.openNotificationBox());
        return setMessage(res.response.data.message);
      });
  };

  const closeNotificationBox = () => {
    dispatchBox(actions.closeNotificationBox());
  };

  return (
    <>
      <div className="id2">
        <h3 className="id2-title">Change Password</h3>
        <div className="id2-form">
          <div className="id2-form-group">
            <label htmlFor="">Old password</label>
            <input
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlerChangeDataPassword}
              type="password"
            />
          </div>
          <div className="id2-form-group">
            <label htmlFor="">New password</label>
            <input
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlerChangeDataPassword}
              type="password"
            />
          </div>
          <div className="id2-form-group">
            <label htmlFor="">Re-new password</label>
            <input
              name="reNewPassword"
              value={passwordData.reNewPassword}
              onChange={handlerChangeDataPassword}
              type="password"
            />
          </div>
          <button
            className="id2-form-change"
            onClick={handlerSubmitDataPassword}
          >
            Change
          </button>
        </div>
      </div>
      {openNotificationBox && (
        <Notification message={message} close={() => closeNotificationBox} />
      )}
      {clickLoading && <Loader />}
    </>
  );
};
