import React, { useReducer } from "react";
import { ContextApi, ContextBox, ContextLocal } from "./Context";
import { initApi, initBox, initLocal } from "./initReducer";
import { reducerApi, reducerBox, reducerLocal } from "./reducer";
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

const ProviderLocal = ({ children }) => {
  const [stateLocal, dispatchLocal] = useReducer(
    logger(reducerLocal),
    initLocal
  );
  return (
    <ContextLocal.Provider value={[stateLocal, dispatchLocal]}>
      {children}
    </ContextLocal.Provider>
  );
};

export { ProviderApi, ProviderBox, ProviderLocal };
