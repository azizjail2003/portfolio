import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import SkillsRadar from './SkillsRadar';

export default function Hero() {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const fullText = "Backend Software Engineer aspiring to specialize in Artificial Intelligence and Intelligent Systems.";

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

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
        return () => clearInterval(typeInterval);
    }, []);

    const MagneticButton = ({ children, className, href, download }: any) => {
        const ref = useRef<HTMLAnchorElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e: React.MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        };

        const reset = () => setPosition({ x: 0, y: 0 });

        const Tag = href ? motion.a : motion.button;

        return (
            <Tag
                ref={ref as any}
                href={href}
                download={download}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className={className}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </Tag>
        );
    };

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
                        className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] mt-8 md:mt-0"
                        style={{
                            textShadow: '0 0 40px rgba(20, 184, 166, 0.15)',
                            letterSpacing: '-0.03em'
                        }}
                    >
                        Hey, I am <br />
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 animate-gradient cursor-pointer"
                            whileHover={{
                                scale: 1.02,
                                rotate: 1,
                                filter: "brightness(1.2)"
                            }}
                        >
                            Abdelaziz Jail.
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative border-l-2 border-teal-500/40 pl-4 md:pl-6 space-y-4 min-h-[80px]"
                    >
                        <h2 className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed">
                            {text}<span className="animate-pulse text-teal-500">_</span>
                        </h2>
                        <p className="text-muted-foreground max-w-lg leading-relaxed text-base">
                            Designing scalable APIs, AI-powered workflows, and data-driven applications for fintech and healthcare.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <MagneticButton
                            href="/Abdelaziz-Jail-Resume-2026.pdf"
                            download="Abdelaziz-Jail-Resume-2026.pdf"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/30"
                        >
                            <FileDown className="w-4 h-4 mr-2" />
                            Download CV
                        </MagneticButton>
                        <MagneticButton
                            href="#projects"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-muted/50 hover:border-teal-500/50 transition-all"
                        >
                            View Projects
                            <ArrowDown className="w-4 h-4 ml-2" />
                        </MagneticButton>
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
