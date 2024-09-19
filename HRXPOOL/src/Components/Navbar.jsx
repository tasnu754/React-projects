import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (window.innerWidth >= 768) {
        AOS.init();
      }
    }, []);

    return (
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="  transparent xl:header z-50 relative pt-2 px-4 lg:p-10 xl:w-full md:h-20 lg:h-28 xl:px-40 shadow-md rounded-md border-none lg:px-6 md:flex justify-between"
      >
        <div 
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="flex justify-between items-center">
          <a
            href="#"
            className="mr-10 pb-4 xl:mr-[400px] relative"
          >
            <img src="../../public/h.png"  className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full"  alt="" />
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <nav
          data-aos={window.innerWidth >= 768 ? "fade-down" : ""}
          data-aos-delay={window.innerWidth >= 768 ? "300" : ""}
          data-aos-duration={window.innerWidth >= 768 ? "1000" : ""}
          className={`z-10  md:flex md:items-center space-y-6 md:space-y-0 md:space-x-4 xl:space-x-10 text-white md:text-xl lg:text-xl  transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } md:block`}

        >
          <a href="#home" className="block mt-6 md:mt-0 hover:text-[#0ef] "
          >
            Home 
          </a>
          <a href="#about" className="block hover:text-[#0ef] ">
            About 
          </a>
          <a href="#team" className="block hover:text-[#0ef]">
            Team 
          </a>
          <a href="#contact" className="block hover:text-[#0ef]">
            Contact 
          </a>
          <a href="#email" className="block hover:text-[#0ef] pr-6">
            Email 
          </a>
          <a  className="hover:text-[#0ef] flex  pb-4 md:pb-0 lg:justify-between lg:gap-4 items-center">
          |<FaPhoneAlt className="ml-2" />
             +881328458912
          </a>
        </nav>
      </div>
    );
};

export default Navbar;