import { TrendingUp, Clock, UserCheck } from 'lucide-react';

export function Testimonials() {
    const metrics = [
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            value: "3-10",
            label: "Horas ahorradas / semana"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            value: "+20%",
            label: "Mejor tasa de contacto"
        },
        {
            icon: <UserCheck className="w-8 h-8 text-blue-500" />,
            value: "0%",
            label: "Leads olvidados"
        }
    ];

    return (
        <section className="py-20 border-b border-border/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-2">Resultados típicos</h2>
                    <p className="text-muted-foreground">Lo que puedes esperar después del Sprint.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col items-center p-6 bg-secondary/20 rounded-xl border border-border/50 text-center">
                            <div className="mb-4 bg-background p-3 rounded-full shadow-sm">
                                {metric.icon}
                            </div>
                            <span className="text-4xl font-bold mb-2 block">{metric.value}</span>
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
