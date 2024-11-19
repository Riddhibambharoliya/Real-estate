import React from "react"

export default function Ourstory() {
    return (
        <div className="flex justify-center items-center bg-[#eeeeee] md:py-12 py-6">
            <div className="bg-white  rounded-3xl md:w-10/12 w-11/12 md:p-10 p-6 ">
                <div className="relative flex justify-end">

                </div>
                <div className="mx-auto  w-full flex justify-center items-center">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 bg-white  rounded-3xl">

                        <div className="space-y-6">
                            <h1 className="text-2xl font-medium  tracking-wide text-gray-900 lg:text-3xl xl:text-6xl pt-24">
                                Our Story
                            </h1>
                            <p className="  text-teal-600 text-xl  ">________</p>
                            <p className="text-xl font-semibold text-black tracking-wide">

                                Founded 10 years ago by John Oliver, our company was born out of a deep understanding of the challenges and frustrations that buyers, sellers, and investors often face in the market.
                            </p>
                            <p className="text-medium font-normal text-gray-600">
                            Real Estate has been a leading player in the industry for over two decades. With an unwavering commitment to excellence and a customer-centric approach, we have earned the trust of thousands of clients. Our extensive experience, combined with our team of dedicated professionals, allows us to deliver unparalleled service and superior results. Whether you are buying, selling, or investing in real estate, you can rely on Real Estate to guide you every step of the way.
                            </p>
                            <div>

                            </div>
                        </div>
                        <div className="relative md:h-[800px] h-[200px] lg:h-[600px] ">
                            <img
                                alt="Modern white house with wooden accents"
                                className="object-cover  rounded-2xl  md:w-full md:h-full"
                                src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/our-story.jpg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}