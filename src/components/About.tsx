import { motion } from 'framer-motion';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 border-b border-border relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8 sticky top-24"
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

                    {/* Cards Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <SpotlightCard>
                                <div className="flex gap-4 items-start p-2">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Academic Foundation</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Rigorous training in Algorithms, Distributed Systems, and Operating Systems from <span className="text-foreground font-medium">SUPMTI Rabat</span>.
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <SpotlightCard delay={0.1}>
                                <div className="flex gap-4 items-start p-2">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Code2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Engineering Excellence</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Top-tier graduate specializing in scalable backend architectures and clean code practices.
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <SpotlightCard delay={0.2}>
                                <div className="flex gap-4 items-start p-2">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Domain Expertise</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            3+ years building production-grade solutions for Fintech, Public Finance, and Healthcare sectors.
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
