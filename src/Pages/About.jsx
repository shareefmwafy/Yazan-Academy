import React from 'react';
import { FaUserGraduate, FaBrain, FaStethoscope, FaFilePdf } from 'react-icons/fa';
import myImage from '../assets/Hero.jpg';
import { useTheme } from "../cont/ThemeProvider";
import { useLanguage } from "../cont/LanguageProvider"; 

const About = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const text = {
    en: {
      title: "About Me",
      subtitle: "Passionate about education, psychology, and healthcare.",
      intro: "Hello! I'm Yazan Sasa, dedicated to lifelong learning and professional growth. Here are some of my key expertise areas:",
      fields: [
        { title: "American English", description: "Engaging lessons to build confidence in communication and daily use." },
        { title: "Psychotherapy & Mental Wellness", description: "Evidence-based support for stress management and personal growth." },
        { title: "Medical Terminology", description: "Master the language of healthcare for your studies and career." }
      ],
      researchTitle: "My Research & Work",
      researchLinks: [
        { href: "research1.pdf", label: "Research Paper 1 (PDF)" },
        { href: "research2.pdf", label: "Research Paper 2 (PDF)" }
      ]
    },
    ar: {
      title: "عنّي",
      subtitle: "شغوف بالتعليم وعلم النفس والرعاية الصحية.",
      intro: "مرحبًا! أنا يزن سعسع، مكرس للتعلم المستمر والنمو المهني. إليك بعض مجالات خبرتي الأساسية:",
      fields: [
        { title: "الإنجليزية الأمريكية", description: "دروس تفاعلية لبناء الثقة في التواصل والاستخدام اليومي." },
        { title: "العلاج النفسي والصحة العقلية", description: "دعم قائم على الأدلة لإدارة التوتر والنمو الشخصي." },
        { title: "المصطلحات الطبية", description: "إتقان لغة الرعاية الصحية لدراستك وحياتك المهنية." }
      ],
      researchTitle: "أبحاثي وأعمالي",
      researchLinks: [
        { href: "research1.pdf", label: "البحث الأول (PDF)" },
        { href: "research2.pdf", label: "البحث الثاني (PDF)" }
      ]
    }
  };

  const content = text[language] || text.en;

  return (
    <div className={`max-w-6xl mx-auto p-8 rounded-2xl shadow-2xl my-12 flex flex-col items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-white to-gray-50'}`}>
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-700">{content.title}</h1>
        <p className="mt-3 text-lg">{content.subtitle}</p>
      </header>

      <div className="flex flex-col items-center mb-10">
        <img
          src={myImage}
          alt="Your Photo"
          className="w-48 h-48 rounded-full object-cover border-8 border-green-500 shadow-xl"
        />
      </div>

      <p className="text-xl text-center max-w-2xl mb-10">{content.intro}</p>

      <div className="grid md:grid-cols-3 gap-8 w-full px-4">
        {content.fields.map((field, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105">
            {[<FaUserGraduate />, <FaBrain />, <FaStethoscope />][index]}
            <h2 className="text-2xl font-semibold text-green-700 mb-3">{field.title}</h2>
            <p className="text-gray-700">{field.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center w-full px-4">
        <h3 className="text-3xl font-semibold text-green-700 mb-6">{content.researchTitle}</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {content.researchLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" className="flex items-center bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition">
              <FaFilePdf className="text-red-600 text-3xl mr-3" />
              <span className="text-green-700 font-semibold text-lg">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;