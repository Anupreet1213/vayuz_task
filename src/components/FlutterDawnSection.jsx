export default function FlutterDawnSection() {
  return (
    <section className="relative w-full px-6 md:px-12 flex flex-col lg:flex-row justify-between lg:items-center bg-[#191919] py-16 overflow-hidden min-h-[250px] gap-10 lg:gap-4">
      {/* Left Title Block */}
      <div className="z-10 flex flex-col justify-center items-start w-full sm:w-auto min-w-[160px]">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white font-semibold mb-1 leading-tight font-playfair">
          Flutter's<br />Dawn
        </h3>
        <span className="text-sm text-white opacity-60 font-medium tracking-wide pl-1 mt-1">
          History of Flutter
        </span>
      </div>

      {/* Middle Description Block */}
      <div className="z-10 flex-1 flex flex-col justify-center w-full max-w-3xl md:px-6">
        <p className="text-sm sm:text-base md:text-[17px] text-white/80 leading-relaxed text-left">
          Uncover the fascinating story of Flutter in Flutter’s Dawn: History of Flutter!
          From humble origins to global acclaim, delve into its captivating narrative. Explore
          milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, join
          us on this captivating journey!
          <span className="ml-1 text-[#36D1DC] underline hover:text-[#1fa9b4] cursor-pointer">
            Click to begin!
          </span>
        </p>
      </div>

      {/* Right: BEGIN Button */}
      <div className="z-10 flex flex-col justify-center items-center w-full sm:w-auto mt-6 lg:mt-0">
        <button className="w-12 h-12 rounded-full bg-[#36D1DC] flex items-center justify-center shadow-lg transition-all hover:scale-105 group mb-2">
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 22 22"
            className="text-[#191919] group-hover:text-white transition"
          >
            <path
              d="M8 5l5 6-5 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-white/60 font-semibold tracking-wide text-[14px] sm:text-[15px]">
          BEGIN
        </span>
      </div>
    </section>
  );
}
