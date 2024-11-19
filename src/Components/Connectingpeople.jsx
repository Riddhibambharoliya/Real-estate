import React from "react"

export default function Connectingpeople() {
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
                                src="https://websitedemos.net/real-estate-company-04/wp-content/uploads/sites/1484/2023/07/connecting-with-customers.jpg"
                                priority
                            />
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-3xl font-normal  tracking-tight text-gray-900 lg:text-3xl xl:text-6xl">
                                Connecting people with perfect homes is our passion.
                            </h1>
                            <p className="  text-teal-600 text-xl  ">________</p>
                            <p className="text-base text-gray-500">
                                With a genuine passion for helping people find their dream homes, we are dedicated to connecting buyers and sellers
                                in the real estate market. Trust us to make your home buying or selling experience seamless and satisfying.
                            </p>
                            <div>
                                <button
                                    className="bg-teal-600 hover:bg-teal-500 text-white md:px-8 px-5 md:py-2 py-4 rounded-full md:text-lg text-sm"
                                >
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}