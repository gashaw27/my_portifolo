import { useState } from 'react'
import myPhoto from './assets/me.png'

// --- 1. Advanced & Colorful Scientific Calculator ---
function Calculator({ onClose }) {
  const [display, setDisplay] = useState("");
  
  const handleClick = (val) => {
    const operators = ["+", "-", "*", "/", "."];
    const lastChar = display.slice(-1);

    if (display === "Error") {
      if (val === "C" || val === "DEL") { setDisplay(""); return; }
      if (["sin", "cos", "tan", "√"].includes(val)) { setDisplay(val + "("); return; }
      setDisplay(val); 
      return;
    }

    if (val === "=") {
      try {
        if (!display) return;
        let exp = display;
        exp = exp.replace(/√\(/g, 'Math.sqrt(');
        exp = exp.replace(/sin\(([^)]+)\)/g, 'Math.sin(($1)*Math.PI/180)');
        exp = exp.replace(/cos\(([^)]+)\)/g, 'Math.cos(($1)*Math.PI/180)');
        exp = exp.replace(/tan\(([^)]+)\)/g, 'Math.tan(($1)*Math.PI/180)');
        const result = eval(exp);
        if (isNaN(result) || !isFinite(result)) throw new Error();
        setDisplay(String(Number(result).toFixed(3)));
      } catch { setDisplay("Error"); }
    } else if (val === "C") { setDisplay(""); }
    else if (val === "DEL") { setDisplay(display.slice(0, -1)); }
    else if (["sin", "cos", "tan", "√"].includes(val)) { setDisplay(display + val + "("); }
    else {
      if (operators.includes(val) && operators.includes(lastChar)) { setDisplay(display.slice(0, -1) + val); }
      else { setDisplay(display + val); }
    }
  };

  const buttons = ["sin", "cos", "tan", "C", "(", ")", "√", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "DEL", "="];

  const getBtnClass = (btn) => {
    const redGroup = ["0", "DEL", ".", "=", "1", "2", "3", "+"];
    const yellowGroup = ["4", "5", "6", "-", "7", "8", "9", "*"];
    const base = "h-11 md:h-12 rounded-xl font-black text-[10px] transition-all active:scale-90 shadow-md ";
    if (redGroup.includes(btn)) return base + "bg-red-600 text-white hover:bg-red-500 shadow-red-900/20";
    if (yellowGroup.includes(btn)) return base + "bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-yellow-900/20";
    return base + "bg-green-600 text-white hover:bg-green-500 shadow-green-900/20";
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[200] flex items-center justify-center p-4">
      <div className="bg-[#0f172a] w-full max-w-[300px] rounded-[2.5rem] p-5 shadow-2xl border border-slate-800 animate-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-5 border-l-4 border-blue-600 pl-3">
          <div className="text-left">
            <h3 className="text-white font-black text-[10px] uppercase tracking-tighter">Gashaw Scientific</h3>
            <span className="text-blue-500 font-bold text-[8px] uppercase tracking-widest"></span>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-red-500 transition-all font-bold text-xs">✕</button>
        </div>
        <div className="bg-slate-900 h-24 rounded-2xl mb-5 flex flex-col justify-center items-end px-5 border border-slate-800 shadow-inner overflow-hidden">
          <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Calculation</span>
          <div className="text-xl md:text-2xl font-mono text-white text-right w-full overflow-x-auto whitespace-nowrap scrollbar-hide uppercase tracking-tighter">{display || "0"}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => ( <button key={btn} onClick={() => handleClick(btn)} className={getBtnClass(btn)}>{btn}</button> ))}
        </div>
      </div>
    </div>
  );
}

