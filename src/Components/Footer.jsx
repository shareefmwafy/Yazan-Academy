import React from 'react';
import { useLanguage } from '../cont/LanguageProvider';
import { useTheme } from '../cont/ThemeProvider';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="py-10 px-6 md:px-12 bg-gradient-to-r bg-var from-primary-color to-secondary-color text-white shadow-xl rounded-t-3xl w-[95%] m-auto"
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-color)'
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide text-center md:text-left">
          {'Yazan Academy'}
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-lg font-medium text-center md:text-left">
          {['Home', 'Courses', 'Contact'].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="transition-all duration-300 transform hover:text-yellow-300 hover:scale-110"
                style={{
                   color: 'var(--text-color)',
                }}
              >
                {language === 'en' ? item : item === 'Home' ? 'الرئيسية' : item === 'Courses' ? 'الدورات' : 'اتصل بنا'}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 opacity-70 text-sm md:text-base py-4 bg-gray-800 text-white rounded-lg shadow-lg max-w-sm mx-auto">
        <p className="font-semibold">
          © {new Date().getFullYear()} Shareef Mwafy. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
