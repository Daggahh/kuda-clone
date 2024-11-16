import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Hero.css";
import heroImg from "../assets/svgexport-67.svg";
import appleStore from "../assets/iosStore.svg";
import googlePlay from "../assets/googlePlay.svg";
import cbnImg from "../assets/cbn.svg";
import ndic from "../assets/ndic.svg";

const Hero: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-left, .hero-right",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="hero-main-container">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-wrap">
            <div className="hero-text">
              <h1>The money app for Africans.</h1>
            </div>

            <div className="hero-subtext">
              <p>
                Make free transfers, enjoy cashless payment options and earn
                interest on your savings with Kuda.
              </p>
            </div>

            <div className="hero-buttons">
              <div className="app-store">
                <img src={appleStore} alt="ios-store" />
              </div>
              <div className="google-play">
                <img src={googlePlay} alt="playstore" />
              </div>
            </div>

            <div className="naija-info">
              <div className="cbn">
                <img src={cbnImg} alt="cbn" />
              </div>
              <div className="ndic">
                <img src={ndic} alt="ndic" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="kuda-img-animation">
            <img src={heroImg} alt="Kuda App Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
