import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function DataCube() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / 20; // Sensitivity
            const y = (e.clientY - innerHeight / 2) / 20;
            setMouse({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const faces = [
        "translateZ(50px)",
        "rotateY(180deg) translateZ(50px)",
        "rotateY(90deg) translateZ(50px)",
        "rotateY(-90deg) translateZ(50px)",
        "rotateX(90deg) translateZ(50px)",
        "rotateX(-90deg) translateZ(50px)",
    ];

    return (
        <div className="perspective-1000 w-32 h-32 relative flex items-center justify-center">
            <motion.div
                className="w-full h-full relative"
                style={{
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX: mouse.y + 360, // Continuous basic rotation + mouse interaction
                    rotateY: mouse.x + 360,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 3 // Smooth catchup
                }}
            >
                {faces.map((transform, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 border-2 border-primary/50 bg-primary/10 backdrop-blur-sm flex items-center justify-center text-xs font-mono text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        style={{ transform }}
                    >
                        {i % 2 === 0 ? "API" : "DB"}
                    </div>
                ))}

                {/* Inner Core */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/40 rounded-full blur-md -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </motion.div>
        </div>
    );
}
