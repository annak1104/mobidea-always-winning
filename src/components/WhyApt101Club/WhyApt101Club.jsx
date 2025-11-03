import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";
import art from "../../assets/art.webp";
import circle from "../../assets/orange-circle.svg";
import music1 from "../../assets/pic-2.webp";
import music2 from "../../assets/gatsby.webp";
import balcony from "../../assets/pic-5.webp";
import disco from "../../assets/pic-33.webp";

const WhyApt101Club = () => {
  return (
    <section className="relative bg-[#f7f3ea] text-[#1f1a16] py-20 px-4 md:px-10 lg:px-16 flex flex-col items-center">
      {/* <img
              src={circle}
              alt="circle"
              className="absolute md:block top-23 w-15 h-15 left-87 md:left-50 lg:top-20 md:w-40 md:h-70"
            /> */}
      <img
        src={circle}
        alt="circle"
        className="absolute md:block top-16 right-90 md:right-50 w-17 h-17 lg:-top-9 md:w-40 md:h-70"
      />
      <img
        src={arrowUp}
        alt="arrow-up"
        className="absolute md:block w-12 h-18 top-8 left-7 md:left-50 lg:-top-9 md:w-40 md:h-70"
      />
      <img
        src={arrowDown}
        alt="arrow-down"
        className="absolute hidden md:block right-40 lg:bottom-25 md:w-40 md:h-70"
      />
      {/* Title */}
      <h2 className="text-[#EB6431] text-3xl md:text-6xl font-serif font-bold text-center mb-8">
        Why APT 101?
      </h2>

      {/* Subtitle */}
      <p className="font-lato text-left max-w-3xl text-lg md:text-xl leading-relaxed text-[#3a3a36] mb-4">
        Located on the{" "}
        <span className="text-[#EB6431] font-semibold">
          3rd floor of 233 Sukhumvit Rd
        </span>
        , <a href="https://www.instagram.com/apt101club/" target="blank">APT 101</a> is a brand new, top-notch penthouse venue that pays homage to
        the nostalgic lifestyle of fashion icons in 1970s New York City.
      </p>
      <p className="font-lato text-left max-w-3xl text-base md:text-lg text-[#3a3a36]">
        This isn&apos;t your typical Bangkok nightspot. The venue is a stunning
        penthouse space featuring high-end art installations throughout,
        creating an atmosphere where sophisticated gallery meets electric
        nightclub.
      </p>

      {/* Secondary heading */}
      <h3 className="text-3xl md:text-4xl font-serif mt-16 mb-12 text-center">
        What Makes It Special:
      </h3>

      {/* Content layout */}
      <div className="font-lato text-left w-full max-w-7xl">
        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
                Art Gallery Meets Nightclub
              </h4>
              <p className="text-[#3a3a36]">
                A brand new venue showcasing high-end art throughout the space.
              </p>
            </div>
            <img
              src={art}
              alt="Art Gallery"
              className="rounded-2xl w-full h-52 object-cover"
            />

            <img
              src={music1}
              alt="Dual Music Rooms"
              className="rounded-2xl w-full h-52 object-cover"
            />
            <div>
              <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
                Dual Music Rooms
              </h4>
              <p className="text-[#3a3a36]">
                Two distinct spaces with different vibes and sounds: dance with
                style or groove easy.
              </p>
            </div>

            <div>
              <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
                Retro-Chic Penthouse Design
              </h4>
              <p className="text-[#3a3a36]">
                Vintage décor, retro furniture, warm nostalgic lighting, vinyl
                records on the walls, and disco balls create an atmosphere
                unlike anywhere else in Bangkok.
              </p>
            </div>
            <img
              src={disco}
              alt="Retro Chic Design"
              className="rounded-2xl w-full h-52 object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
                Panoramic Balcony
              </h4>
              <p className="text-[#3a3a36]">
                Step outside to Bangkok&apos;s most scenic balcony for stunning
                city views.
              </p>
            </div>
            <img
              src={balcony}
              alt="Panoramic Balcony"
              className="rounded-2xl w-full h-52 object-cover"
            />

            <img
              src={music2}
              alt="70s New York Vibes"
              className="rounded-2xl w-full h-52 object-cover"
            />
            <div>
              <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
                Gatsby Glamour
              </h4>
              <p className="text-[#3a3a36]">
                Step into the roaring twenties—where champagne flows, jazz and
                house music fills the air, and every guest shines like old money
                under the chandelier glow
              </p>
            </div>

            <div className="col-span-2 mt-6">
              <p className="text-base md:text-lg leading-relaxed text-[#1f1a16] text-left">
                It’s a venue that celebrates creativity, individuality, and
                out-of-the-box thinking—just like you. Experience what it&apos;s
                like to be{" "}
                <span className="text-[#EB6431] font-semibold">
                  Always Winning, Never Losing!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          {/* 1 */}
          <div>
            <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
              Art Gallery Meets Nightclub
            </h4>
            <p className="text-[#3a3a36] mb-3">
              A brand new venue showcasing high-end art throughout the space.
            </p>
            <img
              src={art}
              alt="Art Gallery"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          {/* 2 */}
          <div>
            <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
              Panoramic Balcony
            </h4>
            <p className="text-[#3a3a36] mb-3">
              Step outside to Bangkok&apos;s most scenic balcony for stunning
              city views.
            </p>
            <img
              src={balcony}
              alt="Panoramic Balcony"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          {/* 3 */}
          <div>
            <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
              Dual Music Rooms
            </h4>
            <p className="text-[#3a3a36] mb-3">
              Two distinct spaces with different vibes and sounds: dance with
              style or groove easy.
            </p>
            <img
              src={music1}
              alt="Dual Music Rooms"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          {/* 4 */}
          <div>
            <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
              70s New York Vibes
            </h4>
            <p className="text-[#3a3a36] mb-3">
              Feel like you&apos;re partying in a legendary NYC designer&apos;s
              penthouse—because that&apos;s exactly the vibe we&apos;re going
              for.
            </p>
            <img
              src={music2}
              alt="70s New York Vibes"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          {/* 5 */}
          <div>
            <h4 className="text-[#EB6431] font-semibold text-lg mb-2">
              Retro-Chic Penthouse Design
            </h4>
            <p className="text-[#3a3a36] mb-3">
              Vintage décor, retro furniture, warm nostalgic lighting, vinyl
              records on the walls, and disco balls create an atmosphere unlike
              anywhere else in Bangkok.
            </p>
            <img
              src={disco}
              alt="Retro Chic Design"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </div>

          {/* Bottom text */}
          <p className="text-base md:text-lg leading-relaxed text-[#1f1a16] text-center">
            It’s a venue that celebrates creativity, individuality, and
            out-of-the-box thinking—just like you. Experience what it&apos;s
            like to be{" "}
            <span className="text-[#EB6431] font-semibold">
              Always Winning, Never Losing!
            </span>
          </p>
        </div>
      </div>

      {/* Button */}
      <a
        href="#"
        className="mt-14 bg-[#EB6431] text-white px-10 py-4 rounded-full font-semibold shadow-md hover:bg-[#c95d32] transition"
      >
        EXPLORE APT101 CLUB
      </a>
    </section>
  );
};

export default WhyApt101Club;
