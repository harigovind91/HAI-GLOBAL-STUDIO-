// src/app/page.js
"use client";
import { useState } from 'react';

export default function GalaxyHome() {
  const [lang, setLang] = useState('Hindi');

  return (
    <div className="bg-space-black text-neon-blue min-h-screen p-8">
      {/* Language Selector */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold tracking-widest">HAI GLOBAL</h1>
        <select 
          onChange={(e) => setLang(e.target.value)}
          className="bg-gray-900 border border-neon-blue rounded p-2"
        >
          <option value="Hindi">हिन्दी</option>
          <option value="English">English</option>
          <option value="Arabic">العربية</option>
          <option value="French">Français</option>
        </select>
      </nav>

      {/* AI Command Box */}
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-2xl shadow-neon">
          <p className="text-xl mb-4 italic">
            {lang === 'Hindi' ? "मालिक, आज क्या आदेश है?" : "Master, what is your command today?"}
          </p>
          <input 
            type="text" 
            placeholder="..." 
            className="w-full bg-black border-b-2 border-neon-blue p-3 outline-none"
          />
        </div>
      </div>
    </div>
  );
    }
            
