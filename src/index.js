import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

// ACTION ->  describe what are you gonna do eg. increment, decrement
// simple function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER -> describes how the ACTIONS transform state into next state
// simple function takes initial state and action parameter
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// STORE -> globalized state, all the data for application
let store = createStore(counter);

// Display in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> send the action to reducer
// execute the action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
