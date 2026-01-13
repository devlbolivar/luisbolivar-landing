import { CheckCircle2 } from 'lucide-react';

export function SprintDetails() {
    const deliverables = [
        "Lead routing automático (asignación inteligente)",
        "Follow-up automático 24h / 48h / 7d",
        "Reporte semanal al dueño (KPIs clave)",
        "Alertas inmediatas si algo falla (Slack/WPP)",
        "Documentación simple de los procesos",
        "14 días de soporte post go-live"
    ];

    return (
        <section id="process" className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto bg-secondary/20 rounded-3xl p-8 md:p-12 border border-border/50">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            ¿Qué incluye exactamente el Sprint?
                        </h2>
                        <p className="text-muted-foreground">
                            Sin sorpresas. Te entrego un sistema llave en mano listo para operar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        {deliverables.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
