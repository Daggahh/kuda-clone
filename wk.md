import React, { useState } from "react";
import nigeriaIcon from "@assets/nigeriaIcon.svg";
import Dropdown2 from "./Dropdown2";

interface MenuItems2Props {
// title?: JSX.Element;
links: { icon?: JSX.Element; text: string; text2?: string }[];
}

const MenuItems2: React.FC<MenuItems2Props> = ({ links }) => {
const [dropdownVisible, setDropdownVisible] = useState(false);

const showDropdown = () => {
if (!dropdownVisible) setDropdownVisible(true);
};

const hideDropdown = () => {
if (dropdownVisible) setDropdownVisible(false);
};

const toggleDropdown = () => setDropdownVisible((prevState) => !prevState);
const closeDropdown = () => setDropdownVisible(false);

return (
<>
{dropdownVisible && <div className="page-overlay"></div>}

      <div
        className={`menu-icon ${dropdownVisible ? "visible" : ""}`}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        onClick={toggleDropdown}
      >
        <img src={nigeriaIcon} alt="Nigeria Icon" />
        {dropdownVisible && (
          <Dropdown2 links={links} closeDropdown={closeDropdown} />
        )}
      </div>
    </>

);
};

export default MenuItems2;
