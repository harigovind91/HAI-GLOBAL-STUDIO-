import { NextResponse } from 'next/server';
// हम सभी सर्विसेज़ को इम्पोर्ट कर रहे हैं
import * as services from '@/services';

export async function POST(req) {
    try {
        const { category, prompt } = await req.json();
        const catLower = category.toLowerCase();

        // आपका सीक्रेट राउटिंग मैप
        const serviceMap = {
            "accounting": services.accounting,
            "banking": services.banking,
            "agriculture": services.agriculture,
            "research": services.research,
            "mechanic": services.mechanic,
            "automobile": services.automobile,
            "ai/ml": services.aiml,
            "hosting": services.hosting,
            "software": services.software,
        };

        // राउटिंग लॉजिक: कैटेगरी मैच करो
        let targetService = serviceMap["software"]; // Default

        for (const key in serviceMap) {
            if (catLower.includes(key)) {
                targetService = serviceMap[key];
                break;
            }
        }

        // सर्विस को रन करें (हर सर्विस में एक run() फंक्शन होगा)
        const result = await targetService.run(prompt);
        return NextResponse.json({ result });

    } catch (error) {
        console.error("Engine Crash:", error);
        return NextResponse.json({ result: "HAI Engine Error: " + error.message }, { status: 500 });
    }
          }
                                  
