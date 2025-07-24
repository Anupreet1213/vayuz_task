import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Service items
const SERVICES = [
  {
    title: "Flutter App Development",
    content:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high performance applications for any platform.",
  },
  {
    title: "UI/UX Design",
    content:
      "Expert interface design tailored for seamless cross-platform experience. Crafted to boost engagement and clarity on every device.",
  },
  {
    title: "Customization & Integration",
    content:
      "Deep, business-driven app customizations. Plug and play integrations across modern APIs, plugins, and native modules.",
  },
  {
    title: "Testing & Quality Assurance",
    content:
      "Comprehensive testing, bug fixing, and deployment confidence. Assurance that your Flutter app performs flawlessly.",
  },
  {
    title: "Maintenance & Support",
    content:
      "Proactive app updates, security patches, and 24/7 support to keep your solution reliable as your business scales.",
  },
  {
    title: "Consulting & Training",
    content:
      "Strategic insight from Flutter experts and on-demand workshops for your team. Accelerate innovation.",
  },
  {
    title: "Migration & Upgrades",
    content:
      "Effortlessly migrate existing apps or upgrade to the latest Flutter technologies without downtime.",
  },
];

export default function ServicesSuite() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#191919] text-white px-6 md:px-12 py-14 overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-[2.2rem] md:text-[2.8rem] leading-tight font-serif font-semibold text-white">
          Our Dynamic Services Suite!
        </h2>
        <div className="text-[1.13rem] text-[#aaa] font-medium tracking-wide mt-2">
          Embrace Innovation. Let’s Create Together!
        </div>
        <p className="text-sm md:text-base text-[#e0e0e0] leading-[1.6] mt-4">
          Step into innovation! Explore our range of services and let’s create
          something extraordinary together.
          <br />
          <span className="text-[#A2ABB7]">
            Your vision, our expertise. Let’s begin!
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        {/* Accordion Section */}
        <div className="flex-1 w-full max-w-full lg:max-w-[60%] xl:max-w-[55%]">
          {SERVICES.map(({ title, content }, idx) => (
            <AccordionItem
              key={title}
              title={title}
              content={content}
              isOpen={openIdx === idx}
              onClick={() => toggle(idx)}
              idPrefix="service"
              index={idx}
            />
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 mt-6 lg:mt-0 lg:max-w-[40%]">
          <div className="bg-[#15191C] border border-white/5 shadow-xl rounded-xl overflow-hidden">
            <img
              src="/acc_img.png"
              alt="Service Visual"
              className="w-full h-full object-cover min-h-[250px] max-h-[400px] lg:min-h-[450px] lg:max-h-[600px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ title, content, isOpen, onClick, idPrefix, index }) {
  const buttonId = `${idPrefix}-button-${index}`;
  const panelId = `${idPrefix}-panel-${index}`;

  return (
    <div className="border-b border-white/10">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onClick}
        className={`w-full flex items-center justify-between py-4 text-xl md:text-2xl font-medium transition-colors font-playfair ${
          isOpen ? "text-[#36D1DC]" : "text-[#F4F5F8] hover:text-white"
        }`}
      >
        <span>{title}</span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[28px] select-none pointer-events-none"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="overflow-hidden pb-4"
          >
            <p className="text-[#A2ABB7] text-[0.97rem] leading-6">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
