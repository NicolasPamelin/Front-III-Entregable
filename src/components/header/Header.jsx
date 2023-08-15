import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./vite.svg" alt="Vite logo" />
      </div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="https://github.com/AGuekdjian" target="_blank">
              <FaGithub fontSize="30px" color="white" cursor="pointer" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anthony-guekdjian/"
              target="_blank"
            >
              <FaLinkedinIn
                fontSize="30px"
                color="dodgerblue"
                cursor="pointer"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
