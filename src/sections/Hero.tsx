import { Button } from '@/components/ui/Button';
import { Bot, MessageCircle } from 'lucide-react';

export function Hero() {
    return (
        <section id="about" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
            {/* Background with mesh gradient effect */}
            <div className="absolute inset-0 z-0 bg-background">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] opacity-50" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto">
                {/* Authority Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 border border-primary/20 text-xs md:text-sm font-medium text-foreground mb-8 animate-fade-in-up">
                    <Bot className="w-4 h-4 text-primary" />
                    <span>Ingeniero Senior (10+ años). Producción, no experimentos.</span>
                </div>

                {/* Headline */}
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight animate-fade-in-up delay-100">
                    En 7 días elimino <br className="hidden md:block" />
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">tareas manuales</span> y aseguro
                    <br className="hidden md:block" /> el seguimiento de leads.
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                    Ingeniero Senior (10+ años). Trabajo con n8n, CRMs y Google Workspace.
                </p>

                {/* Proof Stack */}
                <div className="mb-8 animate-fade-in-up delay-200">
                    <p className="text-sm md:text-base font-medium text-foreground/80 bg-secondary/30 py-2 px-4 rounded-full inline-block border border-border/50">
                        He trabajado en proyectos enterprise (Disney/Globant) y ahora llevo esa estabilidad a negocios en crecimiento.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        Quiero el Sprint de 7 días
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 gap-2" onClick={() => window.open('https://wa.me/56981916143', '_blank')}>
                        <MessageCircle className="w-4 h-4" />
                        Escríbeme por WhatsApp
                    </Button>
                </div>

                {/* Tech Stack Hints */}
                <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 animate-fade-in-up delay-500">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        WhatsApp API
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        Google Sheets
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        n8n Workflows
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                        AI Agents
                    </div>
                </div>
            </div>
        </section>
    );
}
