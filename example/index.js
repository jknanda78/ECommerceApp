// React-Redux modules
import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import reduxLogger from "redux-logger";
import createSagaMiddleware from 'redux-saga';

// Application modules
import Root from "../src/js/routes";
import reducer from "../src/js/screens/Signup/reducers";
import {helloSaga} from "../src/js/screens/Signup/sagas";

const sagaMiddleware = createSagaMiddleware();
const STORE = createStore(reducer, applyMiddleware(reduxLogger(), sagaMiddleware));

render(
  <Root store={STORE} />,
  document.getElementById("container")
);

sagaMiddleware.run(helloSaga);
