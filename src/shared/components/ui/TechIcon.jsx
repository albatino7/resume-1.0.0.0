import React from 'react';

// Individual authentic SVGs
export const ReactIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#00d8ff" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="#00d8ff" />
  </svg>
);

export const HtmlIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#E34F26" d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" />
    <path fill="#EF652A" d="M12 3.6v16.7l5.9-1.5 1.3-15.2H12z" />
    <path fill="#ECECEC" d="M7 6.4h10l-.3 3.1h-6.4l.3 3.1h5.8l-.6 6.1-3.8 1-3.8-1-.3-3.1h2.5l.1 1.6 1.5.4 1.5-.4.2-2.1H6.7L7 6.4z" />
    <path fill="#FFFFFF" d="M12 6.4v3.1h4.7l-.3 3.1H12v3.1h2.2l-.2 2.1-2 .5V20l3.8-1 .6-6.1H12V6.4z" />
  </svg>
);

export const CssIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#1572B6" d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" />
    <path fill="#33A9DC" d="M12 3.6v16.7l5.9-1.5 1.3-15.2H12z" />
    <path fill="#ECECEC" d="M12 6.4H6.7l.3 3.1H12v-3.1zm0 6.2H9.2l-.2-2.1H6.7l.4 4.2H12v-2.1zm0 5.7l-3.8-1-.2-2.1H5.5l.4 4.1 6.1 1.6V18.3z" />
    <path fill="#FFFFFF" d="M12 6.4h5.3l-.3 3.1H12V6.4zm0 6.2h2.9l-.3 3.1-2.6.7V19l4.5-1.2.7-7.3H12v2.1z" />
  </svg>
);

export const JsIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="2" fill="#F7DF1E" />
    <path fill="#000000" d="M6.5 17.5c.5.8 1.3 1.3 2.5 1.3 1.4 0 2.3-.7 2.3-2.4v-7.2h-2.1v7.2c0 .6-.3.9-.8.9-.4 0-.7-.3-.9-.7l-1 .9zm8.2-.1c.6.9 1.7 1.4 3 1.4 1.8 0 3-1 3-2.6 0-1.7-1.1-2.3-2.5-2.9-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1.1 1.3-1.1.7 0 1.2.3 1.6.9l1.4-1c-.8-1.2-1.9-1.6-3-1.6-1.8 0-3 1.1-3 2.6 0 1.6 1 2.3 2.4 2.9.9.4 1.5.7 1.5 1.4 0 .7-.6 1.2-1.5 1.2-.9 0-1.5-.5-1.8-1.1l-1.5.8z" />
  </svg>
);

export const NodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#339933" d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" />
    <path fill="#FFFFFF" d="M12 4.4L5.2 8.3v7.8L12 20l6.8-3.9V8.3L12 4.4zm0 2.4l4.6 2.7v5.3L12 17.5l-4.6-2.7V9.5L12 6.8z" />
    <circle cx="12" cy="12" r="2.5" fill="#339933" />
  </svg>
);

export const ExpressIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#000000" />
    <text x="4" y="17" fill="#FFFFFF" fontFamily="sans-serif" fontSize="11" fontWeight="bold" letterSpacing="-0.5">ex</text>
    <path d="M17 9l3 6M20 9l-3 6" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const MongoIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#47A248" d="M12 2C10.5 4.5 7 9.8 7 14c0 3.3 2.2 6.5 5 7.9 2.8-1.4 5-4.6 5-7.9 0-4.2-3.5-9.5-5-12z" />
    <path fill="#499D4A" d="M12 2.2v19.7c.3-.1.7-.3 1-.5 2.5-1.4 4-4.2 4-7.4 0-4.2-3.5-9.5-5-11.8z" />
    <path fill="#FFFFFF" opacity="0.3" d="M12 4v16c-.2 0-.4-.1-.6-.2-2.3-1.3-3.6-3.8-3.6-6.6 0-3.6 2.9-7.8 4.2-9.2z" />
  </svg>
);

