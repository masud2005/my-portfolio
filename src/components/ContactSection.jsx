import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hwucvut", // আপনার Service ID
        "template_qgzcent", // আপনার Template ID
        form.current,
        "S4t5O1gnufzRSOhs_" // আপনার Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
            // console.log(error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="container mx-auto text-white py-16 -mt-10">
      <div className=" mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-center text-xl mb-10">Contact Us</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Messenger */}
            <div className="bg-[#041c50] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">Messenger</h3>
              <p className="mt-2">Masud Rana</p>
              <a
                href="https://m.me/MasudRana2005"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
              >
                Send a Message
              </a>
            </div>
            {/* WhatsApp */}
            <div className="bg-[#041c50] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">WhatsApp</h3>
              <p className="mt-2">Masud Rana</p>
              <a
                href="https://wa.me/8801834140688"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-white"
              >
                Send a Message
              </a>
            </div>
            {/* Email */}
            <div className="bg-[#041c50] p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="mt-2">masud20012005@gmail.com</p>
              <a
                href="mailto:masud20012005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white"
              >
                Send a Message
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message Here..."
                rows="6"
                className="w-full px-4 py-3 bg-[#041c50] rounded-lg placeholder-gray-300 text-white outline-none focus:ring-1 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-transparent border border-blue-500 hover:bg-[#041c50] rounded-lg text-white font-semibold"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
