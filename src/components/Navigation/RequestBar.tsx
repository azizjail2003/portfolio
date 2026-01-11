import { Play, Share2 } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';

interface RequestBarProps {
    currentPath: string;
}

export default function RequestBar({ currentPath }: RequestBarProps) {
    return (
        <div className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 flex items-center px-4 gap-4">
            <div className="flex-1 flex max-w-4xl mx-auto w-full items-center gap-2">
                <div className="flex-1 flex items-center bg-muted/30 border border-input rounded-md px-3 h-10 gap-2">
                    <span className="text-xs font-bold text-muted-foreground border-r pr-2">GET</span>
                    <span className="text-sm text-muted-foreground font-mono truncate">
                        https://api.abdelaziz.jail/v1{currentPath === 'hero' ? '/overview' : `/${currentPath || 'overview'}`}
                    </span>
                </div>
                <button className="h-10 px-6 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2 transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                    Send
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
