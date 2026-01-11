import { motion } from 'framer-motion';


export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 border-b border-border">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight mb-12"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative border-l border-border pl-8 ml-3"
                    >
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">Backend Software Engineer</h3>
                            <span className="font-mono text-sm text-muted-foreground">10/2023 – Present</span>
                        </div>
                        <div className="text-primary font-medium mb-4">AITEK SOLUTIONS • Casablanca, Morocco</div>

                        <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                            <li>Built and maintained secure Laravel APIs powering fintech and healthcare platforms, serving <strong>1000+ monthly active users</strong>.</li>
                            <li>Implemented loan simulators backend, improving user experience and customer satisfaction.</li>
                            <li>Automated integration of financial datasets for real-time credit scoring, reducing manual data processing by <strong>50%</strong>.</li>
                            <li>Developed healthcare and entrepreneurial platforms with automated reporting and improved data security.</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative border-l border-border pl-8 ml-3"
                    >
                        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted border-2 border-muted-foreground/50" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold">API & Backend Developer (Intern)</h3>
                            <span className="font-mono text-sm text-muted-foreground">04/2023 – 10/2023</span>
                        </div>
                        <div className="text-primary/80 font-medium mb-4">FINSO • Casablanca, Morocco</div>

                        <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                            <li>Contributed to the development of a financial platform, enhancing user experience and functionality.</li>
                            <li>Integrated chatbots to streamline customer interactions and improve service efficiency.</li>
                            <li>Customized <strong>Odoo</strong> modules to match business requirements and collaborated with cross-functional teams.</li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
