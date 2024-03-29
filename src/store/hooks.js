import { useContext } from "react";
import { ContextApi, ContextBox, ContextLocal } from "./Context";

const useContextApi = () => {
  const [stateApi, dispatchApi] = useContext(ContextApi);
  return [stateApi, dispatchApi];
};

const useContextBox = () => {
  const [stateBox, dispatchBox] = useContext(ContextBox);
  return [stateBox, dispatchBox];
};

const useContextLocal = () => {
  const [stateLocal, dispatchLocal] = useContext(ContextLocal);
  return [stateLocal, dispatchLocal];
};

export { useContextApi, useContextBox, useContextLocal };
