"use client";
import { ContactData } from "@/components/types/costomerDetails";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
  const [alert, setAlert] = useState<boolean>(false);
  const [form, setForm] = useState<ContactData>({
    name: "",
    mail: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    setForm({ name: "", mail: "", message: "" });
  };

  return (
    <div
      style={{ backgroundImage: "url('/images/dark-shade.jpg')" }}
      className="min-h-screen bg-cover bg-center h-full w-full grid justify-between"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 text-white  h-100 p-2 ">
          <div className="flex flex-col justify-center   sm:px-20">
            <h1 className="text-start font-bold text-[2em] sm:text-[3.5em] text-white">
              Contact Us
            </h1>
            <p >
              Need assistance with your rental or have a question about our
              services. Our team is here to help. Contact us today and we will get
              back to you promptly to ensure a smooth and hassle-free
              experience.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 w-fit sm:px-20 text-black">
            <div className="flex gap-3 mt-5 ">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#fff]  p-2 border-0 outline-0"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-[#fff] p-2 border-0 outline-0"
                name="mail"
                value={form.mail}
                onChange={handleChange}
              />
            </div>
            <div className="w-full ">
              <textarea
                className="bg-[#fff]  w-full h-50 border-0 outline-0 p-2"
                name="message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-amber-400 p-2">
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-[#fff] flex flex-col justify-center items-center ">
        <div className="font-bold text-[2.5em]">
          <h1>Connect With Us</h1>
        </div>
        <div className=" flex gap-5 mt-5">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div>
        {alert && (
          <div className="fixed top-15  w-full   text-white  rounded shadow-lg z-50">
            <p className="w-full text-center  p-5 bg-green-500">
              Thank you for submitting your feedback!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
