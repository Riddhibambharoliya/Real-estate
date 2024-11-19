import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "Property Sales",
      description:
        "Find your dream home with Real Estate - our expert team will guide you through the process and ensure a smooth transaction.",
    },
    {
      id: 2,
      title: "Property Rentals",
      description:
        "Find your dream rental property with Real Estate, offering a variety of options to suit your needs and preferences.",
    },
    {
      id: 3,
      title: "Property Management",
      description:
        "Trust Real Estate to handle the day-to-day management of your property, maximizing its value and minimizing your stress.",
    },
    {
      id: 4,
      title: "Lucrative Investments",
      description:
        "Real Estate presents lucrative investment opportunities in the real estate market, providing high returns on investments.",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-[#eeeeee] py-12">
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 w-full md:w-11/12 lg:w-10/12 rounded-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 py-8">
            What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black max-w-3xl mx-auto px-4 md:px-0">
            Simplifying the journey of buying, selling, and renting properties. Our
            expert team provides comprehensive real estate solutions tailored to your needs.
          </p>
          <div className="py-4">
            <span className="text-teal-600">____________</span>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
            {services.map((service) => (
              <div key={service.id} className="text-left px-4 sm:px-6 lg:px-4">
                <h3 className="text-teal-600 text-lg font-normal">
                  0{service.id}
                </h3>
                <h4 className="text-xl font-semibold mt-4 text-gray-900">
                  {service.title}
                </h4>
                <p className="mt-2 text-base text-gray-500 max-w-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
