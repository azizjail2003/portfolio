import { motion } from 'framer-motion';

export default function Skills() {
    const categories = [
        {
            title: "Backend & APIs",
            skills: ["Laravel", "REST APIs", "Node.js", "Auth0", "CI/CD (GitLab)", "Redis"],
        },
        {
            title: "Databases & DevOps",
            skills: ["MySQL", "PostgreSQL", "Docker", "Nginx", "Linux", "AWS (Basic)"],
        },
        {
            title: "AI & Data Science",
            skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "n8n", "OpenAI API"],
        },
        {
            title: "Soft Skills",
            skills: ["Problem-solving", "Technical Leadership", "Mentorship", "Adaptability"],
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 border-b border-border bg-muted/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Technical Skills</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background border border-border p-6 rounded-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium bg-muted text-foreground/80 rounded border border-border/50 hover:border-primary/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
