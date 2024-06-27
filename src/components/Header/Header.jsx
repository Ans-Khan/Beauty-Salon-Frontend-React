import { useEffect, useRef } from "react";
import Icon from "../../assets/images/Icon.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/for-professionals",
    display: "For Professionals",
  },
];

const Header = () => {
  return (
    <header className="header items-center justify-between ">
      <div
        className="flex items-center justify-around w-[368px] h-[24px] py-[3rem] px-[1rem] mx-auto
      "
      >
        {/* ================ Language Selector ================ */}
        <div className="flex items-center justify-between gap-[14px]">
          <img src={Icon} alt="" />
          <h1 className="text-primaryBgColor font-[400]">EN</h1>
        </div>
        {/* ================ Language Selector END ================ */}

        {/* ================ MENU ================ */}
        <div className="flex items-center justify-between ">
          <div className="navigation">
            <ul className="menu flex items-center gap-9">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryBgColor text-[14px] leading-5 font-[500]"
                        : "text-primaryBgColor text-[14px] leading-5 font-[400]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ================ MENU END ================ */}
      </div>
    </header>
  );
};

export default Header;
