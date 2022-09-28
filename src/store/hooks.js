import { useContext } from "react";
import { ContextApi, ContextBox } from "./Context";

const useContextApi = () => {
  const [stateApi, dispatchApi] = useContext(ContextApi);
  return [stateApi, dispatchApi];
};

const useContextBox = () => {
  const [stateBox, dispatchBox] = useContext(ContextBox);
  return [stateBox, dispatchBox];
};

export { useContextApi, useContextBox };
