import React, { useState } from 'react';
import {
  Globe,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Mail,
  MapPin,
  ChevronDown,
  Compass,
  Search,
  Code2,
  CheckSquare,
  Rocket,
  Send,
  FileText,
  X,
  Download
} from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormStatus('Message transmitted successfully! Will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(null), 6000);
    }, 1000);
  };

  const projects = [
    {
      id: '01',
      tag: 'PREDICTION ENGINE',
      title: 'AI-Powered IPL Match Outcome Predictor',
      description: 'End-to-end Machine Learning pipeline utilizing historical IPL telemetry, pitch factors, and situational statistics with an interactive analytical interface.',
      metrics: 'ACCURACY: 84.7%',
      tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-Learn'],
      codeUrl: 'https://github.com/Manoj4143/AIPL_2026_.git',
      liveUrl: 'https://aipl2026-mttwprjgaqwzusmkvafdy.streamlit.app/',
    },
    {
      id: '02',
      tag: 'FULL-STACK PLATFORM',
      title: 'College Complaint Management System',
      description: 'Comprehensive grievance escalation portal with role-based JWT authentication, automated departmental routing, and tracking analytics.',
      metrics: 'STATUS: PRODUCTION-READY',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      codeUrl: 'https://github.com/Manoj4143/COLLEGE_MANAGEMENT_SYSTEM',
      liveUrl: 'https://college-management-system-beta.vercel.app',
    },
    {
      id: '03',
      tag: 'INCENTIVE ARCHITECTURE',
      title: 'Perk Pulse Rewards Platform',
      description: 'Gamified digital reward distribution system engineered with milestone achievement tiers and real-time point ledger verification.',
      metrics: 'LEVEL 09 PROTOCOL',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'REST API'],
      codeUrl: 'https://github.com/Manoj4143',
      liveUrl: 'https://peak-pulse-rewards.lovable.app/',
    },
    {
      id: '04',
      tag: 'ASSESSMENT ENGINE',
      title: 'Online Examination & Assessment Portal',
      description: 'Dynamic timed test engine with anti-cheat state tracking, automated evaluation scoring, and percentile rank generation.',
      metrics: 'TIMER BENCHMARK',
      tech: ['Python', 'Database Engine', 'Tailwind', 'JavaScript'],
      codeUrl: 'https://github.com/Manoj4143',
      liveUrl: 'https://github.com/Manoj4143',
    },
    {
      id: '05',
      tag: 'SCHEDULING ALGORITHM',
      title: 'JGI Academic Timetable Generator',
      description: 'Algorithmic classroom, laboratory, and faculty scheduler eliminating room conflicts and maximizing campus space utilization.',
      metrics: 'ZERO CONFLICT MATRIX',
      tech: ['Full-Stack Web', 'Relational DB', 'Optimization'],
      codeUrl: 'https://github.com/Manoj4143/JGI-Time_table',
      liveUrl: 'https://jgi-manoj.freehosting.dev/',
    },
    {
      id: '06',
      tag: 'NEXT EXPERIMENT',
      title: 'Autonomous Multi-Agent RAG Pipeline',
      description: 'Agentic graph system built with LangGraph and hybrid vector embeddings for autonomous research synthesis and real-time knowledge retrieval.',
      metrics: 'ACTIVE DEVELOPMENT',
      tech: ['LangChain', 'LangGraph', 'Vector DB', 'Python'],
      codeUrl: 'https://github.com/Manoj4143/Agentic_RAg_dataset.git',
      liveUrl: 'https://github.com/Manoj4143/Agentic_RAg_dataset',
      highlight: true,
    }
  ];

  const skillGroups = [
    {
      num: '01',
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      num: '02',
      title: 'AI, Machine Learning & Automation',
      highlight: true,
      skills: [
        'Machine Learning Fundamentals',
        'Large Language Models (LLMs)',
        'RAG Architecture',
        'Prompt Engineering',
        'LangChain',
        'LangGraph',
        'AI Agent Workflows'
      ]
    },
    {
      num: '03',
      title: 'Web & Full-Stack Development',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'HTML5 / CSS3', 'REST APIs', 'JWT Auth']
    },
    {
      num: '04',
      title: 'Databases & Cloud Tools',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase', 'Git', 'GitHub', 'Streamlit', 'n8n', 'Make.com']
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'DISCOVER', icon: Compass, desc: 'Scope problem requirements, analyze user friction points, and formulate data-driven goals.' },
    { num: '02', title: 'RESEARCH', icon: Search, desc: 'Assess architectures, evaluate ML model weights, benchmark APIs, and define design systems.' },
    { num: '03', title: 'DEVELOP', icon: Code2, desc: 'Code robust frontends and scalable microservices paired with trained algorithmic logic.' },
    { num: '04', title: 'VALIDATE', icon: CheckSquare, desc: 'Rigorous unit testing, latency optimization, cross-browser validation, and security audits.' },
    { num: '05', title: 'DEPLOY', icon: Rocket, desc: 'Continuous integration, cloud telemetry monitoring, and iterative performance scaling.' }
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F5F5] font-sans selection:bg-[#C8102E] selection:text-white relative">
      {/* Background blueprint grid overlay */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070707]/80 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-[#5B0712]/50 border border-[#C8102E]/60 flex items-center justify-center font-mono font-bold text-[#C8102E] text-sm group-hover:scale-105 group-hover:border-[#C8102E] transition-all">
              KM
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl tracking-wide text-white leading-none">K. MANOJ</span>
              <span className="font-mono text-[10px] tracking-widest text-[#C8102E] uppercase">AI & ML ENGINEER</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-[#999]">
            <a href="#hero" className="hover:text-white transition-colors">01 // HERO</a>
            <a href="#projects" className="hover:text-white transition-colors">02 // PROJECTS</a>
            <a href="#skills" className="hover:text-white transition-colors">03 // SKILLS</a>
            <a href="#workflow" className="hover:text-white transition-colors">04 // PROCESS</a>
            <a href="#contact" className="hover:text-white transition-colors">05 // CONTACT</a>
          </div>

          <button
            onClick={() => setShowResumeModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#C8102E] text-white font-mono text-xs tracking-wider uppercase hover:bg-[#C8102E] transition-all duration-300 shadow-[0_0_15px_rgba(200,16,46,0.3)] hover:shadow-[0_0_25px_rgba(200,16,46,0.6)] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#C8102E] group-hover:text-white" />
            <span>Resume</span>
          </button>
        </div>
      </nav>

      {/* Hero Section — EXACT Match to user reference */}
      <section
        id="hero"
        className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden border-b border-[#202020] bg-crimson-vignette"
      >
        {/* Giant Watermark Typography "PORTFOLIO" spanning the background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <span className="hero-watermark-text text-[26vw] sm:text-[23vw] font-black uppercase tracking-tight text-center whitespace-nowrap opacity-90 transform -translate-y-4">
            PORTFOLIO
          </span>
        </div>

        {/* Ambient Dark Gradient Vignette Overlay to blend edges */}
        <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/70"></div>
        <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-[#070707] via-transparent to-[#070707]"></div>

        <div className="max-w-7xl w-full mx-auto px-6 py-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh]">
          
          {/* Left Column: Script Accent, Bold Name, Subtitle, Bio, Worldwide Badge */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 pt-6 lg:pt-0">
            {/* Script Text */}
            <div className="font-script text-3xl sm:text-4xl text-[#F0E6D2] font-semibold mb-1">
              Hello, I'm
            </div>

            {/* Giant Stacked Title */}
            <h1 className="font-bebas text-6xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.88] uppercase mb-4">
              K. MANOJ <br />
              <span className="text-[#F5F5F5]">KUMAR</span>
            </h1>

            {/* Sub-label in Crimson */}
            <h2 className="font-bebas tracking-wider text-xl sm:text-2xl text-[#C8102E] uppercase font-bold mb-4">
              AI & MACHINE LEARNING ENGINEER
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#A5A5A5] text-xs sm:text-sm leading-relaxed max-w-sm mb-8 font-sans">
              I design and engineer intelligent, user-focused digital systems that combine artificial intelligence with practical full-stack execution. Passionate about machine learning pipelines, intuitive interfaces, and high-impact digital solutions.
            </p>

            {/* "AVAILABLE WORLDWIDE" Status badge with Globe icon */}
            <div className="flex items-center gap-2.5 text-[#C8102E] font-mono text-[11px] tracking-widest uppercase">
              <div className="w-5 h-5 rounded-full border border-[#C8102E]/60 flex items-center justify-center bg-[#5B0712]/30">
                <Globe className="w-3 h-3 text-[#C8102E]" />
              </div>
              <span className="text-white/90 font-medium">AVAILABLE WORLDWIDE</span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-[#C8102E] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:shadow-[0_0_25px_rgba(200,16,46,0.8)] transition-all transform hover:-translate-y-0.5"
              >
                View Artifacts
              </a>
              <a
                href="mailto:manojkumar911088@gmail.com"
                className="px-6 py-3 border border-[#333] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:border-[#C8102E] transition-all"
              >
                Email Manoj
              </a>
            </div>
          </div>

          {/* Center Column: Portrait overlapping the giant "PORTFOLIO" typography */}
          <div className="lg:col-span-5 flex justify-center items-end order-1 lg:order-2 relative h-[520px] sm:h-[600px] lg:h-[680px]">
            {/* Crimson Radial Backlight glow specifically behind head */}
            <div className="absolute top-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C8102E]/40 blur-[80px] pointer-events-none"></div>

            {/* Image Container with Complete Arms, Sleeves & Suit */}
            <div className="relative w-full h-full flex items-end justify-center">
              <img
                src="/assets/manoj_portrait_complete_arms.png"
                alt="K Manoj - AI & Machine Learning Engineer"
                className="max-h-full w-auto object-contain object-bottom filter contrast-[1.05] brightness-[1.0] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] z-10"
              />
            </div>
          </div>

          {/* Right Column: Circular Star Quote Badge & 100% Client & Code Satisfaction */}
          <div className="lg:col-span-3 flex flex-col justify-center order-3 space-y-10 lg:pl-4">
            
            {/* Circular Spark/Star quote element */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-[#C8102E]" />
              </div>
              <p className="text-xs sm:text-sm text-[#A0A0A0] leading-snug">
                Turning ideas into powerful intelligent digital experiences.
              </p>
            </div>

            {/* Stats List */}
            <div className="pt-4">
              <div className="border-t border-[#252525] pt-5 flex items-baseline justify-between">
                <div className="font-bebas text-5xl sm:text-6xl text-[#C8102E] leading-none">
                  100<span className="text-2xl">%</span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-white font-bold">CLIENT & CODE</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[#777]">SATISFACTION</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll down prompt */}
        <a
          href="#projects"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#777] hover:text-[#C8102E] transition-colors z-20 font-mono text-[9px] tracking-widest uppercase"
        >
          <span>EXPLORE REPOSITORY</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#C8102E]" />
        </a>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-24 px-6 border-b border-[#222] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8102E] uppercase mb-2">
                <span className="w-2 h-2 bg-[#C8102E]"></span>
                <span>[ 02 // SELECTED ARTIFACTS ]</span>
              </div>
              <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
                PROVEN <span className="text-[#C8102E]">PROJECTS</span>
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#888] max-w-md">
              High-impact solutions spanning predictive machine learning models, enterprise portals, and autonomous LLM orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <article
                key={proj.id}
                className={`group relative bg-[#0b0b0b] border ${
                  proj.highlight ? 'border-[#C8102E]/60 bg-gradient-to-br from-[#180407] to-[#0a0a0a]' : 'border-[#222]'
                } rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#C8102E] transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between font-mono text-xs text-[#888] mb-4 border-b border-[#1c1c1c] pb-3">
                    <span className="text-[#C8102E] font-bold">{proj.id} // {proj.tag}</span>
                    <span className="text-[10px] bg-[#161616] px-2 py-0.5 rounded border border-[#262626]">{proj.metrics}</span>
                  </div>

                  <h3 className="font-bebas text-2xl tracking-wide text-white mb-3 group-hover:text-[#C8102E] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[#999] text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 font-mono text-[11px]">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-[#141414] border border-[#252525] text-[#ccc] rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#0e0e0e] border-t border-[#1f1f1f] flex items-center justify-between font-mono text-xs">
                  <a
                    href={proj.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#C8102E] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C8102E] hover:text-white transition-colors"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Arsenal Section */}
      <section id="skills" className="py-24 px-6 border-b border-[#222] relative z-10 bg-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8102E] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span>[ 03 // CAPABILITIES & EDUCATION ]</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
              TECHNICAL <span className="text-[#C8102E]">ARSENAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Academic & Internship */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[#0c0c0c] border border-[#222] rounded-sm relative group hover:border-[#C8102E]/60 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#C8102E]/20 border border-[#C8102E]/50 text-[#C8102E] font-mono text-[10px] font-bold rounded-sm">
                    BACHELOR OF ENGINEERING
                  </span>
                  <span className="font-mono text-xs text-[#777]">2024 — 2028</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wide text-white mb-1">
                  Artificial Intelligence & Machine Learning
                </h4>
                <p className="text-[#C8102E] font-mono text-xs mb-3">Jain Institute of Technology (JIT)</p>
                <div className="flex items-center gap-2 text-xs text-[#888] font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Davangere, Karnataka, India</span>
                </div>
                <p className="text-[#888] text-xs leading-relaxed border-t border-[#1f1f1f] pt-4">
                  Focused on deep learning models, stochastic processes, autonomous agents, and enterprise data architectures.
                </p>
              </div>

              <div className="p-6 bg-[#0c0c0c] border border-[#222] rounded-sm relative group hover:border-[#C8102E]/60 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#1a1a1a] border border-[#333] text-white font-mono text-[10px] font-bold rounded-sm">
                    INTERNSHIP EXPERIENCE
                  </span>
                  <span className="font-mono text-xs text-[#C8102E] font-bold">COMPLETED</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wide text-white mb-1">
                  Full Stack Developer Intern
                </h4>
                <p className="text-[#C8102E] font-mono text-xs mb-3">SkillNexGen</p>
                <p className="text-[#888] text-xs leading-relaxed">
                  Engineered modules for real-world software deployments, implemented responsive designs, and tested API logic.
                </p>
              </div>
            </div>

            {/* Right: Categorized Skill Chips */}
            <div className="lg:col-span-7 space-y-6">
              {skillGroups.map((group) => (
                <div
                  key={group.num}
                  className={`p-6 bg-[#0c0c0c] border ${
                    group.highlight ? 'border-[#C8102E]/50 bg-gradient-to-r from-[#140205] to-[#0c0c0c]' : 'border-[#222]'
                  } rounded-sm`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#C8102E]">// {group.num}</span>
                      <h4 className="font-bebas text-xl tracking-wider text-white uppercase">{group.title}</h4>
                    </div>
                    {group.highlight && (
                      <span className="font-mono text-[10px] text-[#C8102E] uppercase font-bold tracking-wider">
                        CORE SPECIALTY
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`font-mono text-xs px-3 py-1.5 rounded-sm border ${
                          group.highlight
                            ? 'bg-[#C8102E]/10 border-[#C8102E]/40 text-white'
                            : 'bg-[#141414] border-[#222] text-[#bbb]'
                        } hover:border-[#C8102E] hover:text-white transition-all`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Workflow (5 Phases) */}
      <section id="workflow" className="py-24 px-6 border-b border-[#222] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8102E] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span>[ 04 // SYSTEMATIC EXECUTION ]</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide uppercase">
              ENGINEERING <span className="text-[#C8102E]">WORKFLOW</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflowSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 bg-[#0c0c0c] border border-[#222] rounded-sm group hover:border-[#C8102E] transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#180407] border border-[#C8102E]/50 flex items-center justify-center font-mono text-[#C8102E] mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#C8102E] font-bold block mb-1">{step.num} / STEP</span>
                  <h3 className="font-bebas text-2xl tracking-wide text-white mb-2">{step.title}</h3>
                  <p className="text-[#888] text-xs leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8102E] uppercase mb-2">
              <span className="w-2 h-2 bg-[#C8102E]"></span>
              <span>[ 05 // INITIATE TRANSMISSION ]</span>
            </div>
            <h2 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              LET'S WORK <br />
              <span className="text-[#C8102E]">TOGETHER</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#888] max-w-xl mt-4">
              Available for AI/ML engineering internships, research development, and production applications. Let's build.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:manojkumar911088@gmail.com"
                className="flex items-center justify-between p-5 bg-[#0c0c0c] border border-[#222] rounded-sm hover:border-[#C8102E] hover:bg-[#120406] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#180407] border border-[#333] flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#777] uppercase block">DIRECT EMAIL</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-semibold">manojkumar911088@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#C8102E] transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/k-manoj4143"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-[#0c0c0c] border border-[#222] rounded-sm hover:border-[#C8102E] hover:bg-[#120406] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#180407] border border-[#333] flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#777] uppercase block">LINKEDIN PROFILE</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-semibold">linkedin.com/in/k-manoj4143</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#C8102E] transition-colors" />
              </a>

              <a
                href="https://github.com/Manoj4143"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-[#0c0c0c] border border-[#222] rounded-sm hover:border-[#C8102E] hover:bg-[#120406] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#180407] border border-[#333] flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#777] uppercase block">GITHUB REPOSITORY</span>
                    <span className="font-mono text-xs sm:text-sm text-white font-semibold">github.com/Manoj4143</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#C8102E] transition-colors" />
              </a>

              <div className="p-5 bg-[#0c0c0c] border border-[#222] rounded-sm flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#180407] border border-[#333] flex items-center justify-center text-[#C8102E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#777] uppercase block">LOCATION</span>
                  <span className="font-mono text-xs text-white font-semibold">Karnataka, India // IST (UTC+05:30)</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#0b0b0b] border border-[#222] p-8 sm:p-10 rounded-sm">
              <span className="font-mono text-[10px] tracking-widest text-[#C8102E] uppercase block mb-2">
                // TRANSMIT MESSAGE
              </span>
              <h3 className="font-bebas text-3xl text-white uppercase mb-6">Send an Inquiry</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-[#888] uppercase mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className="w-full bg-[#111] border border-[#222] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#888] uppercase mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#111] border border-[#222] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#888] uppercase mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Engineering Collaboration"
                    className="w-full bg-[#111] border border-[#222] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#888] uppercase mb-2">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project details or collaboration goals..."
                    className="w-full bg-[#111] border border-[#222] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#C8102E] text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_25px_rgba(200,16,46,0.8)] transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>Dispatch Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {formStatus && (
                  <div className="p-4 rounded-sm text-xs font-mono text-center border border-emerald-500/50 bg-emerald-950/40 text-emerald-400">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
          {/* Footer Bar */}
          <footer className="mt-24 pt-8 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#666]">
            <div>
              Copyright © {new Date().getFullYear()} K Manoj. Built with React & Tailwind CSS.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[#C8102E]">// AIML // JIT '28</span>
              <a href="#hero" className="hover:text-white transition-colors">
                Back to top ↑
              </a>
            </div>
          </footer>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0c0c] border border-[#C8102E]/60 rounded-sm shadow-[0_0_50px_rgba(200,16,46,0.25)] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#111] border-b border-[#252525] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#C8102E]" />
                <div>
                  <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">K MANOJ // CURRICULUM VITAE</h3>
                  <p className="font-mono text-[10px] text-[#888] tracking-widest uppercase">Verified Academic & Engineering Document</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/assets/K_Manoj_Resume.pdf"
                  download="K_Manoj_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C8102E] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:shadow-[0_0_15px_rgba(200,16,46,0.6)] transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 text-[#888] hover:text-white hover:bg-[#1a1a1a] rounded-sm transition-colors cursor-pointer"
                  aria-label="Close resume modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content: Faithful Replica of Resume document */}
            <div className="p-6 sm:p-10 overflow-y-auto bg-white text-black font-sans text-xs leading-relaxed selection:bg-[#C8102E] selection:text-white">
              
              {/* Header */}
              <div className="text-center pb-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-1">K MANOJ</h1>
                <p className="text-xs text-gray-700 flex flex-wrap justify-center gap-2 font-normal">
                  <span>Davanagere, Karnataka</span>
                  <span>|</span>
                  <span>9110884143</span>
                  <span>|</span>
                  <a href="mailto:manojkumar911088@gmail.com" className="text-blue-600 hover:underline">manojkumar911088@gmail.com</a>
                  <span>|</span>
                  <a href="https://profolio-kmanoj.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">profolio-kmanoj.vercel.app/</a>
                </p>
              </div>

              {/* SUMMARY */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">SUMMARY</h2>
                <p className="text-xs text-gray-800 leading-normal">
                  AIML engineering student with hands-on experience building AI, web, and database projects. Skilled in Python, JavaScript, SQL, and modern web technologies, with strong problem-solving and teamwork abilities.
                </p>
              </div>

              {/* EDUCATION */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">EDUCATION</h2>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-xs text-black">B.E. in Artificial Intelligence and Machine Learning</span>
                  <span className="font-bold text-xs text-black">09/2024 - Present</span>
                </div>
                <div className="text-xs text-gray-700 italic">
                  Jain Institute of Technology, Davanagere <span className="font-bold not-italic text-black">| GPA: 8.41/10</span>
                </div>
              </div>

              {/* SKILLS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">SKILLS</h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-800">
                  <li><strong className="text-black">Programming:</strong> Python, JavaScript, SQL.</li>
                  <li><strong className="text-black">Web:</strong> HTML5, CSS3, REST APIs, React.</li>
                  <li><strong className="text-black">Database:</strong> MySQL, MongoDB, PostgreSQL.</li>
                  <li><strong className="text-black">Tools & AI:</strong> Git, GitHub, Machine Learning, Prompt Engineering, LangChain, LangGraph.</li>
                </ul>
              </div>

              {/* PROJECTS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">PROJECTS</h2>
                
                {/* Project 1 */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs text-black">Automated Timetable Generator</span>
                    <span className="font-bold text-xs text-black">09/2026 - 09/2026</span>
                  </div>
                  <div className="text-[11px] text-gray-700 mb-1 space-x-3">
                    <span><strong>GIT :</strong> <a href="https://github.com/Manoj4143/JGI-Time_table" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/Manoj4143/JGI-Time_table</a></span>
                    <span><strong>DEPLOYED LINK:</strong> <a href="https://jgi-manoj.freehosting.dev" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">jgi-manoj.freehosting.dev</a></span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-800">
                    <li>Developed a web-based scheduling system using PHP, MySQL, HTML, CSS, and JavaScript.</li>
                    <li>Generated clash-free schedules using faculty availability, classroom allocation, and student timetable constraints.</li>
                    <li>Implemented role-based access for administrators and faculty, plus timetable change request and approval workflows.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs text-black">Online Quiz System</span>
                    <span className="font-bold text-xs text-black">04/2026 - 04/2026</span>
                  </div>
                  <div className="text-[11px] text-gray-700 mb-1">
                    <span><strong>GIT:</strong> <a href="https://github.com/Manoj4143/online_quiz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/Manoj4143/online_quiz</a></span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-800">
                    <li>Built a Python and MySQL quiz application for questions, answer options, user scores, and leaderboard results.</li>
                    <li>Implemented database initialization, answer validation, score storage, and result display.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-xs text-black">College Complaint Management System</span>
                  </div>
                  <div className="text-[11px] text-gray-700 mb-1 space-x-3">
                    <span><strong>GIT:</strong> <a href="https://github.com/Manoj4143/COLLEGE_MANAGEMENT_SYSTEM" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/Manoj4143/COLLEGE_MANAGEMENT_SYSTEM</a></span>
                    <span><strong>DEPLOYED LINK:</strong> <a href="https://college-management-system-beta.vercel.app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">college-management-system-beta.vercel.app</a></span>
                  </div>
                  <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-800">
                    <li>Built a full-stack platform for submitting, tracking, and resolving campus complaints across departments.</li>
                    <li>Developed React and Vite frontend with Node.js, Express, and MongoDB backend; added JWT authentication and role-based access control.</li>
                    <li>Implemented complaint status tracking, comments, image uploads, and deployment using Vercel and Render.</li>
                  </ul>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">CERTIFICATIONS</h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-800">
                  <li>Introduction to Artificial Intelligence - LinkedIn Learning</li>
                  <li>Career Essentials in Generative AI - LinkedIn Learning</li>
                  <li>Introduction to Databases</li>
                </ul>
              </div>

              {/* VOLUNTEERING AND LEADERSHIP */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-black pb-0.5 border-b border-black mb-1.5">VOLUNTEERING AND LEADERSHIP</h2>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-xs text-black">Emerge - Jain Institute of Technology, Davanagere, Karnataka</span>
                  <span className="font-bold text-xs text-black">02/2026 - 03/2026</span>
                </div>
                <div className="text-xs text-gray-700 italic mb-1">Volunteer</div>
                <ul className="list-disc pl-5 space-y-0.5 text-xs text-gray-800">
                  <li>Supported event coordination and participant assistance during a college event.</li>
                  <li>Worked with fellow volunteers to support event activities and a positive attendee experience.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
