import React from "react";

import background from "../../assets/bg1.png";
import glass from "../../assets/glass.png";
import globe from "../../assets/globe.png";
import starEvent from "../../assets/star-event.svg";

const EventHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-black text-white rounded-[48px]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* dark overlay to mimic photo dim */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* Decorative assets (stars, glass, globe) - positioned like the mockup */}
      <img
        src={starEvent}
        alt="decorative star left"
        className="pointer-events-none absolute md:block w-27 sm:w-31 lg:w-31 top-1 -left-6 sm:top-30 sm:left-44 z-30"
      />

      <img
        src={starEvent}
        alt="decorative star right"
        className="pointer-events-none absolute md:block w-27 sm:w-31 lg:w-31 z-30 -right-5 bottom-5 sm:right-16 sm:bottom-28"
      />

      <img
        src={glass}
        alt="cocktail glass"
        className="pointer-events-none absolute w-40 -left-18 bottom-0 sm:w-32 lg:w-40 z-16 sm:left-44 sm:bottom-20"
      />

      <img
        src={globe}
        alt="disco globe"
        className="pointer-events-none absolute w-70 sm:w-120 lg:w-120 z-30 -right-25 top-3 sm:right-8 sm:top-8"
      />

      <div className="relative z-20 max-w-5xl mx-auto px-6 py-24 sm:py-32 lg:py-40 flex flex-col items-center text-center">
        <h1 className="text-[#EB6431] text-[38px] font-semibold tracking-tight leading-tight mb-8">
          This Is Your
          <br /> Moment
        </h1>

        <div className="font-lato max-w-3xl text-gray-100 text-base sm:text-lg lg:text-xl space-y-6">
          <p className="opacity-90">
            We&apos;ve taken Always Winning across three continents.
          </p>

          <p className="opacity-90">
            We&apos;ve hosted Bangkok&apos;s most talked-about party. We&apos;ve
            brought the energy to Seville&apos;s historic streets. We&apos;ve
            lit up Prague&apos;s night sky.
          </p>

          <p className="opacity-90">
            Now we&apos;re coming home to Bangkok—and we&apos;re bringing
            everything we&apos;ve learned.
            <span className="block text-[#EB6431] font-semibold mt-2">
              500 spots. Gourmet canapés and premium cocktails all night. The
              industry&apos;s best in a brand new penthouse venue.
            </span>
          </p>

          <p className="opacity-90">
            The question isn&apos;t whether you can afford to attend.
          </p>

          <p className="text-[#EB6431] font-semibold">
            The question is: Can you afford to miss it?
          </p>
        </div>
        <a href="https://luma.com/zy0pfxw6" target="blank">
          <button
            className="mt-10 bg-[#EB6431] text-white rounded-full px-10 py-4 uppercase font-semibold tracking-wider shadow-2xl hover:brightness-95"
            style={{ minWidth: 260 }}
          >
            Secure your spot now
          </button>
        </a>
      </div>

      {/* subtle bottom fade so background doesn't cut off abruptly */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-20" />
    </section>
  );
};

export default EventHero;
