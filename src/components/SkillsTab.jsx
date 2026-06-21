import React, { useState } from 'react';
import { FaCode, FaTerminal, FaGraduationCap, FaAward, FaBookOpen } from 'react-icons/fa6';

export default function SkillsTab() {
  const [subTab, setSubTab] = useState('tech');

  const skillsData = {
    languages: ['JavaScript', 'Python', 'SQL'],
    frontend: ['React.js', 'HTML', 'CSS', 'TailwindCSS', 'Responsive UI Design'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Authentication Systems'],
    databases: ['MongoDB', 'MySQL', 'Firebase'],
    tools: ['Git', 'Postman', 'ImageKit', 'Kaggle', 'Gemini API']
  };

  return (
    <div className="bg-cardBg p-8 rounded-3xl border border-zinc-900/80 shadow-2xl h-full animate-fadeIn">
      
      {/* Subtab Navigation Pillbox */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-900 pb-5">
        {[
          { id: 'tech', label: 'Technical Skills', icon: FaCode },
          { id: 'education', label: 'Education', icon: FaGraduationCap },
          { id: 'courses', label: 'Certifications', icon: FaBookOpen },
          { id: 'achievements', label: 'Achievements', icon: FaAward }
        ].map((btn) => {
          const Icon = btn.icon;
          return (
            <button
              key={btn.id}
              onClick={() => setSubTab(btn.id)}
              className={`flex items-center gap-2 text-xs px-4 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                subTab === btn.id 
                  ? 'bg-accentOrange border-transparent text-white font-semibold shadow-md shadow-accentOrange/10' 
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Icon size={13} />
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Target Render Panels */}
      <div>
        {subTab === 'tech' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skillsData).map(([category, items]) => (
              <div key={category} className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-900/80">
                <h4 className="capitalize text-accentOrange text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                  <FaTerminal size={11} /> {category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-xl text-xs border border-zinc-800/60 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {subTab === 'education' && (
          <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-900/80 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Undergraduate Degree</span>
              <h4 className="text-base font-black text-white mt-1">B.Tech Artificial Intelligence & Data Science</h4>
              <p className="text-xs text-zinc-400 mt-1">Sri Indu College of Engineering and Technology</p>
              <p className="text-zinc-500 text-[11px] mt-2">Timeline: 2022 - 2026</p>
            </div>
            <div className="bg-zinc-900/80 px-5 py-3 rounded-2xl border border-zinc-800/80 text-left sm:text-right w-full sm:w-auto">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Aggregated Score</p>
              <p className="text-xl font-black text-white mt-0.5">8.30 <span className="text-xs text-zinc-500">/ 10.0 CGPA</span></p>
            </div>
          </div>
        )}

        {subTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Data Analytics (Grade A+)', provider: 'IBM SkillsBuild (ICT Academy)', date: 'Jan 2026', desc: 'Advanced program covering data cleaning, statistical analysis, and data insight interpretation patterns.' },
              { title: 'Web Development Fundamentals', provider: 'IBM', date: 'Aug 2025', desc: 'Validated core web architecture, structures, and foundational front-end methodologies.' },
              { title: '5-days Generative AI Intensive', provider: 'Kaggle', date: 'Apr 2025', desc: 'Deep dive into prompt engineering, LLM configurations, and building context-aware workflows.' },
              { title: 'Front-End Software Engineering Job Simulation', provider: 'Skyscanner (Forage)', date: 'Jul 2025', desc: 'Completed simulated tasks focused on real-world web application design and production UI workflows.' },
              { title: 'Software Engineering Job Simulation', provider: 'Accenture Nordics (Forage)', date: 'Jul 2025', desc: 'Practiced Agile & Waterfall methodologies alongside the Software Development Life Cycle (SDLC).' },
              { title: 'Programming Using Python & Machine Learning', provider: 'ISRO - Indian Space Research Organisation', date: 'Feb 2025', desc: 'Deepened data management structures and core mathematical algorithm implementations.' },
              { title: 'AI for Beginners', provider: 'HP LIFE', date: 'Feb 2025', desc: 'Explored initial frameworks of cognitive computation systems and simple machine learning tasks.' },
              { title: 'TCS-iON Career Edge - Young Professional', provider: 'TCS iON', date: 'Jul 2025', desc: 'Developed advanced soft skills, business presentation logic, and workspace collaboration mechanics.' }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-zinc-900/30 rounded-2xl border border-zinc-900/80 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h5 className="text-sm font-bold text-white tracking-tight leading-tight">{item.title}</h5>
                    <span className="text-[9px] font-mono shrink-0 text-accentOrange bg-accentOrange/10 border border-accentOrange/20 px-2 py-0.5 rounded-full">{item.date}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-medium tracking-wide uppercase mb-2">Issued by {item.provider}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {subTab === 'achievements' && (
          <div className="p-6 bg-zinc-900/30 rounded-2xl border border-zinc-900/80 max-w-3xl">
            <span className="text-[10px] bg-accentOrange/10 text-accentOrange px-2.5 py-1 rounded font-bold tracking-wider uppercase border border-accentOrange/20">Engineering Project Spotlight</span>
            <h4 className="text-base font-black text-white mt-3 mb-2">RFID-based Toll-Gate Automation System</h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">Led hardware-software component synchronization inside a 4-member sprint team to maximize simulation traffic throughput.</p>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2"> Designed automated platform processing 100% of testing toll scenarios.</li>
              <li className="flex items-center gap-2"> Achieved 90% simulation accuracy, minimizing bottlenecks.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}