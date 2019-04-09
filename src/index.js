import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

//const store = createStore(reducer);

//add thunk middleware to pull some data or run some function
//in the actiosn
const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
