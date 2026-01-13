import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    <FAQItem
                        question="¿Y si ya tengo automatizaciones?"
                        answer="Perfecto. Lo audito, lo optimizo y lo dejo estable con sistemas de alerta para que nunca falle sin que te enteres."
                    />
                    <FAQItem
                        question="¿Y si falla algo?"
                        answer="El sistema está diseñado para fallar con gracia ('graceful failure'). Te avisa inmediatamente por WhatsApp o Slack. Nada se rompe en silencio."
                    />
                    <FAQItem
                        question="¿Necesito equipo técnico?"
                        answer="No. Solo necesito tus accesos y una reunión de 30 minutos. Yo me encargo de toda la configuración técnica."
                    />
                    <FAQItem
                        question="¿Qué herramientas usas?"
                        answer="Principalmente n8n para la lógica, conectado a lo que ya uses: Google Sheets, CRM (HubSpot, Pipedrive), WhatsApp API, Slack, Airtable, etc."
                    />
                    <FAQItem
                        question="¿Cuándo veo resultados?"
                        answer="En 7 días calendario el sistema está funcionando en producción. Sin largas esperas."
                    />
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
            >
                {question}
                {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-muted-foreground text-sm animate-in slide-in-from-top-2">
                    {answer}
                </div>
            )}
        </div>
    )
}
