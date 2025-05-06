import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Akshay Singh (Owner of nftTrade)",
    text: "Incredible service! I got exactly what I envisioned. Highly recommended.",
  },
  {
    name: "Suman Soni (Owner of MealDabba)",
    text: "Delivered on time and went beyond expectations. My website looks fantastic!",
  },
  {
    name: "Rahul Mehta (Startup Founder)",
    text: "Professional, timely, and incredibly skilled. Would definitely work again.",
  },
  //   {
  //     name: "Priya Sharma (Freelance Designer)",
  //     text: "Helped me fix key issues quickly. Very easy to communicate with!",
  //   },
  //   {
  //     name: "Karan Patel (Agency Owner)",
  //     text: "Smooth process from start to finish. Truly understands what clients need.",
  //   },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const visibleCount = 3; // Number of testimonials to show
  const maxIndex = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % maxIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  //   const handlePrev = () => setIndex(index === 0 ? maxIndex - 1 : index - 1);
  //   const handleNext = () => setIndex((index + 1) % maxIndex);

  const currentGroup = testimonials.slice(
    index * visibleCount,
    index * visibleCount + visibleCount
  );

  return (
    <section className="bg-indigo-500 bg-opacity-10 px-6 md:px-20 py-20 relative">
      <h2 class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600 text-center mb-10">
        People I’ve worked with <br className="hidden md:block" /> have a few
        things to say…
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {currentGroup.map((testimonial, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-2"
          >
            <p className="text-lg italic text-gray-600 mb-4">
              “{testimonial.text}”
            </p>
            <p className="mt-4 font-semibold text-gray-800 text-lg">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>

      {/* Optional nav buttons */}
      {/* <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
        >
          ◀️
        </button>
        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
        >
          ▶️
        </button>
      </div> */}
    </section>
  );
}
