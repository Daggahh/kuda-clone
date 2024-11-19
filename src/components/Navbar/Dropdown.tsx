import React from "react";
import "./Dropdown.css";

interface DropdownProps {
  links: { icon?: JSX.Element; text: string }[];
  subSections?: {
    title: string;
    links: { icon?: JSX.Element; text: string }[];
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ links, subSections }) => {
  return (
    <div className="dropdown-menu">
      <div className="kuda-dropdown-menu">
        <div className="flex justify-between">
          {/* Main Links */}
          <ul className="drop-min--width">
            {links.map((link, index) => (
              <li key={index} className="nav-list-item">
                <a className="menu-link">
                  {link.icon && (
                    <span className="menu-link-icon">{link.icon}</span>
                  )}
                  <span className="nav-link-text">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Sub-sections */}
          {subSections && (
            <ul className="bg-offwhite drop-min--width py-4">
              {subSections.map((section, index) => (
                <React.Fragment key={index}>
                  {/* Section Title */}
                  <div className="px-4 pt-3 pb-1 text-xs">{section.title}</div>

                  {/* Links under the section */}
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a className="menu-link">
                        {link.icon && (
                          <span className="menu-link-icon">{link.icon}</span>
                        )}
                        <span className="nav-link-text">{link.text}</span>
                      </a>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
