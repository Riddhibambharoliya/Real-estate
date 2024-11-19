import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#eeeeee] text-gray-800 py-10 ">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-10/12">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <img
                        src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/footer-logo.svg"
                        alt="Real Estate Company Logo"
                        className="mb-4"
                    />
                    <p className="text-inherit text-slate-500 leading-relaxed">
                        Trusted real estate service for years, connecting buyers with their dream properties.</p>
                </div>

                {/* About Us Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 tracking-wider">About Us</h3>
                    <p className="text-inherit text-slate-500 leading-relaxed">
                        At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.
                    </p>
                </div>

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 tracking-wider">Contact Info</h3>
                    <p className="text-teal-600 font-medium">
                        13, Fifth Avenue, New York, NY 101660
                    </p>
                    <a href="mailto:contact@info.com" className="block text-teal-600 font-medium mt-2">contact@info.com</a>
                    <a href="tel:+15553454599" className="block text-teal-600 font-medium mt-2">555-345-4599</a>
                </div>

                {/* Property Search Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 tracking-wider">Property Search</h3>
                    <p className="text-inherit text-slate-500 leading-relaxed mb-4">
                        Find your perfect home with our easy-to-use property search tool.
                    </p>
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            placeholder="Search Properties"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
                        />
                        <button className="p-2 bg-teal-500 rounded-full text-white hover:bg-teal-600 focus:outline-none">
                            🔍
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col">
                <div className="border-t-2  border-gray-300 mt-10   pt-4 flex justify-center items-center ">
                    <div className="flex justify-between items-center w-10/12 ">
                        <p className="text-sm text-slate-500">Copyright © 2024 Real Estate Company</p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/" className="text-teal-600 hover:text-teal-800 transition-colors duration-200">
                                <FaTwitter />
                            </a>
                            <a href="https://www.pinterest.com/" className="text-teal-600 hover:text-teal-800 transition-colors duration-200">
                                <FaPinterestP />
                            </a>
                            <a href="https://www.facebook.com/" className="text-teal-600 hover:text-teal-800 transition-colors duration-200">
                                <IoLogoYoutube />
                            </a>
                            <a href="https://www.facebook.com/" className="text-teal-600 hover:text-teal-800 transition-colors duration-200">
                                <RiInstagramFill />
                            </a>
                            <a href="https://www.facebook.com/" className="text-teal-600 hover:text-teal-800 transition-colors duration-200">
                                <FaFacebookSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
