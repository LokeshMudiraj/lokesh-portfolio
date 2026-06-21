import React from 'react';
import { 
  FaLaptopCode, FaServer, FaPlaneDeparture, 
  FaArrowUpRightFromSquare, FaCartShopping, FaShieldHalved 
} from 'react-icons/fa6';

export default function ProjectsTab() {
  const projects = [
    {
      title: 'SmartPrep AI Practice Hub',
      tech: ['React.js', 'Firebase', 'Clerk Auth', 'ShadCN UI', 'Gemini API'],
      desc: 'Designed and developed a full-stack AI-powered mock interview platform with secure authentication and real-time interview session management. Integrated webcam recording, speech-to-text processing, and AI-generated feedback workflows using prompt engineering and Gemini API.',
      icon: FaLaptopCode,
      link: 'https://smartperp-a95a9.web.app/' // Replace with your actual link
    },
    {
      title: 'PublishNow AI CMS Platform',
      tech: ['MERN Stack', 'JWT Security', 'Google APIs', 'ImageKit'],
      desc: 'Developed a scalable blogging platform with JWT-secured authentication, admin dashboard, and RESTful backend APIs. Integrated AI-assisted content generation and media optimization features to streamline content creation workflows.',
      icon: FaServer,
      link: 'https://publish-now.vercel.app/' // Replace with your actual link
    },
     {
      title: 'AI Generative Travel Planner',
      tech: ['Python', 'Gemini API', 'Prompt Engineering'],
      desc: 'Built a Generative AI travel planner that creates personalized itineraries based on user preferences and travel requirements. Integrated Gemini API and prompt engineering techniques to generate recommendations for destinations, hotels, and local attractions.',
      icon: FaPlaneDeparture,
      link: 'https://www.kaggle.com/code/manapatilokesh/ai-travel-assistant-gen-ai-capstone' // Replace with your actual link
    },
     {
      title: 'Secure Password Manager',
      tech: ['React.js', 'TailwindCSS', 'Local Storage'],
      desc: 'Privacy-centric storage vault prioritizing swift credential organization lookup loops, quick data protection components, and minimalistic layout utility states.',
      icon: FaShieldHalved,
      link: 'https://github.com/LokeshMudiraj/password_generator' // Replace with your actual link
    },
    {
      title: 'E-Commerce Product Showcase',
      tech: ['React.js', 'TailwindCSS', 'Context API'],
      desc: 'Interactive application featuring responsive bento-inspired product layouts, fast client-side product searching filters, individual card view parameters, and live item counter cart states.',
      icon: FaCartShopping,
      link: 'https://github.com/LokeshMudiraj/E-Commerce-Product-Showcase' // Replace with your actual link
    },
   
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
      {projects.map((project, index) => {
        const IconComponent = project.icon;
        return (
          <div key={index} className="bg-cardBg p-6 rounded-3xl border border-zinc-900/80 flex flex-col justify-between hover:border-zinc-700/80 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-zinc-900 flex items-center justify-center text-accentOrange border border-zinc-800/80 mb-5 group-hover:scale-110 transition duration-300">
                <IconComponent size={18} />
              </div>
              <h4 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-accentOrange transition-colors duration-300">{project.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-5 mb-4 font-normal">{project.desc}</p>
              
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-zinc-900/80 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-800/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Transformed into a clean semantic <a> link element */}
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center mt-6 py-2.5 rounded-xl bg-zinc-900 text-xs font-semibold text-zinc-300 hover:bg-accentOrange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-zinc-800/60 hover:border-transparent decoration-none"
            >
              View Project <FaArrowUpRightFromSquare size={10} />
            </a>
          </div>
        );
      })}
    </div>
  );
}