export default function Header({ toggleSidebar }) {
  return (
    <header className="w-full h-[72px] bg-[#191919] border-b border-white/10 flex items-center justify-between px-8 z-30 sticky top-0">
      <p className="text-white">
        Securing Your Flutter App: Best Practices and Techniques
      </p>

      <button
        type="button"
        onClick={toggleSidebar}
        className="md:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle sidebar menu"
      >
        <svg
          width="24"
          height="24"
          stroke="#FFF"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
        </svg>
      </button>
    </header>
  );
}
