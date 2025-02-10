import { useLanguage } from '../../cont/LanguageProvider';
import { useTheme } from '../../cont/ThemeProvider';
import HeroImage from '../../assets/Hero.jpg';
import Typewriter from 'typewriter-effect';

function Hero() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const heroBgColor = theme === 'dark' ? 'var(--hero-bg-dark)' : 'var(--hero-bg-light)';
  const heroTextColor = theme === 'dark' ? 'var(--hero-text-dark)' : 'var(--hero-text-light)';




  return (
    <section
      className="relative w-[95%] mx-auto mt-10 p-12 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xl border border-gray-300 dark:border-gray-600 transition-all duration-300 transform hover:shadow-3xl backdrop-blur-xl"
      style={{ color: heroTextColor }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-20 rounded-2xl"></div>

      {/* Content */}
      <div className="relative text-center flex flex-col items-center">
        <img
          src={HeroImage}
          alt="Yazan Sasa"
          className=" w-44 h-44 object-cover border-4 border-white shadow-lg transition-all duration-300 transform "
          style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
        />
        <h1 className="text-3xl font-bold mt-6 drop-shadow-lg">
          <Typewriter
            key={language}  
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  language === "en"
                    ? "Yazan Sasa – English Tutor | Registered Nurse | Clinical Psychology Student"
                    : "يزن سعسع – مدرس لغة إنجليزية | ممرض مسجل | طالب علم النفس السريري"
                )
                .start();
            }}
            options={{
              autoStart: true,  
              loop: false,      
              delay: 50,        
            }}
          />
        </h1>
        <ul className="mt-6 space-y-3 text-lg font-medium">
          {language === "en" ? (
            <>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔</span>
                <span>Learn English through real conversations and an interactive environment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔</span>
                <span>Improve your speaking, listening, and confidence naturally</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400 text-xl">✔</span>
                <span>Specialized classes in Medical English & Terminology</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center space-x-2 justify-end">
                <span>تعلم الإنجليزية من خلال المحادثات الحقيقية وبيئة تفاعلية</span>
                <span className="text-green-400 text-xl">✔</span>

              </li>
              <li className="flex items-center space-x-2 justify-end">
                <span>حسّن مهارات التحدث والاستماع والثقة لديك بشكل طبيعي</span>
                <span className="text-green-400 text-xl">✔</span>

              </li>
              <li className="flex items-center space-x-2 justify-end">
                <span>دورات متخصصة في المصطلحات الطبية واللغة الإنجليزية الطبية</span>
                <span className="text-green-400 text-xl">✔</span>

              </li>

            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
