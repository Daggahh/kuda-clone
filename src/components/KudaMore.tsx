import React, { useEffect } from "react";
import arrowright from "../assets/svgexport-53.svg";
import Kbusiness from "../assets/svgexport-64.svg";
import send from "../assets/svgexport-65.svg";
import loan from "../assets/svgexport-66.svg";
import { gsap } from "gsap";
import "../styles/Kudamore.css";

const moreData = [
  {
    icon: <img src={Kbusiness} alt="Kuda business" />,
    title: "Kuda Business",
    text: "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.",
  },
  {
    icon: <img src={send} alt="Transfer & Send" />,
    title: "Transfer & Spend",
    text: "Send money for free to any Nigerian account with 25 free transfers every month.",
  },
  {
    icon: <img src={loan} alt="Loans" />,
    title: "Loans",
    text: "Send money for free to any Nigerian account with 25 free transfers every month.",
  },
];

const KudaMore: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".more-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-more-main",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="kuda-more-sect info-container">
      <div className="kuda-more-main">
        <div className="more-text">
          <h2>More for you</h2>
        </div>
        <div className="more-below-main">
          <div className="more-cards">
            {moreData.map((row, index) => (
              <div className="more-card more-card-items" key={index}>
                <div className="more-card-icon">{row.icon}</div>
                <div className="more-info">
                  <a href="/">
                    <p>{row.title}</p>
                  </a>
                  <p className="sub-text">{row.text}</p>
                </div>
                <a href="#" className="info-link">
                  <span className="open-acc">Learn more</span>
                  <span className="arrow-right-icon">
                    <img src={arrowright} alt="arrow-right-icon" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KudaMore;
