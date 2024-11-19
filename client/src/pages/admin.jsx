import React, { useState } from "react";
import { tabs } from "../Data/Admin/asideMenu";
import "../css/admin.css";
import Card from "../components/Card";
import Overview from "./Admin/Overview";
import Notification from "./Admin/Notification";
import Payments from "./Admin/Payments";
import Users from "./Admin/Users";

export default function Admin() {
  const [currentView, setCurrentView] = useState("Overview");
  //   let myBool = false;
  const handleClick = (active) => {
    setCurrentView(active);
  };

  function AdminSideMenu(props) {
    return (
      <div className="sideBar">
        <ol>
          {tabs.map((tab, index) => (
            <li
              style={{ color: currentView == tab ? "yellow" : null }}
              key={index}
              onClick={() => handleClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return (
    <div>
      <AdminSideMenu />
      <div className="viewPanel">
        <h2 style={{ textAlign: "center" }}>Admin dashboard</h2>
        <h2>{currentView}</h2>
        {currentView === "Overview" && <Overview />}
        {currentView === "Notifications" && <Notification />}
        {currentView === "Payments" && <Payments />}
        {currentView === "Users" && <Users />}
      </div>
    </div>
  );
}
