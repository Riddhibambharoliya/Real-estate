import React from "react";

const Propertyfeature = () => {
  const properties = [
    {
      id: 1,
      image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-01.jpg",
      category: "Apartment - Queens",
      title: "Modern Stylish Apartment",
      description:
        "Discover the epitome of contemporary living in our sleek and chic modern stylish apartments .",
      price: "$150,000",
    },
    {
      id: 2,
      image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-02.jpg",
      category: "Apartment - Queens",
      title: "Contemporary Apartments",
      description:
        "Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.",
      price: "$150,000",
    },
    {
      id: 3,
      image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-03.jpg",
      category: "Apartment - Queens",
      title: "Suburban Single-Family Homes",
      description:
        "Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.",
      price: "$150,000",
    },
    {
        id: 4,
        image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-04.jpg",
        category: "Apartment - Queens",
        title: "Luxury Estates",
        description:
          "Experience opulence and sophistication with our exclusive collection of luxury estate properties.",
        price: "$150,000",
      },
      {
        id: 5,
        image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-05.jpg",
        category: "Apartment - Queens",
        title: "Townhouses",
        description:
          "Enjoy modern living and convenience with our stylish and well-designed townhouse residences.",
        price: "$150,000",
      },
      {
        id: 6,
        image: "https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/feature-06.jpg",
        category: "Apartment - Queens",
        title: "Vacation Homes",
        description:
          "Find your ideal getaway with our range of vacation homes, perfect for relaxation and creating lasting memories.",
        price: "$150,000",
      },
  ];

  return (
    <div className="bg-[#eeeeee] md:py-20 py-8 ">
      <div className="w-10/12 mx-auto text-center ">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Featured Properties
        </h2>
        <div className="flex justify-center items-center">
          <p className="mt-10 text-lg text-black md:w-8/12 w-full">
            Discover our hand-picked selection of top-notch properties with
            outstanding features, guaranteed to meet your real estate needs and
            exceed your expectations.
          </p>
        </div>
        <div className="">
          <span className="text-teal-600 text-2xl">____________</span>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full ">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-[#eeeeee] rounded-2xl  "
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="py-6 text-left   items-start">
                <p className="text-sm text-black  font-semibold uppercase tracking-[2px] mb-2">
                  {property.category}
                </p>
                <h3 className="text-2xl font-medium text-gray-900">
                  {property.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {property.description}
                </p>
                <p className="mt-4 text-xl font-bold text-teal-600">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Propertyfeature;
