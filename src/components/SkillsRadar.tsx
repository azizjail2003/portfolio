import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface SkillData {
    label: string;
    value: number; // 0-100
    color: string;
}

export default function SkillsRadar() {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
    const [hiddenSkills, setHiddenSkills] = useState<Set<number>>(new Set());

    const skills: SkillData[] = [
        { label: 'Backend', value: 95, color: '#14b8a6' },
        { label: 'n8n Automation', value: 75, color: '#10b981' },
        { label: 'Database', value: 90, color: '#06b6d4' },
        { label: 'DevOps', value: 70, color: '#f59e0b' },
        { label: 'API Design', value: 95, color: '#2dd4bf' },
        { label: 'System Architecture', value: 85, color: '#22c55e' },
    ];

    const size = 300;
    const center = size / 2;
    const maxRadius = size / 2 - 55; // Increased padding for labels (was 40)
    const levels = 5;

    const toggleSkill = (index: number) => {
        const newHidden = new Set(hiddenSkills);
        if (newHidden.has(index)) {
            newHidden.delete(index);
        } else {
            newHidden.add(index);
        }
        setHiddenSkills(newHidden);
        setSelectedSkill(selectedSkill === index ? null : index);
    };

    // Generate points for the skill polygon
    const getPolygonPoints = () => {
        return skills.map((skill, i) => {
            const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
            const radius = hiddenSkills.has(i) ? 0 : (skill.value / 100) * maxRadius;
            return {
                x: center + radius * Math.cos(angle),
                y: center + radius * Math.sin(angle),
            };
        });
    };

    const points = getPolygonPoints();
    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

    return (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="relative z-10 max-w-[350px]">
                <defs>
                    {/* Gradient for the skill polygon */}
                    <radialGradient id="skillGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.1" />
                    </radialGradient>

                    {/* Glow filter */}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Stronger glow for selected */}
                    <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background grid circles */}
                {[...Array(levels)].map((_, i) => {
                    const radius = ((i + 1) / levels) * maxRadius;
                    return (
                        <motion.circle
                            key={i}
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="none"
                            stroke="rgba(100, 116, 139, 0.2)"
                            strokeWidth="1"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        />
                    );
                })}

                {/* Axis lines */}
                {skills.map((_, i) => {
                    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                    const x = center + maxRadius * Math.cos(angle);
                    const y = center + maxRadius * Math.sin(angle);
                    const isHighlighted = selectedSkill === i || hoveredSkill === i;

                    return (
                        <motion.line
                            key={i}
                            x1={center}
                            y1={center}
                            x2={x}
                            y2={y}
                            stroke={isHighlighted ? skills[i].color : "rgba(100, 116, 139, 0.3)"}
                            strokeWidth={isHighlighted ? "2" : "1"}
                            initial={{ pathLength: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: hiddenSkills.has(i) ? 0.2 : 1
                            }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                        />
                    );
                })}

                {/* Skill value polygon */}
                <motion.path
                    d={pathData}
                    fill="url(#skillGradient)"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                />

                {/* Data points */}
                {points.map((point, i) => {
                    const isActive = hoveredSkill === i || selectedSkill === i;
                    const isHidden = hiddenSkills.has(i);

                    return (
                        <g key={i}>
                            {/* Pulsing ring for selected skill */}
                            {selectedSkill === i && !isHidden && (
                                <motion.circle
                                    cx={point.x}
                                    cy={point.y}
                                    r={12}
                                    fill="none"
                                    stroke={skills[i].color}
                                    strokeWidth="2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: [0.5, 0, 0.5],
                                        scale: [1, 1.5, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}

                            <motion.circle
                                cx={point.x}
                                cy={point.y}
                                r={isActive ? 6 : 4}
                                fill={skills[i].color}
                                stroke="white"
                                strokeWidth="2"
                                filter={isActive ? "url(#strongGlow)" : "url(#glow)"}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: isHidden ? 0.3 : 1,
                                    scale: isHidden ? 0.5 : 1
                                }}
                                transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
                                onMouseEnter={() => setHoveredSkill(i)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                onClick={() => toggleSkill(i)}
                                className="cursor-pointer"
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </g>
                    );
                })}

                {/* Labels */}
                {skills.map((skill, i) => {
                    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                    const labelRadius = maxRadius + 25;
                    const x = center + labelRadius * Math.cos(angle);
                    const y = center + labelRadius * Math.sin(angle);
                    const isHighlighted = hoveredSkill === i || selectedSkill === i;
                    const isHidden = hiddenSkills.has(i);

                    // Adjust alignment based on position
                    let textAnchor: "start" | "middle" | "end" = "middle";
                    if (Math.abs(x - center) > 10) {
                        textAnchor = x > center ? "start" : "end";
                    }

                    return (
                        <motion.text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor={textAnchor}
                            dominantBaseline="middle"
                            className="text-[10px] md:text-xs font-mono font-medium select-none cursor-pointer tracking-wider"
                            style={{
                                textDecoration: isHidden ? 'line-through' : 'none'
                            }}
                            fill={isHighlighted ? skill.color : 'rgb(148, 163, 184)'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHidden ? 0.4 : 1 }}
                            transition={{ delay: 1.2 + i * 0.05, duration: 0.3 }}
                            onMouseEnter={() => setHoveredSkill(i)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => toggleSkill(i)}
                            whileHover={{ scale: 1.1 }}
                        >
                            {skill.label}
                        </motion.text>
                    );
                })}
            </svg>

            {/* Center glow effect */}
            <motion.div
                className="absolute w-16 h-16 bg-primary/30 rounded-full blur-xl pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Skill percentage display on hover or select */}
            <AnimatePresence>
                {(hoveredSkill !== null || selectedSkill !== null) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm border-2 rounded-lg px-6 py-3 shadow-2xl"
                        style={{
                            borderColor: skills[hoveredSkill ?? selectedSkill!].color + '80'
                        }}
                    >
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground font-mono mb-1">
                                {skills[hoveredSkill ?? selectedSkill!].label}
                            </p>
                            <p className="text-3xl font-bold tabular-nums" style={{
                                color: skills[hoveredSkill ?? selectedSkill!].color
                            }}>
                                {skills[hoveredSkill ?? selectedSkill!].value}%
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 font-mono">
                                {selectedSkill !== null ? "Click again to hide" : "Click to select"}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Rotating outer ring */}
            <motion.div
                className="absolute inset-0 border-2 border-primary/10 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Instruction hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono whitespace-nowrap"
            >
                Click to toggle • Hover for details
            </motion.div>
        </div>
    );
}
