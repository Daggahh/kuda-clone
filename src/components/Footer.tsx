import React, { useEffect } from "react";
import kudaLogo from "@assets/svgexport-1.svg";
import appleStore from "@assets/iosStore.svg";
import googlePlay from "@assets/googlePlay.svg";
import kudaWeb from "@assets/svgexport-70.svg";
import twitter from "@assets/svgexport-71.svg";
import instagram from "@assets/svgexport-72.svg";
import facebook from "@assets/svgexport-73.svg";
import youtube from "@assets/svgexport-74.svg";
import jk from "@assets/svgexport-75.svg";
import linkedin from "@assets/svgexport-76.svg";
import gsap from "gsap";
import "@styles/Footer.css";

const Footer: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-container",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".kuda-footer",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer className="kuda-footer">
      <div className="footer-container">
        <div className="kuda-footer--nav">
          {/* Column 1 */}
          <div className="kuda-footer--col">
            <div className="kuda-footer--brand">
              <img src={kudaLogo} alt="" />
            </div>
          </div>

          {/* Personal */}
          <div className="kuda-footer--col">
            <p className="footer-header text-bold color-primary">Personal</p>
            <ul className="kuda-footer--menu color-black">
              <li>
                <a href="/en-ng/">Discover Personal</a>
              </li>
              <li>
                <a href="/en-ng/spend/">Transfer & Spend</a>
              </li>
              <li>
                <a href="/en-ng/save/">Save</a>
              </li>
              <li>
                <a href="/en-ng/investments/">Investments</a>
              </li>
              <li>
                <a href="/en-ng/cards/">Kuda card</a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="kuda-footer--col">
            <p className="footer-header text-bold color-primary">Business</p>
            <ul className="kuda-footer--menu color-black">
              <li>
                <a href="/en-ng/business/">Discover Business</a>
              </li>
              <li>
                <a href="/en-ng/business/registration-cac-tin/">
                  Business Registration
                </a>
              </li>
              <li>
                <a href="/en-ng/business/softpos-payments/">softPOS</a>
              </li>
              <li>
                <a href="/en-ng/business/invoicing/">Invoicing</a>
              </li>
              <li>
                <a href="/en-ng/business/pos/">POS Machine</a>
              </li>
              <li>
                <a href="/en-ng/business/loans/">Business Loan</a>
              </li>
              <li>
                <a href="/en-ng/business/open-api/">Business API</a>
              </li>
              <li>
                <a href="/joinkudabusiness/">Join Kuda Business</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="kuda-footer--col">
            <p className="footer-header text-bold color-primary">Company</p>
            <ul className="kuda-footer--menu color-black">
              <li>
                <a href="/blog/">Blog</a>
              </li>
              <li>
                <a href="/press/">Press</a>
              </li>
              <li>
                <a href="/careers/">Join Our Team</a>
              </li>
              <li>
                <a href="/about/">About Us</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="kuda-footer--col">
            <p className="footer-header text-bold color-primary">Help</p>
            <ul className="kuda-footer--menu color-black">
              <li>
                <a
                  href="https://help.kuda.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Help
                </a>
              </li>
              <li>
                <a href="/scam-awareness/">Scam Awareness</a>
              </li>
              <li>
                <a href="/en-ng/legal/faq/">FAQs</a>
              </li>
              <li>
                <a href="/security/">Security</a>
              </li>
              <li>
                <a href="/contact/">Contact Us</a>
              </li>
              <li>
                <a
                  href="https://selfhelp.kuda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Self Help
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency */}
          <div className="kuda-footer--col">
            <p className="footer-header text-bold color-primary">
              Transparency
            </p>
            <ul className="kuda-footer--menu color-black">
              <li>
                <a href="/en-ng/legal/terms/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/mobile/ng/legal/privacy-policy/">Privacy Policy</a>
              </li>
              <li>
                <a href="/en-ng/legal/information-security-policy/">
                  Information Security Policy
                </a>
              </li>
              <li>
                <a href="/en-ng/legal/cookie-policy/">Cookie Policy</a>
              </li>
              <li>
                <a
                  href="https://help.kuda.com/support/solutions/articles/73000621873-whistleblowing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whistleblowing Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Download Buttons */}
        <div className="footer-download">
          <div className="footer-download-buttons">
            <div className="app-store">
              <img src={appleStore} alt="Kuda App Preview" />
            </div>
            <div className="google-play">
              '
              <img src={googlePlay} alt="Kuda App Preview" />
            </div>
            <div className="kuda-web">
              <img src={kudaWeb} alt="Kuda App Preview" />
            </div>
          </div>
        </div>

        <div className="footer-product">
          Products may vary by country or market.
        </div>

        {/* Additional Information */}
        <div className="footer-contact--information">
          <div className="information-col">
            <p className="footer-header text-bold color-primary">Contact</p>
            <div className="other-info">
              <div className="flex-column">
                <a className="link-decoration" href="/">
                  help@kuda.com
                </a>
              </div>
              <div className="kuda-social-icons">
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
                <a href="/">
                  <img src={youtube} alt="" />
                </a>
                <a href="/">
                  <img src={jk} alt="" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="information-col">
            <p className="footer-header">Lagos</p>
            <div className="other-info">
              <p className="color-black">
                1-11 Commercial Avenue, Yaba, Lagos,
                <br />
                Nigeria
              </p>
            </div>
          </div>

          <div className="information-col">
            <p className="footer-header">London</p>
            <div className="other-info">
              <p className="color-black">
                5 New Street Square, <br /> London, EC4A 3TW, <br /> United
                Kingdom
              </p>
            </div>
          </div>

          <div className="information-col">
            <p className="footer-header">Cape Town</p>
            <div className="other-info">
              <p className="color-black">
                146 Campground Road, <br /> Snakepit Building, Level 4,
                Newlands, Cape Town
              </p>
            </div>
          </div>

          <div className="information-col">
            <p className="footer-header">Canada</p>
            <div className="other-info">
              <p className="color-black">
                3080 Yonge Street, <br /> Suite 6060, Toronto, <br /> Ontario
                M4N 3N1
              </p>
            </div>
          </div>
        </div>

        {/* Footer-Conditions */}
        <div className="kuda-footer--conditions">
          <p className="mb-4">
            *Kuda Customers get 25 free transfer to other banks every month.
            Extra transfers to other banks cost ₦10 each.
            <br />
            **Kuda account holders can deposit money in over 10,000 branches
            across Nigeria for free.
          </p>
          <p className="mb-4">
            {" "}
            © 2024 Kuda Technologies Ltd (Company No.11472232). All rights
            reserved.
          </p>
          <p className="mb-4">
            If you would like to find out more about which Kuda entity you
            receive services from, please reach out to us via the in-app chat in
            the Kuda app. Nigerian banking services offered by Kuda Microfinance
            Bank (RC796975) with registered address at 1-11 Commercial Avenue,
            Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the
            Central Bank of Nigeria. Deposits are insured by the Nigerian
            Deposit Insurance Corporation (NDIC).
          </p>
          <p className="mb-4">
            UK services are offered by Kuda EMI Ltd (Company No. 13724208) with
            registered address at 5 New Street Square, London, EC4A 3TW, United
            Kingdom.
          </p>
          <p>
            Canada services will be provided by Kuda Canada Technologies
            Limited, an Ontario corporation registered under number 1000286176,
            with its registered address located at 3080 Yonge Street, Suite
            6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is
            duly registered with The Financial Transactions and Reports Analysis
            Centre of Canada (FINTRAC) as a money service business, bearing
            registration number M23163015.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
