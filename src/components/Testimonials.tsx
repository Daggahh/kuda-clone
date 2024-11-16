import React, { useEffect, useRef } from "react";
import jide from "../assets/kuda Microfinance Bank Testimonials-jide.svg";
import sok from "../assets/kuda Microfinance Bank Testimonials-2-sok.svg";
import kudu from "../assets/kuda Microfinance Bank Testimonials-kudu.svg";
import oyekan from "../assets/kuda Microfinance Bank Testimonials-3-oyekan.svg";
import TC from "../assets/kuda Microfinance Bank Publications.svg";
import WEF from "../assets/kuda Microfinance Bank Publications-1.svg";
import FF from "../assets/kuda Microfinance Bank Publications-2.svg";
import BBC from "../assets/kuda Microfinance Bank Publications-3.svg";
import CNBC from "../assets/kuda Microfinance Bank Publications-4.svg";
import EM from "../assets/kuda Microfinance Bank Publications-5.svg";
import { gsap } from "gsap";
import "../styles/Testimonials.css";

const cardsData = [
  {
    id: 1,
    text: "Never thought an app would stylish become my everyday way to bank and have access to physical cash.",
    icon: <img src={jide} alt="User Icon 1" />,
    author: "Babajide Duroshola",
  },
  {
    id: 2,
    icon: <img src={sok} alt="User Icon 2" />,
    text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!",
    author: "@RealSOK",
  },
  {
    id: 3,
    icon: <div className="kuda-no-img">I</div>,
    text: `I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.`,
    author: "Ifeanyichukwu Obaji",
  },
  {
    id: 4,
    icon: <img src={kudu} alt="User Icon 4" />,
    text: " had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah",
    author: "Mu'azu Muhammad Kudu",
  },
  {
    id: 5,
    icon: <div className="kuda-no-img">T</div>,
    text: "Just joined the best Digital Bank in Nigeria, I have no complaints whatsoever since i started using Kuda",
    author: "TomisinV",
  },
  {
    id: 6,
    icon: <img src={oyekan} alt="User Icon 6" />,
    text: "I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!   ",
    author: "Adebambo Oyekan",
  },
];

const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".uda-testimonial--card",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kuda-testimonials-sect",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animation: gsap.core.Tween;
    if (carousel) {
      const children = Array.from(carousel.children) as HTMLElement[];
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        carousel.appendChild(clone);
      });

      animation = gsap.to(carousel, {
        x: -carousel.scrollWidth / 2,
        duration: 120,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      if (animation) animation.kill();
    };
  }, []);

  return (
    <div className="kuda-testimonials-sect info-container">
      <div className="testimonial-main">
        <div className="testimonial-card-main">
          <h1>Don’t just take our word for it</h1>
          <div className="testi-main">
            <div className="uda-testimonial--cards" ref={carouselRef}>
              {cardsData.map((card) => (
                <div className="uda-testimonial--card" key={card.id}>
                  <div className="quote">
                    <p>"{card.text}"</p>
                  </div>
                  <div className="author-info">
                    {card.icon}
                    <span>{card.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="kuda-brand-icon">
          <div className="kuda-brand-icon-wrap">
            <a href="/">
              <img src={TC} alt="" loading="lazy" />
            </a>

            <a href="/">
              <img src={WEF} alt="" loading="lazy" />
            </a>

            <a href="/">
              <img src={FF} alt="" loading="lazy" />
            </a>

            <a href="/">
              <img src={BBC} alt="" className="bbc" loading="lazy" />
            </a>

            <a href="/">
              <img src={CNBC} alt="" loading="lazy" />
            </a>

            <a href="/">
              <img src={EM} alt="" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
