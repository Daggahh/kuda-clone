import React, { useState } from "react";
import nigeriaIcon from "@assets/nigeriaIcon.svg";
import Dropdown2 from "./Dropdown2";

interface MenuItems2Props {
  // title?: JSX.Element;
  links: { icon?: JSX.Element; text: string; text2?: string }[];
}

const MenuItems2: React.FC<MenuItems2Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen((prevState) => !prevState);
  const closeDropdown = () => setIsOpen(true);

  return (
    <>
      {isOpen && <div className="page-overlay" onClick={closeDropdown}></div>}

      <div
        className={`menu-icon ${isOpen ? "active" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={nigeriaIcon} alt="Nigeria Icon" />
        {isOpen && <Dropdown2 links={links} closeDropdown={closeDropdown} />}
      </div>
    </>
  );
};

export default MenuItems2;
