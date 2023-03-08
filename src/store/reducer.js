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
// const initApi = {
//   loading: true,
//   clickLoading: false,
//   data: [],
//   error: "",
// };
const reducerApi = (state, action) => {
  switch (action.type) {
    case CLICK_LOADING:
      console.log("click");
      return {
        ...state,
        clickLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        clickLoading: false,
        data: action.payload,
        error: "",
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        clickLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const reducerBox = (state, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATION_BOX:
      return {
        ...state,
        openNotificationBox: true,
      };
    case CLOSE_NOTIFICATION_BOX:
      return {
        ...state,
        openNotificationBox: false,
      };
    case OPEN_EDIT_USER_BOX:
      return {
        ...state,
        openEditUserBox: true,
      };
    case CLOSE_EDIT_USER_BOX:
      return {
        ...state,
        openEditUserBox: false,
      };
    case OPEN_INFOMATION_DELIVER_CARD:
      return {
        ...state,
        openInformationDeliverCard: true,
      };
    case CLOSE_INFOMATION_DELIVER_CARD:
      return {
        ...state,
        openInformationDeliverCard: false,
      };
    case OPEN_INFOMATION_BOUGHT_CARD:
      return {
        ...state,
        openInformationBoughtCard: true,
      };
    case CLOSE_INFOMATION_BOUGHT_CARD:
      return {
        ...state,
        openInformationBoughtCard: false,
      };
    default:
      return state;
  }
};

const reducerLocal = (state, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export { reducerApi, reducerBox, reducerLocal };
