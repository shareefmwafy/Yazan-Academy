import React from 'react';
import { useLanguage } from '../../cont/LanguageProvider';
import { useTheme } from '../../cont/ThemeProvider';

import English from '../../assets/English.png';
import Psychology from '../../assets/Psychology.png';

function Categories() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const texts = {
    en: {
      title: "Choose Appointment Type",
      englishClass: "Book English Class Appointment",
      therapyClass: "Book Therapy Appointment",
    },
    ar: {
      title: "اختر نوع الحجز",
      englishClass: "حجز موعد لحصة اللغة الإنجليزية",
      therapyClass: "حجز موعد للعلاج النفسي",
    }
  };

  const currentText = language === 'ar' ? texts.ar : texts.en;

  return (
    <div className={`mt-10 mb-10 w-[95%] mx-auto p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} rounded-lg shadow-xl relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
      <h2 className="text-4xl font-extrabold text-center mb-8 relative z-10 tracking-wide drop-shadow-lg">{currentText.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
        {/* English Class Booking Card */}
        <div className="flex justify-center">
          <div className="w-full sm:w-96  p-8 rounded-xl shadow-2xl  transition duration-300 ease-in-out  overflow-hidden border border-gray-200">
            <img src={English} alt="English Class" className="w-full h-48 object-contain rounded-t-xl" />
            <div className="p-6 text-center">
              <button 
                onClick={() => alert(currentText.englishClass)}
                className="w-full py-4 text-white font-bold text-xl rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-110 shadow-md"
              >
                {currentText.englishClass}
              </button>
            </div>
          </div>
        </div>

        {/* Therapy Appointment Booking Card */}
        <div className="flex justify-center">
          <div className="w-full sm:w-96  p-8 rounded-xl shadow-2xl transition duration-300 ease-in-out transform overflow-hidden border border-gray-200">
            <img src={Psychology} alt="Therapy Session" className="w-full h-48 object-contain rounded-t-xl" />
            <div className="p-6 text-center">
              <button 
                onClick={() => alert(currentText.therapyClass)}
                className="w-full py-4 text-white font-bold text-xl rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-110 shadow-md"
              >
                {currentText.therapyClass}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
