import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import "./index.css";

export function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTopOnMount />
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
