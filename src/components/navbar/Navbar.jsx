import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={classes.navbar}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
