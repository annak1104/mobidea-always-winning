import { useEffect, useState } from "react";

import headerText from "../../assets/B-hero.png";
import bg from "../../assets/bg-hero.webp";
import bigText from "../../assets/big-text.png";
import burgerMenu from "../../assets/burger-menu.svg";
import closeIcon from "../../assets/close.svg";
import logoSmallBlack from "../../assets/logo-small-black.svg";
import logoSmall from "../../assets/logo-small.svg";
import { FacebookIcon } from "../../icons/FacebookIcon.jsx";
import { InstagramIcon } from "../../icons/InstagramIcon.jsx";
import { LinkedInIcon } from "../../icons/LinkedInIcon.jsx";
import { TelegramIcon } from "../../icons/TelegramIcon.jsx";

export const VideoSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayOpacity = Math.max(0, 1 - scrollY / 200);
  const heroOpacity = Math.max(0, 1 - scrollY / 200);

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

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/APT-Video.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-700 z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: overlayOpacity,
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#EB6431]/80 transition-opacity duration-700 z-10"
        style={{ opacity: overlayOpacity }}
      ></div>

      <header className="fixed top-0 left-0 w-full z-[999999] flex justify-between items-center px-6 md:px-12 h-[100px] bg-[#000]/50">
        <img src={logoSmall} alt="logo" className="h-[60px]" />

        <nav className="hidden lg:flex space-x-5 font-semibold ml-[100px] z-20">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScrollTo(item.href)}
              className="hover:text-[#EB6431] bg-transparent text-white border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-[#EB6431] text-white font-bold py-[10px] px-[55px] lg:px-[30px] rounded-full hover:text-black uppercase cursor-pointer hidden lg:flex z-20">
            Get the tickets
          </button>
          <img
            src={burgerMenu}
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer w-7 h-7"
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden z-[9999999] fixed inset-0 bg-[#F7F5E5] bg-opacity-80 transition-transform transform ${
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
                  handleScrollTo(item.href);
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

      {/* Hero */}
      <div
        className="relative z-20 pb-12 md:pb-40 flex flex-col items-center mg:justify-center justify-end h-full text-center px-6"
        style={{ opacity: heroOpacity }}
      >
        <img
          src={bigText}
          alt="Big Text"
          className="w-[80%] max-w-[780px] drop-shadow-lg"
        />
        <img src={headerText} alt="Header Text" className="w-[68px] mb-8" />
        <p className="font-lato text-white text-lg md:text-xl font-semibold">
          [ December 3rd, 2025 • 9:00 PM - 2:00 AM • APT 101 ]
        </p>
      </div>
    </section>
  );
};
