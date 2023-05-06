import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import BulbStore from "./Store/BulbStore";
import "./styles.css";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={BulbStore}>
    <App />
  </Provider>
  , rootElement
);
