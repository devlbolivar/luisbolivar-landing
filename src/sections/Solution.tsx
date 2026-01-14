import { CheckCircle, Zap, ShieldCheck, Box } from 'lucide-react';

export function Solution() {
    const features = [
        {
            icon: <Zap className="w-5 h-5 text-primary" />,
            text: "Hasta 3 automatizaciones de alto ROI"
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-primary" />,
            text: "Alertas inteligentes cuando algo falla"
        },
        {
            icon: <Box className="w-5 h-5 text-primary" />,
            text: "Documentación + entrega a tu equipo"
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-primary" />,
            text: "Implementado en 15 días calendario"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-slate-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    <div className="flex-1 space-y-8 animate-fade-in-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                            Automatización con control <span className="text-slate-400 block text-2xl md:text-3xl mt-2 font-medium">(para que no se rompa en silencio)</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            No soy un "conector de herramientas" que deja cables sueltos. Construyo sistemas robustos de ingeniería que escalan contigo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-slate-950 border border-slate-800">
                                    {feature.icon}
                                    <span className="font-medium text-slate-200">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative w-full aspect-video lg:aspect-square max-h-[500px] flex items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden group">
                        {/* Visual Representation of Mechanism */}
                        <div className="absolute inset-0 bg-grid-white/[0.05]" />

                        <div className="relative p-8 bg-slate-900 rounded-xl shadow-xl border border-slate-800 w-3/4 animate-float">
                            <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-xs font-mono text-slate-500">workflow_v1.json</span>
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 bg-slate-800 rounded w-3/4" />
                                <div className="h-2 bg-slate-800 rounded w-1/2" />
                                <div className="h-2 bg-slate-800 rounded w-full" />
                                <div className="flex gap-2 mt-4">
                                    <div className="h-8 w-8 rounded bg-emerald-500/20 flex items-center justify-center text-xs text-emerald-400">If</div>
                                    <div className="h-8 w-8 rounded bg-cyan-500/20 flex items-center justify-center text-xs text-cyan-400">Then</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
