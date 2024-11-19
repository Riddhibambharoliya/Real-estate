import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque. Nam scelerisque placerat orci. Maecenas at pulvinar dui. In fermentum, lectus sed tincidunt ornare, arcu ex convallis sapien, quis vestibulum libero tellus quis nisl.",
      author: "James Oliver",
    },
    {
      id: 2,
      rating: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id convallis neque. Nam scelerisque placerat orci. Maecenas at pulvinar dui. In fermentum, lectus sed tincidunt ornare, arcu ex convallis sapien, quis vestibulum libero tellus quis nisl.",
      author: "James Oliver",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-[#eeeeee] md:px-0 px-6 py-8">
      <div className="bg-gray-50 py-6 px-4 md:px-6 lg:px-8 w-full sm:w-11/12 lg:w-10/12 rounded-3xl">
        <div className="w-full lg:w-11/12 mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="text-start">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-[1px] mt-4">
                Read from clients who have found the perfect place where they can create...
              </h2>
              <span className="text-teal-600 mt-2 block">_______</span>
              <p className="mt-4 text-sm sm:text-lg text-gray-600 w-full sm:w-4/5">
                Discover testimonials from satisfied clients who have found their dream properties with Real Estate, the trusted experts in helping you find the perfect place to call home.
              </p>
              <button className="mt-6 px-8 sm:px-12 lg:px-16 py-2 sm:py-3 bg-teal-600 text-white text-sm sm:text-lg tracking-[2px] rounded-full hover:bg-teal-500 w-full sm:w-auto">
                More Testimonials
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:gap-6 lg:gap-8 grid-cols-1">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-5 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start mb-3">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.546L.489 6.91l6.561-.955L10 0l2.95 5.955 6.561.955-4.755 4.635 1.122 6.546z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-black font-medium text-sm sm:text-base mb-2 sm:mb-3">
                    “{testimonial.quote}”
                  </p>
                  <p className="text-teal-600 font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
