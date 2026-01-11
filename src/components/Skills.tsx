import { motion } from 'framer-motion';
import { Server, Database, BrainCircuit, Users } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function Skills() {
    const categories = [
        {
            title: "Backend & APIs",
            icon: Server,
            description: "Building robust, scalable server-side applications.",
            skills: ["Laravel", "REST APIs", "Node.js", "Auth0", "CI/CD (GitLab)", "Redis"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            title: "Databases & DevOps",
            icon: Database,
            description: "Managing data integrity and deployment infrastructure.",
            skills: ["MySQL", "PostgreSQL", "Docker", "Nginx", "Linux", "AWS (Basic)"],
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            title: "AI & Data Science",
            icon: BrainCircuit,
            description: "Leveraging machine learning for intelligent solutions.",
            skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "n8n", "OpenAI API"],
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            title: "Soft Skills",
            icon: Users,
            description: "Leading teams and fostering collaboration.",
            skills: ["Problem-solving", "Technical Leadership", "Mentorship", "Adaptability"],
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 border-b border-border bg-background relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit for building modern, scalable, and intelligent applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard
                                className="h-full p-6 md:p-8 border border-white/5 bg-card/30 backdrop-blur-sm hover:bg-card/40 transition-colors"
                                spotlightColor="hsl(var(--primary) / 0.1)"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-3 rounded-xl ${category.bg} ${category.border} border`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                                        <p className="text-sm text-muted-foreground">{category.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium bg-background/50 text-foreground/90 rounded-md border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                                        >
                                            {skill}
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
