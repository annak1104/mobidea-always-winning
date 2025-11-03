const WinnersSection = () => {
  return (
    <section className="relative bg-[url('./assets/winners-bg.png')] min-h-[863px] bg-no-repeat bg-bottom text-white flex flex-col items-center justify-center p-6 space-y-6 text-center">
      {/* Header Section */}
      <div className="space-y-4 max-w-4xl">
        <h3 className="text-5xl md:text-7xl font-semibold">
          Join the Exclusive
        </h3>
        <h3 className="text-5xl md:text-7xl font-semibold">
          <span className="text-[#EB6431]">Circle</span> Winners
        </h3>
        <p className="font-normal text-2xl mt-[60px]">
          Don&#39;t miss out on this EXCLUSIVE event! Only 150 spots available.
        </p>
      </div>

      {/* Button */}
      <button className="bg-[#EB6431] text-white px-6 rounded-full mt-[60px] text-lg uppercase font-semibold hover:text-black w-[343px] h-[62px] md:w-[504px] lg:h-[76px] max-w-full">
        Secure Your Spot Now
      </button>
    </section>
  );
};

export default WinnersSection;