// --- 2. Main Portfolio App ---
function App() {
  const [lang, setLang] = useState('en');
  const [showCalc, setShowCalc] = useState(false);

  const content = {
    en: {
      navAbout: "My Story", navSkills: "Skills", navProjects: "Work",
      heroHi: "Hi, I'm", heroRole: "I am a CS Student", viewProject: "View My Projects",
      aboutTitle: "My Story", aboutSub: "More than just code.",
      aboutP1: "I’m a 3rd-year Computer Science student who believes that technology is a way to solve real human problems. My journey into software engineering started with pure curiosity, which has now grown into a deep-seated passion for building systems that actually matter.",
      aboutP2: "Whether I’m architecting a database, refining a React component, or solving complex logic puzzles, I find joy in the process of creation. I’m a lifelong learner, always eager to adapt to new technologies and collaborate with creative minds.",
      skillsTitle: "Technical Foundations",
      projectTitle: "Featured Projects",
      langBtn: "አማርኛ", footer: "Built with  by Gashaw"
    },
    am: {
      navAbout: "ታሪኬ", navSkills: "ሙያ", navProjects: "ስራዎች",
      heroHi: "ሰላም፣ እኔ", heroRole: "የኮምፒውተር ሳይንስ ተማሪ ነኝ", viewProject: "ስራዎቼን እይ",
      aboutTitle: "የእኔ ታሪክ", aboutSub: "ከኮድ ባሻገር።",
      aboutP1: "እኔ የ3ኛ ዓመት የኮምፒውተር ሳይንስ ተማሪ ነኝ። ለእኔ ቴክኖሎጂ ዝም ብሎ የኮድ ስብስብ ሳይሆን የሰዎችን የዕለት ተዕለት ችግሮች መፍቻ ቁልፍ ነው። ወደ ሶፍትዌር ኢንጂነሪንግ ዓለም የገባሁት በጉጉት ቢሆንም፣ አሁን ግን ውጤታማ ሲስተሞችን የመገንባት ጥልቅ ፍላጎት አድሮብኛል።",
      aboutP2: "ከውስብስብ የዳታቤዝ ሎጂኮች ጀምሮ እስከ ማራኪ የዌብ ገጾች ድረስ ባሉ ስራዎች ላይ መሳተፍ ልዩ ደስታን ይሰጠኛል። ሁልጊዜ አዳዲስ ቴክኖሎጂዎችን ለመማር እና ከጎበዝ ሰዎች ጋር አብሮ ለመስራት ዝግጁ ነኝ።",
      skillsTitle: "ቴክኒካል ሙያዎቼ",
      projectTitle: "የተመረጡ ስራዎች",
      langBtn: "English", footer: "በጋሻው የተገነባ"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center font-bold">
          <div className="flex items-center gap-2">
             <img src={myPhoto} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-blue-500 shadow-md" alt="logo" />
             <span className="text-xl font-black italic tracking-tighter">GASHAW<span className="text-blue-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-blue-600 transition-all">{t.navAbout}</a>
            <a href="#skills" className="hover:text-blue-600 transition-all">{t.navSkills}</a>
            <a href="#projects" className="hover:text-blue-600 transition-all">{t.navProjects}</a>
            <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="bg-blue-600 text-white px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-200">{t.langBtn}</button>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'am' : 'en')} className="md:hidden bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px]">{t.langBtn}</button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-60 md:pb-40 text-center px-4">
        <h2 className="text-5xl md:text-9xl font-black mb-4 tracking-tighter leading-none">{t.heroHi} <span className="text-blue-600">Gashaw ...</span></h2>
        <p className="text-lg md:text-3xl font-bold text-slate-300 mb-10 uppercase tracking-widest italic">{t.heroRole}</p>
        <a href="#projects" className="inline-block bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black shadow-2xl shadow-blue-200 hover:scale-105 transition-all uppercase tracking-widest text-[10px]">{t.viewProject}</a>
      </section>

      {/* About Me (Human Centered) */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-24 border-t border-slate-50">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">{t.aboutTitle}</h2>
          <p className="text-blue-600 font-bold mt-2 tracking-widest uppercase text-xs">{t.aboutSub}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <img src={myPhoto} className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-[3rem] border-8 border-white shadow-2xl transition-transform hover:scale-105" alt="Gashaw" />
          <div className="flex-1 space-y-6 text-center lg:text-left text-slate-500 text-lg md:text-xl font-medium leading-relaxed italic">
            <p>"{t.aboutP1}"</p>
            <p>"{t.aboutP2}"</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 not-italic">
              <div className="px-6 py-3 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <span className="block text-blue-600 font-black text-xl italic">3+</span>
                <span className="text-[9px] font-bold uppercase text-slate-400 tracking-tighter">Years Learning</span>
              </div>
              <div className="px-6 py-3 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
                <span className="block text-indigo-600 font-black text-xl italic">10+</span>
                <span className="text-[9px] font-bold uppercase text-slate-400 tracking-tighter">Tools Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills (Friend's Layout but Improved) */}
      <section id="skills" className="bg-slate-50 py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-20 uppercase tracking-tighter">{t.skillsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Languages", skills: "C++, Java, Python, PHP, JS, Assembly", color: "border-green-500" },
            { title: "Web Dev", skills: "HTML5, CSS3, Node.js, React, SQL", color: "border-blue-500" },
            { title: "CS Logic", skills: "DSA, OS, Networking, Databases", color: "border-emerald-500" },
            { title: "Systems", skills: "SE, COA, DLD, Microprocessors", color: "border-teal-500" }
          ].map((item, i) => (
            <div key={i} className={`bg-white p-8 rounded-[2.5rem] border-t-8 ${item.color} shadow-sm hover:shadow-xl transition-all`}>
              <h3 className="text-lg font-black mb-4">{item.title}</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-loose">{item.skills}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 uppercase tracking-tighter">{t.projectTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Web Programming", desc: "Scientific Calculator with React.", run: "calc" },
            { name: "Inventory System", desc: "Stock management with PHP/MySQL.", run: "xampp" },
            { name: "Networking", desc: "Enterprise Campus Network.", run: "none" }
          ].map((proj, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between">
              <h3 className="text-2xl font-black mb-2 text-blue-600 uppercase tracking-tighter">{proj.name}</h3>
              <p className="text-slate-500 font-bold mb-8 text-[10px] italic leading-relaxed">{proj.desc}</p>
              <div className="space-y-3">
                <a href="https://github.com/gashaw27" target="_blank" className="block text-center py-3 bg-slate-950 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all">Code</a>
                {proj.run === "calc" && <button onClick={() => setShowCalc(true)} className="w-full py-3 bg-green-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-green-500">Run Online</button>}
                {proj.run === "xampp" && <button className="w-full py-3 bg-blue-100 text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest cursor-help" title="Needs XAMPP Server">Local (PHP)</button>}
                {proj.run === "none" && <button className="w-full py-3 bg-slate-50 text-slate-200 rounded-xl font-black text-[10px] uppercase cursor-not-allowed">Offline</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-4xl font-black mb-12 italic uppercase tracking-tighter leading-none text-white">GASHAW<span className="text-blue-500">.</span></div>
          <div className="flex gap-6 mb-16">
            <a href="https://linkedin.com/in/gashaw-developer" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800"><svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="https://github.com/gashaw27" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-slate-800 transition-all border border-slate-800"><svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            <a href="https://t.me/gaga2327" target="_blank" className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-sky-500 transition-all border border-slate-800"><svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-2.003 9.464c-.149.659-.541.823-1.091.515l-3.051-2.247-1.472 1.417c-.163.163-.3.299-.614.299l.219-3.107 5.655-5.108c.246-.219-.054-.341-.381-.123l-6.991 4.402-3.012-.942c-.655-.205-.668-.655.137-.969l11.771-4.535c.545-.205 1.022.122.842.928z"/></svg></a>
          </div>
          <a href="mailto:gashaw@gmail.com" className="text-slate-400 font-bold text-lg mb-10 hover:text-blue-500 transition-all underline decoration-blue-500/20 italic">gashaw@gmail.com</a>
          <p className="text-slate-800 font-black text-[9px] uppercase tracking-[0.5em]">{t.footer}</p>
        </div>
      </footer>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}
    </div>
  )
}

export default App
