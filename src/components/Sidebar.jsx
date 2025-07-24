export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-screen bg-[#191919] border-r border-white/20 w-64
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex
        flex flex-col justify-between p-6
      `}
    >
      <div>
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-10 mb-10" />

        {/* Contact Button */}
        <div className="relative mb-10 w-fit animate-gradient-border rounded-full p-[2px] bg-gradient-to-r from-green-400 via-pink-500 to-orange-400 bg-[length:300%_300%]">
          <button
            className="bg-[#191919] text-white rounded-full px-8 py-3 text-lg font-semibold relative z-10 transition-transform duration-300 hover:scale-105"
          >
            CONTACT US
          </button>
        </div>

        {/* Nav Items */}
        <nav className="text-white flex flex-col gap-6 pl-1 text-[15px] font-light">
          {["App Development", "Challenges", "Hire Developer", "Community"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="hover:translate-x-1 hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Bottom Thumbnail */}
      <img src="/sidebar_img.png" alt="Sidebar Visual" className="rounded-sm mt-10" />
    </aside>
  );
}
