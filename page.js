"use client";
import React, { useState } from 'react';

export default function HAIMainWebsite() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("नमस्ते मालिक! मैं HAI हूँ। आज आपका क्या आदेश है?");

  // मास्टर सिक्योरिटी की का इस्तेमाल यहाँ होगा
  const MASTER_KEY = "HAI_GLOBAL_ADMIN_2026";

  const handleAICommand = () => {
    // यहाँ हम आपके Backend API (main.py) से कनेक्ट करेंगे
    setResponse(`प्रोग्रेस में है... '${command}' का विश्लेषण किया जा रहा है।`);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-sans p-6 selection:bg-cyan-900">
      {/* Header Section */}
      <header className="flex justify-between items-center border-b border-cyan-900 pb-4">
        <h1 className="text-4xl font-black tracking-tighter">HAI GLOBAL <span className="text-xs text-white bg-red-600 px-2 rounded">LIVE</span></h1>
        <div className="text-right">
          <p className="text-xs text-gray-500">Master Key: Secured</p>
          <p className="text-sm font-bold text-white">All Countries Mode: ON</p>
        </div>
      </header>

      {/* Financial Pulse - Dashboard Grid */}
      <main className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 rounded-lg border border-cyan-800 hover:border-cyan-400 transition-all">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Accounting (P&L)</h3>
          <p className="text-3xl font-bold mt-2">₹0.00</p>
          <p className="text-xs text-green-500 mt-2">↑ Safe</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg border border-cyan-800">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Banking</h3>
          <p className="text-3xl font-bold mt-2">Secured</p>
          <p className="text-xs text-cyan-500 mt-2">Reconciliation Active</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg border border-cyan-800">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Agriculture</h3>
          <p className="text-3xl font-bold mt-2">Optimum</p>
          <p className="text-xs text-yellow-500 mt-2">Weather: Clear</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg border border-cyan-800">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest">Global GST</h3>
          <p className="text-3xl font-bold mt-2">Universal</p>
          <p className="text-xs text-blue-500 mt-2">All Countries Active</p>
        </div>
      </main>

      {/* The AI Command Center - Gemini 3 Interface */}
      <section className="mt-12 bg-zinc-900/50 p-8 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl mb-6 text-white font-light">{response}</h2>
          <div className="relative">
            <input 
              type="text" 
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="यहाँ टाइप करें (जैसे: 'मेरा लेजर दिखाओ' या 'Tax calculate करो')"
              className="w-full bg-black border-2 border-cyan-900 p-5 rounded-full text-xl outline-none focus:border-cyan-400 transition-all pr-20"
            />
            <button 
              onClick={handleAICommand}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-500 text-black font-bold p-3 rounded-full hover:bg-white transition-all"
            >
              🚀
            </button>
          </div>
        </div>
      </section>

      {/* Footer Status */}
      <footer className="fixed bottom-4 left-6 text-[10px] text-gray-700 uppercase tracking-widest">
        HAI Engine v3.0 | 2026 Admin Panel | Global Language Layer Active
      </footer>
    </div>
  );
    }
    
