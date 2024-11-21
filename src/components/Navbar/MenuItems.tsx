import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface MenuItemsProps {
  title: string;
  links: { icon?: JSX.Element; text: string }[];
  subSections?: {
    title: string;
    links: { icon?: JSX.Element; text: string }[];
  }[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ title, links, subSections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      {isOpen && <div className="page-overlay"></div>}

      <li
        className="menu-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <p className={`menu-title ${isOpen ? "active" : ""}`}>
          {title}
          <span className="dropdown-icon">
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path>
            </svg>
          </span>
        </p>
        {isOpen && <Dropdown links={links} subSections={subSections} />}
      </li>
    </>
  );
};

export default MenuItems;
