"use client";
import React, { useState } from "react";
import { SpecialButton } from "./SpecialButton";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to an API
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 space-y-4 shadow-black/[0.03] backdrop-blur-[0.5rem] bg-dark dark:bg-gray-950 dark:bg-opacity-75 rounded-3xl shadow-xl"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="relative px-4 py-2 text-base rounded-3xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="px-4 py-2 text-base rounded-3xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        className="px-4 py-2 text-base rounded-3xl text-white bg-transparent border-2 border-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 shadow shadow-slate-500"
      ></textarea>
      <SpecialButton>Free Quote</SpecialButton>
    </form>
  );
};

export default ContactForm;
