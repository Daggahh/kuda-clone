import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import arrowright from "../assets/svgexport-53.svg";
import info5img from "../assets/svgexport-1-img5.svg";
import "../styles/Kudainfo5.css";

gsap.registerPlugin(ScrollTrigger);

const KudaInfo5: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info5-left",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info3-container",
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
    // GSAP animation for slide-in right bounce effect
    gsap.fromTo(
      ".info5-right",
      { x: 200, opacity: 0 }, // Start off-screen to the right
      {
        x: 0, // Slide into position
        opacity: 1, // Fade into view
        duration: 1.5,
        ease: "bounce.out", // Bounce easing for the slide
        scrollTrigger: {
          trigger: ".info5-right", // Trigger animation on this element
          start: "top 80%", // Start when the top of the element reaches 80% of the viewport
          toggleActions: "play none none none", // Play the animation once
        },
      }
    );
  }, []);

  return (
    <section className="kuda-info5-container info-container">
      <div className="kudainfo5">
        <div className="info5-left">
          <div className="info5-left-wrap">
            <h1>We’re always happy to help you.</h1>

            <p>
              You can chat with us on the app, slide into our DMs, tweet, leave
              an Instagram comment, send an email or call. However you choose to
              reach out, there’ll always be a friendly person there to make your
              life easy.
            </p>

            <a href="#">
              <span className="open-acc">Get Help</span>
              <span className="arrow-right-icon">
                <img src={arrowright} alt="arrow-right-icon" />
              </span>
            </a>
          </div>
        </div>

        <div className="info5-right">
          <div className="kuda-info5-img">
            <img src={info5img} alt="Kuda App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KudaInfo5;
