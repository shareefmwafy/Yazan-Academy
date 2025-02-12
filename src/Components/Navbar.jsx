import React, { useState } from "react";
import { useTheme } from "../cont/ThemeProvider";
import { useLanguage } from "../cont/LanguageProvider"; 
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); 

  const translations = {
    en: {
      home: "Home",
      about: "About",
      book: "Buy Our Book",
      bookNow: "Book Now",
      academy: "Yazan Academy",
      dark: "🌙",
      light: "🔆",
      lang: "EN",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      book: "اشترِ كتابنا",
      bookNow: "احجز الآن",
      academy: "Yazan Academy",
      dark: "🌙",
      light: "🔆",
      lang: "AR",
    },
  };

  return (
    <>
      <nav
        className="p-4 w-[95%] m-auto mt-[10px] rounded-[10px] font-[Cairo]"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--text-color)",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            {translations[language].academy}
          </a>

          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:opacity-80">{translations[language].home}</Link></li>
            <li><Link to="/about" className="hover:opacity-80">{translations[language].about}</Link></li>
            <li><Link to="#" className="hover:opacity-80">{translations[language].book}</Link></li>
            <li><Link to="#" className="hover:opacity-80">{translations[language].bookNow}</Link></li>
          </ul>

          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="p-2 rounded">
              {translations[language].lang}
            </button>

            <button 
              onClick={toggleTheme} 
              className="p-2 rounded"
              style={{ backgroundColor: "var(--secondary-color)" }}
            >
              {theme === "dark" ? translations[language].dark : translations[language].light}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-xl focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 z-50 shadow-lg "
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--text-color)",
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white"
            >
              <X size={28} />
            </button>

            <ul className="mt-10 space-y-6">
              <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">{translations[language].home}</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">{translations[language].about}</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">{translations[language].book}</a></li>
              <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">{translations[language].bookNow}</a></li>
            </ul>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Navbar;
