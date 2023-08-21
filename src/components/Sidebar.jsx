import React from "react";
import "../styles/sidebar.scss";
import { sidebarRoutes } from "../constants";
import { EggFried } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link to={route.path} key={index}>
            <li>
              <route.icon />
              <span>{route.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
