import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const quickLinks01 = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/features",
    display: "Features",
  },
  {
    path: "/works",
    display: "Works",
  },
  {
    path: "/careers",
    display: "Careers",
  },
];

const quickLinks02 = [
  {
    path: "/customer-support",
    display: "Customer Support",
  },
];

const quickLinks03 = [
  {
    path: "/terms-and-conditions",
    display: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    display: "Privacy Policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#E4E4E7] w-full">
      <div className="container w-full flex flex-col mx-auto justify-around">
        <div className="cols__wrapper grid grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-5 text-center  mx-auto py-[5rem]">
          <div className="first__col flex flex-col items-center">
            <img
              src={logo}
              alt=""
              className="sm:w-[200px] sm:h-[80px] w-[120px] h-[50px]"
            />
            <p className="text-[#71717A] md:w-[265px] w-[180px] mt-6 md:text-[16px] text-[12px]">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
          </div>

          <div className="second__col flex flex-col md:gap-[24px] gap-[10px]">
            <h2 className="md:text-[14px] text-[12px] text-[#D86B56]">
              COMPANY
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="md:mb-[20px] mb-[6px]">
                  <Link
                    to={item.path}
                    className="md:text-[16px] text-[12px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="third__col flex flex-col md:gap-[24px] gap-[10px]">
            <h2 className="md:text-[14px] text-[12px] text-[#D86B56]">HELP</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="">
                  <Link
                    to={item.path}
                    className="md:text-[16px] text-[12px] sm:leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="md:text-[14px] text-[12px] text-[#D86B56]">
              Delivery Details
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="md:mb-[20px] mb-[4px]">
                  <Link
                    to={item.path}
                    className="md:text-[16px] text-[12px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fourth__col flex flex-col md:gap-[24px] gap-[10px] mx-5">
            <h2 className="md:text-[14px] text-[12px] text-[#D86B56] lg:text-center">
              NEWSLETTER
            </h2>
            <p className="flex-wrap md:text-[0.88rem] text-[0.65rem] xl:w-full md:w-[250px] md:mt-[-10px] ">
              Subscribe to our Newsletter to get the latest news & offers!
            </p>
            <input
              type="email"
              placeholder="Enter email..."
              className="email__field md:py-[16px] py-[8px] md:pl-5 pl-4  outline-none md:w-[102%] md:mb-[-10px] md:mt-[-10px]"
            />
            <button className="footer_btn bg-[#59A7D9] text-[white] md:py-[16px] py-[8px] md:pl-5 md:pr-9 outline-none md:w-[102%]">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="copyright md:mb-9 mb-6 md:mt-0 mt-[-16px]">
          <p className="md:text-[14px] text-[11px] leading-5 text-center">
            © Copyright 2022, All Rights Reserved <br /> Developed by:{" "}
            <a
              href="https://www.linkedin.com/in/ans-afroz-438483115/"
              className="text-[#0065a3] text-[14px]"
            >
              Anas Afroz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
