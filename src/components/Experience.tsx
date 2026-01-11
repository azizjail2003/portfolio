import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const experiences = [
    {
        title: "Backend Software Engineer",
        company: "AITEK SOLUTIONS",
        location: "Casablanca, Morocco",
        period: "10/2023 – Present",
        description: [
            "Built and maintained secure Laravel APIs powering fintech and healthcare platforms, serving 1000+ monthly active users.",
            "Implemented loan simulators backend, improving user experience and customer satisfaction.",
            "Automated integration of financial datasets for real-time credit scoring, reducing manual data processing by 50%.",
            "Developed healthcare and entrepreneurial platforms with automated reporting and improved data security."
        ],
        tech: ["Laravel", "API Design", "Security", "Automation"]
    },
    {
        title: "API & Backend Developer (Intern)",
        company: "FINSO",
        location: "Casablanca, Morocco",
        period: "04/2023 – 10/2023",
        description: [
            "Contributed to the development of a financial platform, enhancing user experience and functionality.",
            "Integrated chatbots to streamline customer interactions and improve service efficiency.",
            "Customized Odoo modules to match business requirements and collaborated with cross-functional teams."
        ],
        tech: ["Python", "Odoo", "Chatbots", "Financial Tech"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 border-b border-border bg-background relative overflow-hidden">

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tight mb-16"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-12 relative border-l-2 border-border/50 ml-3 md:ml-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[9px] md:-left-[9px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

                            <SpotlightCard
                                className="p-6 md:p-8 border border-white/10 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                                spotlightColor="hsl(var(--primary) / 0.15)"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                                            <Briefcase className="w-4 h-4 text-primary" />
                                            <span className="text-foreground/80">{exp.company}</span>
                                            <span className="hidden md:inline">•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-contrail text-xl tracking-wide bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 self-start">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6 text-muted-foreground leading-relaxed">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {exp.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
