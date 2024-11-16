import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Kudaentry.css";
import heroImg from "../assets/svgexport-67.svg";

const Hero: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".kuda-entry",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-entry-container",
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
    <section className="kuda-entry-container info-container">
      <div className="kuda-entry">
        <div className="entry-left">
          <div className="entry-left-wrap">
            <div className="entry-text">
              <h1>The money app for Africans.</h1>
            </div>

            <div className="entry-subtext">
              <p>Save, spend, send and invest money across borders.</p>
            </div>

            <div className="entry-button">
              <a href="/">Join Kuda</a>
            </div>
          </div>
        </div>

        <div className="entry-right">
          <div className="kuda-img-entry">
            <img src={heroImg} alt="Kuda App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
