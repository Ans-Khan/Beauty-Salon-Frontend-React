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
    <footer className="bg-[#E4E4E7]">
      <div className="container flex flex-col mx-auto justify-around">
        <div className="divs__wrapper flex justify-between mx-[8rem]  py-[5rem]">
          <div className="first__col">
            <img src={logo} alt="" />
            <p className="text-[#71717A] w-[265px] mt-6">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
          </div>

          <div className="second__col flex flex-col gap-[24px]">
            <h2 className="text-[14px] text-[#D86B56]">COMPANY</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-[20px]">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="third__col flex flex-col gap-[24px]">
            <h2 className="text-[14px] text-[#D86B56]">HELP</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-[14px] text-[#D86B56]">Delivery Details</h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-[20px]">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fourth__col flex flex-col gap-[24px]">
            <h2 className="text-[14px] text-[#D86B56]">NEWSLETTER</h2>
            <input
              type="email"
              placeholder="Enter your email address"
              className="email__field py-[16px] pl-5 pr-9 outline-none w-[102%] mb-0"
            />
            <button className="footer_btn bg-[#59A7D9] text-[white] py-[16px] pl-5 pr-9 outline-none w-[102%]">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="copyright mb-9 mt-0">
          <p className="text-[14px] leading-5 text-center">
            © Copyright 2022, All Rights Reserved by{" "}
            <a
              href="https://www.linkedin.com/in/ans-afroz-438483115/"
              className="text-[#0065a3]"
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
