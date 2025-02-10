import React from "react";
import { useTheme } from "../../cont/ThemeProvider";
import { useLanguage } from "../../cont/LanguageProvider";
import EnhancesCommunication from '../../assets/Info-Images/EnhancesCommunication.png'
import postCareer from '../../assets/Info-Images/postCareer.png'
import Learning from '../../assets/Info-Images/Learning.png'
import Confidence from '../../assets/Info-Images/Confidence.png'
import AcademicSuccess from '../../assets/Info-Images/AcademicSuccess.png'
import Professionalism from '../../assets/Info-Images/Professionalism.png'


const sections = [
  {
    description: {
      en: "Enhances Communication – Understanding medical terms ensures clear and accurate communication with healthcare teams, reducing errors.",
      ar: "يعزز التواصل - فهم المصطلحات الطبية يضمن تواصلاً واضحًا ودقيقًا مع فرق الرعاية الصحية، مما يقلل الأخطاء."
    },
    image: EnhancesCommunication,
  },
  {
    description: {
      en: "Boosts Career Opportunities – Many healthcare and research jobs require proficiency in medical language, making you a more competitive candidate.",
      ar: "يعزز فرص العمل - تتطلب العديد من وظائف الرعاية الصحية والبحث إتقان اللغة الطبية، مما يجعلك مرشحًا أكثر تنافسية."
    },
    image: postCareer,
  },
  {
    description: {
      en: "Improves Learning & Retention – Medical courses and research papers are full of complex terms. A strong foundation helps you grasp concepts faster and retain information longer.",
      ar: "يحسن التعلم والاحتفاظ بالمعلومات - الدورات الطبية والأبحاث مليئة بالمصطلحات المعقدة. يساعدك الأساس القوي على فهم المفاهيم بسرعة واحتفاظ المعلومات لفترة أطول."
    },
    image: Learning,
  },
  {
    description: {
      en: "Increases Confidence – Whether speaking with patients, writing reports, or analyzing studies, knowing the terminology makes you more confident and competent.",
      ar: "يزيد الثقة - سواء كنت تتحدث مع المرضى، أو تكتب التقارير، أو تحلل الدراسات، فإن معرفة المصطلحات تجعلك أكثر ثقة وكفاءة."
    },
    image: Confidence,
  },
  {
    description: {
      en: "Facilitates Research & Academic Success – Understanding medical jargon allows you to read, interpret, and contribute to medical literature with ease.",
      ar: "يسهل البحث والنجاح الأكاديمي - فهم المصطلحات الطبية يمكّنك من قراءة وتفسير والمساهمة في الأدبيات الطبية بسهولة."
    },
    image: AcademicSuccess,
  },
  {
    description: {
      en: "Enhances Professionalism – Mastering medical terminology ensures you communicate effectively and professionally in any medical setting.",
      ar: "يعزز الاحترافية - إتقان المصطلحات الطبية يضمن لك التواصل بفعالية واحترافية في أي بيئة طبية."
    },
    image: Professionalism,
  },
];

function Info() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`flex flex-col items-center justify-center py-10 space-y-10 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`} >
      <h1 className="text-4xl font-bold mb-6 text-center">
        {language === "ar" ? "كيف يعزز ذلك مسيرتك المهنية والبحثية" : "How It Boosts Your Career and Research"}
      </h1>
      {sections.map((section, index) => (
        <div key={index} className="relative flex flex-col md:flex-row items-center w-full max-w-6xl gap-6 md:gap-12 px-4 md:px-8 ">
          {index % 2 === 0 ? (
            <>
              <img
                src={section.image}
                alt={language === "ar" ? "صورة" : "Image"}
                className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-md object-cover"
              />
              <div className="p-4 shadow-md rounded-lg bg-opacity-80 backdrop-blur-lg w-full md:w-3/5 bg-blue-300">
                <p className="text-gray-600">{section.description[language]}</p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 shadow-md rounded-lg bg-opacity-80 backdrop-blur-lg w-full md:w-3/5 bg-gray-300">
                <p className="text-gray-600">{section.description[language]}</p>
              </div>
              <img
                src={section.image}
                alt={language === "ar" ? "صورة" : "Image"}
                className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-md object-cover"
              />
            </>
          )}
          {index !== sections.length - 1 && (
            <div className="absolute left-1/2 top-full h-10 w-1 bg-gray-300 transform -translate-x-1/2"></div>
          )}
        </div>
      ))}
    </div>

  );
}

export default Info;
