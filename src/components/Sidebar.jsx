import React from "react";
import "../styles/sidebar.scss";
import { sidebarRoutes } from "../constants";
import { EggFried } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar__container">
      <div className="logo">
        <p>
          <EggFried />
          <span>BurgerMIN</span>
        </p>
      </div>
      <ul className="routes">
        {sidebarRoutes.map((route, index) => (
          <li key={index}>
            <route.icon />
            <span>{route.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
