import { motion } from 'framer-motion';
import { Brain, Cloud, Code2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function About() {
    const cards = [
        {
            icon: Brain,
            title: "Academic Foundation",
            desc: "Rigorous training in Algorithms, Distributed Systems, and Operating Systems from SUPMTI Rabat.",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            icon: Code2,
            title: "Engineering Excellence",
            desc: "Top-tier graduate specializing in scalable backend architectures and clean code practices.",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            icon: Cloud,
            title: "Domain Expertise",
            desc: "3+ years building production-grade solutions for Fintech, Public Finance, and Healthcare sectors.",
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
    ];

    return (
        <section id="about" className="py-24 px-6 border-b border-border relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            Bridging Abstract Theory with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                                Real-World Impact.
                            </span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a backend engineer driven by the challenge of turning complex business logic into efficient, scalable software.
                                My journey began with a deep dive into Computer Systems Engineering at <strong className="text-foreground">SUPMTI Rabat</strong>,
                                where I honed my skills in the fundamental principles of computing.
                            </p>
                            <p>
                                Today, I apply that rigor to build critical systems—from credit simulation engines to AI-assisted healthcare platforms.
                                Currently pursuing an <strong className="text-foreground">MSc in AI</strong>, I am focused on the intersection of intelligent systems and robust backend infrastructure.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid gap-4"
                    >
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <SpotlightCard
                                    className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm flex items-start gap-4 group"
                                    spotlightColor={card.color.includes('purple') ? "rgba(168, 85, 247, 0.2)" : card.color.includes('blue') ? "rgba(59, 130, 246, 0.2)" : "rgba(34, 197, 94, 0.2)"}
                                >
                                    <motion.div
                                        className={`p-3 rounded-xl ${card.bg} ${card.color}`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <card.icon className="w-6 h-6" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                                        <p className="text-sm text-muted-foreground">{card.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
