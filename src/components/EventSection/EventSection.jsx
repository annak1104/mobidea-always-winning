import React from "react";

import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";
import img3 from "../../assets/event1.webp";
import img2 from "../../assets/event2.webp";
import img1 from "../../assets/event3.webp";
import bg from "../../assets/event-bg.webp";

const EventSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-[#0f1724] overflow-hidden min-w-[375px] min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Напівпрозорий шар поверх бекграунду */}
      <div className="absolute inset-0 bg-[#F7F5E5]/90 z-0" />
      <img
        src={arrowUp}
        alt="arrow-up"
        className="absolute hidden md:block top-1 left-50 lg:-top-9 md:w-40 md:h-70"
      />
      <img
        src={arrowDown}
        alt="arrow-down"
        className="absolute hidden md:block right-40 lg:bottom-40 md:w-40 md:h-70"
      />

      {/* Контент */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
          {/* LEFT: Images grid */}
          <div className="order-2 md:order-1 md:w-1/2 grid grid-rows-3 gap-8 justify-items-center">
            {/* 1. Верхня — по центру */}
            <div className="justify-self-center rounded-[20px] overflow-hidden shadow-md w-[268px] h-[115px] md:w-[428px] md:h-[184px]">
              <img
                src={img1}
                alt="Event photo 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Середня — справа */}
            <div className="justify-self-end rounded-[20px] overflow-hidden shadow-md w-[268px] h-[115px] md:w-[428px] md:h-[184px]">
              <img
                src={img2}
                alt="Event photo 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3. Нижня — зліва */}
            <div className="justify-self-start rounded-[20px] overflow-hidden shadow-md w-[268px] h-[115px] md:w-[428px] md:h-[184px]">
              <img
                src={img3}
                alt="Event photo 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Heading + text */}
          <div className="order-1 md:order-2 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-[2.2rem] md:text-[64px] w-[630px] text-left font-semibold leading-tight md:leading-[0.95] text-[#EB6431] font-playfair mb-12">
              Legendary Events.
              <br />
              One Proven Formula.
              <br />
              Your Next Win.
            </h2>

            <div className="font-lato text-left text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#0b1820] font-normal w-full max-w-[620px] mx-auto md:mx-0 px-4 md:px-0">
              <p className="mb-6 md:mb-9">
                We’ve taken the celebration from Bangkok to Seville to Prague,
                leaving a trail of unforgettable nights across three continents.
                Now{" "}
                <span className="text-[#EB6431] font-semibold">
                  we’re coming full circle for our first anniversary
                </span>{" "}
                — back to where it all began.
              </p>

              <p className="mb-6 md:mb-9">
                Bigger, bolder, and in the most spectacular venue yet!
              </p>

              <p className="mb-6 md:mb-9">
                If you thought our previous events were unforgettable, wait
                until you experience what we have planned for this homecoming
                celebration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
