import logoAlways from "../../assets/logo-always.svg";
import stars from "../../assets/stars.png";
import { FacebookIcon } from "../../icons/FacebookIcon.jsx";
import { InstagramIcon } from "../../icons/InstagramIcon.jsx";
import { LinkedInIcon } from "../../icons/LinkedInIcon.jsx";
import { TelegramIcon } from "../../icons/TelegramIcon.jsx";

function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#EB6431] text-white px-6 md:px-12 py-12 max-w-[1920px] mx-auto rounded-tl-[50px] rounded-tr-[50px]">
      <div className="flex flex-col md:flex-row max-w-[1320px] m-auto justify-between items-center md:items-start text-center md:text-left">
        {/* Left Section */}
        <div className="md:w-1/3 mt-10 hidden md:flex md:mt-0">
          <img
            src={logoAlways}
            alt="Always Winning by Mobidea"
            className="w-[200px] mx-auto md:mx-0"
          />
        </div>

        {/* Middle Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold">CONTACT US</h2>
          <p className="mt-4 text-lg font-semibold">QUESTIONS?</p>
          <div className="flex flex-col gap-2.5 items-start">
            <p className="text-base mt-0.5">
              Got something on your mind? Want to partner with the hottest event
              in time for AW Asia? Reach out to us at{" "}
              <a
                href="mailto:alwayswinning@mobidea.com"
                className="text-white text-lg font-medium break-all"
              >
                alwayswinning@mobidea.com
              </a>
            </p>
            <p>We&apos;ll see you on December 3rd. Come ready to win.</p>
          </div>

          {/* Social Icons (mobile only) */}
          <div className="flex justify-center md:hidden gap-4 mt-6">
            <a
              href="https://www.instagram.com/mobidea_cpa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon width={50} height={50} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/company/mobidea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={50} height={50} color="white" />
            </a>
            <a
              href="https://t.me/+KFdF_RPNhF85YTlk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon width={50} height={50} color="white" />
            </a>
            <a
              href="https://www.facebook.com/@Mobidea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon width={50} height={50} color="white" />
            </a>
          </div>
        </div>

        {/* Right Section (Navigation + Desktop Icons) */}
        <div className="relative md:w-1/6 mt-10 md:mt-0 text-sm font-semibold flex flex-col md:flex-row md:items-start md:gap-6">
          {/* Navigation */}
          <div className="text-right">
            {/* Mobile-only Grid */}
            <div className="grid grid-cols-2 gap-4 items-start md:hidden">
              {/* Logo */}
              <div className="flex">
                <img
                  src={logoAlways}
                  alt="Always Winning by Mobidea"
                  className="w-[150px] mx-auto"
                />
              </div>

              {/* Nav Links */}
              <div className="flex flex-col space-y-2 text-right">
                <button onClick={() => handleScroll("when-section")}>
                  WHEN
                </button>
                <button onClick={() => handleScroll("why-section")}>WHY</button>
                <button onClick={() => handleScroll("what-section")}>
                  WHAT
                </button>
                <button onClick={() => handleScroll("who-section")}>WHO</button>
                <button onClick={() => handleScroll("agenda-section")}>
                  AGENDA
                </button>
                <button onClick={() => handleScroll("venue-section")}>
                  THE VENUE
                </button>
                <button onClick={() => handleScroll("faqs-section")}>
                  FAQS
                </button>
                <button onClick={() => handleScroll("contact-section")}>
                  CONTACT
                </button>
              </div>
            </div>

            {/* Desktop-only Navigation */}
            <div className="hidden md:flex flex-col space-y-2 text-right">
              <button onClick={() => handleScroll("when-section")}>WHEN</button>
              <button onClick={() => handleScroll("why-section")}>WHY</button>
              <button onClick={() => handleScroll("what-section")}>WHAT</button>
              <button onClick={() => handleScroll("who-section")}>WHO</button>
              <button onClick={() => handleScroll("agenda-section")}>
                AGENDA
              </button>
              <button onClick={() => handleScroll("venue-section")}>
                THE VENUE
              </button>
              <button onClick={() => handleScroll("faqs-section")}>FAQS</button>
              <button onClick={() => handleScroll("contact-section")}>
                CONTACT
              </button>
            </div>
          </div>
          <img
            src={stars}
            alt="stars"
            className="absolute hidden md:block -right-36 lg:bottom-15 md:w-27 md:h-44"
          />

          {/* Desktop-only Social Icons (in a column) */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <a
              href="https://www.instagram.com/mobidea_cpa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon width={40} height={40} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/company/mobidea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon width={40} height={40} color="white" />
            </a>
            <a
              href="https://t.me/+KFdF_RPNhF85YTlk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon width={40} height={40} color="white" />
            </a>
            <a
              href="https://www.facebook.com/@Mobidea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon width={40} height={40} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
