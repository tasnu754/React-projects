import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
 
  return (
    <div
     data-aos="zoom-in"
      data-aos-duration="2000"
      className="md:w-[80%] mx-auto mt-20 mb-24 lg:flex   gap-0 space-y-10 "
      id="contact"
    >
      <div className="flex-1 space-y-4 ">
        <h2 className="text-2xl md:text-3xl text-center font-bold">
          Contact Us
        </h2>
        <p className="md:text-xl text-center ">
          At HRXPOOL, we are dedicated to helping you navigate the complexities
          of people management. Whether you’re looking for tailored HR
          solutions, innovative strategies, or simply need guidance, we’re here
          to support you every step of the way.If you have any queries about our
          services or would like to book an appointment to discuss your
          requirements, please don’t hesitate to get in touch.
        </p>
      </div>
      <div className="flex-1  ">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-6 mt-0 pt-0">
      Get in touch with us today:
        </h2>
        <div className="flex-1 space-y-4 lg:w-[50%] mx-auto">
          <div className="flex  items-center gap-4 text-xl">
            <IoIosMail className="text-3xl font-bold text-[#0ef]"></IoIosMail>
            info@hrxpool.com
          </div>
          <div className="flex  items-center gap-4 text-xl">
            <CiLocationOn className="text-4xl font-bold text-[#0ef]"></CiLocationOn>
            Headquarters, Dhaka, BD
          </div>
          <div className="flex items-center gap-4 text-xl">
            <FaPhoneVolume className="text-2xl font-bold text-[#0ef]"></FaPhoneVolume>
            +881328458912
          </div>
          <div className="flex justify-start items-center gap-2 text-2xl transparent pt-2">
            <a
              href="https://www.facebook.com/people/HRxPool/61565648827249/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[35px] h-[35px]  flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
            >
              <FaFacebookF></FaFacebookF>
            </a>
            <a
              href="https://www.linkedin.com/company/hrxpool/about"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
            >
              <FiGithub></FiGithub>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className=" w-[35px] h-[35px] flex justify-center items-center rounded-md border-2 border-[#0ef] text-[#0ef] hover:bg-[#0ef] hover:text-black hover:shadow-md hover:shadow-cyan-400"
            >
              <SiInstagram></SiInstagram>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
