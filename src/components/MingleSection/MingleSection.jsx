import foto1Img from "../../assets/foto-1.png";
import starImg from "../../assets/star.png";

const MingleSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-black text-white py-16 px-6 lg:px-16">
      {/* Container with max-width */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-[1920px] w-full gap-12 lg:gap-24">
        {/* Left Side Content */}
        <div className="relative max-w-[1280px] w-full text-left">
          {/* Decorative Star */}
          <img
            src={starImg}
            alt="Star"
            className="absolute hidden md:block md:w-30 md:-top-8 md:-left-14 lg:w-72 lg:-top-10 lg:-left-36"
          />

          {/* Border Box (Relative Parent) */}
          <div className="md:border md:border-[#EB6431] min-h-[832px] rounded-3xl pl-4 py-8 lg:py-40 lg:pl-28 lg:pr-[526px] md:pr-[400px] relative">
            {/* Title */}
            <h2 className="text-5xl md:text-7xl font-semibold mb-14">
              WHO YOU&apos;LL <span className="text-[#EB6431]">MINGLE</span>{" "}
              WITH
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              Our Bangkok event set the bar high, so now we&apos;re raising it
              to unprecedented heights in Seville. Be among 150 of the
              industry’s finest — affiliates, direct advertisers, brands, and
              other potential partners.
            </p>
            <p className="mt-4 text-lg md:text-xl">
              This isn&apos;t just another industry event. This is THE party you
              don’t want to miss.{" "}
              <span className="font-bold">
                It’s where work meets play in the most exhilarating way!
              </span>
            </p>

            {/* Right Side Image - Absolute, Not Affecting Layout */}
            <div className="absolute md:top-1/2 -bottom-40 right-1/2 md:right-46 lg:right-46 transform -translate-y-1/2 translate-x-1/2 w-[320px] md:w-[400px] lg:w-[400px] xl:w-[500px]">
              <img
                src={foto1Img}
                alt="Mingle Event"
                className="rounded-full inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MingleSection;
