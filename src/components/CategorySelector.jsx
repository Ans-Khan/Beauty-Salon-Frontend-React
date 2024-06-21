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
    <div className="wrapper">
      <div className="wrapper__box categories__wrapper flex items-center justify-center w-[212px] h-[52px] gap-[1rem] bg-[white] relative">
        <img
          src={CategoriesIcon}
          alt=""
          className="h-[24px] w-[24px] opacity-[60%] ml-[2rem]"
        />
        <div
          className="selector flex w-full items-center justify-center opacity-[60%] text-[17px] cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <BiChevronDown size={20} />
        </div>
      </div>
      <div className="div absolute w-[13.5rem] ">
        {isOpen && (
          <ul className="category__list pt-5 bg-[#F16060]">
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
