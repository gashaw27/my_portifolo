import { useState } from 'react'
import myPhoto from './assets/me.png'

// --- 1. Advanced & Perfect Scientific Calculator ---
function Calculator({ onClose }) {
  const [display, setDisplay] = useState("");
  
  const handleClick = (val) => {
    const operators = ["+", "-", "*", "/", "."];
    const lastChar = display.slice(-1);

    if (val === "=") {
      try {
        if (!display) return;
        // eval() can handle basic math
        const result = eval(display);
        setDisplay(String(Number(result).toFixed(4)));
      } catch {
        setDisplay("Error");
      }
    } else if (val === "C") {
      setDisplay("");
    } else if (val === "DEL") {
      // Single delete logic
      setDisplay(display.slice(0, -1));
    } else if (val === "sin" || val === "cos" || val === "tan") {
      try {
        const num = parseFloat(display);
        if (isNaN(num)) return;
        const rad = (num * Math.PI) / 180;
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
        const num = parseFloat(display);
        if (isNaN(num)) return;
        setDisplay(String(Math.sqrt(num).toFixed(4)));
      } catch {
        setDisplay("Error");
      }
    } else {
      // Prevent multiple operators in a row
      if (operators.includes(val) && operators.includes(lastChar)) {
        setDisplay(display.slice(0, -1) + val);
      } else {
        setDisplay(display + val);
      }
    }
  };

  const buttons = [
    "sin", "cos", "tan", "C",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "√", "+",
    "DEL", "="
  ];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4">
      <div className="bg-slate-950 w-full max-w-[340px] rounded-[2.5rem] p-6 shadow-2xl border border-slate-800 animate-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h3 className="text-white font-black tracking-widest text-[10px] uppercase">Scientific Calc</h3>
            <span className="text-blue-500 font-bold text-[8px] uppercase tracking-widest leading-none">Gashaw Edition</span>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-all font-bold">✕</button>
        </div>
        
        <div className="bg-slate-900 h-24 rounded-2xl mb-6 flex flex-col justify-center items-end px-6 shadow-inner border border-slate-800/50">
          <span className="text-[10px] text-slate-600 uppercase font-black mb-1">Result</span>
          <div className="text-3xl font-mono text-green-400 overflow-hidden tracking-tighter text-right w-full">
            {display || "0"}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`h-12 md:h-14 rounded-xl font-bold text-sm md:text-lg transition-all active:scale-95 ${
                btn === "=" ? "bg-blue-600 text-white col-span-2 shadow-lg hover:bg-blue-700" :
                btn === "DEL" ? "bg-orange-500/10 text-orange-500 col-span-2 hover:bg-orange-500 hover:text-white" :
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
      </div>
    </div>
  );
}

// --- 2. Main App ---
function App() {
  const [lang, setLang] = useState('en');
  const [showCalc, setShowCalc] = useState(false);

  const content = {
    en: {
      navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
      heroHi: "Hi, I'm", heroRole: "I am a CS Student", viewProject: "View My Projects",
      aboutTitle: "About Me",
      aboutText: "I am a 3rd-year Computer Science student with a passion for software engineering. I specialize in OOP and full-stack development. I enjoy building efficient systems and solving complex problems.",
      skillsTitle: "Technical Skills & Foundations",
      projectTitle: "Featured Projects",
      contactTitle: "Get In Touch",
      sourceBtn: "Source Code", runBtn: "View Live Run", notRun: "Offline Run",
      langBtn: "አማርኛ", footer: "Built with  by Gashaw"
    },
    am: {
      navHome: "ዋና ገጽ", navAbout: "ስለ እኔ", navSkills: "ሙያ", navProjects: "ስራዎች", navContact: "አግኙኝ",
      heroHi: "ሰላም፣ እኔ", heroRole: "የኮምፒውተር ሳይንስ ተማሪ ነኝ", viewProject: "ስራዎቼን ተመልከት",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ኢንጂነሪንግ ከፍተኛ ፍላጎት ያለኝ የ3ኛ አመት የኮምፒውተር ሳይንስ ተማሪ ነኝ። በOOP እና በዌብ ልማት ላይ አተኩራለሁ።",
      skillsTitle: "ቴክኒካል ሙያዎቼ",
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
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <img src={myPhoto} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-blue-500 shadow-md" alt="logo" />
             <span className="text-lg md:text-xl font-black text-slate-800 tracking-tighter italic">GASHAW<span className="text-blue-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-xs uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-blue-600 text-white px-4 py-2 rounded-full text-[10px]">{t.langBtn}</button>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px]">{t.langBtn}</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-60 md:pb-40 text-center px-4">
        <h2 className="text-4xl md:text-8xl font-black mb-4 text-slate-900 tracking-tighter leading-none">
          {t.heroHi} <span className="text-blue-600">Gashaw ...</span>
        </h2>
        <p className="text-lg md:text-3xl font-bold text-slate-400 mb-10">{t.heroRole}</p>
        <a href="#projects" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-base md:text-lg shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all uppercase">
          {t.viewProject}
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-20 underline decoration-blue-500 decoration-4 underline-offset-8 uppercase">{t.aboutTitle}</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
          <img src={myPhoto} className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-[3rem] border-8 border-slate-50 shadow-2xl" alt="Gashaw" />
          <div className="text-base md:text-xl text-slate-500 leading-relaxed font-medium text-center md:text-left">
            <p className="mb-6">{t.aboutText}</p>
            <p>Constantly learning and building. My mission is to create tools that make life easier for everyone.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-20 uppercase">{t.skillsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: "C++, Java, Python, PHP, JS, Assembly", color: "border-green-500" },
              { title: "Web Dev", skills: "HTML5, CSS3, Node.js, React, SQL", color: "border-blue-500" },
              { title: "Foundations", skills: "DSA, OS, Networking, Databases", color: "border-emerald-500" },
              { title: "Systems", skills: "SE, COA, DLD, Analysis", color: "border-teal-500" }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-[2.5rem] shadow-sm border-t-8 ${item.color} hover:shadow-xl transition-all`}>
                <h3 className="text-xl font-black mb-4 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-20 uppercase">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            { name: "Web Programming", desc: "Advanced Scientific Calculator.", tech: "React, Scientific Logic", run: true },
            { name: "C++ Project", desc: "Pharmacy Management System.", tech: "C++, OOP", run: false },
            { name: "Networking", desc: "Secure Campus Architecture.", tech: "Cisco, Packet Tracer", run: false }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-2 text-blue-600 tracking-tighter uppercase">{proj.name}</h3>
                <p className="text-slate-500 font-bold mb-8 text-xs">{proj.desc}</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">
                  {t.sourceBtn}
                </button>
                {proj.run ? (
                  <button onClick={() => setShowCalc(true)} className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">
                    {t.runBtn}
                  </button>
                ) : (
                  <button className="w-full py-4 bg-slate-100 text-slate-300 rounded-2xl font-black text-[10px] cursor-not-allowed">
                    {t.notRun}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter italic">{t.contactTitle}</h2>
        <div className="mb-12 space-y-4">
          <p className="text-slate-400 font-bold text-base md:text-xl underline underline-offset-8 decoration-blue-500">gashawsitotaw2@gmail.com</p>
          <div className="flex justify-center gap-8 font-black text-[10px] uppercase tracking-[0.3em] text-slate-500">
            <a href="https://github.com/gashaw27" className="hover:text-white transition-all">GitHub</a>
            <a href="https://t.me/gaga2327" className="hover:text-white transition-all">Telegram</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-900 mb-10 max-w-6xl mx-auto"></div>
        <p className="text-slate-700 font-black text-[8px] uppercase tracking-[0.5em]">{t.footer}</p>
      </footer>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}
      
    </div>
  )
}

export default App
