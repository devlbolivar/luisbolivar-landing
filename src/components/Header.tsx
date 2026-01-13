import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

import { Link } from 'react-router-dom';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Paquetes', href: '#pricing' },
        { name: 'Casos', href: '#use-cases' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-border/40 shadow-sm py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
                            <div className="bg-primary text-primary-foreground p-1 rounded-md">
                                <Zap className="h-5 w-5 md:h-6 md:w-6 fill-current" />
                            </div>
                            <span>LuisBolivar.dev</span>
                        </Link>
                        <span className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-wide">Automation Systems for SMBs</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button size="sm" onClick={() => window.open('https://calendly.com/luisbolivar515/30min', '_blank')}>
                            Agendar 15 min
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top-5">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium p-2 hover:bg-accent rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full" onClick={() => window.open('https://calendly.com/luisbolivar515/30min', '_blank')}>
                            Agendar 15 min
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
