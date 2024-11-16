import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardIcon1 from "../assets/svgexport-48.svg";
import CardIcon2 from "../assets/svgexport-49.svg";
import CardIcon3 from "../assets/svgexport-50.svg";
import CardIcon4 from "../assets/svgexport-51.svg";
import CardIcon5 from "../assets/svgexport-52.svg";
import "../styles/KudaCard.css";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    icon: <img src={CardIcon1} alt="kuda icon 1" />,
    text: "Order a Kuda card on the app with pickup and delivery options.",
  },
  {
    id: 2,
    icon: <img src={CardIcon2} alt="kuda icon 2" />,
    text: "Enjoy cashless payment options online and offline.",
  },
  {
    id: 3,
    icon: <img src={CardIcon3} alt="kuda icon 3" />,
    text: "Pay your essential bills and buy gift cards easily.",
  },
];

const cardsData2 = [
  {
    id: 4,
    icon: <img src={CardIcon4} alt="kuda icon 4" />,
    text: "Get 25 free transfers to Nigerian banks every month.",
  },
  {
    id: 5,
    icon: <img src={CardIcon5} alt="kuda icon 5" />,
    text: "Save money automatically any time you spend.",
  },
];

const KudaCard: React.FC = () => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".kuda-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-card-container",
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
    <section className="kuda-card-container">
      <div className="kuda-card-main-1">
        {cardsData.map((card) => (
          <div key={card.id} className="kuda-card top">
            <div className="card-icon">
              <span>{card.icon}</span>
            </div>
            <div className="card-text">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="kuda-card-main-2">
        {cardsData2.map((card) => (
          <div key={card.id} className="kuda-card bottom">
            <div className="card-icon">
              <span>{card.icon}</span>
            </div>
            <div className="card-text">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KudaCard;
