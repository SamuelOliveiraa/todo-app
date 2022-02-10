import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistedStore, store } from "./Store/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
