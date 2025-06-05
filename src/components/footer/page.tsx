"use client";
import Link from "next/link";
import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "HOME", url: "/" },
    { name: "RENT NOW", url: "/carRent" },
    { name: "CART", url: "/cart" },
    { name: "ABOUT US", url: "/about" },
    { name: "CONTACT US", url: "/contact" },
  ];

  return (
    <footer className="bg-black text-white px-6 py-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
       
        <div>
          <h1 className="text-xl font-bold mb-4">CAR✓RENT</h1>
          <p className="text-sm text-gray-400">
            Reliable and affordable car rentals at your fingertips. Drive with ease, book with confidence.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.url} className="hover:text-amber-400 transition duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 text-sm text-gray-400">
            <Mail size={16} /> support@carrent.com
          </p>

          <div className="mt-6">
            <h3 className="text-md font-medium mb-2">Follow Us</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CAR✓RENT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
