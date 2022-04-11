import React from "react";
import ReactDOM from "react-dom";
import { store } from "./utils/store";
import { Provider } from "react-redux";

import "./styles.scss";
import RoutesConfig from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesConfig />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
