"use client";
import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Copy, Check } from "lucide-react";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: "sys", content: "Mohtashim Javed Developer Environment [Shell v2.4.0]" },
    { type: "sys", content: "Type 'help' or select a command below to explore system details." },
  ]);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", content: `$ ${cmdStr}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "out",
          content: `Commands:
  • help       : Display system command references
  • bio        : Read engineering profile and core stack
  • skills     : View technical skills summary
  • projects   : View catalog of featured works
  • contact    : Access direct communication channels
  • clear      : Clear shell output screen`,
        });
        break;

      case "bio":
      case "about":
        newHistory.push({
          type: "out",
          content: `Engineer    : Mohtashim Javed
Title       : Full Stack Developer & Mobile Engineer
Experience  : 1+ Years of Production Experience
Specialty   : MERN Stack (MongoDB, Express, React, Node.js), Next.js, React Native
Principles  : Scalable architecture, clean code standards, high performance`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "out",
          content: `TECHNICAL STACK MATRIX:
Frontend : React 19, Next.js 16, Tailwind CSS, Three.js, Framer Motion
Backend  : Node.js, Express.js, RESTful Architecture, GraphQL, JWT
Database : MongoDB, Supabase, PostgreSQL, Redis
Mobile   : React Native, Expo Toolchain (iOS & Android)
DevOps   : Git, GitHub Actions, Vercel, Docker, Netlify`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "out",
          content: `FEATURED ENGINEERING WORKS:
1. NexusTrade Platform (Full-Stack Enterprise Inventory System)
2. Helplytics (Collaborative Developer Knowledge Platform)
3. 3D Portfolio Platform (Modern Interactive Web Architecture)
4. Arena Quiz Platform (Real-time Supabase Database Engine)`,
        });
        break;

      case "contact":
      case "hire":
        newHistory.push({
          type: "out",
          content: `COMMUNICATION CHANNELS:
Email    : hafizmohtashim3157@gmail.com
Phone    : +92 317 4159475
Location : Karachi, Pakistan (GMT+5)
GitHub   : github.com/mohtashimjaved
LinkedIn : linkedin.com/in/mohtashim-javed-49917a352`,
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "err",
          content: `Command not found: '${cmd}'. Type 'help' for valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const copyTerminalLog = () => {
    const logText = history.map((h) => h.content).join("\n");
    navigator.clipboard.writeText(logText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#090c13] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0e121a] border-b border-white/8 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="ml-1 sm:ml-2 text-slate-400 font-mono text-[10px] sm:text-[11px] flex items-center gap-1.5 truncate">
            <TerminalIcon size={12} className="text-slate-300 shrink-0" />
            <span className="truncate">mohtashim@terminal:~/portfolio</span>
          </span>
        </div>

        <button
          onClick={copyTerminalLog}
          className="text-[10px] sm:text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded bg-white/5 border border-white/10 shrink-0"
        >
          {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Body */}
      <div
        ref={terminalBodyRef}
        className="p-5 h-64 overflow-y-auto space-y-2.5 font-mono leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {item.type === "sys" && <span className="text-slate-400">{item.content}</span>}
            {item.type === "user" && <span className="text-white font-medium">{item.content}</span>}
            {item.type === "out" && <span className="text-slate-300">{item.content}</span>}
            {item.type === "err" && <span className="text-rose-400">{item.content}</span>}
          </div>
        ))}
      </div>

      {/* Quick suggestions */}
      <div className="px-4 py-2 bg-[#0b0f17] border-t border-white/5 flex flex-wrap gap-1.5 text-[11px]">
        <span className="text-slate-500 py-0.5">Quick Run:</span>
        {["help", "bio", "skills", "projects", "contact", "clear"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={(e) => { e.preventDefault(); handleCommand(c); }}
            className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={onSubmit} className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0d14] border-t border-white/8">
        <span className="text-slate-400 font-mono">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help' or 'skills'..."
          className="flex-grow bg-transparent text-white focus:outline-none font-mono text-xs placeholder-slate-600"
        />
      </form>
    </div>
  );
}
