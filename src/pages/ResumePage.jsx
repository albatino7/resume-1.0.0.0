import React from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { Github, Linkedin } from '../components/ui/Icons';
import { resumeData } from '../data/resumeData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { toast } from 'sonner';

export const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    toast.success('Downloading Atul Demond Resume PDF...');
  };

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Link to="/" className="hover:text-lime-accent">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-lime-accent">Curriculum Vitae</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            aria-label="Print resume"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all"
          >
            <Printer className="w-4 h-4 text-lime-accent" />
            <span>Print View</span>
          </button>

          <a
            href={resumeData.personal.pdfDownloadUrl}
            download="Atul_Demond_MERN_Resume.pdf"
            onClick={handleDownload}
          >
            <Button
              variant="primary"
              size="sm"
              icon={Download}
              className="text-xs font-semibold shadow-lime-glow"
            >
              Download PDF
            </Button>
          </a>
        </div>
      </div>

      {/* Styled Printable Resume Document */}
      <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border shadow-xl space-y-10 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
        {/* Document Header */}
        <div className="space-y-4 pb-8 border-b border-neutral-800 dark:border-dark-border print:border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 print:text-black">
                {resumeData.personal.name}
              </h1>
              <p className="text-base sm:text-lg text-lime-400 font-mono mt-1 font-semibold print:text-neutral-800">
                {resumeData.personal.role}
              </p>
            </div>
            <Badge variant="accent" size="md" className="print:hidden">
              {resumeData.personal.availability}
            </Badge>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-400 print:text-neutral-700">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-lime-accent print:text-black" />
              +91 {resumeData.personal.phoneDisplay}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-lime-accent print:text-black" />
              {resumeData.personal.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-lime-accent print:text-black" />
              {resumeData.personal.address}
            </span>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-lime-accent text-neutral-300 print:text-black"
            >
              <Github className="w-3.5 h-3.5" />
              github.com/albatino7
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-lime-accent text-neutral-300 print:text-black"
            >
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/atuldemond
            </a>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold print:text-black">
            // Professional Summary
          </h2>
          <p className="text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
            {resumeData.personal.summary}
          </p>
        </section>

        {/* Section: Technical Skills Matrix */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold print:text-black">
            // Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300">
              <span className="text-lime-400 print:text-black font-bold block mb-1.5">Frontend & Animation:</span>
              <p className="text-neutral-300 print:text-neutral-800">
                React 18/19, Redux Toolkit, JavaScript (ES6+), GSAP & ScrollTrigger, Locomotive Scroll,
                Tailwind CSS, HTML5, Modern CSS, Bootstrap.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300">
              <span className="text-lime-400 print:text-black font-bold block mb-1.5">Backend & Security:</span>
              <p className="text-neutral-300 print:text-neutral-800">
                Node.js, Express.js, RESTful APIs, WebSockets, WebRTC, Google OAuth, JWT Authentication,
                Passport.js, Rate Limiting.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300">
              <span className="text-lime-400 print:text-black font-bold block mb-1.5">Database & Storage:</span>
              <p className="text-neutral-300 print:text-neutral-800">
                MongoDB, Mongoose ODM, Schema Aggregation, Compound Indexing, Time-Series collections.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300">
              <span className="text-lime-400 print:text-black font-bold block mb-1.5">Tools, Testing & OS:</span>
              <p className="text-neutral-300 print:text-neutral-800">
                Git, GitHub, Postman, Jest (Unit & Integration), Vite, VS Code, Linux / Windows.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Professional Experience */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold print:text-black">
            // Professional Experience
          </h2>

          <div className="space-y-6">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-neutral-100 print:text-black">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-lime-400 print:text-neutral-800 font-semibold">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 print:text-neutral-600">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Production Domains Managed */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold print:text-black">
            // Extracurricular & Commercial Domains (2018 – 2023)
          </h2>
          <p className="text-xs text-neutral-400 print:text-neutral-700">
            Created, optimized, and migrated high-traffic commercial platforms with zero-downtime:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            {resumeData.freelanceDomains.map((dom) => (
              <div
                key={dom.name}
                className="p-3 rounded-lg bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300 text-xs font-mono"
              >
                <span className="font-semibold text-neutral-200 print:text-black block">{dom.name}</span>
                <span className="text-[10px] text-lime-400 print:text-neutral-700 block mt-0.5">{dom.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Education */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-lime-400 font-bold print:text-black">
            // Education & Academic Credentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-950/60 print:bg-neutral-100 border border-neutral-800/80 print:border-neutral-300 space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-lime-400 print:text-black font-semibold">{edu.period}</span>
                  <span className="text-neutral-400 print:text-neutral-600">{edu.status}</span>
                </div>
                <h3 className="text-sm font-bold text-neutral-100 print:text-black">{edu.degree}</h3>
                <p className="text-xs text-neutral-400 print:text-neutral-700">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA for recruiters */}
        <div className="p-6 rounded-2xl bg-lime-accent/10 border border-lime-accent/30 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div>
            <h3 className="font-display font-bold text-neutral-100">
              Interested in interviewing Atul Demond?
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Available immediately for MERN Stack Developer roles.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${resumeData.personal.email}`}>
              <Button variant="primary" size="sm" icon={Mail}>
                Email Atul
              </Button>
            </a>
            <a href={`tel:${resumeData.personal.phoneDisplay}`}>
              <Button variant="outline" size="sm" icon={Phone}>
                Call Directly
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
