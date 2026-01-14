import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
            {/* Abstract Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] rounded-full bg-white blur-[100px]" />
                <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-white blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    ¿Quieres dejar esto listo en 15 días?
                </h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Deja de perder tiempo en tareas repetitivas y empieza a escalar tu operación hoy mismo.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto text-emerald-950 bg-white hover:bg-slate-100 font-semibold h-12 px-8"
                        onClick={() => window.open('https://calendly.com/luisbolivar515/30min', '_blank')}
                    >
                        Agendar 15 min <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-emerald-600 h-12 px-8"
                        onClick={() => window.open('https://wa.me/56981916143', '_blank')}
                    >
                        WhatsApp ahora <MessageCircle className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
