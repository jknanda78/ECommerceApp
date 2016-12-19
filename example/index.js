import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reduxLogger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import Signup from "../src/js/screens/Signup/containers";
import reducer from "../src/js/screens/Signup/reducers";
import {helloSaga} from "../src/js/screens/Signup/sagas";

const sagaMiddleware = createSagaMiddleware();
const STORE = createStore(reducer, applyMiddleware(reduxLogger(), sagaMiddleware));

render (
  <Provider store={STORE} key="provider">
    <Signup />
  </Provider>,
  document.getElementById("container")
);

sagaMiddleware.run(helloSaga);
