"use client";
import "./layout.css"; 
import { Navbar, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // ✅ Apply theme & save it in localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Theme Toggle Function
  const toggleTheme = () => {
    console.log("Theme toggle clicked!");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
     <div>  {/* ✅ Apply theme only here */}
      <Navbar className="navbar">
        <h2>COVID-19 Dashboard</h2>
        <Button variant="bordered" onClick={toggleTheme}>Switch Theme</Button>
      </Navbar>
      <div className={`dashboard-container ${theme}`}>
        <aside className="sidebar">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/stats">COVID Stats</a></li>
            <li><a href="/charts">Charts & Graphs</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </aside>
        <main className={`main-content ${theme}`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;