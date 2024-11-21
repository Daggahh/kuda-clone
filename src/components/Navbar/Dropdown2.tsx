import React from "react";
import closemenu from "../../assets/svgexport-33.svg";
import nigeriaIcon from "@assets/nigeriaIcon.svg";
import "./Dropdown2.css";

interface Dropdown2Props {
  links: { icon?: JSX.Element; text: string; text2?: string }[];
  closeDropdown: () => void;
}

const Dropdown2: React.FC<Dropdown2Props> = ({ links, closeDropdown }) => {
  return (
    <div className="dropdown-menu-2">
      <div className="kuda-global-menu kuda-global-menu-mobile">
        <div className="global-menu-wrap global-wrap-mobile">
          <div
            className="close-modal"
            style={{ top: "5px", left: "4px" }}
            onClick={closeDropdown}
          >
            <img src={closemenu} alt="" />
          </div>
          <div className="global-illustration">
            <img src={nigeriaIcon} alt="" />
          </div>
          <p className="text-menu">
            You’re currently viewing Nigerian content.
          </p>
          <p className="text-menu no-mb">
            Choose another country or region to see content specific to your
            location or stay here.
          </p>
          <div className="link-decoration">Stay Here</div>
        </div>

        <ul className="country-dropdown kuda-dropdown-menu">
          {links.map((link, index) => (
            <li key={index} className="nav-list-item">
              <a className="menu-link">
                {link.icon && (
                  <span className="menu-link-icon">{link.icon}</span>
                )}
                <span className="nav-link-text">{link.text}</span>
                {link.text2 && (
                  <span className="coming-soon">{link.text2}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown2;
