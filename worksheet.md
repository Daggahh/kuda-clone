import React from "react";
import kudaLogo from "../assets/svgexport-1.svg";
import "../styles/Navbar.css";
import nigeriaIcon from "../assets/nigeriaIcon.svg";
import MenuItem from "./MenuItem";

const Navbar: React.FC = () => {
const personalLinks = [
{ text: "Discover Personal" },
{ text: "Transfer & Spend" },
{ text: "Save" },
{ text: "Investments" },
{ text: "Kuda Card" },
];

const paymentLinks = {
title: "PAYMENTS",
links: [
{ text: "Electricity" },
{ text: "Airtime" },
{ text: "Internet" },
{ text: "Gift Cards" },
{ text: "Cardless Payments" },
{ text: "TV" },
{ text: "Betting" },
{ text: "Transport" },
],
};

const creditLinks = {
title: "CREDIT",
links: [
{ text: "Overdrafts" },
{ text: "Loans" },
],
};

// const businessLinks = [
// { text: "Business Tools" },
// { text: "Payments" },
// { text: "Loans" },
// ];

// const companyLinks = [
// { text: "About Us" },
// { text: "Careers" },
// { text: "Press" },
// ];

// const helpLinks = [
// { text: "FAQs" },
// { text: "Support Center" },
// ];

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
              <div className="menu-title">
                Personal
                <span className="dropdown-icon">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                  </svg>
                </span>
              </div>
              <Dropdown links={personalLinks} />
            </div>

            <div className="menu-item">
              <div className="menu-title">
                Business
                <span className="dropdown-icon">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                  </svg>
                </span>
              </div>
              <Dropdown links={businessLinks} />
            </div>

            <div className="menu-item">
              <div className="menu-title">
                Company
                <span className="dropdown-icon">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                  </svg>
                </span>
              </div>
              <Dropdown links={companyLinks} />
            </div>

            <div className="menu-item">
              <div className="menu-title">
                Help
                <span className="dropdown-icon">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
                  </svg>
                </span>
              </div>
              <Dropdown links={helpLinks} />
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
