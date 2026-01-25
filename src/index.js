import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { I18nProvider } from "./utils/i18n";
import { ThemeProvider } from "./context/ThemeContext";
import en from "./translations/en";
import de from "./translations/de";
import da from "./translations/da";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <I18nProvider translations={{ en, de, da }} defaultLang="de">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </ThemeProvider>
);
