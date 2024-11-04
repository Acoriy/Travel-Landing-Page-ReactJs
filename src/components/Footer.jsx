import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-darkBackground text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">TripPixie</h1>
          <p className=" text-sm">
            With TripPixie you can experience new travel and the best tourist
            destinations that we have to offer
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destination
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link to="destination" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Paris, France
            </Link>
            <Link to="destination" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Dubai, UAE
            </Link>
            <Link to="destination" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Venice, Italy
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="contact" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Contact Us
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link to="features" spy={true} smooth={true} duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Features
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-brightColor transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
           <p className="text-center py-5">@copyright developed by <a href="https://sofyaneacoriy.netlify.app" className="text-brightColor hover:underline cursor-pointer" target="_blank" rel="noreferrer">Sofyane Acoriy</a> | All rights reserved</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