export const ReduxIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#764ABC">
    <path d="M16.5 13.5c-.8.8-1.9 1.3-3.1 1.3s-2.3-.5-3.1-1.3l-1.4 1.4c1.2 1.2 2.8 1.9 4.5 1.9s3.3-.7 4.5-1.9l-1.4-1.4zm2.1-5c-.4-.9-1-1.7-1.8-2.3l-1.2 1.6c.5.4.9.9 1.2 1.5.3.6.4 1.2.4 1.9 0 1.2-.5 2.3-1.3 3.1l1.4 1.4c1.2-1.2 1.9-2.8 1.9-4.5 0-1-.3-1.9-.6-2.7zm-9.8 1.5c.3-.6.7-1.1 1.2-1.5L8.8 6.9c-.8.6-1.4 1.4-1.8 2.3-.3.8-.5 1.7-.5 2.7 0 1.7.7 3.3 1.9 4.5l1.4-1.4c-.8-.8-1.3-1.9-1.3-3.1 0-.7.1-1.3.4-1.9z" />
    <circle cx="12" cy="11.5" r="2.2" />
  </svg>
);

export const TailwindIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
    <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C13.4 10.9 14.8 12 18 12c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C16.6 7.1 15.2 6 12 6zm-7 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C6.4 16.9 7.8 18 11 18c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C9.6 13.1 8.2 12 5 12z" />
  </svg>
);

export const BootstrapIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="5" fill="#7952B3" />
    <path fill="#FFFFFF" d="M8 6h4.5c1.8 0 3 .9 3 2.3 0 1-.6 1.7-1.5 2 1.2.3 1.8 1.2 1.8 2.3 0 1.6-1.3 2.6-3.3 2.6H8V6zm2.4 3.9h1.9c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-1.9v2zm0 3.3v2.1h2.1c.8 0 1.3-.4 1.3-1s-.5-1.1-1.3-1.1h-2.1z" />
  </svg>
);

export const GitIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#F05032" d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0L8.7 4.1l3.5 3.5c.8-.3 1.8 0 2.3.8.6.6.7 1.5.4 2.2l3.4 3.4c.7-.3 1.6-.2 2.2.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.5-.4-2.2L14 11.6v4.6c.3.2.5.6.5 1 0 .9-.8 1.7-1.7 1.7s-1.7-.8-1.7-1.7c0-.5.2-.9.5-1.2v-4.8c-.3-.2-.5-.6-.5-1 0-.6.3-1.1.8-1.4L8.4 5.3 2.4 11.3c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8-8c.8-.7.8-2 0-2.8z" />
  </svg>
);

export const WebRtcIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="8" r="4.5" fill="#3296C8" fillOpacity="0.8" />
    <circle cx="16" cy="8" r="4.5" fill="#EF5023" fillOpacity="0.8" />
    <circle cx="12" cy="15" r="4.5" fill="#78B928" fillOpacity="0.8" />
    <path d="M8 8l4 7m4-7l-4 7m-4-7h8" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
);

export const SocketIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#010101" />
    <path fill="#FFFFFF" d="M13.5 3.5L5.5 13h5l-1.5 7.5L18.5 11h-5l2-7.5z" />
  </svg>
);

export const JwtIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path fill="#FB015B" d="M12 3a9 9 0 0 0-7.8 4.5l3.9 2.3A4.5 4.5 0 0 1 12 7.5V3z" />
    <path fill="#D63AFF" d="M4.2 7.5a9 9 0 0 0 0 9l3.9-2.3a4.5 4.5 0 0 1 0-4.5L4.2 7.5z" />
    <path fill="#00B9F1" d="M4.2 16.5A9 9 0 0 0 12 21v-4.5a4.5 4.5 0 0 1-3.9-2.3l-3.9 2.3z" />
    <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
  </svg>
);

export const GoogleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h5.9c-.3 1.4-1.1 2.6-2.3 3.4l3.7 2.9c2.2-2 3.5-5 3.5-8.5z" />
    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.3 0-6.1-2.2-7.1-5.3L1.1 16c2 4 6.2 7 10.9 7z" />
    <path fill="#FBBC05" d="M4.9 13c-.3-.8-.4-1.6-.4-2.5s.1-1.7.4-2.5L1.1 5.1C.4 6.6 0 8.2 0 10.5s.4 3.9 1.1 5.4l3.8-2.9z" />
    <path fill="#EA4335" d="M12 4.7c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.1 3 1.1 7.1l3.8 2.9C5.9 6.9 8.7 4.7 12 4.7z" />
  </svg>
);

export const GsapIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#0AE448" />
    <text x="3" y="16" fill="#000000" fontFamily="sans-serif" fontSize="8.5" fontWeight="900" letterSpacing="-0.5">GSAP</text>
  </svg>
);

