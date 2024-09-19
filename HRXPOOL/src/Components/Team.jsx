import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import { HiAcademicCap } from "react-icons/hi";
import { TbBrandAdobe } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa6";

const Team = () => {
  return (
    <div id="team">
      <div className="pt-14 space-y-6 ">
        <div className="text-center space-y-10 text-white mx-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold ">Meet our Team</p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-orange-300">
            Awesome guys behind <br /> our innovation
          </h2>
        </div>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
            <div
            data-aos="flip-right"
            data-aos-duration="2000"
             className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="../../public/akash copy (1).jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-4 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                <div>
                  {/* <LiaPlaceOfWorshipSolid className="text-5xl text-yellow-200"></LiaPlaceOfWorshipSolid> */}
                  <FaBusinessTime  className="text-4xl text-yellow-200"></FaBusinessTime>
                </div>
                <h1 className="text-xl font-bold  text-[#D3959B] ">
                  Shayem Ibna Sorowar
                </h1>
                <p className="text-xl italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#b8a6c1] mt-28">
                    Department- Sales & Communication
                </p>
              </div>
            </div>
            <div 
            data-aos="flip-right"
            data-aos-duration="2000"
            className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="../../public/image (1).jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-4 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                <div>
                  {/* <TbBrandAdobe className="text-5xl text-yellow-200"></TbBrandAdobe> */}
                  <TbBrandAdobe className="text-5xl text-yellow-200"></TbBrandAdobe>
                </div>
                <h1 className="text-2xl font-bold text-[#D3959B]">
                  Sakil Ibna Sorowar
                </h1>
                <p className="text-xl italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#a590af] mt-36">
                Department- Branding
                </p>
              </div>
            </div>
            <div 
            data-aos="flip-right"
            data-aos-duration="2000"
            className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="../../public/WhatsApp Image 2024-09-15 at 9.21.24 PM.jpeg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-4 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                <div>
                  {/* <SiHomeadvisor className="text-5xl text-yellow-200"></SiHomeadvisor> */}
                  <LiaPlaceOfWorshipSolid className="text-5xl text-yellow-200"></LiaPlaceOfWorshipSolid>
                </div>
                <h1 className="text-2xl font-bold text-[#D3959B]">
                  MD. Abdul Jabbar
                </h1>
                <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#ab93b5] mt-36">
                  Director of HRXPOOL
                </p>
              </div>
            </div>
            <div 
            data-aos="flip-right"
            data-aos-duration="2000"
            className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                  src="../../public/image (1).jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0  flex flex-col items-center justify-center px-4 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
                <div>
                  <HiAcademicCap className="text-5xl text-yellow-200"></HiAcademicCap>
                </div>
                <h1 className="text-2xl font-bold text-[#D3959B]">
                  Sakib
                </h1>
                <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#bfa4cc] mt-36">
                  Advisor <br /> of HRXPOOL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
