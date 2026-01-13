import { AlertTriangle, Clock, Users, FileX, ShieldAlert } from 'lucide-react';

export function Problem() {
    const painPoints = [
        {
            icon: <Clock className="w-6 h-6 text-destructive" />,
            title: "Los leads entran y se enfrían",
            description: "Cada minuto que pasa sin respuesta, la probabilidad de conversión cae drásticamente."
        },
        {
            icon: <Users className="w-6 h-6 text-destructive" />,
            title: "Nadie sabe quién respondió",
            description: "El equipo se pisa las mangueras o, peor aún, nadie contesta pensando que otro lo hizo."
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
            title: "Tu WhatsApp es tu CRM",
            description: "Información aislada en chats individuales. Si se pierde el celular, se pierde el negocio."
        },
        {
            icon: <FileX className="w-6 h-6 text-destructive" />,
            title: "Reportes manuales, tarde y mal",
            description: "Pierdes horas copiando datos a Excel que ya están obsoletos cuando terminas."
        },
        {
            icon: <ShieldAlert className="w-6 h-6 text-destructive" />,
            title: "Todo depende de ti",
            description: "Si tú no estás encima, el sistema se cae. Eres el cuello de botella de tu propio crecimiento."
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        El problema que sientes todos los días
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Tienes tráfico, tienes leads, pero el proceso operativo te está costando ventas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                        <div key={index} className="bg-card border border-border/50 hover:border-destructive/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="mb-4 bg-destructive/10 w-fit p-3 rounded-lg">
                                {point.icon}
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{point.title}</h3>
                            <p className="text-muted-foreground text-sm">{point.description}</p>
                        </div>
                    ))}
                    <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-xl flex items-center justify-center text-center">
                        <p className="text-lg font-medium text-destructive">
                            "No es falta de esfuerzo.<br />Es falta de sistema."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
