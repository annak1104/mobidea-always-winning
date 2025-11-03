import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useState } from "react";

import arrowLeft from "../../assets/ar-left.png";
import arrowRight from "../../assets/ar-right.png";
import commentImg1 from "../../assets/daria.png";
import commentImg2 from "../../assets/laetitia.png";
import commentImg5 from "../../assets/nigel.webp";
import quote from "../../assets/quote.png";
import "../CommentsSection/big-slider.css";

const testimonials = [
  {
    quote: quote,
    name: "Daria Strogaleva,",
    text: "Absolutely stunning party—great location, the showtime, bar. And what I really liked—you were able to do both—to dance on the dance floor with loud music and also talk to partners in more quite place. Thanks for inviting! Looking forward to the next one!",
    img: commentImg1,
    description: "Addop.io",
  },
  {
    quote: quote,
    name: "Laetitia PERON,",
    text: "It was absolutely perfect, one of the best after-work party since years, congratulations really!",
    img: commentImg2,
    description: "theperfectclick.agency",
  },
  {
    quote: quote,
    name: "Nigel Williams",
    text: "Fantastic venue, ambiance, entertainment and perfect crowd for networking! Keep Winning My Friends !!!",
    img: commentImg5,
    description: "copiousclicks.com",
  },
];

export default function CommentsSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative rounded-3xl w-full mx-auto bg-[url('./assets/bg-com.png')] bg-cover bg-right px-6 md:px-12 py-16 overflow-hidden">
      <h2 className="text-center text-3xl md:text-5xl font-serif font-semibold text-white">
        What the Winners Are Raving About
      </h2>

      <div className="relative flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={60}
          loop={true}
          // pagination={{ clickable: true }}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            1280: { slidesPerView: 2 },
          }}
          className="w-full flex justify-center"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="font-lato flex justify-center">
              <article className="relative w-[300px] md:w-[464px] h-[460px] bg-transparent rounded-2xl text-center px-6 py-8 md:py-12 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[60px] h-[50px] md:w-[60px] md:h-[55px]">
                  <img
                    src={t.quote}
                    alt={t.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="text-left mt-20 mb-24 text-white text-base md:text-lg lg:text-xl leading-relaxed">
                  “{t.text}”
                </p>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div className="flex flex-col text-left ml-5">
                    <p className="font-semibold text-lg md:text-xl text-white">
                      {t.name}
                    </p>
                    {t.description && (
                      <p className="text-sm md:text-base text-gray-300">
                        {t.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="custom-swiper-button-prev absolute left-4 top-[95%] md:top-1/2 -translate-y-1/2 w-7 h-12 md:w-7 md:h-14 rounded-full bg-center bg-no-repeat bg-contain z-20"
          style={{ backgroundImage: `url(${arrowLeft})` }}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="previous"
        />

        <button
          className="custom-swiper-button-next absolute right-4 top-[95%] md:top-1/2 -translate-y-1/2 w-7 h-12 md:w-7 md:h-14 rounded-full bg-center bg-no-repeat bg-contain z-20"
          style={{ backgroundImage: `url(${arrowRight})` }}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="next"
        />
      </div>
    </section>
  );
}
