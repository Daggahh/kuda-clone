import React from "react";
import kudaLogo from "@assets/svgexport-1.svg";
import nigeriaIcon from "@assets/nigeriaIcon.svg";
import discover from "@assets/svgexport-3.svg";
import transfer from "@assets/svgexport-4.svg";
import save from "@assets/svgexport-5.svg";
import investment from "@assets/svgexport-6.svg";
import kudacard from "@assets/svgexport-7.svg";
import electricity from "@assets/svgexport-8.svg";
import airtime from "@assets/svgexport-9.svg";
import internet from "@assets/svgexport-10.svg";
import giftcard from "@assets/svgexport-11.svg";
import cardless from "@assets/svgexport-12.svg";
import tv from "@assets/svgexport-13.svg";
import betting from "@assets/svgexport-14.svg";
import transport from "@assets/svgexport-15.svg";
import overdrafts from "@assets/svgexport-16.svg";
import loans from "@assets/svgexport-17.svg";
import MenuItem from "./MenuItems";
import DB from "@assets/svgexport-18.svg";
import BR from "@assets/svgexport-19.svg";
import pos from "@assets/svgexport-20.svg";
import payroll from "@assets/svgexport-21.svg";
import CB from "@assets/svgexport-22.svg";
import pos2 from "@assets/svgexport-23.svg";
import invoicing from "@assets/svgexport-24.svg";
import api from "@assets/svgexport-25.svg";
import bento from "@assets/svgexport-26.svg";
import expense from "@assets/svgexport-27.svg";
import virtual from "@assets/svgexport-28.svg";
import BL from "@assets/svgexport-29.svg";
import sendM from "@assets/svgexport-30.svg";
import BP from "@assets/svgexport-31.svg";
import global from "@assets/svgexport-34.svg";
import uk from "@assets/svgexport-35.svg";
import canada from "@assets/svgexport-36.svg";
import ghana from "@assets/svgexport-37.svg";
import uganda from "@assets/svgexport-38.svg";
import "@styles/Navbar.css";
import MenuItems2 from "./Menuitems2";

const Navbar: React.FC = () => {
  const personalLinks = [
    { icon: <img src={discover} alt="" />, text: "Discover Personal" },
    { icon: <img src={transfer} alt="" />, text: "Transfer & Spend" },
    { icon: <img src={save} alt="" />, text: "Save" },
    { icon: <img src={investment} alt="" />, text: "Investments" },
    { icon: <img src={kudacard} alt="" />, text: "Kuda Card" },
  ];

  const paymentLinks = {
    title: "PAYMENTS",
    links: [
      { icon: <img src={electricity} alt="" />, text: "Electricity" },
      { icon: <img src={airtime} alt="" />, text: "Airtime" },
      { icon: <img src={internet} alt="" />, text: "Internet" },
      { icon: <img src={giftcard} alt="" />, text: "Gift Cards" },
      { icon: <img src={cardless} alt="" />, text: "Cardless Payments" },
      { icon: <img src={tv} alt="" />, text: "TV" },
      { icon: <img src={betting} alt="" />, text: "Betting" },
      { icon: <img src={transport} alt="" />, text: "Transport" },
    ],
  };

  const creditLinks = {
    title: "CREDIT",
    links: [
      { icon: <img src={overdrafts} alt="" />, text: "Overdrafts" },
      { icon: <img src={loans} alt="" />, text: "Loans" },
    ],
  };

  const businessLinks = [
    { icon: <img src={DB} alt="" />, text: " Discover Business" },
    { icon: <img src={BR} alt="" />, text: "Business Registration" },
    { icon: <img src={pos} alt="" />, text: "softPOS" },
    { icon: <img src={payroll} alt="" />, text: "Kuda Payroll" },
    { icon: <img src={CB} alt="" />, text: "Cashback" },
    { icon: <img src={pos2} alt="" />, text: "POS Machine " },
    { icon: <img src={invoicing} alt="" />, text: "Invoicing" },
    { icon: <img src={api} alt="" />, text: "Business API" },
    { icon: <img src={bento} alt="" />, text: "Payroll with Bento" },
    { icon: <img src={expense} alt="" />, text: "Expense Accounts" },
    { icon: <img src={virtual} alt="" />, text: "Virtual POS" },
    { icon: <img src={BL} alt="" />, text: "Business Loan" },
  ];

  const businessPaymentLinks = {
    title: "PAYMENTS",
    links: [
      { icon: <img src={sendM} alt="" />, text: "Send Money" },
      { icon: <img src={tv} alt="" />, text: "TV" },
      { icon: <img src={airtime} alt="" />, text: "Airtime & Internet Data" },
      { icon: <img src={electricity} alt="" />, text: "Electricity" },
      { icon: <img src={BP} alt="" />, text: "Bill Payments" },
    ],
  };

  const companyLinks = [
    { text: "Blog" },
    { text: "Press" },
    { text: " Join Our Team" },
    { text: "About us" },
  ];

  const helpLinks = [
    { text: "Get Help" },
    { text: "Scam Awareness" },
    { text: "FAQs" },
    { text: "Security" },
    { text: "Contact Us" },
    { text: "Self Help" },
  ];

  const countryIconlinks = [
    { icon: <img src={global} alt="" />, text: "Global" },
    { icon: <img src={nigeriaIcon} alt="" />, text: "Nigeria" },
    { icon: <img src={uk} alt="" />, text: "United Kingdom" },
    { icon: <img src={canada} alt="" />, text: "Canada" },
    { icon: <img src={ghana} alt="" />, text: "Ghana", text2: "Coming Soon" },
    { icon: <img src={uganda} alt="" />, text: "Uganda", text2: "Coming Soon" },
  ];

  return (
    <nav className="kuda-header">
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <a href="/">
              <img
                src={kudaLogo}
                alt="kuda-logo"
                style={{ width: "81px", height: "18px" }}
              />
            </a>
          </div>

          <ul className="nav-menu">
            <MenuItem
              title="Personal"
              links={personalLinks}
              subSections={[paymentLinks, creditLinks]}
            />
            <MenuItem
              title="Business"
              links={businessLinks}
              subSections={[businessPaymentLinks]}
            />
            <MenuItem title="Company" links={companyLinks} />
            <MenuItem title="Help" links={helpLinks} />
          </ul>
        </div>

        <div className="navbar-right">
          <button className="sign-in">Sign In</button>
          <button className="join-kuda">Join Kuda</button>
          <MenuItems2 links={countryIconlinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
