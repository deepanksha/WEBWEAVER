import React from "react";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>WebWeaver</h1>
      <main>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Features</li>
        <li>Implementation</li>
      </main>
    </nav>
  );
};

export default Header;
