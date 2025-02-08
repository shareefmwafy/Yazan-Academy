import React from 'react';
import { useLanguage } from '../Context/LanguageProvider';
import { useTheme } from '../Context/ThemeProvider'; 

const Footer = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer
      className="bg-red-500 text-white dark:bg-gray-900 dark:text-white py-8"
      style={{
        backgroundColor: theme === 'dark' ? 'var(--primary-color)' : 'var(--bg-color)',
      }}
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left Section - Copyright */}
          <div>
            <p
              style={{
                color: theme === 'dark' ? 'var(--secondary-color)' : 'var(--primary-color)',
              }}
              className="text-lg md:text-xl font-semibold"
            >
              {language === 'en' ? '© 2025 Your Company. All rights reserved.' : '© 2025 شركتك. جميع الحقوق محفوظة.'}
            </p>
          </div>

          {/* Right Section - Links */}
          <div>
            <ul className="flex flex-wrap justify-center gap-6 text-sm lg:text-base font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                  style={{
                    color: theme === 'dark' ? 'var(--text-color)' : 'var(--primary-color)',
                  }}
                >
                  {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                  style={{
                    color: theme === 'dark' ? 'var(--text-color)' : 'var(--primary-color)',
                  }}
                >
                  {language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                  style={{
                    color: theme === 'dark' ? 'var(--text-color)' : 'var(--primary-color)',
                  }}
                >
                  {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.facebook.com"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




