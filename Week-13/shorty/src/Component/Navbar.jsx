import React from "react";
import "../Style/NavBar.css";

const NavBar = () => {
    return (
      <nav className="navigation">
        <a href="/" className="brandName">
            <div className="namePart1">
                <p>
                    Shorty:
                </p>
            </div>
            <div className="namePart2">
                <p>
                    Link Shortner!
                </p>
            </div>
        </a>
        <div
          className="navigationMenu"
        >
          <ul>
            <li>
                <a href={`/`}>Home</a>
            </li>
            <li>
                <a href={`/#`}>About</a>
            </li>
            <li>
                <a href={`/Contact`}>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default NavBar;
