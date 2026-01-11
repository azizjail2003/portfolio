import { motion } from 'framer-motion';
import { Terminal, Code, FileJson, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { API_HIGHLIGHTS } from '../constants/endpoints';

// Reusable Code Block Component
const CodeBlock = ({ code, language = 'php' }: { code: string, language?: string }) => (
    <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/10 font-mono text-xs my-4 shadow-lg">
        <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/5">
            <span className="text-white/40">{language}</span>
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="text-blue-100">
                <code>{code}</code>
            </pre>
        </div>
    </div>
);

// Reusable Endpoint Display
const Endpoint = ({ method, path }: { method: string, path: string }) => (
    <div className="flex items-center gap-3 font-mono text-sm bg-muted/30 p-2 rounded-md border border-border">
        <span className={`px-2 py-0.5 rounded text-xs font-bold ${method === 'POST' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'}`}>
            {method}
        </span>
        <span className="text-muted-foreground">{path}</span>
    </div>
);

export default function ApiHighlights() {
    const [activeTab, setActiveTab] = useState(0);
    const highlights = API_HIGHLIGHTS;

    useEffect(() => {
        const handleNavigation = (e: CustomEvent) => {
            if (e.detail && typeof e.detail.index === 'number') {
                setActiveTab(e.detail.index);
            }
        };

        window.addEventListener('navigate-to-endpoint', handleNavigation as EventListener);
        return () => window.removeEventListener('navigate-to-endpoint', handleNavigation as EventListener);
    }, []);

    return (
        <section id="api-highlights" className="py-20 px-6 border-b border-border bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Terminal className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">API Highlights</h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Backend APIs built for fintech and public investment platforms,
                        combining financial modeling, decision logic, and production-ready implementation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar / Tabs */}
                    <div className="lg:col-span-4 space-y-2">
                        {highlights.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 group ${activeTab === index
                                    ? 'bg-primary/10 border-primary shadow-sm'
                                    : 'bg-muted/20 border-border hover:bg-muted/40'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-sm font-bold font-mono ${activeTab === index ? 'text-primary' : 'text-muted-foreground'}`}>
                                        {`0${index + 1}`}
                                    </span>
                                    {activeTab === index && <ArrowRight className="w-4 h-4 text-primary" />}
                                </div>
                                <h3 className={`font-semibold ${activeTab === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                    {item.title}
                                </h3>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        {highlights.map((item, index) => (
                            activeTab === index && (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <Endpoint method={item.endpoint.method} path={item.endpoint.path} />
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Code Snippets Grid */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Code className="w-4 h-4" /> Logic (PHP/Laravel)
                                            </div>
                                            <CodeBlock code={item.code} />
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <FileJson className="w-4 h-4" /> Request
                                                </div>
                                                <CodeBlock code={item.jsonRequest} language="json" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <FileJson className="w-4 h-4" /> Response
                                                </div>
                                                <CodeBlock code={item.jsonResponse} language="json" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Key Points */}
                                    <div className="bg-muted/30 rounded-xl p-6 border border-border">
                                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Key Design Decisions
                                        </h4>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {item.points.map((point, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
