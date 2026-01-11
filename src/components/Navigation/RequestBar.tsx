import { Play, Share2, Search, CornerDownLeft, Hash } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';
import { useState, useRef, useEffect } from 'react';
import { GLOBAL_SEARCH_INDEX } from '../../constants/sitemap';
import type { SearchItem } from '../../constants/sitemap';
import { motion, AnimatePresence } from 'framer-motion';

interface RequestBarProps {
    currentPath: string;
}

export default function RequestBar({ currentPath }: RequestBarProps) {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [matches, setMatches] = useState<SearchItem[]>(GLOBAL_SEARCH_INDEX);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Filter matches
    useEffect(() => {
        if (!query) {
            setMatches(GLOBAL_SEARCH_INDEX);
        } else {
            const lowerQuery = query.toLowerCase();
            const filtered = GLOBAL_SEARCH_INDEX.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description?.toLowerCase().includes(lowerQuery) ||
                item.keywords?.some(k => k.includes(lowerQuery))
            );
            setMatches(filtered);
        }
    }, [query]);

    // Handle outside click to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item: SearchItem) => {
        if (item.type === 'ENDPOINT' && typeof item.index === 'number') {
            // Dispatch event for API tab switching
            const event = new CustomEvent('navigate-to-endpoint', { detail: { index: item.index } });
            window.dispatchEvent(event);
        }

        // Scroll to the targeted section
        const element = document.getElementById(item.id);
        if (element) {
            const offset = 80; // offset for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        setIsFocused(false);
        setQuery('');
    };

    return (
        <div className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 flex items-center px-4 gap-4">
            <div className="flex-1 flex max-w-4xl mx-auto w-full items-center gap-2">
                <div
                    ref={wrapperRef}
                    className="flex-1 relative"
                >
                    <div className={`flex items-center bg-muted/30 border rounded-md px-3 h-10 gap-2 transition-all duration-200 ${isFocused ? 'border-primary ring-1 ring-primary/20 bg-background shadow-lg' : 'border-input'}`}>
                        <div className="flex items-center gap-2 border-r pr-2 shrink-0">
                            <span className="text-xs font-bold text-muted-foreground">GET</span>
                        </div>

                        <div className="flex-1 flex items-center overflow-hidden">
                            <span className="text-sm text-muted-foreground font-mono shrink-0 hidden sm:block">
                                https://abdelaziz.jail/
                            </span>
                            <input
                                type="text"
                                className="flex-1 bg-transparent border-none outline-none text-sm font-mono placeholder:text-muted-foreground/50 min-w-[100px] sm:ml-0 ml-1"
                                placeholder={isFocused ? "jump-to..." : `${currentPath || ''}`}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                            />
                        </div>

                        {!isFocused && (
                            <div className="hidden sm:flex items-center gap-1 text-[10px] text-muted-foreground font-mono border border-border px-1.5 py-0.5 rounded bg-muted/50">
                                <Search className="w-3 h-3" />
                                <span>CMD+K</span>
                            </div>
                        )}
                    </div>

                    {/* Autocomplete Dropdown */}
                    <AnimatePresence>
                        {isFocused && (
                            <motion.div
                                initial={{ opacity: 0, y: 4, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-popover/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl overflow-hidden py-1 z-50 max-h-[400px] overflow-y-auto"
                            >
                                <div className="px-3 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider flex justify-between">
                                    <span>Navigation & Resources</span>
                                    <span className="text-[10px] opacity-70">{matches.length} results</span>
                                </div>
                                {matches.length > 0 ? (
                                    matches.map((item, i) => (
                                        <button
                                            key={`${item.type}-${i}`}
                                            onClick={() => handleSelect(item)}
                                            className="w-full text-left px-3 py-3 hover:bg-muted/50 flex items-center gap-3 group transition-colors border-b border-border/40 last:border-0"
                                        >
                                            {/* Icon / Badge */}
                                            {item.type === 'ENDPOINT' ? (
                                                <span className={`shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${item.method === 'POST' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                                    {item.method}
                                                </span>
                                            ) : (
                                                <div className="shrink-0 w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
                                                    {item.icon ? <item.icon className="w-3.5 h-3.5" /> : <Hash className="w-3.5 h-3.5" />}
                                                </div>
                                            )}

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                                                        {item.title}
                                                    </span>
                                                    {item.type === 'SECTION' && (
                                                        <span className="text-xs text-muted-foreground/50 font-mono">#{item.id}</span>
                                                    )}
                                                </div>
                                                <div className="text-xs text-muted-foreground truncate font-mono opacity-70 mt-0.5">
                                                    {item.description}
                                                </div>
                                            </div>

                                            <CornerDownLeft className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                                        No matches found for "{query}"
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button className="h-10 px-6 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2 transition-colors shrink-0 shadow-sm">
                    <Play className="w-4 h-4 fill-current" />
                    <span className="hidden sm:inline">Connect</span>
                </button>
            </div>
            <div className="hidden md:flex items-center gap-2">
                <ModeToggle />
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
