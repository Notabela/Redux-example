import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import "./index.css";

const initialState = {
  count: 0
};

// ...

//const store = createStore(reducer);

//add thunk middleware to pull some data or run some function
//in the actiosn
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
