import { useState } from 'react'
import myPhoto from './assets/me.png'

function App() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      navHome: "Home", navAbout: "About", navProjects: "Projects", navContact: "Contact",
      heroTitle: "Building Digital Experiences",
      heroSub: "I'm Gashaw, a 3rd Year CS student focused on Web, AI, and Networking.",
      aboutTitle: "About Me",
      aboutText: "I am a passionate Computer Science student who loves solving complex problems and building user-friendly applications. My goal is to use technology to create a positive impact.",
      skillsTitle: "Tech Stack",
      projectTitle: "My Recent Projects",
      contactTitle: "Get In Touch",
      contactSub: "Have a project in mind? Feel free to message me!",
      formName: "Full Name",
      formEmail: "Email",
      formMsg: "Message",
      formBtn: "Send Message",
      contactBtn: "Contact Me",
      langBtn: "አማርኛ",
      footer: "Built with by Gashaw"
    },
    am: {
      navHome: "ዋና", navAbout: "ስለ እኔ", navProjects: "ስራዎች", navContact: "አግኙኝ",
      heroTitle: "ዲጂታል መፍትሄዎችን መገንባት",
      heroSub: "እኔ ጋሻው እባላለሁ፣ በዌብሳይቶች፣ AI እና ኔትወርኪንግ ላይ የማተኩር የCS ተማሪ ነኝ።",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ልማት ከፍተኛ ፍላጎት ያለኝ የኮምፒውተር ሳይንስ ተማሪ ነኝ። ውስብስብ ችግሮችን መፍታት እና ዌብሳይቶችን መገንባት እወዳለሁ።",
      skillsTitle: "ቴክኖሎጂዎች",
      projectTitle: "የሰራኋቸው ስራዎች",
      contactTitle: "መልዕክት ይላኩ",
      contactSub: "አብረን መስራት ይፈልጋሉ? መልዕክት ያስቀምጡልኝ!",
      formName: "ሙሉ ስም",
      formEmail: "ኢሜይል",
      formMsg: "መልዕክት",
      formBtn: "ላክ",
      contactBtn: "አግኙኝ",
      langBtn: "English",
      footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans scroll-smooth overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-black text-blue-600 italic">GASHAW.</span>
          <div className="flex items-center gap-3 md:gap-8 font-bold text-[10px] md:text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">{t.navAbout}</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">{t.navProjects}</a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all text-[10px] md:text-xs"
            >
              {t.langBtn}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="max-w-6xl mx-auto px-4 md:px-6 pt-32 md:pt-48 pb-20 md:pb-32 flex flex-col items-center text-center">
        <div className="relative mb-8 md:mb-10">
          <div className="absolute inset-0 bg-blue-500 rounded-[2rem] md:rounded-[3rem] rotate-6 scale-105 opacity-20"></div>
          <img 
            src={myPhoto} 
            alt="Gashaw" 
            className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-[2rem] md:rounded-[3rem] relative z-10 border-4 border-white shadow-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight md:leading-[0.9]">
          {t.heroTitle}
        </h1>
        <p className="max-w-2xl text-base md:text-xl text-slate-500 mb-8 font-medium px-2 italic">
          {t.heroSub}
        </p>
        <a href="#contact" className="px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black shadow-xl hover:scale-105 transition-transform text-sm md:text-base">
          {t.contactBtn}
        </a>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-center uppercase tracking-tighter">{t.aboutTitle}</h2>
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm border border-slate-50 text-center">
          <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
            "{t.aboutText}"
          </p>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 uppercase tracking-tighter">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center text-blue-600 text-3xl font-black">Web programing </div>
            <h3 className="text-xl font-black mb-2 tracking-tight">E-Learning</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">Full educational platform for students.</p>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl mb-6 flex items-center justify-center text-indigo-600 text-3xl font-black">AI development</div>
            <h3 className="text-xl font-black mb-2 tracking-tight">Sentiment</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">Amharic Sentiment Analysis tool.</p>
          </div>
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center text-slate-800 text-3xl font-black">Network and System adminstration</div>
            <h3 className="text-xl font-black mb-2 tracking-tight">Network and System adminstratio</h3>
            <p className="text-slate-500 font-medium text-xs leading-relaxed">Secure Enterprise networking.</p>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24 bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-xl mb-24 border border-slate-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">{t.contactTitle}</h2>
          <p className="text-slate-500 font-medium text-sm">{t.contactSub}</p>
        </div>
        <form className="grid gap-4 md:gap-6" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder={t.formName} className="w-full px-5 py-3 md:px-6 md:py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          <input type="email" placeholder={t.formEmail} className="w-full px-5 py-3 md:px-6 md:py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          <textarea placeholder={t.formMsg} rows="4" className="w-full px-5 py-3 md:px-6 md:py-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"></textarea>
          <button className="w-full py-4 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all text-sm">
            {t.formBtn}
          </button>
        </form>
      </section>

     {/* --- Full Professional Footer with Correct Links --- */}
      <footer className="bg-slate-950 pt-24 pb-12 mt-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Brand Name */}
          <div className="text-4xl font-black text-white mb-8 tracking-tighter italic uppercase">
            GASHAW<span className="text-blue-500">.</span>
          </div>

          {/* Social Icons Container */}
          <div className="flex gap-6 mb-12">
            
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer" 
               className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300 shadow-xl group border border-slate-800">
              <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com/gashaw27" target="_blank" rel="noreferrer" 
               className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-slate-800 hover:-translate-y-2 transition-all duration-300 shadow-xl group border border-slate-800">
              <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Telegram Icon (Corrected Link) */}
            <a href="https://t.me/gaga2327" target="_blank" rel="noreferrer" 
               className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-sky-500 hover:-translate-y-2 transition-all duration-300 shadow-xl group border border-slate-800">
              <svg className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-2.003 9.464c-.149.659-.541.823-1.091.515l-3.051-2.247-1.472 1.417c-.163.163-.3.299-.614.299l.219-3.107 5.655-5.108c.246-.219-.054-.341-.381-.123l-6.991 4.402-3.012-.942c-.655-.205-.668-.655.137-.969l11.771-4.535c.545-.205 1.022.122.842.928z"/>
              </svg>
            </a>

          </div>

          {/* Decorative Line */}
          <div className="w-full h-[1px] bg-slate-900 mb-10"></div>

          {/* Bottom Footer Info */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
              {t.footer}
            </p>
            
            <div className="flex gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <a href="#about" className="hover:text-blue-500 transition-colors">{t.navAbout}</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">{t.navProjects}</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">{t.navContact}</a>
            </div>
          </div>

          <p className="mt-12 text-slate-800 text-[9px] font-bold tracking-[0.2em] uppercase">
            DESIGNED BY GASHAW • © 2024 • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
