// app/contact/page.tsx
"use client";

import { useState } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingId: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
   
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Us  Wehere Here to Help</h1>
        <p className="text-gray-600 mt-2">
          Have questions about your rental or need support? Reach out below.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 rounded-xl shadow-md">
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="bg-gray-300 p-2 rounded-[10]" />
        <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="bg-gray-300 p-2 rounded-[10]"/>
        <input name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="bg-gray-300 p-2 rounded-[10]"/>
        <input name="bookingId" placeholder="Rental Booking ID (if any)" value={formData.bookingId} onChange={handleChange} className="bg-gray-300 p-2 rounded-[10]"/>
        <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="bg-gray-300 p-2 rounded-[10]"/>
        <button type="submit" className="w-full bg-blue-800 p-2 rounded-[10]">Send Message</button>
      </form>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">Reach Us Directly</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><strong>Email:</strong> carrentsupport@gmail.com</li>
            <li><strong>Phone:</strong> +91 99 99 999 999</li>
            <li><strong>WhatsApp:</strong> +91 99 99 999 999</li>
            <li><strong>Hours:</strong> Mon Sun, 8 AM 8 PM</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Visit Us</h2>
          <p className="mt-3 text-gray-700">
            malapppuram,vengara
          </p>
          <div className="mt-4 h-40 w-full bg-gray-200 rounded-md flex items-center justify-center">
            <div className="w-full ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.117120476309!2d-122.41941548467848!3d37.77492927975915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c6aa3aaf5%3A0xc1dd6a2d173234d9!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617043953153!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
            
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Connect with Us</h2>
        <div className="flex justify-center space-x-6 text-blue-600">
          <a href="#" aria-label="Facebook" className="hover:underline">Facebook</a>
          <a href="#" aria-label="Instagram" className="hover:underline">Instagram</a>
          <a href="#" aria-label="Twitter" className="hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  );
}
