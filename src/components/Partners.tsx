import React, { useEffect } from "react";
import valaar from "../assets/kuda Microfinance Bank Partners.svg";
import entree from "../assets/kuda Microfinance Bank Partners-1.svg";
import sbi from "../assets/kuda Microfinance Bank Partners-2.svg";
import target from "../assets/kuda Microfinance Bank Partners-3.svg";
import visa from "../assets/kuda Microfinance Bank Partners-4.svg";
import { gsap } from "gsap";
import "../styles/Partners.css";

const Partners: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".kuda-partners-icon",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-partners-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="kuda-partners-section">
      <div className="kuda-partners-container">
        <div className="kuda-partners-main">
          <h1>Don’t just take our word for it</h1>

          <div className="kuda-partners-icon">
            <div className="kuda-partners-icon-wrap">
              <a href="/">
                <img src={valaar} alt="" loading="lazy" />
              </a>

              <a href="/">
                <img src={entree} alt="" loading="lazy" />
              </a>

              <a href="/">
                <img src={sbi} alt="" loading="lazy" />
              </a>

              <a href="/">
                <img src={target} alt="" loading="lazy" />
              </a>

              <a href="/">
                <img src={visa} alt="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
