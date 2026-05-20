import React from "react";
import ReactDOM from "react-dom/client";
import AssemblyEndGame from "./App";
import { BrowserRouter, Route, Routes } from "react-router";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssemblyEndGame />} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
