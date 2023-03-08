import {
  CLEAR_USER,
  CLICK_LOADING,
  CLOSE_EDIT_USER_BOX,
  CLOSE_INFOMATION_BOUGHT_CARD,
  CLOSE_INFOMATION_DELIVER_CARD,
  CLOSE_NOTIFICATION_BOX,
  ERROR,
  OPEN_EDIT_USER_BOX,
  OPEN_INFOMATION_BOUGHT_CARD,
  OPEN_INFOMATION_DELIVER_CARD,
  OPEN_NOTIFICATION_BOX,
  SAVE_USER,
  SUCCESS,
} from "./constains";

// api
const clickLoading = () => ({
  type: CLICK_LOADING,
});

const success = (payload) => ({
  type: SUCCESS,
  payload,
});

const error = (payload) => ({
  type: ERROR,
  payload,
});

// box
const openNotificationBox = () => ({
  type: OPEN_NOTIFICATION_BOX,
});

const closeNotificationBox = () => ({
  type: CLOSE_NOTIFICATION_BOX,
});

const openEditUserBox = () => ({
  type: OPEN_EDIT_USER_BOX,
});

const closeEditUserBox = () => ({
  type: CLOSE_EDIT_USER_BOX,
});

const openInfomationDeliverCard = () => ({
  type: OPEN_INFOMATION_DELIVER_CARD,
});

const closeInfomationDeliverCard = () => ({
  type: CLOSE_INFOMATION_DELIVER_CARD,
});

const openInfomationBoughtCard = () => ({
  type: OPEN_INFOMATION_BOUGHT_CARD,
});

const closeInfomationBoughtCard = () => ({
  type: CLOSE_INFOMATION_BOUGHT_CARD,
});

// local
const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

const clearUser = () => ({
  type: CLEAR_USER,
});

export {
  clickLoading,
  success,
  error,
  openNotificationBox,
  closeNotificationBox,
  openEditUserBox,
  closeEditUserBox,
  openInfomationDeliverCard,
  closeInfomationDeliverCard,
  openInfomationBoughtCard,
  closeInfomationBoughtCard,
  saveUser,
  clearUser,
};
