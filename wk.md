import React from "react";
import kudaLogo from ".../assets/svgexport-1.svg";
import ".../styles/Navbar.css";
import nigeriaIcon from ".../assets/nigeriaIcon.svg";

const Navbar: React.FC = () => {
return (
<nav className="kuda-header">
<div className="navbar">
<div className="navbar-left">
<div className="logo">
<a href="/">
<img src={kudaLogo} alt="kuda-logo" />
</a>
</div>

          <div className="nav-menu">
            <div className="menu-item">
              Personal
              <span className="dropdown-icon ">
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                </svg>
              </span>
            </div>

            <div className="menu-item">
              Business
              <span className="dropdown-icon">
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                </svg>
              </span>
            </div>

            <div className="menu-item">
              Company
              <span className="dropdown-icon">
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                </svg>
              </span>
            </div>

            <div className="menu-item">
              Help
              <span className="dropdown-icon">
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                  <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <button className="sign-in">Sign In</button>

          <button className="join-kuda">Join Kuda</button>

          <div className="menu-icon">
            <img src={nigeriaIcon} alt="Nigeria Icon" />
          </div>
        </div>
      </div>
    </nav>

);
};

export default Navbar;
