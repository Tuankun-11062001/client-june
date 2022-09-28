import React, { useReducer } from "react";
import { ContextApi, ContextBox } from "./Context";
import { initApi, initBox } from "./initReducer";
import { reducerApi, reducerBox } from "./reducer";
import logger from "./logger";
const ProviderApi = ({ children }) => {
  const [stateApi, dispatchApi] = useReducer(logger(reducerApi), initApi);
  return (
    <ContextApi.Provider value={[stateApi, dispatchApi]}>
      {children}
    </ContextApi.Provider>
  );
};

const ProviderBox = ({ children }) => {
  const [stateBox, dispatchBox] = useReducer(logger(reducerBox), initBox);
  return (
    <ContextBox.Provider value={[stateBox, dispatchBox]}>
      {children}
    </ContextBox.Provider>
  );
};

export { ProviderApi, ProviderBox };
