import { CheckCircle2, XCircle, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Transformation() {
    const comparisons = [
        {
            title: "Leads que llegan… y se enfrían",
            before: "Te escriben y respondes tarde. Cuando contestas, ya compraron en otro lado.",
            after: "El lead se registra, se asigna y recibe seguimiento automático (con alertas si nadie responde)."
        },
        {
            title: "WhatsApp como CRM (modo caos)",
            before: "Todo está en chats. No sabes quién atiende a quién ni en qué quedó cada cliente.",
            after: "Cada lead queda ordenado en Sheets o CRM con responsable y estado (sin perder conversaciones)."
        },
        {
            title: "Seguimiento que depende del vendedor",
            before: "Algunos hacen seguimiento, otros se olvidan. Resultado: ventas perdidas por desorden.",
            after: "Si no hay respuesta en 24h, el sistema hace follow-up automático y notifica lo pendiente."
        },
        {
            title: "Reportes manuales que te quitan horas",
            before: "Terminas armando reportes tarde y con datos incompletos.",
            after: "Recibes un reporte semanal automático con métricas y pendientes críticos, listo para decidir."
        },
        {
            title: "El negocio depende de ti (cuello de botella)",
            before: "Tu equipo te pregunta todo. Si no estás, se frena el negocio.",
            after: "Procesos automatizados + reglas claras → el negocio avanza sin que tú empujes cada cosa."
        },
        {
            title: "Datos duplicados y desordenados",
            before: "El mismo cliente aparece 3 veces con información distinta. Confusión total.",
            after: "Deduplicación automática + normalización → una sola fuente de verdad."
        },
        {
            title: "No-shows y cancelaciones sin control",
            before: "Agendan y no aparecen. Tu agenda se llena de huecos.",
            after: "Confirmaciones y recordatorios automáticos → menos no-shows y más citas efectivas."
        },
        {
            title: "Tu equipo pierde tiempo con curiosos",
            before: "Gasta tiempo en gente que nunca iba a comprar.",
            after: "Calificación automática y asignación inteligente → tus vendedores hablan con mejores leads."
        },
        {
            title: "Copiar/pegar todo el día",
            before: "Tu equipo hace tareas repetitivas (registrar leads, enviar correos, actualizar estados).",
            after: "Automatización total de tareas administrativas → el equipo se enfoca en vender/atender."
        },
        {
            title: "Los procesos fallan en silencio",
            before: "Algo se rompe y te das cuenta días después (cuando ya perdiste ventas).",
            after: "Alertas + logs + reintentos → si falla, te enteras al instante y se corrige rápido."
        }
    ];

    const benefits = [
        "Menos caos",
        "Más control",
        "Más velocidad",
        "Menos leads perdidos",
        "Menos trabajo manual"
    ];

    return (
        <section className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Automatizaciones que te devuelven control en 15 días
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
                    {comparisons.map((item, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-muted/50 p-4 border-b border-border">
                                <h3 className="font-bold text-lg">{index + 1}. {item.title}</h3>
                            </div>
                            <div className="p-6 grid gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3 text-muted-foreground/80">
                                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Antes</span>
                                            <p className="text-sm">{item.before}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold uppercase tracking-wider text-green-600">Después</span>
                                            <p className="text-sm font-medium">{item.after}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            ¿Quieres ver qué 3 automatizaciones te darían más ROI?
                        </h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Agenda 15 minutos y te lo digo directo.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto h-12 px-8 gap-2" onClick={() => window.open('https://calendly.com/luisbolivar515/30min', '_blank')}>
                                <Calendar className="w-4 h-4" />
                                Agendar llamada
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 gap-2" onClick={() => window.open('https://wa.me/56981916143', '_blank')}>
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp ahora
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
