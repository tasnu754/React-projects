
const About = () => {
    return (
        <div

        className=" flex flex-col-reverse gap-6 xl:flex-row  min-h-screen items-center md:w-[90%] mx-auto" 
        id="about"
      >
        
          <div
            data-aos="flip-down"
            data-aos-duration="2000"
            data-aos-delay="500"
           className="border-2 border-blue-400 lg:w-[510px] lg:h-[400px] xl:w-[600px] xl:h-[550px] mx-auto rounded-md ">
            <img
              className="w-full h-full object-cover"
              src="../../public/h.png"
              alt=""
            />
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
           className=" flex-1 px-2 xl:px-20 ">
            <h2 className="text-center text-2xl md:text-4xl font-bold  py-4 xl:py-0 xl:pb-4">
              About Us
            </h2>
            <div className="flex flex-col gap-4  justify-center">
            <p className="md:text-xl text-center text-[#b7b9bf] ">
            <span className="font-bold text-white">Mission:</span>
             <br />

            Our mission is to empower organizations by delivering innovative and customized HR solutions that foster a thriving, inclusive, and productive workforce. We are committed to excellence in every aspect of human resources, from talent acquisition and development to employee engagement and compliance. Our goal is to be a trusted partner for our clients, helping them to navigate the complexities of people management with integrity, expertise, and a deep understanding of     their unique needs.
            </p>
            <p className="md:text-xl text-center text-[#b7b9bf]">
            <span className="font-bold text-white">Vision:</span> <br />
            Our vision is to redefine the future of work by being the leading catalyst for organizational transformation and employee empowerment. We aspire to build workplaces where every individual is valued, engaged, and inspired to achieve greatness. Through cutting-edge HR strategies, innovative technologies, and a commitment to continuous improvement, we envision a world where businesses and their people thrive together, fostering sustainable success and well-being for all. This vision statement emphasizes the firm’s forward-looking goals and its role in shaping the future of work. It also highlights the firm’s commitment to innovation, empowerment, and sustainable success.
            </p>
            </div>
          
          </div>
        
 
 
      </div>
    );
};

export default About;