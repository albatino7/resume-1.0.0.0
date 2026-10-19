import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { toast } from 'sonner';
import {
  submitContactForm,
  resetContactStatus,
  selectContactStatus,
  selectContactSuccessMessage,
} from '../../features/contact/contactSlice';
import { resumeData } from '../../data/resumeData';
import { Button } from '../ui/Button';

export const ContactSection = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectContactStatus);
  const successMessage = useSelector(selectContactSuccessMessage);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [clientErrors, setClientErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (clientErrors[name]) {
      setClientErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setClientErrors(validationErrors);
      toast.error('Please fix the form errors before submitting.');
      return;
    }

    try {
      await dispatch(submitContactForm(formData)).unwrap();
      toast.success('Message received in demonstration queue!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setClientErrors({});
    } catch (err) {
      toast.error(err || 'Failed to dispatch message.');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopiedEmail(true);
    toast.success('Email copied: atuldemond@gmail.com');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.personal.phoneDisplay);
    setCopiedPhone(true);
    toast.success('Phone copied: 8651029001');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-neutral-800/60 dark:border-dark-border/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-0.5 bg-lime-accent"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
              05 // Direct Contact
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-100 tracking-tight">
            Let's build something remarkable together.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Whether you have a full-time engineering role, a technical consultation, or a high-impact
            contract project in mind, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border space-y-6">
              <h3 className="font-display font-bold text-xl text-neutral-100">
                Contact Details
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-lime-accent/10 text-lime-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${resumeData.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-200 hover:text-lime-accent transition-colors"
                    >
                      {resumeData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg text-neutral-400 hover:text-lime-accent hover:bg-neutral-800 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-lime-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy button */}
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-lime-accent/10 text-lime-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                      Mobile & WhatsApp
                    </span>
                    <a
                      href={`tel:${resumeData.personal.phoneDisplay}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-200 hover:text-lime-accent transition-colors"
                    >
                      +91 {resumeData.personal.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg text-neutral-400 hover:text-lime-accent hover:bg-neutral-800 transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-lime-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-300">
                  <MapPin className="w-4 h-4 text-lime-accent" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-200">
                    {resumeData.personal.address}
                  </span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                  Verified Online Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={resumeData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-lime-accent/40 flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-lime-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>albatino7</span>
                  </a>
                  <a
                    href={resumeData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-lime-accent/40 flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-lime-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>atuldemond</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-neutral-900/40 dark:bg-dark-card border border-neutral-800 dark:border-dark-border relative">
              <h3 className="font-display font-bold text-xl text-neutral-100 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Connected via Redux Toolkit <code className="text-lime-400 font-mono">createAsyncThunk</code>.
                Simulated async processing with client validation.
              </p>

              {/* Success Notification Box */}
              {status === 'succeeded' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Message simulation complete!</p>
                    <p className="text-emerald-400/90">{successMessage}</p>
                    <button
                      type="button"
                      onClick={() => dispatch(resetContactStatus())}
                      className="underline text-emerald-300 hover:text-white pt-1 block"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-neutral-300 block">
                      Your Name <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime-accent/60 transition-all ${
                        clientErrors.name ? 'border-red-500/60' : 'border-neutral-800'
                      }`}
                    />
                    {clientErrors.name && (
                      <p className="text-[11px] text-red-400">{clientErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-neutral-300 block">
                      Email Address <span className="text-lime-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime-accent/60 transition-all ${
                        clientErrors.email ? 'border-red-500/60' : 'border-neutral-800'
                      }`}
                    />
                    {clientErrors.email && (
                      <p className="text-[11px] text-red-400">{clientErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-neutral-300 block">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack MERN Position / Project Consultation"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime-accent/60 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-neutral-300 block">
                    Message <span className="text-lime-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or team goals..."
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime-accent/60 transition-all resize-y ${
                      clientErrors.message ? 'border-red-500/60' : 'border-neutral-800'
                    }`}
                  />
                  {clientErrors.message && (
                    <p className="text-[11px] text-red-400">{clientErrors.message}</p>
                  )}
                </div>

                {/* Submission CTA */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-neutral-400 font-mono">
                    <span className="text-lime-400">Response time:</span> Within 24 hours
                  </p>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'loading'}
                    icon={status === 'loading' ? Sparkles : Send}
                    className="sm:w-auto w-full"
                  >
                    {status === 'loading' ? 'Dispatching...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
