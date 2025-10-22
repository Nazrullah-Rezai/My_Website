import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nProvider } from "./utils/i18n";
import en from "./translations/en";
import de from "./translations/de";
import da from "./translations/da";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <I18nProvider translations={{ en, de, da }} defaultLang="de">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </Provider>
);
