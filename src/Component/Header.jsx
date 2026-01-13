import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="header-container">
        <h1 className="logo">QSkill Tools</h1>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/translator">Translator</Link>
          </li>
          <li>
            <Link to="/random-string">Random Generator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
