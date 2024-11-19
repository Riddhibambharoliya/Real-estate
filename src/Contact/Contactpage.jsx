import React, { useState } from "react"

export default function Contactpage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="flex justify-center items-center bg-[#eeeeee] md:pt-2 pt-6">
            <div className="bg-white  rounded-3xl md:w-10/12 w-11/12 md:p-10 p-6 ">
                <div className="relative flex justify-end">

                </div>
                <div className="mx-auto  w-full flex justify-center items-center">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 bg-white  rounded-3xl">

                        <div className="space-y-6 ">

                            <h1
                                className="font-medium tracking-wide text-gray-900 pt-24 text-2xl sm:text-3xl lg:text-5xl"
                                style={{ lineHeight: "1.1" }}
                            >
                                We are excited to connect with you and assist you with your real estate needs
                            </h1>
                            <p className="  text-teal-600 text-xl  ">________</p>
                            <p className="text-teal-600 tracking-widest uppercase font-semibold  ">phone:</p>
                            <p className="text-black tracking-widest uppercase font-bold ">P: 555-1234-678</p>

                            <div>

                            </div>
                        </div>

                        <div className="md:w-full w-11/12  bg-white  rounded-3xl ">
                            <div className="space-y-1 text-center p-4">
                                <div className="text-base uppercase tracking-wider text-muted-foreground md:py-3 py-2 font-normal">Contact Us</div>
                                <div className="md:text-5xl text-2xl  font-normal py-2">Reach Out To Us</div>
                            </div>
                            <div className=" flex  items-center justify-center md:mt-4 mt-2">
                                <div className="border border-b w-24 border-teal-500 "></div>
                            </div>
                            <div className="p-4">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="h-20 border-0 border-b border-black w-full focus:border-primary p-3"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="h-12 border-0 border-b border-black w-full focus:border-primary p-3"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="min-h-[100px] border-0 border-b border-black w-full focus:border-primary resize-none p-3"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button
                                            type="submit"
                                            className="md:w-1/2 px-5 bg-teal-500 hover:bg-teal-600 text-white rounded-full md:h-12 h-10 transition-colors flex items-center justify-center tracking-normal md:text-base text-sm font-semibold"
                                        >
                                            REQUEST A CALL BACK
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}