import React from "react";
import "./styles/app.scss";
import { Home } from "./pages";
import { Sidebar, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="main__content">
        <Navbar />
        <div className="wrapper">
          <Home />
        </div>
      </section>
    </div>
  );
};

export default App;
