import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import info4img from "../assets/svgexport-1-img4.svg";
import arrowright from "../assets/svgexport-53.svg";
import "../styles/Kudainfo4.css";

gsap.registerPlugin(ScrollTrigger);

const Kudainfo4: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info4-right",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info4-container",
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
      ".info4-left",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".info4-left",
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
    <section className="kuda-info4-container info-container">
      <div className="kudainfo4">
        <div className="info4-left">
          <div className="kuda-info4-img">
            <img src={info4img} alt="Kuda App Preview" />
          </div>
        </div>

        <div className="info4-right">
          <div className="info4-right-wrap">
            <h1>Turn off access, turn on safety.</h1>

            <p>
              Life happens. Milk spills. Debit cards go missing. If that ever
              happens, you can block your missing card on the app so no one can
              use it. We’d like to see them try.
            </p>

            <a href="#" className="info-link">
              <span className="open-acc">Learn more about Cards</span>
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

export default Kudainfo4;
