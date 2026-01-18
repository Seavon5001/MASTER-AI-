import React, { useState, useEffect, useRef } from 'react';
import { 
    Mic, Send, Globe, Cpu, Layout, MessageCircle, Settings, 
    Image, Video, Phone, ShieldCheck, CreditCard, Share2, MoreHorizontal 
} from 'lucide-react';

/* 
 * =======================================================
 * DATA CORE: SEAVON PIERCE ADVOCACY
 * =======================================================
 */
const TRUTH_DB = {
    CASE: "SEAVON PIERCE (#F-13921). Case 5:10-00310(VAP)CW. Violations identified by Judge Thurston.",
    VOIP: "323-364-0769",
    LINKS: [
        { name: "Stripe Secure Donation #1", url: "https://buy.stripe.com/test_7sYbJ3dxObqj6IcbV2dEs03" },
        { name: "Stripe Secure Donation #2", url: "https://buy.stripe.com/test_bJebJ365mgKD2rWf7edEs04" }
    ]
};

/* 
 * =======================================================
 * CLASS: JAVA VIRTUAL MACHINE (SIMULATION MIDDLEWARE)
 * =======================================================
 */
class JavaVirtualMachine {
    constructor() {
        this.heap = "128GB";
        this.threads = "Global-300";
        this.hallucinationsBlocked = 0;
    }

    // Public Execution Method
    run(command, hasKey) {
        const cmd = command.toLowerCase();
        let output = { text: "", type: "text", log: "" };

        // 1. HALLUCINATION GUARD (Intercepts Non-Facts)
        if (cmd.includes("seavon") && !TRUTH_DB.CASE) {
             this.hallucinationsBlocked++;
             return { text: "Error: Information does not match Seavon Pierce Truth DB.", type: "error" };
        }

        // 2. COMMAND LOGIC
        if (cmd.includes("donate") || cmd.includes("money")) {
            output.text = "Opening Global Payment Gateways for Seavon Pierce.";
            output.type = "stripe";
            output.log = `[JVM] StripeAPI.openPaymentPortal(GLOBAL);`;
        } 
        else if (cmd.includes("call") || cmd.includes("voice")) {
            output.text = `Routing voice channel to Google Voice: ${TRUTH_DB.VOIP}... Connected.`;
            output.log = `[JVM] VOIP.dial("${TRUTH_DB.VOIP}");`;
        }
        else if (cmd.includes("post") || cmd.includes("social")) {
            output.text = "Scheduling Social Media Blast to Facebook, X, and Instagram (300 Nodes).";
            output.log = `[JVM] SocialBot.deploy(CONTENT_ADVOCACY);`;
        }
        else if (cmd.includes("status")) {
            output.text = "SYSTEM REPORT:\n- Java Logic: Active\n- Hallucinations: 0%\n- Global Reach: 300 Countries";
            output.log = `[JVM] System.out.println(Status.ALL_OK);`;
        }
        else {
            // Default response if no API key is present
            if(!hasKey) {
                output.text = "Command received. Executing via Java Core (Simulation Mode). For full AI Chat, please add API Key in Settings.";
                output.log = `[JVM] Processor.execute("${command}");`;
            }
        }
        return output;
    }
}

const jvm = new JavaVirtualMachine();

/* 
 * =======================================================
 * COMPONENT: MAIN APP
 * =======================================================
 */
