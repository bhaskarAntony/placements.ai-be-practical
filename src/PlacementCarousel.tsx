import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { Building2 } from "lucide-react";

const companies = [
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    description: "Hiring partner for cloud and full-stack jobs.",
  },
  {
    name: "TCS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
    description: "Recruiting freshers for tech roles across India.",
  },
  {
    name: "Emphasis",
    logo: "https://www.mphasis.com/content/dam/mphasis-com/global/logo/mphasis-logo.png.thumb.468.468.png",
    description: "Recruiting freshers for tech roles across India.",
  },
  {
    name: "HCL",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-qdGVHLR1SywCBY93xbZ18R9AM7mCt2gkA&s",
    description: "Backed placement support for certified learners.",
  },
  {
    name: "Capgemini",
    logo: "https://logos-marques.com/wp-content/uploads/2023/09/Capgemini-Logo-thmb.png",
    description: "Global MNC hiring through partner network.",
  },
//   {
//     name: "Wipro",
//     logo: "https://via.placeholder.com/100x100?text=W",
//     description: "",
//   },

  {
    name: "LG Soft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYPS7GrAuGf5AMvumCUvoXmL7D45V2XpSeQ&s",
    description: "Hiring partner for cloud and full-stack jobs.",
  },

  {
    name: "Polarise",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Polaris-logo.png",
    description: "Hiring partner for cloud and full-stack jobs.",
  },

  {
    name: "Red bus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Redbus_logo.jpg/1200px-Redbus_logo.jpg",
    description: "Hiring partner for cloud and full-stack jobs.",
  },

  {
    name: "IBM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBss61ZSzmBM75JqdYCVqsfqJ4JijX0mt9g&s",
    description: "Hiring partner for cloud and full-stack jobs.",
  },
];

export default function PlacementCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <section className="bg-gray-900 text-white py-14 px-4">
      <div className="text-center mb-16">
            <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Industry Partners
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Join a network of top-tier companies like Wipro, TCS, and IBM. Our curriculum is designed with industry leaders to ensure you’re job-ready!
            </p>
          </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Arrow Left */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {companies.map((company, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-gray-800 rounded-xl p-6 text-center shadow-lg flex flex-col items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-30 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{company.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{company.description}</p>
            </div>
          ))}
        </div>

        {/* Arrow Right */}
        <button
          onClick={() => slider.current?.next()}
          className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
