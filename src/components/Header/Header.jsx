import { useState } from "react";

import headerText from "../../assets/B.png";
import bigText from "../../assets/big-text.png";
import closeIcon from "../../assets/close.svg";
import logoSmallBlack from "../../assets/logo-small-black.svg";
import headerBg from "../../assets/header.webp";
import headerBgMobile from "../../assets/header-mobile.webp";

import { FacebookIcon } from "../../icons/FacebookIcon.jsx";
import { InstagramIcon } from "../../icons/InstagramIcon.jsx";
import { LinkedInIcon } from "../../icons/LinkedInIcon.jsx";
import { TelegramIcon } from "../../icons/TelegramIcon.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "WHEN", href: "when-section" },
    { label: "WHY", href: "why-section" },
    { label: "WHAT", href: "what-section" },
    { label: "WHO", href: "who-section" },
    { label: "AGENDA", href: "agenda-section" },
    { label: "THE VENUE", href: "venue-section" },
    { label: "FAQS", href: "faqs-section" },
    { label: "CONTACT", href: "contact-section" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-cover bg-center text-[#0f1724] overflow-hidden min-w-[375px] min-h-screen"
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? headerBg : headerBgMobile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#F7F5E5] bg-opacity-80 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDuration: "0.5s" }}
      >
        <div className="h-full mt-[12px] px-4 text-white">
          <div className="flex justify-between items-center">
            <img src={logoSmallBlack} alt="logo-small" />
            <img
              src={closeIcon}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>

          <div className="flex flex-col text-[#151515] items-center mt-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleScroll(item.href);
                  toggleMenu();
                }}
                className="py-2 text-xl hover:text-[#EB6431] bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button className="bg-[#EB6431] text-white font-bold py-[15px] px-[34px] rounded-full hover:text-black uppercase cursor-pointer mt-[40px] max-w-[250px]">
              Get the tickets
            </button>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-[40px]">
              <a
                href="https://www.instagram.com/mobidea_cpa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon color="#EB6431" />
              </a>
              <a
                href="https://www.linkedin.com/company/mobidea/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon color="#EB6431" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <TelegramIcon color="#EB6431" />
              </a>
              <a
                href="https://www.facebook.com/Mobidea/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon color="#EB6431" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Header Text */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={bigText}
            alt="Big Text"
            className="absolute -top-20 md:w-[1000px] mt-[150px]"
          />

          <img
            src={headerText}
            alt="Header Text"
            className="mt-[250px] w-[160px] md:w-[300px]"
          />

          <p className="font-lato px-2.5 font-semibold text-xl mt-12 md:mt-24 text-white text-center">
            [ December 3rd, 2025 • 9:00 PM - 2:00 AM • APT 101  ]
          </p>
        </div>
      </div>
    </section>
  );
};
