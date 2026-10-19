import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Circle } from 'lucide-react';
import { toast } from 'sonner';

const codeSnippets = {
  server: `// server/app.js - High-throughput Express Server
import express from 'express';
import { connectDB } from './config/db.js';
import { authRouter } from './routes/auth.js';
import { productRouter } from './routes/products.js';

const app = express();
await connectDB(); // MongoDB Atlas cluster connected

app.use(express.json());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);

app.listen(5000, () => {
  console.log('🚀 MERN Engine live on port 5000');
});`,

  redux: `// client/features/cart/cartSlice.js - Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const syncCart = createAsyncThunk(
  'cart/syncCart',
  async (items, { rejectWithValue }) => {
    const res = await api.post('/cart/sync', { items });
    return res.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(syncCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  }
});`,

  terminal: `> atul@demond-box:~/mern-workspace$ npm run status
✔ Node.js runtime: v20.x active
✔ MongoDB Atlas: replicaSet ready (primary)
✔ Redis Cache: LRU connected (sub-5ms)
✔ Client Hydration: React 18 + Redux Store initialized
✔ GSAP Animation Ticker: 60fps synchronized
✔ Build System: Vite HMR ready in 140ms
✦ Ready for production deployments.`
};

export const HeroTerminal = () => {
  const [activeTab, setActiveTab] = useState('server');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    toast.success('Snippet copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-neutral-800 dark:border-dark-border bg-[#0d100c] text-neutral-200 overflow-hidden shadow-2xl terminal-window">
      {/* Top title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131711] border-b border-neutral-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="ml-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-lime-accent" />
            atul-demond@fullstack-mern: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy snippet code"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-lime-accent hover:bg-neutral-800/50 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-lime-accent" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-neutral-800/60 bg-[#0e110c]/80 text-xs font-mono">
        <button
          type="button"
          onClick={() => setActiveTab('server')}
          className={`px-4 py-2 border-r border-neutral-800/60 transition-colors flex items-center gap-2 ${
            activeTab === 'server'
              ? 'text-lime-accent bg-[#151a13] border-b-2 border-b-lime-accent font-medium'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <span className="text-[10px] text-lime-400">JS</span>
          server.js
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('redux')}
          className={`px-4 py-2 border-r border-neutral-800/60 transition-colors flex items-center gap-2 ${
            activeTab === 'redux'
              ? 'text-lime-accent bg-[#151a13] border-b-2 border-b-lime-accent font-medium'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <span className="text-[10px] text-cyan-400">RTK</span>
          cartSlice.js
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('terminal')}
          className={`px-4 py-2 transition-colors flex items-center gap-2 ${
            activeTab === 'terminal'
              ? 'text-lime-accent bg-[#151a13] border-b-2 border-b-lime-accent font-medium'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          <Play className="w-3 h-3 text-lime-accent" />
          bash output
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-72">
        <pre className="text-neutral-300">
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 bg-[#121610] border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-lime-accent text-lime-accent animate-pulse" />
          <span className="text-neutral-300">Architecture: MERN + GSAP + RTK</span>
        </div>
        <span className="text-neutral-500">UTF-8 • LF</span>
      </div>
    </div>
  );
};
