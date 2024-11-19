import React, { useState, useEffect } from "react";


const Servicesheader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm}...`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition((position / (document.body.scrollHeight - window.innerHeight)) * 100);
      setIsVisible(position > 100); // Show button after scrolling 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center md:py-10 py-2  bg-[#eeeeee]">
        <div className="relative w-full lg:w-10/12 md:w-10/12 flex justify-center items-center">
          {/* Background Image Wrapper */}
          <div
            className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full bg-cover bg-center md:rounded-3xl z-10"
            style={{
              backgroundImage: `url('https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/services-bg.jpg')`,
            }}
          >
            {/* Overlay with Opacity */}
            <div className="absolute inset-0 bg-black opacity-50 md:rounded-3xl z-10"></div>


            {/* Search Bar Form Aligned to the Center */}
            <div className="absolute inset-0 z-20 h-full flex flex-col items-center justify-start text-center text-white px-4 md:px-0">
              <div className="flex justify-start items-center w-full">

                <header className="flex items-start justify-between px-4 md:px-6  py-4 w-full relative z-20">
                  <h1 className="text-white text-lg md:text-xl font-bold">
                    <img
                      src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/site-logo.svg"
                      alt="logo"
                      className="h-8 md:h-8"
                    />
                  </h1>

                  <nav className="hidden md:flex space-x-4 lg:space-x-10">
                    <a href="/" className="text-white font-semibold text-lg lg:text-xl hover:text-teal-600">
                      Home
                    </a>
                    <a href="/abouthome" className="text-white font-semibold text-lg lg:text-xl hover:text-teal-600">
                      About
                    </a>
                    <a href="/serviceshome" className="text-white font-semibold text-lg lg:text-xl hover:text-teal-600">
                      Services
                    </a>
                    <a href="/propertieshome" className="text-white font-semibold text-lg lg:text-xl hover:text-teal-600">
                      Properties
                    </a>
                    <a href="/contacthome" className="text-white font-semibold text-lg lg:text-xl hover:text-teal-600">
                      Contact
                    </a>
                  </nav>

                  <div className="flex space-x-3 md:space-x-6">
                    <img
                      src="/assets/twitter.png"
                      alt="Twitter"
                      className="w-6 md:w-8 hover:opacity-75 transition"
                    />
                    <img
                      src="/assets/pinterest.png"
                      alt="Pinterest"
                      className="w-6 md:w-8 hover:opacity-75 transition"
                    />
                    <img
                      src="/assets/youtube.png"
                      alt="YouTube"
                      className="w-7 md:w-10 hover:opacity-75 transition"
                    />
                  </div>

                  <div className="md:hidden" onClick={toggleMenu}>
                    <div className="space-y-2">
                      <span className="block w-8 h-1 bg-white"></span>
                      <span className="block w-8 h-1 bg-white"></span>
                      <span className="block w-8 h-1 bg-white"></span>
                    </div>
                  </div>

                </header>

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
                
              </div>
              <div className="h-full flex justify-center items-center flex-col">
                <h4 className="text-sm md:text-xl lg:text-3xl mt-4 font-semibold">Services</h4>
                <h1 className="text-3xl md:text-5xl lg:text-7xl tracking-wider font-semibold mt-4 lg:mt-8 w-10/12 lg:max-w-1/2">
                  We offer a wide Range of Services
                </h1>

                <form
                  onSubmit={handleSubmit}
                  className="transform flex justify-center items-center w-full z-10 mt-10 px-4 lg:px-0"
                >
                  <div className="bg-white border-2 border-teal-600 flex justify-between items-center gap-3 md:gap-5 rounded-lg overflow-hidden w-full md:w-3/4 lg:w-96">
                    <input
                      type="text"
                      placeholder="Search Here"
                      value={searchTerm}
                      onChange={handleChange}
                      className="relative py-2 md:py-3 pl-3 md:pl-5 rounded-md w-full outline-none text-black"
                    />
                    <button
                      type="submit"
                      className="p-2 md:p-3 bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 transition-all px-3"
                    >
                      🔍
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {isVisible && (
          <div
            className="fixed right-3  flex flex-col items-center space-y-2"
            onClick={scrollToTop}
          >
            <span className="text-sm font-semibold text-teal-600">Scroll</span>
            <div className="relative w-0.5 h-16 md:h-20 bg-zinc-400">
              <span
                className="absolute w-3 h-3 md:w-5 md:h-5 bg-teal-600 rounded-full"
                style={{ top: `${scrollPosition}%`, transform: 'translateX(-50%)' }}
              ></span>
            </div>
          </div>
        )}

      </div>

    </>
  );
};

export default Servicesheader;