export const PostmanIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#FF6C37" />
    <path fill="#FFFFFF" d="M7 13.5l3.5 3.5c.3.3.8.3 1.1 0L17 11.6c.3-.3.3-.8 0-1.1l-3.5-3.5c-.3-.3-.8-.3-1.1 0L7 12.4c-.3.3-.3.8 0 1.1z" />
    <circle cx="15.5" cy="8.5" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const JestIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#C21325" />
    <path fill="#15C213" d="M12 4a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.7L12 12V4z" />
    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
  </svg>
);

export const VsCodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3" fill="#007ACC" />
    <path fill="#FFFFFF" d="M18.5 3.5L13.8 7l-5.6-4.5L5 4.3v15.4l3.2 1.8 5.6-4.5 4.7 3.5 1.5-.7V4.2l-1.5-.7zm-4.7 9l-4-3.1 4-3.1v6.2z" />
  </svg>
);

export const LinuxIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#FFD133" />
    <circle cx="9" cy="9.5" r="1.5" fill="#000000" />
    <circle cx="15" cy="9.5" r="1.5" fill="#000000" />
    <path d="M10 13c1 1 3 1 4 0" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="12" cy="17" rx="3" ry="1.5" fill="#FFA500" />
  </svg>
);

export const WindowsIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="3" y="3" width="8" height="8" fill="#F25022" />
    <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
    <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
    <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
  </svg>
);

export const WordPressIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#21759B" />
    <path fill="#FFFFFF" d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.9 2.6 6.6L8.8 7.3c0-.3.1-.5.3-.5.3 0 .5.3.6.8l3 8.8 1.8-5.3c.2-.5.3-.8.5-.8s.4.3.5.7l2.8 8c1.1-1.4 1.7-3.1 1.7-5 0-5.5-4.5-10-10-10zm-6.2 14.5L9.6 7.6 7 16.5zm8.4 0l-2.4-7 1.8 5.6c.2.6.4 1 .6 1.4z" />
  </svg>
);

export const RestApiIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3" fill="#0284C7" />
    <text x="2" y="16" fill="#FFFFFF" fontFamily="monospace" fontSize="8" fontWeight="bold">REST</text>
  </svg>
);

export const MotionIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
    <path d="M4 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" strokeLinecap="round" />
  </svg>
);

// Unified TechIcon resolver with smart pattern matching
export default function TechIcon({ name = '', className = "w-4 h-4" }) {
  const n = (name || '').toLowerCase().trim();

  if (n.includes('react')) return <ReactIcon className={className} />;
  if (n.includes('html')) return <HtmlIcon className={className} />;
  if (n.includes('css') && !n.includes('tailwind')) return <CssIcon className={className} />;
  if (n.includes('tailwind')) return <TailwindIcon className={className} />;
  if (n.includes('bootstrap')) return <BootstrapIcon className={className} />;
  if (n.includes('javascript') || n === 'js' || n.includes('es6')) return <JsIcon className={className} />;
  if (n.includes('node')) return <NodeIcon className={className} />;
  if (n.includes('express')) return <ExpressIcon className={className} />;
  if (n.includes('mongo')) return <MongoIcon className={className} />;
  if (n.includes('redux')) return <ReduxIcon className={className} />;
  if (n.includes('git') && !n.includes('hub')) return <GitIcon className={className} />;
  if (n.includes('github')) return <GitIcon className={className} />;
  if (n.includes('webrtc')) return <WebRtcIcon className={className} />;
  if (n.includes('socket')) return <SocketIcon className={className} />;
  if (n.includes('jwt') || n.includes('token')) return <JwtIcon className={className} />;
  if (n.includes('oauth') || n.includes('google') || n.includes('passport')) return <GoogleIcon className={className} />;
  if (n.includes('gsap') || n.includes('scrolltrigger')) return <GsapIcon className={className} />;
  if (n.includes('locomotive')) return <MotionIcon className={className} />;
  if (n.includes('postman')) return <PostmanIcon className={className} />;
  if (n.includes('jest') || n.includes('testing')) return <JestIcon className={className} />;
  if (n.includes('vscode') || n.includes('visual studio')) return <VsCodeIcon className={className} />;
  if (n.includes('linux')) return <LinuxIcon className={className} />;
  if (n.includes('window')) return <WindowsIcon className={className} />;
  if (n.includes('wordpress')) return <WordPressIcon className={className} />;
  if (n.includes('rest') || n.includes('api')) return <RestApiIcon className={className} />;

  // Default fallback code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
