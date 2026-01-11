import { motion } from 'framer-motion';
import { LayoutGrid, User, GraduationCap, Microscope, Briefcase, Award, Mail, FolderGit2, Layers, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
    activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
    const collections = [
        { name: 'overview', icon: LayoutGrid, href: '#hero', method: 'GET' },
        { name: 'about-me', icon: User, href: '#about', method: 'GET' },
        { name: 'education', icon: GraduationCap, href: '#education', method: 'GET' },
        { name: 'research-goals', icon: Microscope, href: '#research', method: 'GET' },
        { name: 'projects', icon: FolderGit2, href: '#projects', method: 'GET' },
        { name: 'api-highlights', icon: Terminal, href: '#api-highlights', method: 'GET' },
        { name: 'experience', icon: Briefcase, href: '#experience', method: 'GET' },
        { name: 'skills', icon: Layers, href: '#skills', method: 'GET' },
        { name: 'awards', icon: Award, href: '#awards', method: 'GET' },
        { name: 'contact', icon: Mail, href: '#contact', method: 'POST' },
    ];

    return (
        <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            className="hidden md:flex flex-col w-64 border-r border-border bg-muted/10 backdrop-blur-xl h-screen sticky top-0"
        >
            <div className="p-4 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">abdelaziz-jail / portfolio</span>
            </div>

            <div className="p-2 py-4 overflow-y-auto">
                <div className="text-xs font-semibold text-muted-foreground mb-2 px-3 tracking-wider">COLLECTIONS</div>
                <div className="space-y-1">
                    {collections.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors font-mono",
                                activeSection === item.href.substring(1)
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                            )}
                        >
                            <span className={cn(
                                "text-[10px] font-bold px-1.5 rounded",
                                item.method === 'GET' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            )}>
                                {item.method}
                            </span>
                            <item.icon className="w-4 h-4 opacity-70" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-auto p-4 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Online</span>
                </div>
                <p>v1.0.0 • React</p>
            </div>
        </motion.aside>
    );
}
