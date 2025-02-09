import React from 'react';
import { useLanguage } from '../../cont/LanguageProvider';
import { useTheme } from '../../cont/ThemeProvider';

import English from '../../assets/English.png';
import Psychology from '../../assets/Psychology.png';
import MedicalTerminologyImage from '../../assets/MedicalTerminology.png';

function Categories() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const texts = {
        en: {
            title: "Choose Appointment Type",
            englishClass: "Book English Sessions",
            therapyClass: "Book Therapy ",
            MedicalTerminologyClass: "Medical Terminology Class",
        },
        ar: {
            title: "اختر نوع الحجز",
            englishClass: "حجز موعد لحصة اللغة الإنجليزية",
            therapyClass: "حجز موعد للعلاج النفسي",
            MedicalTerminologyClass: "حصة مصطلحات طبية"
        }
    };

    const currentText = language === 'ar' ? texts.ar : texts.en;

    return (
        <div className={`mt-10 mb-10 w-[95%] mx-auto p-6 rounded-2xl relative overflow-hidden `}
            style={{
                backgroundColor: 'var(--cat-bg-color)',
                color: 'var(--cat-color)',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 relative z-10 tracking-wide drop-shadow-lg break-words px-4">
                {currentText.title}
            </h2>
            <div className="flex gap-8 relative z-10 flex-wrap justify-between">
                {/* English Class Booking Card */}
                <div className="flex justify-center ">
                    <div className="w-fit sm:w-96 p-8 rounded-xl transition duration-300 ease-in-out overflow-hidden shadow-lg"
                        style={{
                            boxShadow: "0 4px 6px var(--shadow-color)",
                        }}
                    >
                        <img src={English} alt="English Class" className="w-full h-48 object-contain rounded-t-xl" />
                        <div className="p-6 text-center">
                            <button
                                onClick={() => alert(currentText.englishClass)}
                                className="w-full p-2 text-white font-bold text-xl rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-transform transform shadow-md"
                            >
                                {currentText.englishClass}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Medical Terminology Class Card */}
                <div className="flex justify-center "
                    style={{
                        borderColor: 'var(--cat-border)',
                    }}
                >
                    <div className="w-fit sm:w-96 p-8 rounded-xl transition duration-300 ease-in-out overflow-hidden"
                        style={{
                            boxShadow: "0 4px 6px var(--shadow-color)",
                        }}
                    >
                        <img src={MedicalTerminologyImage} alt="Medical Terminology Class" className="w-full h-48 object-contain rounded-t-xl" />

                        <div className="p-6 text-center">
                            <button
                                onClick={() => alert(currentText.medicalTerminologyClass)}
                                className="w-full p-2 text-white font-bold text-xl rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-transform transform shadow-md"
                            >
                                {currentText.MedicalTerminologyClass}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Therapy Appointment Booking Card */}
                <div className="flex justify-center "
                    style={{
                        borderColor: 'var(--cat-border)',
                    }}
                >
                    <div className="w-fit sm:w-96 p-8 rounded-xl transition duration-300 ease-in-out overflow-hidden"
                        style={{
                            boxShadow: "0 4px 6px var(--shadow-color)",
                        }}
                    >
                        <img src={Psychology} alt="Therapy Session" className="w-full h-48 object-contain rounded-t-xl" />
                        <div className="p-6 text-center">
                            <button
                                onClick={() => alert(currentText.therapyClass)}
                                className="w-full p-2 text-white font-bold text-xl rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-transform transform shadow-md"
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
