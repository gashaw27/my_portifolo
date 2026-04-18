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
      aboutText: "I am a passionate Computer Science student who loves solving complex problems and building user-friendly applications.",
      skillsTitle: "Tech Stack",
      projectTitle: "My Recent Projects",
      contactTitle: "Get In Touch",
      contactSub: "Have a project in mind? Message me!",
      formName: "Full Name",
      formEmail: "Email",
      formMsg: "Message",
      formBtn: "Send Message",
      contactBtn: "Contact Me",
      langBtn: "አማርኛ",
      footer: "Built with  by Gashaw"
    },
    am: {
      navHome: "ዋና", navAbout: "ስለ እኔ", navProjects: "ስራዎች", navContact: "አግኙኝ",
      heroTitle: "ዲጂታል መፍትሄዎችን መገንባት",
      heroSub: "እኔ ጋሻው እባላለሁ፣ በዌብሳይቶች፣ AI እና ኔትወርኪንግ ላይ የማተኩር የCS ተማሪ ነኝ።",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ልማት ከፍተኛ ፍላጎት ያለኝ የኮምፒውተር ሳይንስ ተማሪ ነኝ። ችግሮችን መፍታት እና ዌብሳይቶችን መገንባት እወዳለሁ።",
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
      
      {/* --- Navigation (Mobile Friendly) --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-black text-blue-600 italic">GASHAW.</span>
          <div className="flex items-center gap-3 md:gap-8 font-bold text-[10px] md:text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">{t.navAbout}</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">{t.navProjects}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors hidden sm:block">{t.navContact}</a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all text-[10px] md:text-xs"
            >
              {t.langBtn}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section (Fixed for Mobile) --- */}
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
        <p className="max-w-2xl text-base md:text-xl text-slate-500 mb-8 font-medium px-2">
          {t.heroSub}
        </p>
        <a href="#contact" className="px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black shadow-xl hover:scale-105 transition-transform text-sm md:text-base">
          {t.contactBtn}
        </a>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 text-center">{t.aboutTitle}</h2>
        <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-50 text-center">
          <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
            "{t.aboutText}"
          </p>
        </div>
      </section>

      {/* --- Projects Section (Grid Fix) --- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white p-4 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all text-center">
            <div className="aspect-square bg-blue-50 rounded-[1.5rem] mb-4 flex items-center justify-center text-blue-600 text-4xl font-black">W</div>
            <h3 className="text-xl font-black mb-2">E-Learning</h3>
            <p className="text-slate-500 font-medium text-xs">React-based platform.</p>
          </div>
          <div className="bg-white p-4 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all text-center">
            <div className="aspect-square bg-indigo-50 rounded-[1.5rem] mb-4 flex items-center justify-center text-indigo-600 text-4xl font-black">AI</div>
            <h3 className="text-xl font-black mb-2">Sentiment</h3>
            <p className="text-slate-500 font-medium text-xs">Amharic NLP tool.</p>
          </div>
          <div className="bg-white p-4 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all text-center">
            <div className="aspect-square bg-slate-100 rounded-[1.5rem] mb-4 flex items-center justify-center text-slate-800 text-4xl font-black">Net</div>
            <h3 className="text-xl font-black mb-2">Network</h3>
            <p className="text-slate-500 font-medium text-xs">Secure architecture.</p>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24 bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-xl mb-20 border border-slate-100">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">{t.contactTitle}</h2>
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

      {/* --- Footer --- */}
      <footer className="bg-slate-950 py-12 md:py-20 text-center px-4">
        <div className="text-2xl font-black text-white mb-6 italic">GASHAW.</div>
        <p className="text-slate-500 font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] mb-4">{t.footer}</p>
        <p className="text-slate-800 text-[8px] font-bold">© 2024 DESIGNED BY GASHAW</p>
      </footer>
    </div>
  )
}

export default App
