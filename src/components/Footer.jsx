import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-4 gap-4 text-center">
        <div>
          <h5 className="font-bold mt-1 mb-2  text-orange-500 text-2xl">Follow Us</h5>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" >
              <FaFacebook className="text-4xl hover:text-gray-400"  />
            </a>
            <a href="https://twitter.com" >
              <FaTwitter className="hover:text-gray-400 text-4xl"  />
            </a>
            <a href="https://instagram.com" >
              <FaInstagram className="hover:text-gray-400 text-4xl" />
            </a>
            <a href="https://linkedin.com" >
              <FaLinkedin className="hover:text-gray-400 text-4xl"  />
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-orange-500 text-2xl">Resources</h5>
          <ul>
            <li><a href="/men" className="hover:text-gray-400">Men</a></li>
            <li><a href="/women" className="hover:text-gray-400">Women</a></li>
            <li><a href="/kids" className="hover:text-gray-400">Kids</a></li>
           
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-orange-500 text-2xl">Quick Links</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-orange-500 text-2xl">Resources</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>
       
       
      </div>
    </footer>
  );
}

export default Footer;
