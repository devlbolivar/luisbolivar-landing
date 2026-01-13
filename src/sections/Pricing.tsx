import { Button } from '@/components/ui/Button';
import { Check, Zap } from 'lucide-react';

export function Pricing() {
    const tiers = [
        {
            name: 'Audit Quick-Win',
            price: '$199',
            duration: '48h',
            description: 'Diagnóstico rápido y plan de acción.',
            features: ['30 min de llamada', '3 automatizaciones con mayor ROI', 'Roadmap + ahorro estimado'],
            cta: 'Quiero el Audit',
            variant: 'outline',
        },
        {
            name: 'Automation ROI Sprint',
            price: '$990',
            duration: '7 días',
            description: 'Implementación completa y funcional.',
            features: ['Hasta 3 workflows', 'Alertas + logs básicos', 'Go-live + training', 'Soporte post-entrega'],
            cta: 'Reservar Sprint',
            variant: 'primary',
            popular: true,
        },
        {
            name: 'Revenue Ops Engine',
            price: '$3.990',
            duration: '30 días',
            description: 'Infraestructura robusta para escalar.',
            features: ['8–12 automatizaciones', 'Dashboard + trazabilidad', 'SOPs + soporte prioritario', 'Integraciones avanzadas'],
            cta: 'Versión Premium',
            variant: 'outline',
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Paquetes que escalan contigo
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Desde un diagnóstico rápido hasta una transformación operativa completa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col p-8 rounded-2xl border ${tier.popular
                                ? 'bg-background border-primary shadow-2xl scale-105 z-10'
                                : 'bg-card border-border shadow-sm hover:shadow-md'
                                } transition-all duration-300`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                    <Zap className="w-3 h-3 fill-current" /> RECOMENDADO
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className="text-muted-foreground">/ {tier.duration}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.variant as any}
                                size="lg"
                                className="w-full"
                                onClick={() => window.open('https://wa.me/56981916143', '_blank')}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
