import React from "react";

import bangkok from "../../assets/bangkok.webp";
import prague from "../../assets/praga.webp";
import seville from "../../assets/seville.webp";
import text from "../../assets/text.svg";

const PastEventsGallery = () => {
  const images = [
    { src: bangkok, alt: "Bangkok 2024" },
    { src: seville, alt: "Seville 2025" },
    { src: prague, alt: "Prague 2025" },
  ];

  return (
    <section
      className="bg-[#f7f3ea] relative overflow-visible z-[50]
      pt-[28rem] sm:py-[20rem] md:py-40 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        <div className="bg-[#EB6431] rounded-[2.5rem] p-4 md:p-6 w-full max-w-[994px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-[2rem] overflow-hidden flex justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[280px] sm:h-[320px] lg:h-[288px] object-cover rounded-[2rem]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TEXT IMAGE (desktop) */}
        <img
          src={text}
          alt="Text description"
          className="hidden lg:block absolute right-[-8%] -top-[52%] w-[400px] h-[674px] z-[9999] pointer-events-none"
        />

        {/* TEXT IMAGE (mobile / tablet) */}
        <img
          src={text}
          alt="Text description"
          className="block lg:hidden absolute -top-[40%] -right-[43%] -translate-x-1/2 w-[85%] max-w-[400px] z-[9999] pointer-events-none"
        />
      </div>
    </section>
  );
};

export default PastEventsGallery;
