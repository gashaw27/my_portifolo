import { useState } from 'react'
import myPhoto from './assets/me.png'

// --- 1. Perfect Scientific Calculator ---
function Calculator({ onClose }) {
  const [display, setDisplay] = useState("");
  
  const handleClick = (val) => {
    const operators = ["+", "-", "*", "/", "."];
    const lastChar = display.slice(-1);

    if (val === "=") {
      try {
        if (!display) return;
        // ሎጂክ፡ √4 የሚለውን ወደ Math.sqrt(4) ይቀይረዋል
        let calcExpression = display.replace(/√(\d+\.?\d*)/g, 'Math.sqrt($1)');
        
        // Trigonometry logic (Degrees to Radians)
        calcExpression = calcExpression.replace(/sin\((\d+\.?\d*)\)/g, 'Math.sin($1*Math.PI/180)');
        calcExpression = calcExpression.replace(/cos\((\d+\.?\d*)\)/g, 'Math.cos($1*Math.PI/180)');
        calcExpression = calcExpression.replace(/tan\((\d+\.?\d*)\)/g, 'Math.tan($1*Math.PI/180)');

        const result = eval(calcExpression);
        setDisplay(String(Number(result).toFixed(2)));
      } catch {
        setDisplay("Error");
      }
    } else if (val === "C") {
      setDisplay("");
    } else if (val === "DEL") {
      setDisplay(display.slice(0, -1));
    } else if (["sin", "cos", "tan"].includes(val)) {
      setDisplay(display + val + "(");
    } else {
      // ኦፕሬተሮች እንዳይደራረቡ መከላከያ
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
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-950 w-full max-w-[340px] rounded-[2.5rem] p-6 shadow-2xl border border-slate-800 animate-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col text-left">
            <h3 className="text-white font-black tracking-widest text-[10px] uppercase">Scientific Calc</h3>
            <span className="text-blue-500 font-bold text-[8px] uppercase tracking-widest leading-none">Gashaw Pro Edition</span>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-all font-bold">✕</button>
        </div>
        
        <div className="bg-slate-900 h-24 rounded-2xl mb-6 flex flex-col justify-center items-end px-6 shadow-inner border border-slate-800/50">
          <span className="text-[10px] text-slate-600 uppercase font-black mb-1">Calculation</span>
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
                ["sin", "cos", "tan", "√"].includes(btn) ? "bg-blue-900/30 text-blue-400 border border-blue-900/50 hover:bg-blue-600 hover:text-white" :
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

// --- 2. Main App ---
function App() {
  const [lang, setLang] = useState('en');
  const [showCalc, setShowCalc] = useState(false);

  const content = {
    en: {
      navAbout: "About", navSkills: "Skills", navProjects: "Projects",
      heroHi: "Hi, I'm", heroRole: "I am a CS Student", viewProject: "View My Projects",
      aboutTitle: "About Me",
      aboutText: "I am a 3rd-year Computer Science student passionate about software engineering and full-stack development. I build tools that solve problems.",
      skillsTitle: "Tech Stack",
      projectTitle: "My Work",
      contactTitle: "Contact Me",
      sourceBtn: "Code", runBtn: "Run Live", notRun: "Offline",
      langBtn: "አማርኛ", footer: "Built with ❤️ by Gashaw"
    },
    am: {
      navAbout: "ስለ እኔ", navSkills: "ሙያ", navProjects: "ስራዎች",
      heroHi: "ሰላም፣ እኔ", heroRole: "የኮምፒውተር ሳይንስ ተማሪ ነኝ", viewProject: "ስራዎቼን እይ",
      aboutTitle: "ስለ እኔ",
      aboutText: "እኔ ለሶፍትዌር ልማት ከፍተኛ ፍላጎት ያለኝ የ3ኛ አመት የኮምፒውተር ሳይንስ ተማሪ ነኝ።",
      skillsTitle: "ሙያዎቼ",
      projectTitle: "ስራዎቼ",
      contactTitle: "አግኙኝ",
      sourceBtn: "ኮድ", runBtn: "አሰራር", notRun: "አይሰራም",
      langBtn: "English", footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <img src={myPhoto} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-blue-500" alt="logo" />
             <span className="text-xl font-black italic">GASHAW<span className="text-blue-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-blue-600 text-white px-5 py-2 rounded-full font-black">{t.langBtn}</button>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px]">{t.langBtn}</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-60 md:pb-40 text-center px-4">
        <h2 className="text-5xl md:text-9xl font-black mb-4 tracking-tighter leading-none">
          {t.heroHi} <span className="text-blue-600">Gashaw ...</span>
        </h2>
        <p className="text-lg md:text-3xl font-bold text-slate-400 mb-10 uppercase tracking-widest">{t.heroRole}</p>
        <a href="#projects" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black shadow-2xl shadow-blue-200 hover:scale-105 transition-all uppercase">
          {t.viewProject}
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 uppercase tracking-tighter">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { name: "Web Programming", desc: "Advanced Calculator with Logic.", tech: "React, Scientific JS", run: true },
            { name: "C++ Project", desc: "Pharmacy Management System.", tech: "C++, OOP", run: false },
            { name: "Networking", desc: "Secure Campus Network Design.", tech: "Cisco Tracer", run: false }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black mb-2 text-blue-600 uppercase tracking-tighter">{proj.name}</h3>
                <p className="text-slate-500 font-bold mb-8 text-xs italic">{proj.desc}</p>
              </div>
              <div className="space-y-4">
                <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">
                  {t.sourceBtn}
                </button>
                {proj.run ? (
                  <button onClick={() => setShowCalc(true)} className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">
                    {t.runBtn}
                  </button>
                ) : (
                  <button className="w-full py-4 bg-slate-50 text-slate-300 rounded-2xl font-black text-[10px] cursor-not-allowed uppercase tracking-widest">
                    {t.notRun}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-4xl font-black mb-10 italic uppercase">GASHAW<span className="text-blue-500">.</span></div>
          
          <div className="flex gap-6 mb-16">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/gashaw-your-username" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/gashaw27" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-all border border-slate-800">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            {/* Telegram */}
            <a href="https://t.me/gaga2327" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-sky-500 transition-all">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-2.003 9.464c-.149.659-.541.823-1.091.515l-3.051-2.247-1.472 1.417c-.163.163-.3.299-.614.299l.219-3.107 5.655-5.108c.246-.219-.054-.341-.381-.123l-6.991 4.402-3.012-.942c-.655-.205-.668-.655.137-.969l11.771-4.535c.545-.205 1.022.122.842.928z"/></svg>
            </a>
          </div>

          <p className="text-slate-400 font-bold text-lg mb-10 tracking-widest">gashaw@gmail.com</p>
          <p className="text-slate-700 font-black text-[9px] uppercase tracking-[0.5em]">{t.footer}</p>
        </div>
      </footer>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}
      
    </div>
  )
}

export default App
