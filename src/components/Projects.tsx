import { motion } from 'framer-motion';
import { ExternalLink, Server } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    points: string[];
    type: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Estatmar Platform",
            type: "Fintech / Laravel",
            description: "A comprehensive platform for evaluating and managing entrepreneurial and investment projects.",
            tags: ["Laravel", "Sanctum", "MySQL", "Docker", "Nginx"],
            points: [
                "Built Laravel API with Sanctum authentication & RBAC.",
                "Designed schema for financial simulations & scoring.",
                "Deployed containerized services with Docker/Nginx."
            ]
        },
        {
            title: "SEHTEK Platform",
            type: "Healthcare / AI",
            description: "Healthcare platform connecting patients and doctors with AI-assisted analysis features.",
            tags: ["Laravel", "Auth0", "Python", "AI/ML"],
            points: [
                "Developed API with Auth0 for secure access.",
                "Integrated AI-assisted result extraction & anomaly detection.",
                "Implemented secure medical file storage & history."
            ]
        },
        {
            title: "INDH Workflow",
            type: "GovTech / Automation",
            description: "Workflow management platform for INDH projects with automated reporting.",
            tags: ["Laravel", "Automation", "PDF Generation"],
            points: [
                "Created API for complex project workflows.",
                "Automated project report generation (PDF).",
                "Implemented granular role-based authorization."
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 border-b border-border bg-muted/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Technical Projects</h2>
                        <p className="text-muted-foreground mt-2">Real-world backend, AI, and data systems.</p>
                    </div>
                    <a href="https://github.com" target="_blank" className="hidden md:flex items-center text-sm font-medium text-primary hover:underline">
                        View GitHub <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="flex flex-col bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold uppercase text-primary bg-primary/10 px-2 py-1 rounded">
                                        {project.type}
                                    </span>
                                    <div className="flex gap-2 text-muted-foreground">
                                        <Server className="w-4 h-4" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="space-y-3 mb-6 flex-1">
                                    {project.points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        More projects available upon request (GitHub, private repos).
                    </p>
                </div>
            </div>
        </section>
    );
}
