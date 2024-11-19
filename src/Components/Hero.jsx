import React, { useState, useEffect } from "react";
import WhatWeDo from "./Whatwedo";
import FeaturedProperties from "./FeaturedProperties";
import Testimonials from "./Testimonials";
import Connectingpeople from "./Connectingpeople";
import ContactUs from "./ContactUs";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [properties, setProperties] = useState([
    { name: "Modern Apartment", location: "New York" },
    { name: "Cozy Cottage", location: "Los Angeles" },
    { name: "Luxury Villa", location: "Miami" },
    { name: "Katargam", location: "Surat" },
    { name: "Dabholi", location: "Surat" },
    { name: "Vav Gam", location: "Surat" },
    { name: "Mota Varaccha", location: "Surat" }
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = properties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProperties(results);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(
        (position / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      setIsVisible(position > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center items-center py-10 bg-gray-100">
        <div className="relative w-full lg:w-10/12 md:w-10/12">
          {/* Background */}
          <div
            className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/hero-bg.jpg')`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

            {/* Navbar */}
            <header className="absolute top-0 w-full flex items-center justify-between px-4 md:px-6 py-4 z-20">
              <img
                src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/site-logo.svg"
                alt="Logo"
                className="h-10"
              />

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 ">
                <a href="/" className="text-white hover:text-teal-500">Home</a>
                <a href="/abouthome" className="text-white hover:text-teal-500">About</a>
                <a href="/serviceshome" className="text-white hover:text-teal-500">Services</a>
                <a href="/Propertieshome" className="text-white hover:text-teal-500">Properties</a>
                <a href="/contacthome" className="text-white hover:text-teal-500">Contact</a>
              </nav>

              {/* Hamburger Menu */}
              <div className="md:hidden" onClick={toggleMenu}>
                <div className="space-y-2">
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                  <span className="block w-8 h-1 bg-white"></span>
                </div>
              </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-teal-600 text-white md:hidden z-50">
                <ul className="space-y-4 p-6">
                  <li><a href="/" className="hover:text-teal-300" >Home</a></li>
                  <li><a href="/abouthome" className="hover:text-teal-300">About</a></li>
                  <li><a href="/serviceshome" className="hover:text-teal-300">Services</a></li>
                  <li><a href="/Propertieshome" className="hover:text-teal-300">Properties</a></li>
                  <li><a href="/contacthome" className="hover:text-teal-300">Contact</a></li>
                </ul>
              </div>
            )}

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h4 className="text-lg md:text-xl">Discover Your Dream Home</h4>
              <h1 className="text-3xl md:text-5xl font-bold mt-4">Find the Perfect Property</h1>
              <form onSubmit={handleSubmit} className="flex mt-6 space-x-2">
                <input
                  type="text"
                  placeholder="Search Here"
                  value={searchTerm}
                  onChange={handleChange}
                  className="px-4 py-2 rounded-l-lg focus:ring-2 focus:ring-teal-500"
                />
                <button className="px-4 py-2 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600">Search</button>
              </form>

              {/* Search Results */}
              <div className="mt-6">
                {filteredProperties.length > 0 ? (
                  <ul>
                    {filteredProperties.map((property, index) => (
                      <li key={index} className="text-white mt-2">
                        <p>{property.name}</p>
                        <p className="text-sm">{property.location}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-red-500">No properties found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <WhatWeDo />
      <FeaturedProperties />
      <Testimonials />
      <Connectingpeople />
      <ContactUs />
    </>
  );
};

export default Hero;
