import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NetworkOrb() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / 30;
            const y = (e.clientY - innerHeight / 2) / 30;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Central Orb */}
            <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 backdrop-blur-xl border border-primary/50 shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-primary/40 blur-xl animate-pulse" />

                {/* Core */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-blue-600 opacity-60" />
            </motion.div>

            {/* Orbiting nodes */}
            {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary/70 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                    animate={{
                        x: [
                            Math.cos((i * Math.PI * 2) / 5) * 80 + mousePos.x * 0.5,
                            Math.cos((i * Math.PI * 2) / 5 + Math.PI * 2) * 80 + mousePos.x * 0.5,
                        ],
                        y: [
                            Math.sin((i * Math.PI * 2) / 5) * 80 + mousePos.y * 0.5,
                            Math.sin((i * Math.PI * 2) / 5 + Math.PI * 2) * 80 + mousePos.y * 0.5,
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + Math.cos((i * Math.PI * 2) / 5) * 31.25}%`}
                        y2={`${50 + Math.sin((i * Math.PI * 2) / 5) * 31.25}%`}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        opacity="0.4"
                        animate={{
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating code symbols */}
            {['{ }', '</>', 'API', 'λ'].map((symbol, i) => (
                <motion.div
                    key={i}
                    className="absolute text-xs font-mono text-primary/40 select-none"
                    animate={{
                        x: [
                            Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4) * 110,
                            Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4) * 120,
                            Math.cos((i * Math.PI * 2) / 4 + Math.PI / 4) * 110,
                        ],
                        y: [
                            Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4) * 110,
                            Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4) * 120,
                            Math.sin((i * Math.PI * 2) / 4 + Math.PI / 4) * 110,
                        ],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                >
                    {symbol}
                </motion.div>
            ))}
        </div>
    );
}
