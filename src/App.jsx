import React from "react";
import "./styles/app.scss";
import { Home, Messages } from "./pages";
import { Sidebar, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="main__content w-full">
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="bills" element={<Home />} />
            <Route path="foods" element={<Home />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Home />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default App;
