import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import info6img from "../assets/svgexport-1-img6.svg";
import arrowright from "../assets/svgexport-53.svg";
import "../styles/Kudainfo6.css";

gsap.registerPlugin(ScrollTrigger);

const Kudainfo6: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info6-right",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info6-container",
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
    gsap.fromTo(
      ".info6-left",
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".info6-left",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="kuda-info6-container info-container">
      <div className="kudainfo6">
        <div className="info6-left">
          <div className="kuda-info6-img">
            <img src={info6img} alt="Kuda App Preview" />
          </div>
        </div>

        <div className="info6-right">
          <div className="info6-right-wrap">
            <h1> Fees as clear as glass.</h1>

            <p>
              We’re serious about free banking, and we will never, ever charge
              you for anything without your consent.
            </p>

            <a href="#" className="info-link">
              <span className="open-acc">See all our fees</span>
              <span className="arrow-right-icon">
                <img src={arrowright} alt="arrow-right-icon" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kudainfo6;
