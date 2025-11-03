import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useState } from "react";

import commentImg1 from "../../assets/1.png";
import commentImg2 from "../../assets/2.png";
import commentImg3 from "../../assets/3.png";
import commentImg4 from "../../assets/4.png";
import commentImg5 from "../../assets/5.png";
import commentImg6 from "../../assets/6.png";
import commentImg7 from "../../assets/7.png";
import arrowRight from "../../assets/arrow-5.png";
import arrowLeft from "../../assets/arrow-7.png";
import "../CommentsSection/big-slider.css";

const testimonials = [
  { img: commentImg3 },
  { img: commentImg1 },
  { img: commentImg2 },
  { img: commentImg5 },
  { img: commentImg4 },
  { img: commentImg6 },
  { img: commentImg7 },
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
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full mx-auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`flex flex-col justify-center p-4 rounded-3xl w-[290px] h-[390px] text-center relative transition-all duration-300 ${
                index === activeIndex ? "scale-110 z-10" : "scale-100"
              }`}
            >
              {/* Image container */}
              <div className="absolute top-[-40px] w-[290px] left-1/2 transform -translate-x-1/2 transition-transform duration-300">
                <img
                  src={testimonial.img}
                  alt={`Testimonial ${index}`}
                  className={`transition-transform duration-300 ${
                    index === activeIndex ? "scale-110" : "scale-100"
                  } w-[290px] h-[390px] object-cover rounded-2xl`}
                />
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
