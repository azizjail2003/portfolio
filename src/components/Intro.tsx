import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Intro() {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const stages = [
        "Initializing Systems...",
        "Loading Architecture...",
        "Establishing Connections...",
        "Preparing Interface...",
        "Ready"
    ];

    useEffect(() => {
        // Progress animation - guaranteed to reach 100%
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                // Increment by 2% every 100ms = 5 seconds to 100%
                const newProgress = Math.min(prev + 2, 100);

                // Update stage based on progress
                if (newProgress > 80) setStage(4);
                else if (newProgress > 60) setStage(3);
                else if (newProgress > 40) setStage(2);
                else if (newProgress > 20) setStage(1);

                return newProgress;
            });
        }, 100);

        // Hide intro after progress completes + small delay
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(30px)",
                        transition: { duration: 1.2, ease: "easeInOut" }
                    }}
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    opacity: 0
                                }}
                                animate={{
                                    y: [null, -100],
                                    opacity: [0, 0.6, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>

                    {/* Rotating geometric elements */}
                    <motion.div
                        className="absolute w-96 h-96 border border-primary/10 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-80 h-80 border border-blue-500/10 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Central logo with glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative mb-16 z-10"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-blue-500/40 blur-3xl rounded-full scale-150" />

                        {/* Logo card */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 40px rgba(59, 130, 246, 0.3)",
                                    "0 0 80px rgba(59, 130, 246, 0.5)",
                                    "0 0 40px rgba(59, 130, 246, 0.3)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 flex items-center justify-center"
                        >
                            <span className="text-6xl font-black text-white">AJ</span>

                            {/* Corner accents */}
                            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
                            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
                            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg" />
                            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br-lg" />
                        </motion.div>
                    </motion.div>

                    {/* Brand name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-12 z-10"
                    >
                        <h1 className="text-3xl font-bold tracking-wider text-white mb-2">
                            ABDELAZIZ JAIL
                        </h1>
                        <p className="text-center text-sm text-blue-400 tracking-widest uppercase">
                            Backend Engineer
                        </p>
                    </motion.div>

                    {/* Progress section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="w-96 space-y-6 z-10"
                    >
                        {/* Progress bar with glow */}
                        <div className="relative">
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full relative"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                                </motion.div>
                            </div>
                            {/* Progress glow */}
                            <motion.div
                                className="absolute top-0 left-0 h-1.5 bg-blue-500/50 blur-md rounded-full"
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>

                        {/* Status text with smooth transitions */}
                        <div className="flex items-center justify-between text-sm">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={stage}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white/80 font-mono"
                                >
                                    {stages[stage]}
                                </motion.span>
                            </AnimatePresence>
                            <span className="text-primary font-mono font-bold">
                                {Math.round(progress)}%
                            </span>
                        </div>

                        {/* System indicators */}
                        <div className="flex justify-center gap-3 pt-4">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-primary/30"
                                    animate={{
                                        scale: progress > (i + 1) * 20 ? [1, 1.5, 1] : 1,
                                        backgroundColor: progress > (i + 1) * 20
                                            ? ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 1)", "rgba(59, 130, 246, 0.6)"]
                                            : "rgba(59, 130, 246, 0.3)"
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: progress > (i + 1) * 20 ? Infinity : 0,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