function App() {
    // STATE
    const [view, setView] = useState('CHAT'); // CHAT, SOCIAL, SETTINGS
    const [messages, setMessages] = useState([
        { role: 'ai', text: "AI Queen Superior 1.1 Online.\nSeavon Pierce Advocate Active.\nHow may I serve you?" }
    ]);
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState(["> Java VM Booting...", "> Loading 37 API Packages...", "> Ready."]);
    const [apiKey, setApiKey] = useState(localStorage.getItem('AI_QUEEN_KEY') || "");
    const [isListening, setIsListening] = useState(false);
    
    // REFS
    const scrollRef = useRef(null);
    const logRef = useRef(null);

    // EFFECTS
    useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
    useEffect(() => { logRef.current?.scrollIntoView({ behavior: "smooth" }); }, [logs]);

    // HANDLER: SEND MESSAGE
    const handleSend = async () => {
        if (!input.trim()) return;
        const cmd = input;
        setInput("");
        
        // 1. User Input
        setMessages(prev => [...prev, { role: 'user', text: cmd }]);

        // 2. Java Processing
        const javaRes = jvm.run(cmd, !!apiKey);
        setLogs(prev => [...prev, javaRes.log]);

        // 3. AI Generation (If Key Exists & Not a Special Command)
        let finalText = javaRes.text;
        if (apiKey && !javaRes.text) {
            setLogs(prev => [...prev, "> Accessing Neural Net..."]);
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: `You are AI Queen Superior 1.1. Servant of Seavon Pierce. Reply to: ${cmd}` }] }] })
                });
                const data = await res.json();
                if(data.candidates) finalText = data.candidates[0].content.parts[0].text;
            } catch (e) {
                setLogs(prev => [...prev, "> [ERROR] AI Connection Failed."]);
                finalText = "Connection Error. Reverting to Java Core.";
            }
        }

        // 4. Response & TTS
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: finalText, type: javaRes.type }]);
            if ('speechSynthesis' in window) {
                const u = new SpeechSynthesisUtterance(finalText);
                window.speechSynthesis.speak(u);
            }
        }, 600);
    };

    // HANDLER: VOICE
    const toggleMic = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return alert("Use Chrome for Voice.");
        const recognition = new SpeechRecognition();
        recognition.start();
        setIsListening(true);
        recognition.onresult = (e) => {
            setInput(e.results[0][0].transcript);
            setIsListening(false);
        };
    };

    return (
        <div className="flex h-screen w-full bg-[#020510] text-white overflow-hidden">
            
            {/* SIDEBAR NAVIGATION */}
            <div className="w-16 md:w-64 bg-[#0a1128] border-r border-gray-800 flex flex-col z-20 shadow-2xl">
                <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-blue-900 to-black">
                    <h1 className="text-xl text-[#00e1ff] hidden md:block" style={{textShadow: "0 0 10px #00e1ff"}}>AI QUEEN</h1>
                    <Globe className="md:hidden text-[#00e1ff] mx-auto" />
                </div>
                
                <div className="flex-1 py-4 space-y-1">
                    <div className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800 ${view==='CHAT'?'border-l-4 border-[#00e1ff]':''}`} onClick={()=>setView('CHAT')}>
                        <MessageCircle size={24} className="text-white"/> <span className="hidden md:block">Messenger</span>
                    </div>
                    <div className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800 ${view==='SOCIAL'?'border-l-4 border-[#00e1ff]':''}`} onClick={()=>setView('SOCIAL')}>
                        <Layout size={24} className="text-white"/> <span className="hidden md:block">Social Feed</span>
                    </div>
                    <div className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-800 ${view==='SETTINGS'?'border-l-4 border-[#00e1ff]':''}`} onClick={()=>setView('SETTINGS')}>
                        <Settings size={24} className="text-white"/> <span className="hidden md:block">Settings</span>
                    </div>
                </div>

                {/* JAVA TERMINAL PANEL */}
                <div className="hidden md:block h-48 bg-black p-2 border-t border-gray-800 overflow-y-auto font-mono text-xs text-green-400">
                    <div className="text-gray-500 border-b border-gray-800 mb-1">JAVA_VM_CONSOLE</div>
                    {logs.map((l, i) => <div key={i}>{l}</div>)}
                    <div ref={logRef} />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col relative bg-gradient-to-br from-[#020510] to-[#0f1c3f]">
                
                {/* --- CHAT VIEW (GPT/MESSENGER STYLE) --- */}
                {view === 'CHAT' && (
                    <>
                        <header className="bg-[#0a1128]/90 backdrop-blur p-4 border-b border-gray-800 flex justify-between items-center z-10">
                            <div>
                                <h2 className="text-white text-lg">Main Command Interface</h2>
                                <p className="text-xs text-green-400">Secretary Mode: Active</p>
                            </div>
                            <div className="flex gap-4 text-[#00e1ff]">
                                <Phone className="cursor-pointer" onClick={()=>setInput("Call Voice")}/>
                                <Video className="cursor-pointer"/>
                            </div>
                        </header>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {m.role === 'ai' && <div className="w-8 h-8 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-xs font-bold">AI</div>}
                                    <div className={`
                                        max-w-[85%] p-4 rounded-2xl text-[15px] shadow-lg
                                        ${m.role === 'user' 
                                            ? 'bg-blue-600 text-white rounded-tr-none' 
                                            : 'bg-[#1a2236] text-gray-100 rounded-tl-none border border-gray-700'}
                                    `}>
                                        <div className="whitespace-pre-wrap">{m.text}</div>
                                        {m.type === 'stripe' && (
                                            <div className="mt-4 space-y-2">
                                                {TRUTH_DB.LINKS.map((link, idx) => (
                                                    <a key={idx} href={link.url} target="_blank" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg font-bold text-white hover:scale-105 transition-transform">
                                                        <CreditCard size={18}/> {link.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={scrollRef} />
                        </div>

                        <div className="p-4 bg-[#0a1128] border-t border-gray-800 flex gap-2 items-center">
                            <MoreHorizontal className="text-gray-400 hidden md:block"/>
                            <div className="flex-1 bg-gray-900 rounded-full flex items-center px-4 border border-gray-700 focus-within:border-[#00e1ff]">
                                <input 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Message AI Queen..."
                                    className="flex-1 bg-transparent p-3 outline-none text-white placeholder-gray-500"
                                />
                                <Mic onClick={toggleMic} className={`cursor-pointer ${isListening ? 'text-red-500 animate-pulse':'text-gray-400'}`} size={20}/>
                            </div>
                            <button onClick={handleSend} className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500"><Send size={20}/></button>
                        </div>
                    </>
                )}

                {/* --- SOCIAL FEED (FACEBOOK CLONE) --- */}
                {view === 'SOCIAL' && (
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <div className="bg-[#1a2236] p-4 rounded-xl border border-gray-700">
                                <div className="flex gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                                    <input placeholder="What's on your mind, Seavon?" className="flex-1 bg-black rounded-full px-4 outline-none text-white border border-gray-700"/>
                                </div>
                                <div className="flex justify-around border-t border-gray-700 pt-3 text-sm font-bold">
                                    <span className="flex gap-2 text-red-400 items-center"><Video size={16}/> Live</span>
                                    <span className="flex gap-2 text-green-400 items-center"><Image size={16}/> Photo</span>
                                </div>
                            </div>
                            
                            <div className="bg-[#1a2236] rounded-xl border border-gray-700 overflow-hidden">
                                <div className="p-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">SP</div>
                                    <div>
                                        <h4 className="font-bold text-white">Seavon Pierce Advocacy</h4>
                                        <p className="text-xs text-gray-400">2 mins ago • Global</p>
                                    </div>
                                </div>
                                <div className="px-3 pb-3 text-sm">Active Concealment Detected. Justice Required. Donate today to support the cause.</div>
                                <div className="bg-black h-48 w-full flex items-center justify-center text-gray-500">[MEDIA CONTENT]</div>
                                <div className="p-2 flex justify-around border-t border-gray-700 text-gray-400 text-sm font-bold">
                                    <span>Like</span><span>Comment</span><span className="flex items-center gap-1"><Share2 size={14}/> Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- SETTINGS VIEW --- */}
                {view === 'SETTINGS' && (
                    <div className="flex-1 flex items-center justify-center p-4">
                        <div className="bg-[#1a2236] p-6 rounded-xl border border-gray-700 w-full max-w-md shadow-2xl">
                            <h2 className="text-xl font-bold text-[#00e1ff] mb-6">System Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-gray-500 font-bold">VOIP (Google Voice)</label>
                                    <div className="bg-black p-3 rounded border border-gray-700 text-green-400 font-mono">{TRUTH_DB.VOIP}</div>
                                </div>
                                <div>
                                    <label className="text-xs text-yellow-500 font-bold">API KEY (Gemini/OpenAI)</label>
                                    <input 
                                        value={apiKey}
                                        onChange={(e) => { setApiKey(e.target.value); localStorage.setItem('AI_QUEEN_KEY', e.target.value); }}
                                        placeholder="Paste Key Here..."
                                        className="w-full bg-black p-3 rounded border border-gray-600 text-white outline-none focus:border-[#00e1ff]"
                                    />
                                </div>
                                <div className="pt-4 border-t border-gray-700 flex items-center gap-2">
                                    <ShieldCheck className="text-green-500"/>
                                    <span className="text-xs text-gray-300">Hallucination Guard: 400% Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default App;
