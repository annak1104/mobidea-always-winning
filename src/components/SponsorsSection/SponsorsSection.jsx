import adsLogo from "../../assets/ads.png";
import circle from "../../assets/circle.svg";
import nextGenLogo from "../../assets/next-gen.png";
import mobideaLogo from "../../assets/pro.png";

const sponsors = [
  { name: "ADSEMPIRE", logo: adsLogo },
  { name: "traffic.bar by MOBIDEA", logo: nextGenLogo },
  { name: "NEXTGEN PAYMENT", logo: mobideaLogo },
];

const SponsorsSection = () => {
  return (
    <section className="text-white py-24 px-4 font-semibold bg-[#F7F5E5] text-center relative min-w-[375px] min-h-[640px] mx-auto">
      {/* Star 1 - Top left */}
      <img
        src={circle}
        alt="Star 1"
        className="absolute top-1 hidden md:block right-0 lg:-top-9 md:w-40 md:h-70"
      />
      <h2 className="text-4xl font-semibold md:text-7xl text-[#EB6431] mt-2 mb-[30px] md:mb-[100px]">
        Proudly Hosted By
      </h2>
      <div className="flex flex-col items-center lg:flex-row justify-center md:gap-10 gap-6 mt-8 px-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex justify-center items-center max-w-[300px] max-h-[190px]"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-w-[300px] max-h-[190px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
