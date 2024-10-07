import {FaFacebookF, FaInstagram, FaMobileAlt, FaTwitter} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {IoLocation} from "react-icons/io5";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-4 justify-around gap-28 bg-[#141414] text-gray-400 text-base text-center">
        <section className="p-10">
          <h1 className="text-lg font-bold text-white uppercase">Welcome to SPICY KITCHEN</h1>
          <br />
          <br />
          <p>
            SPICY KITCHEN, founded in 2022, is dedicated to all those who love to wander far and wide. <br /> <br /> We invite you on a wholesome culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </section>
        <section className="p-10">
          <p>
            <span className="text-lg font-bold text-white uppercase">Visit</span> <br /> <br />
            <span className="flex justify-center items-center gap-1">
              <IoLocation className="text-base text-white" /> 317 Pacific C Hwy
            </span>
            <span>Huntington, CA 92648</span>
          </p>

          <p className="mt-6">
            <span className="text-lg font-bold text-white uppercase">Talk</span> <br /> <br />
            <span className="flex justify-center items-center gap-1">
              <FaMobileAlt className="text-base text-white" /> 123-456-7890
            </span>
          </p>

          <p className="mt-6">
            <span className="text-lg font-bold text-white uppercase">Write</span> <br /> <br />
            <span className="flex justify-center items-center gap-1">
              <IoMdMail className="text-base text-white" /> Y5zjK@example.com
            </span>
          </p>
        </section>
        <section className="p-10">
          <p>
            <span className="text-lg font-bold text-white uppercase">Reservations</span> <br /> <br />
            <span>
              <Link to="/" className="btn btn-outline uppercase text-white px-10 rounded-sm">
                Book Your Table
              </Link>
            </span>
          </p>
          <br /> <br />
          <p>
            <span className="text-lg font-bold text-white uppercase">Hours</span> <br />
            <br />
            <span>
              MONDAY thru FRIDAY <br /> 11am - 9pm
            </span>
            <br />
            <br />
            <span>
              SATURDAY/SUNDAY <br /> 10am - 11pm
            </span>
          </p>
        </section>
        <section className="p-10">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-white uppercase">About</p> <br />
            <Link to="/" className="hover:text-info">
              FAQ
            </Link>
            <Link to="/" className="hover:text-info">
              Reservation Policy
            </Link>
            <Link to="/" className="hover:text-info">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-info">
              Health & Safety
            </Link>
          </div>
          <br />
          <div>
            <p className="text-lg font-bold text-white uppercase">Follow Along</p> <br />
            <div className="flex justify-center items-center gap-4 text-xl text-white">
              <FaInstagram className="hover:text-info" />
              <FaFacebookF className="hover:text-info" />
              <FaTwitter className="hover:text-info" />
            </div>
          </div>
        </section>
      </footer>
      <footer className="grid grid-cols-3 bg-black text-white items-center text-[.65rem] py-5 px-14 uppercase">
        <p className="text-start">Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p className="text-center text-3xl">SPICY KITCHEN</p>
        <p className="text-end">Taste the difference</p>
      </footer>
    </>
  );
};

export default Footer;
