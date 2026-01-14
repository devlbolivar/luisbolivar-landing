import { TrendingUp, Clock, UserCheck } from 'lucide-react';

export function Testimonials() {
    const metrics = [
        {
            icon: <Clock className="w-8 h-8 text-emerald-400" />,
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
        <section className="py-20 border-b border-slate-800 bg-slate-950">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Resultados típicos</h2>
                    <p className="text-slate-400">Lo que puedes esperar después del Sprint.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col items-center p-6 bg-slate-900 rounded-xl border border-slate-800 text-center">
                            <div className="mb-4 bg-slate-950 p-3 rounded-full shadow-sm">
                                {metric.icon}
                            </div>
                            <span className="text-4xl font-bold mb-2 block text-white">{metric.value}</span>
                            <span className="text-sm text-slate-400 font-medium uppercase tracking-wide">{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
