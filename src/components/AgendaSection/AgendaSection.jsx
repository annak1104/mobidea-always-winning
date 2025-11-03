import React from "react";

import bgFull from "../../assets/bg-full.png";
import bgHalf from "../../assets/bg-half.png";
import cocktail from "../../assets/cocktail.svg";
import dancing from "../../assets/dancing.svg";
import music from "../../assets/music.svg";
import speech from "../../assets/speech.svg";

const NightBlueprint = () => {
  return (
    <section className="relative max-w-6xl mx-auto my-12 px-6">
      {/* Outer rounded card */}
      <div className="relative rounded-4xl overflow-hidden bg-[#0a0a09] h-[610px] lg:h-[824px]">
        {/* Right half background (under) */}
        <div
          className="
            absolute inset-y-0 z-0 
            right-0
            sm:right-0 sm:w-1/2
            w-[328px] left-1/2 -translate-x-1/2
            sm:left-auto lg:translate-x-0
          "
          style={{
            backgroundImage: `url(${bgHalf})`,
            backgroundSize: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
          }}
          aria-hidden
        />

        {/* Full-cover semi-transparent background (on top of half) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(${bgFull})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.3,
          }}
          aria-hidden
        />

        {/* Soft dark overlay to keep text legible */}
        <div className="absolute inset-0 bg-black/60 z-20" aria-hidden />

        {/* Content */}
        <div className="relative z-30 px-2 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-serif lg:text-left text-center text-[#EB6431] text-4xl lg:text-6xl leading-tight mb-8">
              The Night&apos;s Blueprint
            </h2>

            <div className="font-lato space-y-6 text-white text-left text-[16px] lg:text-xl">
              <div className="py-1 lg:py-6 border-b border-dashed border-[#F7F5E5] flex items-center justify-between">
                <div>
                  <span className="text-[#EB6431] font-semibold">9:00 PM</span>
                  <span className="ml-3">
                    — Grand Entrance & Premium Welcome Cocktails
                  </span>
                </div>
                <div className="ml-6">
                  <img src={cocktail} alt="cocktail" className="max-w-8" />
                </div>
              </div>

              <div className="py-1 lg:py-6 border-b border-dashed border-[#F7F5E5] flex items-center justify-between">
                <div>
                  <span className="text-[#EB6431] font-semibold">9:30 PM</span>
                  <span className="ml-3">
                    — Opening Spectacle + Mobidea Welcome Speech
                  </span>
                </div>
                <div className="ml-6">
                  <img src={speech} alt="speech" className="max-w-8" />
                </div>
              </div>

              <div className="py-1 lg:py-6 border-b border-dashed border-[#F7F5E5] flex items-center justify-between">
                <div>
                  <span className="text-[#EB6431] font-semibold">10:00 PM</span>
                  <span className="ml-3">
                    — Let the Games Begin: Music, Networking & Open Bar
                  </span>
                </div>
                <div className="ml-6">
                  <img src={music} alt="music" className="max-w-8" />
                </div>
              </div>

              <div className="py-1 lg:py-6 border-b border-dashed border-[#F7F5E5] flex items-center justify-between">
                <div>
                  <span className="text-[#EB6431] font-semibold">
                    10:00 PM - 2:00 AM
                  </span>
                  <span className="ml-3">
                    — Dance, Connect, Deal, Celebrate
                  </span>
                </div>
                <div className="ml-6">
                  <img src={dancing} alt="dancing" className="max-w-8" />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="bg-[#EB6431] flex items-center text-[15px] h-16 m-auto lg:m-0 w-[280px] lg:w-[320px] lg:justify-center text-white rounded-full px-8 py-4 uppercase text-lg font-semibold tracking-wider shadow-lg">
                  Join the winners circle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thin border for style */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/30 z-40" />
      </div>
    </section>
  );
};

export default NightBlueprint;
