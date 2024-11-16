import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import arrowright from "../assets/svgexport-53.svg";
import info3img from "../assets/svgexport-1-img3.svg";
import "../styles/Kudainfo3.css";

gsap.registerPlugin(ScrollTrigger);

const KudaInfo3: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info3-left, .info3-right",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info3-container",
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

  useEffect(() => {
    const animation = gsap.fromTo(
      ".info3-right",
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".info3-right",
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
    <section className="kuda-info3-container info-container">
      <div className="kudainfo3">
        <div className="info3-left">
          <div className="info3-left-wrap">
            <h1>Save money as you spend it, seriously.</h1>

            <p>
              You can’t avoid spending. That’s how you pay for your needs. But
              we can help you put money away every time you pay for something.
              Just set a percentage to save and watch your money grow.
            </p>

            <a href="#" className="info-link">
              <span className="open-acc">See all our Savings</span>
              <span className="arrow-right-icon">
                <img src={arrowright} alt="arrow-right-icon" />
              </span>
            </a>
          </div>
        </div>

        <div className="info3-right">
          <div className="kuda-info3-img">
            <img src={info3img} alt="Kuda App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KudaInfo3;
