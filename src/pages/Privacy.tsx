
export function Privacy() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p>Última actualización: {new Date().getFullYear()}</p>
                <p>
                    En LuisBolivar.dev, nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
                </p>

                <h2 className="text-xl font-semibold">1. Información que recopilamos</h2>
                <p>
                    Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y número de teléfono cuando completas formularios en nuestro sitio web o te comunicas con nosotros a través de WhatsApp.
                </p>

                <h2 className="text-xl font-semibold">2. Cómo usamos tu información</h2>
                <p>
                    Utilizamos tu información para:
                </p>
                <ul className="list-disc pl-5">
                    <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                    <li>Comunicarnos contigo sobre servicios, ofertas y eventos.</li>
                    <li>Responder a tus comentarios y preguntas.</li>
                </ul>

                <h2 className="text-xl font-semibold">3. Compartir información</h2>
                <p>
                    No vendemos ni alquilamos tu información personal a terceros. Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestro negocio (por ejemplo, servicios de hosting, herramientas de automatización), sujetos a acuerdos de confidencialidad.
                </p>

                <h2 className="text-xl font-semibold">4. Seguridad</h2>
                <p>
                    Tomamos medidas razonables para proteger tu información personal contra pérdida, robo, uso indebido y acceso no autorizado.
                </p>

                <h2 className="text-xl font-semibold">5. Cambios a esta política</h2>
                <p>
                    Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
                </p>

                <h2 className="text-xl font-semibold">6. Contacto</h2>
                <p>
                    Si tienes preguntas sobre esta política, contáctanos en nuestro WhatsApp o correo electrónico.
                </p>
            </div>
        </div>
    );
}
