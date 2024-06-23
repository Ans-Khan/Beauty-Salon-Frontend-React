import React, { useEffect, useState } from "react";
import CategoriesIcon from "../assets/images/CategoriesIcon.png";
import { BiChevronDown } from "react-icons/bi";

const options = [
  { name: "Make up" },
  { name: "Hair" },
  { name: "Lashes" },
  { name: "Nails" },
];

const CategorySelector = () => {
  const [option, setOption] = useState([...options]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Categories");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".wrapper")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className="wrapper mr-1">
      <div className="wrapper__box categories__wrapper w-full flex items-center justify-center md:w-[212px] md:h-[52px] md:gap-[1rem] bg-[white] relative">
        <img
          src={CategoriesIcon}
          alt=""
          className="mobile__icon md:h-[24px] md:w-[24px] opacity-[60%] md:ml-[2rem]"
        />
        <div
          className="selector flex w-full items-center justify-center opacity-[60%] md:text-[17px] text-[14px] cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <BiChevronDown size={20} />
        </div>
      </div>
      <div className="div absolute md:w-[13.5rem]">
        {isOpen && (
          <ul className="category__list md:pt-5 bg-[#F16060]">
            {option.map((item, index) => (
              <li
                key={index}
                className="list__item text-[white] px-3 py-2 hover:bg-[#F57F7F] cursor-pointer"
                onClick={() => handleSelectOption(item)}
              >
                {item.name}
                <div className="polygon"></div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CategorySelector;
