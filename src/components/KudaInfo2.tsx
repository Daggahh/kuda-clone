import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import info2img from "../assets/svgexport-1-info2.svg";
import "../styles/KudaInfo2.css";

gsap.registerPlugin(ScrollTrigger);

const KudaInfo2: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".info2-left, .info2-right",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-info2-container",
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
      ".kuda-info2-img",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info2-left",
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
    <section className="kuda-info2-container info-container">
      <div className="kudainfo2">
        <div className="info2-left">
          <div className="kuda-info2-img">
            <img src={info2img} alt="Kuda App Preview" />
          </div>
        </div>

        <div className="info2-right">
          <div className="info2-right-wrap">
            <h1>It’s your money, we just help you manage it.</h1>

            <p>
              Save it, spend it, send it. It’s up to you. Whatever you choose to
              do with your money, we’ll make sure it’s done better and free of
              charge. We take responsibility for that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KudaInfo2;
