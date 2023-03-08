import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderApi, ProviderBox, ProviderLocal } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./sass/style.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProviderApi>
        <ProviderBox>
          <ProviderLocal>
            <App />
          </ProviderLocal>
        </ProviderBox>
      </ProviderApi>
    </Router>
  </React.StrictMode>
);
