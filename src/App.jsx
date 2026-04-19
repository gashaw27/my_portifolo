import { useState } from 'react'
import myPhoto from './assets/me.png'

// --- 1. Simple React Calculator Component ---
function Calculator({ onClose }) {
  const [display, setDisplay] = useState("");
  
  const handleClick = (val) => {
    if (val === "=") {
      try {
        // eval() ለአሁኑ ለቀላል ስሌት እንጠቀምበታለን
        const result = eval(display);
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
    } else if (val === "C") {
      setDisplay("");
    } else {
      setDisplay(display + val);
    }
  };

  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-[320px] rounded-[2.5rem] p-6 shadow-2xl border border-slate-800 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-black tracking-widest text-xs uppercase">Calculator Pro</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-all font-bold">✕</button>
        </div>
        
        <div className="bg-slate-800 h-20 rounded-2xl mb-6 flex items-center justify-end px-6 text-3xl font-mono text-green-400 overflow-hidden shadow-inner border border-slate-700/50 uppercase">
          {display || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`h-14 rounded-xl font-bold text-lg transition-all active:scale-90 ${
                btn === "=" ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700" :
                btn === "C" ? "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white" :
                ["/", "*", "-", "+"].includes(btn) ? "bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white" :
                "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- 2. Main App Component ---
function App() {
  const [lang, setLang] = useState('en');
  const [showCalc, setShowCalc] = useState(false);

  const content = {
    en: {
      navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
      heroHi: "Hi, I'm", heroRole: "I am a CS Student", viewProject: "View My Projects",
      aboutTitle: "About Me",
      aboutText: "I am a 3rd-year Computer Science student with a passion for software engineering. I specialize in Object-Oriented Programming (OOP) and full-stack web development. I enjoy building efficient systems and solving complex logic problems through code.",
      skillsTitle: "Technical Skills & Foundations",
      projectTitle: "Featured Projects",
      contactTitle: "Get In Touch",
      sourceBtn: "View GitHub Code", runBtn: "View Live Run", notRun: "Can't Run by GitHub",
      langBtn: "አማርኛ", footer: "Built with ❤️ by Gashaw"
    },
    am: {
      navHome: "ዋና ገጽ", navAbout: "ስለ እኔ", navSkills: "ሙያዎቼ", navProjects: "ስራዎቼ", navContact: "አግኙኝ",
      heroHi: "ሰላም፣ እኔ", heroRole: "የኮምፒውተር ሳይንስ ተማሪ ነኝ", viewProject: "ስራዎቼን ተመልከት",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ኢንጂነሪንግ ከፍተኛ ፍላጎት ያለኝ የ3ኛ አመት የኮምፒውተር ሳይንስ ተማሪ ነኝ። በOOP እና በFull-stack ዌብ ልማት ላይ አተኩራለሁ። ውስብስብ ችግሮችን በኮድ መፍታት እወዳለሁ።",
      skillsTitle: "ቴክኒካል ሙያዎቼ እና መሰረታዊ እውቀቶች",
      projectTitle: "የተመረጡ ስራዎች",
      contactTitle: "መልዕክት ይላኩ",
      sourceBtn: "ኮዱን ተመልከት", runBtn: "ሲሰራ ተመልከት", notRun: "ኦንላይን አይሰራም",
      langBtn: "English", footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center font-bold">
          <div className="flex items-center gap-3">
             <img src={myPhoto} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shadow-lg" alt="logo" />
             <span className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tighter">CS<span className="text-blue-600 font-medium lowercase">student</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-slate-500">
            <a href="#home" className="hover:text-blue-600 transition-all">{t.navHome}</a>
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <a href="#contact" className="hover:text-blue-600 transition-all">{t.navContact}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] hover:bg-blue-600 transition-all">{t.langBtn}</button>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-full text-[10px]">{t.langBtn}</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-40 pb-20 md:pt-64 md:pb-40 text-center px-4">
        <h2 className="text-4xl md:text-8xl font-black mb-4 text-slate-900 tracking-tighter">
          {t.heroHi} <span className="text-blue-600">Gashaw ...</span>
        </h2>
        <p className="text-lg md:text-3xl font-bold text-slate-400 mb-10 tracking-tight">{t.heroRole}</p>
        <a href="#projects" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all uppercase">
          {t.viewProject}
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-20 underline decoration-blue-500 decoration-4 underline-offset-8 uppercase">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full rotate-6 scale-105 opacity-10 group-hover:rotate-12 transition-all"></div>
            <img src={myPhoto} className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-2xl relative z-10" alt="Gashaw" />
          </div>
          <div className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
            <p className="mb-6">{t.aboutText}</p>
            <p>I am constantly learning new technologies and applying them to solve real-world problems. My goal is to become a skilled Software Engineer who contributes to impactful projects.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-20 uppercase">{t.skillsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: "C++, Java (Advanced), Python, PHP, JavaScript, Assembly", color: "border-green-500" },
              { title: "Web Development", skills: "HTML5, CSS3, Node.js, Full-stack, ReactJS", color: "border-blue-500" },
              { title: "CS Foundations", skills: "DSA, Operating Systems (OS), Networking, SQL", color: "border-emerald-500" },
              { title: "Software & Systems", skills: "Software Engineering (SE), COA, DLD, System Analysis", color: "border-teal-500" }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border-t-8 ${item.color} hover:shadow-xl transition-all`}>
                <h3 className="text-xl font-black mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-bold text-sm uppercase tracking-wide">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-20 uppercase">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Web Programming", desc: "Simple Calculator using React.", tech: "PHP, MySQL, React", run: true },
            { name: "C++ Project", desc: "Pharmacy Management System.", tech: "C++, OOP", run: false },
            { name: "Operating System", desc: "Bankers-algorithm-simulator.", tech: "OS, C++", run: false }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-2 text-blue-600">{proj.name}</h3>
                <p className="text-slate-500 font-bold mb-8 text-sm">{proj.desc}</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">
                  {t.sourceBtn}
                </button>
                {proj.run ? (
                  <button onClick={() => setShowCalc(true)} className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all">
                    {t.runBtn}
                  </button>
                ) : (
                  <button className="w-full py-4 bg-slate-100 text-slate-300 rounded-2xl font-black text-xs uppercase tracking-widest cursor-not-allowed">
                    {t.notRun}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0f172a] text-white pt-24 pb-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter italic">Get In Touch</h2>
        <div className="mb-16 space-y-4">
          <p className="text-slate-400 font-bold text-lg md:text-xl">Email: <span className="text-white">gashaw@example.com</span></p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/gashaw27" className="text-slate-400 hover:text-white transition-all font-bold">GitHub</a>
            <a href="https://t.me/gaga2327" className="text-slate-400 hover:text-white transition-all font-bold">Telegram</a>
            <a href="#" className="text-slate-400 hover:text-white transition-all font-bold">LinkedIn</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-800 mb-10 max-w-6xl mx-auto"></div>
        <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.4em]">{t.footer}</p>
      </footer>

      {/* Calculator Popup */}
      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}
      
    </div>
  )
}

export default App
