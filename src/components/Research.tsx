import { motion } from 'framer-motion';
import { BrainCircuit, Database, Network } from 'lucide-react';

export default function Research() {
    const interests = [
        {
            title: "Machine Learning & Deep Learning",
            description: "Developing robust models for pattern recognition and predictive analytics using TensorFlow and PyTorch.",
            icon: BrainCircuit,
        },
        {
            title: "Intelligent Systems",
            description: "Building autonomous systems for decision-making in complex environments, particularly in healthcare.",
            icon: Network,
        },
        {
            title: "Applied AI in Fintech",
            description: "Leveraging large-scale data processing to detect fraud and optimize financial workflows.",
            icon: Database,
        },
    ];

    return (
        <section id="research" className="py-20 px-6 border-b border-border">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Research Interests & MSc Goals</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        I am actively seeking <strong className="text-foreground">MSc opportunities</strong> in Computer Science and Artificial Intelligence. My objective is to contribute to research labs focusing on applied AI, where I can leverage my backend engineering background to build scalable intelligent systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {interests.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-xl bg-muted/20 border border-border hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
