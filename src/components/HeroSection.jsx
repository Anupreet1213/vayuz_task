export default function HeroSection() {
  return (
    <section className="relative flex flex-col pl-8 md:flex-row items-center gap-10 pt-12 pb-36 bg-[#191919] text-white overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-2/3 pointer-events-none bg-gradient-to-l from-[#36D1DC]/10 via-transparent to-transparent"></div>
      <div className="max-w-md mr-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
          Unlock the Potential of{" "}
          <span className="text-[#36D1DC]">Flutter</span>
        </h1>
        <p className="text-lg">
          Your Premier Partner for Cross-Platform App Excellence
        </p>
        <button className="bg-[#36D1DC] mt-5 px-5 py-3 rounded-full text-[#191919] font-semibold">
          UPGRADE YOUR TECH
        </button>
      </div>

      <div className="relative flex-1 items-center justify-start hidden lg:flex">
        <img
          src="/bg_img1.png"
          alt="Code Sample"
          className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-xl h-auto object-cover"
        />
        {/* Overlay Image 1 */}
        <img
          src="/bg_img2.png"
          alt="Overlay 1"
          className="absolute bottom-28 right-24 w-12 md:w-80"
        />
        {/* Overlay Image 2 */}
        <img
          src="/bg_img3.png"
          alt="Overlay 2"
          className="absolute -bottom-24 right-48 w-12 md:w-80"
        />
      </div>
    </section>
  );
}
