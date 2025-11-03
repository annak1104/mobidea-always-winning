import React, { useEffect, useRef, useState } from "react";

import circle from "../../assets/circle.svg";
import faqBg from "../../assets/faq-bg.png";
import { CloseIcon } from "../../icons/CloseIcon.jsx";
import { MinusIcon } from "../../icons/MinusIcon.jsx";

const FAQS = [
  {
    q: "Is this just another networking event?",
    a: "Absolutely not. This is THE celebration of Affiliate World Asia, where the industry's top performers come to connect, celebrate, and win bigger. We've proven it three times across three continents.",
  },
  {
    q: "Do I need to be a Mobidea affiliate?",
    a: "This exclusive event welcomes all industry professionals—affiliates, advertisers, brands, and partners. But space is strictly limited, so secure your spot while you can.",
  },
  {
    q: "What's included in my VIP access?",
    a: "Everything from arrival to last call. Premium cocktails all night, world-class entertainment across two music rooms, balcony access with Bangkok views, exclusive networking spaces, surprise activations, and an unforgettable night in a brand new penthouse venue filled with high-end art. It's all covered.",
  },
  {
    q: "Is there a dress code?",
    a: "APT 101 is a premium venue with a sophisticated vibe. Think stylish, think confident, think winner. The following are NOT PERMITTED at the Always Winning x APT101 Club: <br /> Sandals, flip flops, or Birkenstocks (only fully covered shoes for gentlemen) <br /> Sleeveless shirts for gentlemen <br /> Sportswear / No shorts <br /> Backpacks, big handbags, or luggages. ",
  },
  {
    q: "Can I register at the door?",
    a: "No. This is a pre-approved, exclusive guest list event. Once we hit our 500-person VIP capacity, the door closes—no exceptions, no compromises.",
  },
];

function AccordionItem({ index, item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (el) setMaxH(isOpen ? `${el.scrollHeight}px` : "0px");
  }, [isOpen]);

  useEffect(() => {
    function handleResize() {
      const el = contentRef.current;
      if (el && isOpen) setMaxH(`${el.scrollHeight}px`);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <article className="w-full">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border border-[#EB6431] bg-transparent"
            : "bg-transparent border-none"
        }`}
        style={{ borderRadius: "1rem", transition: "all 300ms ease" }}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={() => onToggle(index)}
          className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
            isOpen ? "text-[#493F3B]" : "text-white"
          }`}
        >
          <h3
            className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
              isOpen ? "text-[#EB6431]" : "text-[#000]"
            }`}
          >
            {item.q}
          </h3>
          <span className="ml-4 flex-shrink-0 cursor-pointer p-2">
            {isOpen ? <MinusIcon /> : <CloseIcon />}
          </span>
        </button>

        <div
          id={`faq-panel-${index}`}
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: maxH }}
        >
          <div className="px-6 py-4 border-[#EB6431] text-[#000]">
            <p className="font-lato text-sm text-left leading-relaxed">
              {item.a.split(/<br\s*\/?>/i).map((line, idx, arr) => (
                <React.Fragment key={idx}>
                  {line.trim()}
                  {idx !== arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative text-white py-16  md:py-20"
      style={{
        backgroundImage: `url(${faqBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <img
        src={circle}
        alt="Star 1"
        className="absolute top-1 hidden md:block right-0 lg:-top-9 md:w-40 md:h-70"
      />
      <div className="relative max-w-4xl mx-auto px-2">
        <header className="mb-10 text-center">
          <h1
            id="faq-title"
            className="text-[#EB6431] text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            Your Burning Questions Answered
          </h1>
        </header>

        <div className="space-y-6">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
