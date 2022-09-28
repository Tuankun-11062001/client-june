import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderApi, ProviderBox } from "./store";
import App from "./App";
import "./sass/style.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderApi>
      <ProviderBox>
        <App />
      </ProviderBox>
    </ProviderApi>
  </React.StrictMode>
);
