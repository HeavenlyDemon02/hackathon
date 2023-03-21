import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className="navs">
        <div className="logoname">
        <a href="/">
          <img
            className="logo"
            src="https://img.lovepik.com/element/40174/0061.png_1200.png"
            alt="logo"
          />
        </a>
        <span  className="logname">KRASHIK</span>
        </div>
        <div className="navpart2">
          <div className="nav-options">
            <ul>
              <li>
                <Link to="/product" style={{ textDecoration: 'none', color:'white', fontWeight:400}}>Products</Link>
              </li>
              <li>
                <a href="#Aboutus" style={{ textDecoration: 'none', color:'white', fontWeight:400}}>About Us</a>
              </li>
              <li>
                <a href="#foot" style={{ textDecoration: 'none', color:'white', fontWeight:400}}>Contact Us</a>
              </li>
              <li>
                <div className="signs">
                  <button className="reg">Sign Up</button>
                  <button className="log">Sign In</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
