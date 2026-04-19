import { useState } from 'react'
import myPhoto from './assets/me.png'

// --- 1. Advanced Scientific Calculator Component ---
function Calculator({ onClose }) {
  const [display, setDisplay] = useState("");
  
  const handleClick = (val) => {
    if (val === "=") {
      try {
        // Standard math calculation
        const result = eval(display);
        setDisplay(String(Number(result).toFixed(4)));
      } catch {
        setDisplay("Error");
      }
    } else if (val === "C") {
      setDisplay("");
    } else if (val === "sin" || val === "cos" || val === "tan") {
      try {
        const num = parseFloat(display);
        const rad = (num * Math.PI) / 180; // Degrees to Radians
        let res;
        if (val === "sin") res = Math.sin(rad);
        if (val === "cos") res = Math.cos(rad);
        if (val === "tan") res = Math.tan(rad);
        setDisplay(String(res.toFixed(4)));
      } catch {
        setDisplay("Error");
      }
    } else if (val === "√") {
      try {
        setDisplay(String(Math.sqrt(parseFloat(display)).toFixed(4)));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + val);
    }
  };

  const buttons = [
    "sin", "cos", "tan", "C",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "√", "+",
    "="
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4">
      <div className="bg-slate-900 w-full max-w-[340px] rounded-[2.5rem] p-6 shadow-2xl border border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-white font-black tracking-widest text-[10px] uppercase">Scientific Calc</h3>
            <span className="text-blue-500 font-bold text-[8px] uppercase tracking-widest leading-none">Gashaw Edition</span>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-all font-bold"
          >
            ✕
          </button>
        </div>
        
        <div className="bg-slate-800 h-24 rounded-2xl mb-6 flex flex-col justify-center items-end px-6 shadow-inner border border-slate-700/50">
          <span className="text-[10px] text-slate-500 uppercase font-black mb-1">Result</span>
          <div className="text-3xl font-mono text-green-400 overflow-hidden tracking-tighter">
            {display || "0"}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`h-12 md:h-14 rounded-xl font-bold text-sm md:text-lg transition-all active:scale-95 ${
                btn === "=" ? "bg-blue-600 text-white col-span-4 mt-2 shadow-lg hover:bg-blue-700" :
                ["sin", "cos", "tan"].includes(btn) ? "bg-blue-900/30 text-blue-400 border border-blue-900/50 hover:bg-blue-600 hover:text-white" :
                btn === "C" ? "bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white" :
                ["/", "*", "-", "+", "√"].includes(btn) ? "bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white" :
                "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <p className="text-[8px] text-slate-600 text-center mt-6 uppercase tracking-[0.2em] font-bold">Trigonometry in Degrees</p>
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
      sourceBtn: "View Source Code", runBtn: "View Live Run", notRun: "Online Run Unavailable",
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
      sourceBtn: "ኮዱን ተመልከት", runBtn: "ሲሰራ ተመልከት", notRun: "በዌብ አይሰራም",
      langBtn: "English", footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
             <img src={myPhoto} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-blue-500" alt="logo" />
             <span className="text-lg md:text-xl font-black text-slate-800 tracking-tighter">CS<span className="text-blue-600">Student</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600">
            <a href="#home" className="hover:text-blue-600 transition-all">{t.navHome}</a>
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <a href="#contact" className="hover:text-blue-600 transition-all">{t.navContact}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold">{t.langBtn}</button>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold">{t.langBtn}</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-64 md:pb-40 text-center px-4">
        <h2 className="text-4xl md:text-8xl font-black mb-4 text-slate-900 tracking-tighter">
          {t.heroHi} <span className="text-blue-600">Gashaw ...</span>
        </h2>
        <p className="text-lg md:text-3xl font-bold text-slate-400 mb-10">{t.heroRole}</p>
        <a href="#projects" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-blue-100 hover:-translate-y-1 transition-all uppercase">
          {t.viewProject}
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12 md:mb-20 underline decoration-blue-500 decoration-4 underline-offset-8 uppercase">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <img src={myPhoto} className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-full border-8 border-slate-50 shadow-2xl" alt="Gashaw" />
          <div className="text-base md:text-xl text-slate-600 leading-relaxed space-y-6 text-center md:text-left">
            <p>{t.aboutText}</p>
            <p>I am constantly learning new technologies and applying them to solve real-world problems. My goal is to become a skilled Software Engineer.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12 md:mb-20 uppercase">{t.skillsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: "C++, Java, Python, PHP, JS, Assembly", color: "border-green-600" },
              { title: "Web Dev", skills: "HTML5, CSS3, Node.js, React, Full-stack", color: "border-blue-600" },
              { title: "CS Foundations", skills: "DSA, OS, Networking, SQL, Databases", color: "border-emerald-600" },
              { title: "Systems", skills: "SE, COA, DLD, Microprocessors, Analysis", color: "border-teal-600" }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border-t-8 ${item.color} hover:shadow-lg transition-all`}>
                <h3 className="text-lg md:text-xl font-black mb-4 text-center text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-center text-sm md:text-base font-medium">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12 md:mb-20 uppercase">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            { id: "calc", name: "Web Programming", desc: "Scientific Calculator with Trig functions.", tech: "React, Logic", run: true },
            { id: "pharm", name: "C++ Project", desc: "Pharmacy Management System.", tech: "C++, OOP", run: false },
            { id: "os", name: "Operating System", desc: "Bankers-algorithm-simulator.", tech: "OS, C++", run: false }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-blue-600 leading-tight">{proj.name}</h3>
                <p className="text-slate-500 font-bold mb-8 text-xs md:text-sm">{proj.desc}</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">
                  {t.sourceBtn}
                </button>
                {proj.run ? (
                  <button 
                    onClick={() => setShowCalc(true)} 
                    className="w-full py-3 bg-green-600 text-white rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-green-700 transition-all"
                  >
                    {t.runBtn}
                  </button>
                ) : (
                  <button className="w-full py-3 bg-slate-100 text-slate-300 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest cursor-not-allowed">
                    {t.notRun}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1e293b] text-white pt-20 pb-10 text-center px-4">
        <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter italic">{t.contactTitle}</h2>
        <div className="mb-12 space-y-4">
          <p className="text-slate-400 font-bold text-base md:text-xl">Email: <span className="text-white">gashaw@example.com</span></p>
          <div className="flex justify-center gap-6 text-sm font-bold">
            <a href="https://github.com/gashaw27" target="_blank" className="text-slate-400 hover:text-white transition-all">GitHub</a>
            <a href="https://t.me/gaga2327" target="_blank" className="text-slate-400 hover:text-white transition-all">Telegram</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-800 mb-10 max-w-6xl mx-auto"></div>
        <p className="text-slate-500 font-black text-[9px] md:text-xs uppercase tracking-[0.4em]">{t.footer}</p>
      </footer>

      {/* Calculator Popup - This is where the magic happens */}
      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}
      
    </div>
  )
}

export default App
