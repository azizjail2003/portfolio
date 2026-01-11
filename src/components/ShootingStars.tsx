import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export const ShootingStars = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createStar = () => {
            const id = Math.random();
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * (window.innerHeight / 2); // Start mostly in top half

            // Randomize parameters for variety
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 1.5 + 0.5;

            return {
                id,
                x: startX,
                y: startY,
                size,
                duration,
                delay: 0
            };
        };

        const interval = setInterval(() => {
            // Only add a star occasionally
            if (Math.random() > 0.7) {
                setStars(current => {
                    const newStar = createStar();
                    // Keep max 5 stars to avoid clutter
                    const updated = [...current, newStar];
                    if (updated.length > 5) updated.shift();
                    return updated;
                });
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    initial={{
                        opacity: 1,
                        x: star.x,
                        y: star.y,
                        scale: 0
                    }}
                    animate={{
                        opacity: 0,
                        x: star.x - 200, // Move left
                        y: star.y + 200, // Move down
                        scale: 1
                    }}
                    transition={{
                        duration: star.duration,
                        ease: "easeOut"
                    }}
                    onAnimationComplete={() => {
                        setStars(current => current.filter(s => s.id !== star.id));
                    }}
                    style={{
                        position: 'absolute',
                        width: star.size,
                        height: star.size,
                        background: 'white',
                        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.4)',
                        borderRadius: '50%'
                    }}
                >
                    {/* Tail effect */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            width: star.size * 50,
                            height: '1px',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.8))',
                            zIndex: -1
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};
