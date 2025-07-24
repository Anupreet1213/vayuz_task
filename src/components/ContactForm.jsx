import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section className="w-full bg-[#191919] text-white px-6 md:px-12 py-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[100px] md:min-h-[350px] gap-10">
          <div>
            <div className="text-[1.25rem] md:text-[1.5rem] font-medium leading-snug max-w-[480px]">
              For any collaborative <br />
              projects or enquiries feel free <br />
              to connect with us.
            </div>
            <div className="text-[1.4rem] text-white font-semibold mt-8">
              vayuz.com
            </div>
          </div>

          {/* Footer nav */}
          <div className="hidden md:flex gap-6 text-[#C0C9D1]/60 text-[0.96rem]">
            <span>About</span>
            <span>Insights</span>
            <span>Community</span>
            <span>Privacy & Policies</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-end">
          {/* Heading */}
          <div className="w-full flex justify-end mb-6">
            <div className="text-white text-[2rem] md:text-[3.5rem] font-serif font-semibold leading-none text-right font-playfair">
              Connect<br />With Us
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="w-full max-w-md flex flex-col gap-5"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent border-b border-white/40 text-white py-3 px-1 outline-none placeholder:text-gray-400 text-base"
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent border-b border-white/40 text-white py-3 px-1 outline-none placeholder:text-gray-400 text-base"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-transparent border-b border-white/40 text-white py-3 px-1 outline-none placeholder:text-gray-400 text-base"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9 +()-]*"
              required
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              disabled={submitted}
              type="submit"
              className={`self-end bg-[#0B7F92] hover:bg-[#0da6b3] text-white font-medium px-6 py-2 rounded-full mt-4 transition-all ${
                submitted ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitted ? "Thank you!" : "SUBMIT"}
            </motion.button>
          </form>

          {/* Mobile Footer Nav */}
          <div className="flex md:hidden justify-center gap-6 text-[#C0C9D1]/60 text-[0.95rem] mt-10">
            <span>About</span>
            <span>Insights</span>
            <span>Community</span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
