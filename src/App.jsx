import { useState } from 'react'
import myPhoto from './assets/me.png'

function App() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
      heroHi: "Hi, I'm",
      heroRole: "I am a CS Student",
      viewProject: "View My Projects",
      aboutTitle: "About Me",
      aboutText: "I am a 3rd-year Computer Science student with a passion for software engineering. I specialize in Object-Oriented Programming (OOP) and full-stack web development. I enjoy building efficient systems and solving complex logic problems through code.",
      skillsTitle: "Technical Skills & Foundations",
      projectTitle: "Featured Projects",
      contactTitle: "Get In Touch",
      sourceBtn: "View Source Code",
      runBtn: "View Live Run",
      notRun: "Can't Run Online",
      langBtn: "አማርኛ",
      footer: "Built with ❤️ by Gashaw"
    },
    am: {
      navHome: "ዋና ገጽ", navAbout: "ስለ እኔ", navSkills: "ሙያዎቼ", navProjects: "ስራዎቼ", navContact: "አግኙኝ",
      heroHi: "ሰላም፣ እኔ",
      heroRole: "የኮምፒውተር ሳይንስ ተማሪ ነኝ",
      viewProject: "ስራዎቼን ተመልከት",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ኢንጂነሪንግ ከፍተኛ ፍላጎት ያለኝ የ3ኛ አመት የኮምፒውተር ሳይንስ ተማሪ ነኝ። በOOP እና በFull-stack ዌብ ልማት ላይ አተኩራለሁ። ውስብስብ ችግሮችን በኮድ መፍታት እወዳለሁ።",
      skillsTitle: "ቴክኒካል ሙያዎቼ እና መሰረታዊ እውቀቶች",
      projectTitle: "የተመረጡ ስራዎች",
      contactTitle: "መልዕክት ይላኩ",
      sourceBtn: "ኮዱን ተመልከት",
      runBtn: "ሲሰራ ተመልከት",
      notRun: "ኦንላይን አይሰራም",
      langBtn: "English",
      footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img src={myPhoto} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500" alt="logo" />
             <span className="text-xl font-black text-slate-800 tracking-tighter">CS<span className="text-blue-600">Student</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-all">{t.navHome}</a>
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <a href="#contact" className="hover:text-blue-600 transition-all">{t.navContact}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs">{t.langBtn}</button>
          </div>
          {/* Mobile Lang Button */}
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px]">{t.langBtn}</button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="pt-40 pb-20 md:pt-64 md:pb-40 text-center px-4">
        <h2 className="text-4xl md:text-7xl font-black mb-4 text-slate-900">
          {t.heroHi} <span className="text-blue-600">Gashaw ...</span>
        </h2>
        <p className="text-xl md:text-3xl font-medium text-slate-500 mb-10">{t.heroRole}</p>
        <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
          {t.viewProject}
        </a>
      </section>

      {/* --- About Me --- */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
          {t.aboutTitle}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <img src={myPhoto} className="w-full h-full object-cover rounded-full border-8 border-slate-50 shadow-2xl" alt="About Me" />
          </div>
          <div className="text-lg md:text-xl text-slate-600 leading-relaxed space-y-6">
            <p>{t.aboutText}</p>
            <p>I am constantly learning new technologies and applying them to solve real-world problems. My goal is to become a skilled Software Engineer.</p>
          </div>
        </div>
      </section>

      {/* --- Technical Skills --- */}
      <section id="skills" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-16">{t.skillsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: "C++, Java (Advanced), Python, PHP, JavaScript, Assembly", color: "border-green-600" },
              { title: "Web Development", skills: "HTML5, CSS3, Node.js, React, Full-stack Development", color: "border-blue-600" },
              { title: "CS Foundations", skills: "DSA, Operating Systems (OS), Networking, Database (SQL)", color: "border-emerald-600" },
              { title: "Software & Systems", skills: "Software Engineering (SE), COA, DLD, System Analysis", color: "border-teal-600" }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-xl shadow-sm border-t-8 ${item.color} hover:shadow-lg transition-all`}>
                <h3 className="text-xl font-black mb-4 text-center text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed font-medium">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Featured Projects --- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-16">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Web Programming", desc: "Full educational platform for students.", tech: "PHP, MySQL", run: true },
            { name: "AI Sentiment", desc: "Amharic language analysis tool.", tech: "Python, AI", run: false },
            { name: "Network Admin", desc: "Secure Enterprise networking design.", tech: "Cisco, Server", run: false }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-black mb-2 text-blue-600">{proj.name}</h3>
              <p className="text-slate-500 font-medium mb-6">{proj.desc}</p>
              <div className="space-y-3">
                <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-all uppercase">
                  {t.sourceBtn}
                </button>
                {proj.run ? (
                  <button className="w-full py-3 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 transition-all uppercase">
                    {t.runBtn}
                  </button>
                ) : (
                  <button className="w-full py-3 bg-slate-100 text-slate-400 rounded-lg font-bold text-sm cursor-not-allowed uppercase">
                    {t.notRun}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact & Footer --- */}
      <footer id="contact" className="bg-[#1e293b] text-white pt-24 pb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter">{t.contactTitle}</h2>
        <div className="mb-12 space-y-2">
          <p className="text-slate-400 font-medium text-lg">Email: <span className="text-white">gashaw@gmail.com</span></p>
          <p className="text-slate-400 font-medium text-lg">GitHub: <span className="text-white">github.com/gashaw27</span></p>
        </div>
        <div className="w-full h-[1px] bg-slate-800 mb-10 max-w-6xl mx-auto"></div>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
