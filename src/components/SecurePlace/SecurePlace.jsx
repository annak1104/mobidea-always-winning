import React from "react";

import stars from "../../assets/or-stars.png";
import plativka from "../../assets/plativka.webp";

const SecurePlace = () => {
  return (
    <section className="relative bg-[#F7F5E5] text-[#0f1724] overflow-hidden min-w-[375px] min-h-screen">
      {/* Напівпрозорий шар поверх бекграунду */}
      <div className="absolute inset-0 bg-[#F7F5E5]/90 z-0" />
      <img
        src={stars}
        alt="arrow-down"
        className="absolute hidden md:block right-10 lg:bottom-154 md:w-40 md:h-50"
      />

      {/* Контент */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
          {/* LEFT: Images grid */}
          <div className="order-2 md:order-1 md:w-1/2 grid grid-rows-1 justify-items-center">
            {/* 1. Верхня — по центру */}
            <div className="justify-self-center overflow-hidden w-[340px] h-[340px] md:w-[628px] md:h-[600px]">
              <img
                src={plativka}
                alt="Event photo 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Heading + text */}
          <div className="relative order-1 md:order-2 md:w-1/2 flex flex-col justify-center">
            <h2 className="absolute -top-[16%] text-[2.2rem] md:text-[64px] w-[630px] text-left font-semibold leading-tight md:leading-[0.95] text-[#EB6431] font-playfair mb-12">
              Secure Your Place
              <br />
              Among the Winners!
            </h2>

            <div className="relative w-full flex justify-center md:justify-start">
              {/* Контейнер з поворотом */}
              <div className="relative rotate-[10deg] border-2 border-[#999999] rounded-[25px] p-[70px] inline-block">
                {/* Внутрішній блок із компенсацією повороту тексту */}
                <div className="-rotate-[10deg] text-left text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#0b1820] font-lato font-normal max-w-[620px] mx-auto md:mx-0">
                  <p className="text-[#EB6431] mb-6 md:mb-9">
                    CRITICAL: Limited VIP Access
                  </p>

                  <p className="mb-6 md:mb-9">
                    Our Bangkok, Seville, and Prague events reached capacity
                    faster than expected. This time, we&apos;re expanding to
                    accommodate up to{" "}
                    <span className="text-[#EB6431]">500 guests</span>, but only
                    the{" "}
                    <span className="text-[#EB6431]">
                      first 400 spots will gain access to the open bar.
                    </span>
                  </p>

                  <p className="mb-6 md:mb-9">
                    Don&apos;t miss your chance to be part of the elite Winners
                    Circle in this brand new, top-notch venue.
                  </p>
                </div>
              </div>
              <button
                className="
    absolute
    font-lato 
    bg-[#EB6431] 
    rotate-[10deg] 
    text-white 
    font-bold 
    uppercase 
    cursor-pointer 
    flex 
    items-center 
    justify-center 
    rounded-full 
    z-20
    hover:text-black
    -bottom-10 right-16
    w-[260px] h-[76px] 
    md:w-[220px] md:h-[64px]
    sm:w-[180px] sm:h-[54px] sm:-bottom-12 sm:right-20
  "
              >
                CLAIM YOUR VIP SPOT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurePlace;
