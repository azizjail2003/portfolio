import { motion } from 'framer-motion';
import { ExternalLink, Server, Sparkles } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    points: string[];
    type: string;
    link?: string;
    demoNote?: string;
}

export default function Projects() {
    const workProjects: Project[] = [
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

    const personalProjects: Project[] = [
        {
            title: "MSc Application Tracker",
            type: "EdTech / Full Stack",
            description: "Serverless application tracker solving the problem of expensive database hosting by leveraging Google Sheets as backend.",
            tags: ["Nuxt 3", "Vue 3", "TypeScript", "Google Apps Script", "Tailwind CSS"],
            points: [
                "Built privacy-first app with client-side Google Sheets integration.",
                "Implemented 3D tilt effects & spring-based animations.",
                "Created automated email reminders via Google Apps Script.",
                "Designed multi-language support (EN/FR/AR) with PWA capabilities."
            ],
            link: "https://applications-tracker.vercel.app/"
        },
        {
            title: "Scholarship Quest",
            type: "EdTech / Full Stack",
            description: "AI-powered scholarship matching platform automating research and filtering through complex n8n workflows.",
            tags: ["React", "Vite", "Tailwind CSS", "n8n", "OpenAI", "i18n"],
            points: [
                "Built gamified experience with XP/leveling system & achievements.",
                "Implemented multi-language support (EN/FR/ES/AR) with RTL layouts.",
                "Designed n8n workflow with AI-powered recommendation engine.",
                "Integrated PDF generation for personalized action plans."
            ],
            link: "https://scholarship-finder-j4e5.vercel.app/",
            demoNote: "Note: Full demo available upon request (backend requires deployment)"
        }
    ];

    const renderProjectCard = (project: Project, index: number) => (
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
                        {project.link ? <Sparkles className="w-4 h-4" /> : <Server className="w-4 h-4" />}
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

                {project.demoNote && (
                    <div className="mb-4 p-3 bg-muted/50 border border-border rounded-lg">
                        <p className="text-xs text-muted-foreground italic">
                            {project.demoNote}
                        </p>
                    </div>
                )}

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        View Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-20 px-6 border-b border-border bg-muted/5">
            <div className="max-w-6xl mx-auto">
                {/* Professional Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Professional Projects</h2>
                        <p className="text-muted-foreground mt-2">Real-world backend, AI, and data systems.</p>
                    </div>
                    <a href="https://github.com" target="_blank" className="hidden md:flex items-center text-sm font-medium text-primary hover:underline">
                        View GitHub <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {workProjects.map((project, index) => renderProjectCard(project, index))}
                </div>

                {/* Personal Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Personal Projects</h2>
                        <p className="text-muted-foreground mt-2">Side projects & experiments with modern tech.</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {personalProjects.map((project, index) => renderProjectCard(project, index))}
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
