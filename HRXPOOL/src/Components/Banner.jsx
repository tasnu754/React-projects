
const Banner = () => {
    return (
       <div
       className="hero min-h-[60vh] md:min-h-[85vh] w-full"
       style={{
        backgroundImage:
          "url(/top-5-business-success-tips-for-entrepreneurs.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
       >

          
          <div className="absolute md:right-[50%] p-4 md:p-0  h-[50vh]">
            <div className="flex  justify-center items-start h-screen lg:w-[80%]  md:pl-12 lg:pl-28 mx-auto mt-8 md:mt-10 lg:mt-32">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" text-blue-950 space-y-6 "
              >
                <h2 className=" text-center text-xl md:text-3xl lg:text-5xl font-bold">
                HRXPOOL
                </h2>
                <p className="md:text-xl lg:text-2xl text-justify ">
                W<span className="lowercase">e deliver innovative <span className="uppercase">HR</span> solutions that drive organizational transformation, foster inclusivity, and enhance employee engagement. </span>
                </p>
                <div className="flex justify-center items-center gap-4 md:etxt-2xl lg:text-4xl text-center">
                  <span className="md:text-2xl lg:text-3xl font-bold">Empowering Talent <br /> Elevating Success</span>
                </div>
              </div>
            </div>
          </div>


        
       </div>
     
    );
};

export default Banner;