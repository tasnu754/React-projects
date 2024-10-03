import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

const CV = () => {
  const [cvLink, setCvLink] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure the link is valid before sending
    if (!cvLink) {
      alert("Please enter a valid public Google Drive link.");
      return;
    }

    // Add additional email parameters if needed
    emailjs.sendForm('service_k0v95ac', 'template_hd4gh8i', e.target, '6HvH7f6vG2_3BK3Wm')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "CV sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send CV!');
      });
  };

  const handleLinkChange = (e) => {
    setCvLink(e.target.value);
  };

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="lg:flex justify-evenly gap-6 p-4 md:p-10 my-32 md:w-[70%] md:h-[70%] md:mx-auto bg-white rounded-2xl text-black"
    >
      <div className="text-blue-950 flex-wrap text-xl md:text-2xl mb-6 lg:mb-0 font-bold lg:w-[40%] text-start">
        Ready to make your next career move? Send us your CV link and let’s open the door to new opportunities!
      </div>

      <div className="flex justify-center">
        <form onSubmit={sendEmail}>
            <label className="text-xl text-blue-950" htmlFor="">Please upload drive link</label>
          <input
            onChange={handleLinkChange}
            className="border-2 border-blue-950 rounded-lg p-4 mt-6 w-[92%] mx-auto lg:w-[100%]"
            type="url"
            name="cv_link"
            placeholder="Drive link"
            required
          />
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CV;







// import emailjs from "@emailjs/browser";
// import { useState } from "react";

// const CV = () => {

//     const [cvFile, setCvFile] = useState(null);

//     const sendEmail = (e) => {
//       e.preventDefault();
      
//       const formData = new FormData();
//       formData.append('cv', cvFile);
  
//       emailjs.sendForm('service_k0v95ac', 'template_hd4gh8i', e.target, '6HvH7f6vG2_3BK3Wm')
//         .then((result) => {
//             console.log(result.text);
//             alert('CV Sent Successfully!');
//         }, (error) => {
//             console.log(error.text);
//             alert('Failed to send CV!');
//         });
//     };
  
//     const handleFileChange = (e) => {
//       setCvFile(e.target.files[0]);
//     };

//     return (
//         <div
//          data-aos="flip-left"
//          data-aos-easing="ease-out-cubic"
//          data-aos-duration="2000"
//          className="lg:flex justify-evenly gap-6 p-4 md:p-10 my-32 md:w-[70%]  md:h-[70%] md:mx-auto bg-white rounded-2xl text-black">

//             <div className="text-blue-950 flex-wrap text-xl md:text-2xl mb-6 lg:mb-0 font-bold lg:w-[40%] text-start">Ready to make your next career move? Send us your CV and let’s open the door to new opportunities!</div>
            
//             <div className=" flex justify-center ">
//                 <form
//                  onSubmit={sendEmail}
//                  className="" action="">
//                 <input onChange={handleFileChange} className="border-2 border-blue-950 rounded-lg p-4 w-[92%] mx-auto lg:w-[100%] " type="file" name="cv" accept=".pdf"  required />
//                 <button className="btn" type="submit">Send</button>
//                 </form>
//             </div>
            
//         </div>
//     );
// };

// export default CV;