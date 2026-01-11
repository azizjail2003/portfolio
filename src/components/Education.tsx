import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Education() {
    return (
        <section id="education" className="py-20 px-6 border-b border-border bg-muted/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight mb-16"
                >
                    Education
                </motion.h2>

                <div className="relative border-l-2 border-border/50 ml-3 md:ml-6 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-[9px] md:-left-[9px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

                        <SpotlightCard
                            className="p-6 md:p-8 border border-white/10 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                            spotlightColor="hsl(var(--primary) / 0.15)"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>Engineering Degree</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Computer Systems Engineering</h3>
                                    <p className="text-muted-foreground text-lg">SUPMTI Rabat</p>
                                </div>

                                <div className="flex items-center gap-2 text-primary font-contrail text-xl tracking-wide bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 self-start">
                                    <Calendar className="w-4 h-4" />
                                    01/2020 – 08/2023
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                                    <Award className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-foreground">Graduated with Honors</p>
                                        <p className="text-sm text-muted-foreground">GPA: 16.85/20 • Specialized in Distributed Systems & Architecture</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Core Coursework</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Data Structures', 'Algorithms', 'Operating Systems', 'Software Engineering', 'Databases', 'Networking', 'Cloud Computing'].map((course) => (
                                            <span key={course} className="text-xs font-medium bg-background text-foreground/80 px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:bg-muted transition-colors cursor-default">
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
