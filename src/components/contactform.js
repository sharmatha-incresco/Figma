import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
  };

  return (
    <div className="mx-auto max-w-md border border-gray-300 rounded pt-4 md:w-96 md:h-full lg:w-120 lg:h-120">
      <h1 className="text-2xl pt-6 font-bold text-center mb-6">Contact Us</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="pt-8">

          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-fit px-10  py-2 border rounded-2xl bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="pt-8">
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-fit px-10  py-2 border rounded-2xl bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="pt-8">
          
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-fit px-10 py-6 border  resize-none bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <div className="pl-5 pt-10 ">
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-2 rounded-2xl float-left"
            >
              Send
            </button>
          </div>
          <div className="pt-10 text-white">.</div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
