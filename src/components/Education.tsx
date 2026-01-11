import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 border-b border-border bg-muted/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight mb-12"
                >
                    Education
                </motion.h2>

                <div className="relative border-l-2 border-border ml-3 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                        <SpotlightCard
                            className="p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm"
                            spotlightColor="rgba(59, 130, 246, 0.15)"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">Computer Systems Engineering</h3>
                                    <p className="text-primary font-medium">SUPMTI Rabat</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-4 h-4" />
                                    01/2020 – 08/2023
                                </div>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Three-year Engineering Cycle specializing in software architecture, distributed systems, and backend development.
                                    Graduated with <strong className="text-foreground">Honors</strong> (GPA: 16.85/20).
                                </p>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Core Coursework</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Data Structures', 'Algorithms', 'Operating Systems', 'Software Engineering', 'Databases', 'Networking'].map((course) => (
                                            <span key={course} className="text-xs bg-muted text-foreground px-2.5 py-1 rounded-full border border-border/50">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
