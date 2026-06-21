import React from 'react';

export default function AboutTab() {
  return (
    <div className="bg-cardBg p-8 rounded-3xl border border-zinc-900/80 shadow-2xl h-full animate-fadeIn flex flex-col justify-between">
      <div>
        <h3 className="text-accentOrange tracking-tight uppercase text-xs font-bold mb-4">About Me</h3>
        <p className="text-zinc-300 leading-relaxed text-base font-normal">
          I am a specialized Full Stack Developer focused heavily on combining standard MERN pipelines with robust intelligence layers. My passion lies in constructing clean APIs, configuring modular microservices, and developing user-centric interfaces.
        </p>

        {/* Key Competence Grid Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/40">
            <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-wider">Focus Areas</p>
            <p className="text-white text-xs font-semibold mt-1">MERN Stack & GenAI</p>
          </div>
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/40">
            <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-wider">Location Base</p>
            <p className="text-white text-xs font-semibold mt-1">Hyderabad, India</p>
          </div>
          <div className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/40 col-span-2 sm:col-span-1">
            <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-wider">Workflow</p>
            <p className="text-white text-xs font-semibold mt-1">Agile & CI/CD Clean Code</p>
          </div>
        </div>
      </div>

      {/* Experience Segment */}
      <div className="mt-8 border-t border-zinc-900 pt-6">
        <h4 className="text-[11px] font-bold uppercase text-zinc-500 tracking-widest mb-4">Professional Experience</h4>
        <div className="bg-zinc-900/30 p-5 rounded-2xl border border-zinc-800/30 hover:border-zinc-800 transition duration-300">
          
          {/* Header row containing title, company and date badge */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-zinc-900/40 mb-4">
            <div>
              <h5 className="font-bold text-white text-sm">Front End Web Development Intern</h5>
              <p className="text-xs text-zinc-400 mt-0.5">Edunet Foundation (AICTE & IBM SkillsBuild)</p>
            </div>
            <span className="text-[10px] px-3 py-1 rounded-full bg-zinc-900 text-accentOrange border border-zinc-800 font-semibold tracking-wider shrink-0">
              Aug 2025 - Sept 2025
            </span>
          </div>

          {/* Internship Description Points */}
          <ul className="space-y-2 text-xs text-zinc-400 font-normal list-none pl-0">
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-accentOrange  shrink-0">✦</span>
              Completed a 6-week structured internship focused on modern Front-End Web Development practices.
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-accentOrange  shrink-0">✦</span>
              Built responsive web interfaces using HTML, CSS, and JavaScript aligned with industry UI/UX standards.
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <span className="text-accentOrange shrink-0">✦</span>
              Strengthened frontend architecture understanding, debugging skills, and collaborative development workflows.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}