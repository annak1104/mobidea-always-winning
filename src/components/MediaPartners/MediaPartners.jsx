import star2 from "../../assets/ellipse.svg";
import kaminariLogo from "../../assets/kaminari.png";
import affninjaLogo from "../../assets/logo-affninja.png";
// import attilaLogo from "../../assets/logo-attila.png";
import bemobLogo from "../../assets/logo-bemob.png";
import redtrackLogo from "../../assets/logo-redtrack.png";
// import richadsLogo from "../../assets/logo-richads.png";
import voluumLogo from "../../assets/logo-voluum.png";
// import clickaduLogo from "../../assets/logo-clickadu.png";
import mobideaLogo from "../../assets/mobidea.png";

const mediaPartners = [
  { name: "VOLUUM", logo: voluumLogo },
  { name: "Mobidea", logo: mobideaLogo },
  // { name: "RICHADS", logo: richadsLogo },
  { name: "Kaminari", logo: kaminariLogo },
  { name: "REDTRACK", logo: redtrackLogo },
  { name: "AFF.NINJA", logo: affninjaLogo },
  // { name: "CLICKADU", logo: clickaduLogo },
  // { name: "iAmAttila", logo: attilaLogo },
  { name: "BeMob", logo: bemobLogo },
];

const MediaPartners = () => {
  return (
    <div className="relative max-w-[1320px] min-w-[375px] mx-auto bg-[#F7F5E5] text-[#EB6431] py-12 px-4 mb-[60px] lg:mb-[160px]">
      <h2 className="text-center text-5xl md:w-100px lg:text-7xl font-bold mb-8">
        Media partners
      </h2>
      <div className=" relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {mediaPartners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center rounded-3xl justify-center w-40 h-40 shadow-md"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      <img
        src={star2}
        alt="Star Decoration"
        className="absolute hidden right-[20px] bottom-[44px] lg:right-[4%] lg:top-[62%] lg:w-[176px] lg:h-[176px] w-[165px] h-[152px] lg:flex sm:hidden "
      />
    </div>
  );
};

export default MediaPartners;
