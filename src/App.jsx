import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FlutterDawnSection from "./components/FlutterDawnSection";
import ServicesSuite from "./components/ServiceSuite";
import ContactForm from "./components/ContactForm";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative bg-[#191919] min-h-screen flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <main className="flex-1 h-screen overflow-y-scroll hide-scrollbar w-full">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <HeroSection />
        <FlutterDawnSection />
        <ServicesSuite />
        <ContactForm />
      </main>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    </div>
  );
}
export default App;
