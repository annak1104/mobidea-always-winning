import { useEffect, useState } from "react";

import circleLeft from "../../assets/circle-left.svg";
import backgroundMobile from "../../assets/telegram-bg-mobile.png";
import backgroundDesktop from "../../assets/telegram-bg.png";

const TelegramInvite = () => {
  const [background, setBackground] = useState(backgroundDesktop);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackground(backgroundMobile);
      } else {
        setBackground(backgroundDesktop);
      }
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section className="relative flex items-center justify-center m-auto max-w-[348px] sm:max-w-[1320px] min-h-[590px] text-white px-4">
      <img
        src={circleLeft}
        alt="Star 1"
        className="absolute top-120 h-50 md:block -left-[15%] lg:top-78 md:w-40 md:h-70"
      />
      {/* Background image with dark overlay */}
      <div
        className="
          absolute inset-0 bg-cover bg-bottom sm:w-full sm:h-full
          w-[348px] h-[508px] m-auto
        "
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>

      {/* Content Box */}
      <div className="relative w-full max-w-[1320px] min-h-[350px] p-2 text-center flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#EB6431] mb-6 text-2xl md:text-[48px] font-semibold">
            Stay Connected via our
            <br /> Telegram Group
          </h2>
          <p className="font-lato text-sm m-auto sm:w-[649px] w-[250px] md:text-2xl text-gray-300">
            Join our Telegram community for exclusive updates, insider <br />{" "}
            access, and your best chance at securing an invitation.
            <br /> Plus, you might even score special perks before the event!
          </p>

          <a
            href="https://t.me/+QIdJiPu28j80Y2Q0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-10 bg-[#EB6431] text-white rounded-full px-10 py-4 uppercase font-semibold tracking-wider cursor-pointer shadow-2xl hover:brightness-95"
              style={{ minWidth: 260 }}
            >
              JOIN TELEGRAM GROUP
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TelegramInvite;
