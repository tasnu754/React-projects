import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_rkx9swr",
          "template_b9n3byg",
          form.current,
          "6HvH7f6vG2_3BK3Wm"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your message send successfully",
              showConfirmButton: false,
              timer: 1500,
            });
  
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div
     data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="2000"
     id="email">
        <h2 className="text-3xl text-center font-bold mb-10">Send Messages</h2>
      <div className="lg:w-[60%] mx-auto">
        <form
            ref={form}
            onSubmit={sendEmail}
          className="space-y-10 mt-10 md:mt-0"
        >
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              name="from_name"
              type="text"
              placeholder=""
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Enter Name
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              name="from_email"
              type="email"
              placeholder=""
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <label className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-white transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Enter Email
            </label>
          </div>

          <textarea
            name="message"
            rows={5}
            cols={100}
            className="bg-black p-2 rounded-md w-full"
            placeholder="Message"
          ></textarea>
          <div className="pt-2">
            <button type="submit" value="Send" className="btn-grad w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
