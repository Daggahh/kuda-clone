import React, { useEffect } from "react";
import gsap from "gsap";
import kudaLogo from "../assets/svgexport-1.svg";
import no from "../assets/svgexport-60.svg";
import yes from "../assets/svgexport-61.svg";
import emoji1 from "../assets/svgexport-62.svg";
import emoji2 from "../assets/svgexport-63.svg";
import "../styles/Choices.css";

const choicesData = [
  {
    feature: "Transfer Fee",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" /> Up to ₦50 plus V.A.T.
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} alt="" className="check-icon" /> 25 free transfers every
        month
      </span>
    ),
  },
  {
    feature: "Card Delivery",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" />{" "}
        <img src={emoji1} alt="" className="check-icon" />
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} alt="" className="check-icon" />
        Yes
      </span>
    ),
  },
  {
    feature: "Card Maintenance Fee",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" /> Up to ₦50 per quarter
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} alt="" className="check-icon" />
        No
      </span>
    ),
  },
  {
    feature: "Alerts",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" />
        Charge for SMS alerts
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} className="check-icon" />
        Free instant notifications
      </span>
    ),
  },
  {
    feature: "Annual Interest",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" />
        4%
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} className="check-icon" />
        Up to 15%
      </span>
    ),
  },
  {
    feature: "Bill Payment Fee",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" />
        Up to ₦100 per bill
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} className="check-icon" />
        No
      </span>
    ),
  },
  {
    feature: "Instant Reversals",
    otherBanks: (
      <span>
        <img src={no} className="check-icon" alt="" />
        <img src={emoji2} className="check-icon" alt="" />
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} className="check-icon" />
        Yes
      </span>
    ),
  },
  {
    feature: "Maintenance",
    otherBanks: (
      <span>
        <img src={no} alt="" className="check-icon" />
        Yes
      </span>
    ),
    kuda: (
      <span>
        <img src={yes} className="check-icon" />
        No{" "}
      </span>
    ),
  },
];

const Choices: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".choices-main",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".choices-section",
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
    <div className="choices-section info-container">
      <div className="choices-main">
        <h1>Choose the freedom you need.</h1>
        <div className="choices--wrap">
          <div className="choices-full">
            <div className="choices-details">
              <div className="choices-features">
                <div className="choices-heading">
                  <div className="choices-single"></div>
                  <div className="choices-single">
                    <h2 className="choices-main--heading color-primary text-xlbold">
                      Other Banks
                    </h2>
                  </div>
                  <div className="choices-single">
                    <img src={kudaLogo} alt="" />
                  </div>
                </div>
                {choicesData.map((row, index) => (
                  <div className="choices-single--wrap" key={index}>
                    <div className="choices-single">
                      <p className="feature-summary color-black text-bold flex align-flex-start">
                        <span className="feature-text height-full">
                          {row.feature}
                        </span>
                      </p>
                    </div>
                    <div className="choices-single">
                      <p className="feature-summary color-black flex align-flex-start">
                        <span className="feature-text height-full fw-0">
                          {row.otherBanks}
                        </span>
                      </p>
                    </div>
                    <div className="choices-single">
                      <p className="feature-summary color-black flex align-flex-start">
                        <span className="feature-text height-full fw-0">
                          {row.kuda}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choices;
