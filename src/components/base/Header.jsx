import {FaFacebookF, FaInstagram, FaMobileAlt, FaTwitter} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {IoLocation} from "react-icons/io5";
import Links from "./Links";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Header = () => {
  const [position, setPosition] = useState("");
  const path = useLocation().pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setPosition("top-0 bg-black");
      } else {
        setPosition("top-10");
      }
    });
  });

  return (
    <header className="w-full">
      <section className="flex justify-between h-11 py-3 px-14 w-full text-xs font-bold text-white bg-[#141414]">
        <div className="flex items-center gap-10">
          <p className="flex items-center gap-2">
            <IoLocation className="text-sm" />
            317 Pacific C HwyHuntington, CA 92648
          </p>
          <p className="flex items-center gap-2">
            <FaMobileAlt className="text-sm" />
            123.456-7
          </p>
          <p className="flex items-center gap-2">
            <IoMdMail className="text-sm" />
            eat@soulkitchen.com
          </p>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </section>

      <section className={`w-full h-20 flex items-center fixed z-50 ${position} ${path === "/" ? "" : "bg-black"} `}>
        <div className="navbar px-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <Links />
              </ul>
            </div>
            <ul className="menu menu-horizontal px-1 uppercase text-white gap-5">
              <li>
                <Link to="/" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <Link className="text-3xl uppercase text-white ">Spicy Kitchen</Link>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 uppercase text-white gap-5">
              <li>
                <Link to="/" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  Pages
                </Link>
              </li>
              <li>
                <Link to="/" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/" className="px-1 hover:text-info hover:bg-inherit border-b-2 border-transparent hover:border-info rounded-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
