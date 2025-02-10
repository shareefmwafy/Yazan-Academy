import React from "react";
import { useTheme } from "../../cont/ThemeProvider";
import { useLanguage } from "../../cont/LanguageProvider";

function Contact() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";
  const isArabic = language === "ar";

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 transition-all duration-300 ${
        isDark ? "bg-gray-900 text-white" : "text-gray-900"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
        {isArabic ? "📩 تواصل معنا" : "📩 Contact Us"}
      </h2>

      <p className="text-base sm:text-lg text-center max-w-md sm:max-w-lg mb-6">
        {isArabic
          ? "إذا كان لديك أي استفسارات أو اقتراحات، لا تتردد في التواصل معنا!"
          : "If you have any inquiries or suggestions, feel free to reach out!"}
      </p>

      <form
        className={`shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg transition-all duration-300 ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* الاسم */}
        <div className="mb-4">
          <label className="block font-semibold text-base sm:text-lg mb-1">
            {isArabic ? "الاسم الكامل" : "Full Name"}
          </label>
          <input
            type="text"
            className={`w-full p-2 sm:p-3 border rounded-lg text-base sm:text-lg transition ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-gray-100 text-gray-900"
            }`}
            placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-base sm:text-lg mb-1">
            {isArabic ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            type="email"
            className={`w-full p-2 sm:p-3 border rounded-lg text-base sm:text-lg transition ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-gray-100 text-gray-900"
            }`}
            placeholder="example@email.com"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold text-base sm:text-lg mb-1">
            {isArabic ? "الرسالة" : "Message"}
          </label>
          <textarea
            className={`w-full p-2 sm:p-3 border rounded-lg text-base sm:text-lg h-28 sm:h-32 transition ${
              isDark
                ? "border-gray-600 bg-gray-700 text-white"
                : "border-gray-300 bg-gray-100 text-gray-900"
            }`}
            placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 
          bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {isArabic ? "🚀 إرسال" : "🚀 Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
