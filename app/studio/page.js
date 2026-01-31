"use client";
import { useState } from 'react';

export default function AccountingStudio() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);

    const calculate = async () => {
        const res = await fetch('/api/generate_all', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category: "accounting", prompt })
        });
        const data = await res.json();
        setResult(data.result);
    };

    return (
        <div className="min-h-screen bg-black text-blue-400 p-5 font-mono">
            <h1 className="text-3xl font-bold mb-6 text-center tracking-widest">HAI ACCOUNTING CORE</h1>
            
            <div className="max-w-2xl mx-auto border border-blue-900 p-6 rounded-lg bg-gray-900/50">
                <textarea 
                    className="w-full bg-black border border-blue-500 p-4 text-white rounded mb-4 focus:outline-none focus:ring-2 ring-blue-400"
                    placeholder="Example: income 50000 expense 18000 gst 18"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button 
                    onClick={calculate}
                    className="w-full bg-blue-600 hover:bg-blue-400 text-white font-bold py-3 rounded transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                >
                    EXECUTE CALCULATION
                </button>

                {result && result.report && (
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {Object.entries(result.report).map(([key, val]) => (
                            <div key={key} className="border border-blue-800 p-3 rounded bg-black/80">
                                <p className="text-xs text-blue-300 uppercase">{key}</p>
                                <p className="text-xl font-bold text-white">{val}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
      }
      
