import React, { useState } from 'react';
import AboutTab from './components/AboutTab';
import SkillsTab from './components/SkillsTab';
import ProjectsTab from './components/ProjectsTab';
import ContactTab from './components/ContactTab';

import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaPhone, FaArrowRight, FaDownload } from 'react-icons/fa6';
import resumeFile from './assets/resume.pdf';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-darkBg text-white px-4 py-8 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-between selection:bg-accentOrange selection:text-white">

      {/* Premium Header Navbar */}
      <header className="flex flex-col sm:flex-row justify-between items-center max-w-6xl w-full mx-auto mb-12 gap-4">
        <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
          LOKESH<span className="text-accentOrange">.</span>
        </h1>
        <nav className="flex space-x-1 sm:space-x-2 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/60 backdrop-blur-md">
          {['about', 'skills', 'projects', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize transition-all duration-300 px-4 py-1.5 text-xs font-medium rounded-full cursor-pointer ${
                activeTab === tab
                  ? 'bg-zinc-800 text-white shadow-md shadow-black/40 border border-zinc-700/50'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setActiveTab('contact')}
          className="bg-cardBg border border-zinc-800/80 text-xs px-5 py-2 rounded-full hover:bg-cardHover hover:border-zinc-700 transition-all duration-300 cursor-pointer shadow-sm tracking-wide"
        >
          Let's Talk
        </button>
      </header>

      {/* Main Bento Grid Container */}
      <main className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto flex-grow">

        {/* Left Profile Card Block */}
        <div className="bg-cardBg p-8 rounded-3xl flex flex-col justify-between md:col-span-1 border border-zinc-900/80 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Available For Hire</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white">Manapati Lokesh</h2>
            <p className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mt-1">Full Stack / GenAI Developer</p>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-normal">
              Specializing in MERN stack and Python with strong backend architecture fundamentals. Experienced in building AI-powered platforms using Gemini API.
            </p>
          </div>
          <div className="mt-8 flex justify-between items-end">
            <a
              href={resumeFile}
              download="Manapati_Lokesh_Resume.pdf"
              className="inline-flex items-center gap-2.5 bg-zinc-800/90 text-xs px-5 py-3 rounded-full font-semibold border border-zinc-700/30 hover:bg-accentOrange hover:border-transparent transition-all duration-300 group cursor-pointer shadow-lg shadow-black/20"
            >
              <FaDownload className="group-hover:animate-bounce text-zinc-300 group-hover:text-white" />
              Download Resume
            </a>
            <div className="w-11 h-11 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 border border-zinc-800/80">
              <FaArrowRight className="-rotate-45" />
            </div>
          </div>
        </div>

        {/* Right Grid Area: Slogan Block & Instant Connect Grid */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">

          <a href="https://github.com/LokeshMudiraj" target="_blank" rel="noreferrer" className="bg-cardBg p-6 rounded-2xl flex items-center justify-center border border-zinc-900/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group shadow-lg">
            <FaGithub size={28} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </a>

          {/* Upgraded Native Anchor System combining clipboard logic with secure browser routing */}
          <a
            href="mailto:lokeshmudiraj222@gmail.com"
            onClick={() => {
              navigator.clipboard.writeText("lokeshmudiraj222@gmail.com");
              alert("Email address copied to clipboard!\nOpening your mail application now...");
            }}
            className="bg-cardBg p-6 rounded-2xl flex items-center justify-center border border-zinc-900/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group shadow-lg w-full cursor-pointer text-zinc-400 hover:text-white"
          >
            <FaRegEnvelope size={26} />
          </a>

          <a href="https://linkedin.com/in/manapati-lokesh" target="_blank" rel="noreferrer" className="bg-cardBg p-6 rounded-2xl flex items-center justify-center border border-zinc-900/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group shadow-lg">
            <FaLinkedinIn size={26} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </a>

          <a href="tel:+916302827494" className="bg-cardBg p-6 rounded-2xl flex items-center justify-center border border-zinc-900/80 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group shadow-lg">
            <FaPhone size={22} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </a>

          {/* Hero Accent Slogan Card */}
          <div className="col-span-2 sm:col-span-4 bg-cardBg p-8 rounded-3xl flex items-center justify-start border border-zinc-900/80 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-zinc-800">
            <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-accentOrange/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accentOrange/15 transition-all duration-500"></div>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-gradient-to-r from-white via-zinc-200 to-accentOrange bg-clip-text leading-tight">
              Building Skills<br />For Future.
            </h3>
          </div>
        </div>

        {/* Dynamic Inner Tab Router Container */}
        <div className="md:col-span-3 min-h-[420px] mt-2">
          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'skills' && <SkillsTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'contact' && <ContactTab />}
        </div>

      </main>

      {/* Modern Minimalistic Layout Footer */}
      <footer className="max-w-6xl w-full mx-auto mt-16 pt-8 border-t border-zinc-900/60 text-center text-xs text-zinc-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-bold text-zinc-400 text-sm tracking-tighter">LOKESH<span className="text-accentOrange">.</span></p>
        <p>© All rights reserved by Manapati Lokesh</p>
      </footer>
    </div>
  );
}

export default App;