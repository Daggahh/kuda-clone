import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/kuda-hero-img.png";
import appleStore from "../assets/iosStore.svg";
import googlePlay from "../assets/googlePlay.svg";
import cbnImg from "../assets/cbn.svg";
import ndic from "../assets/ndic.svg";

const Hero: React.FC = () => {
  return (
    <section className="hero-main">
      <div className="hero">
        <div className="hero-left">
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

        {/* Right Side of Hero Section */}
        <div className="hero-right">
          <img src={heroImg} alt="Kuda App Preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
