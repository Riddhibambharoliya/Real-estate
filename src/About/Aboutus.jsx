import React from "react"

export default function Aboutus() {
    return (
        <div className="flex justify-center items-center bg-[#eeeeee] md:py-12 py-6">
            <div className="bg-white  rounded-3xl md:w-10/12 w-11/12 md:p-10 p-6 ">
                <div className="relative flex justify-end">

                </div>
                <div className="mx-auto  w-full flex justify-center items-center">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 bg-white  rounded-3xl">
                        <div className="relative md:h-[800px] h-[200px] lg:h-[600px] ">
                            <img
                                alt="Modern white house with wooden accents"
                                className="object-cover  rounded-2xl  md:w-full md:h-full"
                                src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/about-us.jpg"
                                priority
                            />
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-3xl font-semibold  tracking-tight text-gray-900 lg:text-3xl xl:text-6xl pt-20">
                            About Us
                            </h1>
                            <p className="  text-teal-600 text-xl  ">________</p>
                            <p className="text-xl font-semibold text-black">
                            Welcome to Real Estate, your trusted partner in the world of real estate. With a passion for connecting people with their dream properties, we are dedicated to providing exceptional service and delivering outstanding results.
                            </p>
                            <p className="text-medium font-normal text-gray-600">
                            At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry. With years of experience and a dedicated team of professionals, we are committed to providing exceptional service to our clients. Whether you are buying, selling, or renting, we are here to guide you throughout the entire process and ensure a smooth and successful transaction.
                            </p>
                            <div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}