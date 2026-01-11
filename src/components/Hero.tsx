import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import SkillsRadar from './SkillsRadar';

export default function Hero() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                timeZone: 'Africa/Casablanca',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-8 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Rabat, Morocco 🇲🇦 — {time}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
                        style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}
                    >
                        Hey, I am <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-gradient">
                            Abdelaziz Jail.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative border-l-2 border-primary/50 pl-6 space-y-4"
                    >
                        <h2 className="text-xl md:text-2xl font-light text-foreground/80">
                            Backend Software Engineer aspiring to specialize in <br className="hidden md:block" />
                            <span className="font-medium text-foreground">Artificial Intelligence</span> and <span className="font-medium text-foreground">Intelligent Systems</span>.
                        </h2>
                        <p className="text-muted-foreground max-w-lg">
                            Designing scalable APIs, AI-powered workflows, and data-driven applications for fintech and healthcare.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-medium shadow-lg shadow-primary/25 transition-shadow"
                        >
                            <FileDown className="w-4 h-4 mr-2" />
                            Download CV
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, borderColor: "rgb(59, 130, 246)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-border bg-background hover:bg-muted/50 transition-all"
                        >
                            View Projects
                            <ArrowDown className="w-4 h-4 ml-2" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Skills Radar Chart */}
                <div className="hidden md:flex col-span-4 items-center justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <SkillsRadar />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-sm text-muted-foreground"
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    );
}
