"use client";
import { useState } from 'react';

export default function SoftwareStudio() {
    const [prompt, setPrompt] = useState("");
    const [data, setData] = useState(null);

    const generateBlueprint = async () => {
        const response = await fetch('/api/generate_all', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category: "software", prompt })
        });
        const json = await response.json();
        setData(json.result);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-[#00ff41] p-6 font-mono">
            <h1 className="text-2xl font-bold text-center mb-10 border-b border-[#00ff41] pb-4">
                {">"} HAI_SOFTWARE_ARCHITECT_V3
            </h1>

            <div className="max-w-3xl mx-auto">
                <div className="flex gap-2 mb-8">
                    <span className="text-xl">root@HAI:~$</span>
                    <input 
                        className="flex-1 bg-transparent border-none outline-none text-[#00ff41] caret-white"
                        placeholder="describe your project (e.g. android app)"
                        autoFocus
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && generateBlueprint()}
                    />
                </div>

                {data && (
                    <div className="border border-[#00ff41] p-6 bg-[#0a0a0a] shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                        <p className="mb-4 text-white font-bold underline">PROJECT TYPE: {data.type}</p>
                        
                        {data.files && (
                            <div className="mb-4">
                                <p className="text-gray-400 mb-2">// Initializing File Structure:</p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {data.files.map(f => <li key={f} className="text-sm">📁 {f}</li>)}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6 p-3 bg-[#00ff41] text-black font-bold text-center animate-pulse">
                            NEXT ACTION: {data.next_step || "Consulting HAI Core"}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
      }
      
