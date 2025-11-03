import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useState } from "react";

import commentImg1 from "../../assets/1.webp";
import commentImg2 from "../../assets/2.webp";
import commentImg3 from "../../assets/3.webp";
import commentImg4 from "../../assets/4.webp";
import commentImg5 from "../../assets/5.webp";
import commentImg6 from "../../assets/6.webp";
import commentImg7 from "../../assets/7.webp";
import arrowRight from "../../assets/arrow-5.png";
import arrowLeft from "../../assets/arrow-7.png";
import "../CommentsSection/big-slider.css";

const testimonials = [
  {
    img: commentImg3,
    title: "Premium Cocktail Experience",
    description:
      "Expert mixologists crafting signature cocktails inspired by the glittering 70s. From bold to refreshing, premium spirits to curated selections—every drink is a masterpiece flowing all night long.",
  },
  {
    img: commentImg4,
    title: "",
    description: "Gourmet Canapés by SOHO Hospitality",
  },
  {
    img: commentImg1,
    title: "",
    description: "High-End Art Gallery Atmosphere",
  },

  {
    img: commentImg5,
    title: "",
    description: "Dual Music Rooms",
  },

  {
    img: commentImg7,
    title: "",
    description: "VIP Penthouse Access",
  },
  {
    img: commentImg6,
    title: "",
    description: "Panoramic Balcony Views",
  },
  {
    img: commentImg2,
    title: "",
    description: "Exclusive Networking Across Multiple Spaces",
  },
];

export default function CommentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full mx-auto bg-[url('./assets/bg-slider.webp')] px-4 py-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#EB6431] mb-10">
        Network Like a Pro.
        <br /> Party Like a Rockstar.
      </h2>
      <p className="font-lato text-[#F7F5E5] w-[300px] lg:w-[780px] m-auto mb-10">
        Get ready for an evening that transports you straight to the golden era
        of New York nightlife, reimagined in a stunning Bangkok penthouse:
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full mx-auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`relative rounded-3xl w-[290px] h-[390px] transition-all duration-300 ${
                index === activeIndex ? "scale-110 z-10" : "scale-100"
              }`}
            >
              {/* Image */}
              <img
                src={testimonial.img}
                alt={testimonial.title}
                className={`w-[290px] h-[390px] object-cover rounded-2xl transition-transform duration-300 ${
                  index === activeIndex ? "scale-110" : "scale-100"
                }`}
              />

              {/* Text overlay with background that scales */}
              <div
                className={`absolute -bottom-5 left-0 w-full p-4 rounded-b-2xl text-[#999999] text-center transition-all duration-300 origin-bottom ${
                  index === activeIndex
                    ? "bg-black/60 scale-110"
                    : "bg-black/50 scale-100"
                }`}
              >
                <h3
                  className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                    index === activeIndex ? "text-[#EB6431]" : "text-white"
                  }`}
                >
                  {testimonial.title}
                </h3>
                <p className="text-sm font-lato pb-3 opacity-90">
                  {testimonial.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center mt-6 relative">
        <div
          className="custom-swiper-button-prev swiper-button-prev"
          style={{
            backgroundImage: `url(${arrowLeft})`,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
        ></div>
        <div
          className="custom-swiper-button-next swiper-button-next"
          style={{
            backgroundImage: `url(${arrowRight})`,
          }}
          onClick={() => swiperRef.current?.slideNext()}
        ></div>
      </div>
    </section>
  );
}
