import { motion } from 'framer-motion';
import { Trophy, Mail, Linkedin, Github } from 'lucide-react';

export function Awards() {
    return (
        <section id="awards" className="py-20 px-6 border-b border-border">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-12">Honors & Awards</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-4 p-6 rounded-lg bg-yellow-500/5 border border-yellow-500/20"
                    >
                        <Trophy className="w-8 h-8 text-yellow-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Programming Competition Winner</h3>
                            <p className="text-sm text-yellow-700/80 mb-2">SUPMTI • June 2022</p>
                            <p className="text-sm text-muted-foreground">Solved a challenging algorithmic problem under 2 hours using PHP.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4 p-6 rounded-lg bg-orange-500/5 border border-orange-500/20"
                    >
                        <Trophy className="w-8 h-8 text-orange-600 shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg">Hackathon Finalist & 3rd Prize</h3>
                            <p className="text-sm text-orange-700/80 mb-2">Orange Digital Center • Oct 2022</p>
                            <p className="text-sm text-muted-foreground">Designed and developed a healthcare system for online consultations.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export function Contact() {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's collaborate.</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        I am open to discussing MSc opportunities, research collaborations, or technically challenging backend projects.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a href="mailto:jailabdelaziz@icloud.com" className="flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity">
                            <Mail className="w-5 h-5" />
                            jailabdelaziz@icloud.com
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="https://linkedin.com" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com" className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
