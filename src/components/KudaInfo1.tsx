import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import arrowright from "../assets/svgexport-53.svg";
import info1img from "../assets/svgexport-54.svg";
import "../styles/KudaInfo1.css";

gsap.registerPlugin(ScrollTrigger);

const KudaInfo1: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info1-left, .info1-right",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info-container",
          start: "top 80%", // Trigger animation when the top of the container is 80% into the viewport
          end: "bottom 20%", // Animation ends when the bottom of the container reaches 20%
          toggleActions: "play none none none", // Actions: play, pause, resume, reset
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  useEffect(() => {
    const animation = gsap.fromTo(
      ".kuda-info-img",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info1-right",
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
    <section className="kuda-info-container info-container">
      <div className="kudainfo1">
        <div className="info1-left">
          <div className="info1-left-wrap">
            <h1>
              <span>
                Your phone + <br />
                our app + <br /> a debit card = <br /> a simpler life.
              </span>
            </h1>

            <p>
              We designed a money app for your lifestyle, and you can get a
              debit card to go with it. That's all you need to make the right
              money moves.
            </p>

            <a href="#">
              <span className="open-acc">Open An Account in Minutes</span>
              <span className="arrow-right-icon">
                <img src={arrowright} alt="arrow-right-icon" />
              </span>
            </a>
          </div>
        </div>

        <div className="info1-right">
          <div className="kuda-info-img">
            <img src={info1img} alt="Kuda App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KudaInfo1;
