import { Briefcase, Home, Stethoscope, ShoppingBag, ArrowRight } from 'lucide-react';

export function UseCases() {
    const cases = [
        {
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            title: "Agencias de Marketing",
            items: ["Leads automáticos", "Asignación round-robin", "Follow-up inmediato"]
        },
        {
            icon: <Home className="w-8 h-8 text-primary" />,
            title: "Inmobiliarias",
            items: ["Prospección 24/7", "Agenda automática", "Recordatorios de visita"]
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-primary" />,
            title: "Clínicas / Salud",
            items: ["Reservas de cita", "Confirmaciones WhatsApp", "Recuperación de no-shows"]
        },
        {
            icon: <ShoppingBag className="w-8 h-8 text-primary" />,
            title: "E-commerce",
            items: ["Tickets de soporte", "Status de pedido", "Reportes de ventas"]
        }
    ];

    return (
        <section id="use-cases" className="py-20 bg-slate-950">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                    Esto aplica si eres...
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((useCase, index) => (
                        <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                            <div className="mb-4 bg-emerald-500/10 w-fit p-3 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                                {useCase.icon}
                            </div>
                            <h3 className="font-semibold text-lg mb-4 text-white">{useCase.title}</h3>
                            <ul className="space-y-2">
                                {useCase.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                        <ArrowRight className="w-3 h-3 text-emerald-500/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
