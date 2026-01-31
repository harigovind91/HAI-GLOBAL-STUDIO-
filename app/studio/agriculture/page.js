"use client";
import { useState } from 'react';

export default function AgriStudio() {
    const [prompt, setPrompt] = useState("");
    const [res, setRes] = useState(null);

    const getAdvice = async () => {
        const response = await fetch('/api/generate_all', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category: "agriculture", prompt })
        });
        const json = await response.json();
        setRes(json.result.data);
    };

    return (
        <div className="min-h-screen bg-[#0a110a] text-[#a8d5a2] p-6 font-sans">
            <h1 className="text-2xl font-black text-center mb-8 tracking-[10px] text-green-500 uppercase">
                HAI AGRI-CORE
            </h1>

            <div className="max-w-xl mx-auto space-y-6">
                <input 
                    className="w-full bg-[#121d12] border-2 border-green-900 p-4 rounded-xl focus:border-green-500 outline-none text-white shadow-inner"
                    placeholder="लिखें: crop wheat soil clay rainfall low"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                
                <button onClick={getAdvice} className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95">
                    GENERATE FARMING STRATEGY
                </button>

                {res && (
                    <div className="bg-[#121d12] border border-green-800 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex justify-between mb-4 border-b border-green-900 pb-2">
                            <span>🌾 {res["Detected Crop"]}</span>
                            <span>🌍 {res["Soil Type"]}</span>
                        </div>
                        <ul className="space-y-3">
                            {res["Expert Advice"].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-gold-500">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
      }
                      
