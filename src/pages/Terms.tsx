
export function Terms() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="container mx-auto px-4 md:px-6 py-24 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-white">Términos y Condiciones</h1>
                <div className="prose prose-invert max-w-none space-y-6 prose-p:text-slate-400 prose-headings:text-white prose-li:text-slate-400 prose-strong:text-white">
                    <p>Última actualización: {new Date().getFullYear()}</p>
                    <p>
                        Por favor, lee estos términos y condiciones cuidadosamente antes de utilizar nuestro sitio web y servicios operados por LuisBolivar.dev.
                    </p>

                    <h2 className="text-xl font-semibold">1. Aceptación de los términos</h2>
                    <p>
                        Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones y a todas las leyes y regulaciones aplicables.
                    </p>

                    <h2 className="text-xl font-semibold">2. Uso de la licencia</h2>
                    <p>
                        Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de LuisBolivar.dev solo para visualización transitoria personal y no comercial.
                    </p>

                    <h2 className="text-xl font-semibold">3. Renuncia</h2>
                    <p>
                        Los materiales en el sitio web de LuisBolivar.dev se proporcionan "tal cual". LuisBolivar.dev no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías.
                    </p>

                    <h2 className="text-xl font-semibold">4. Limitaciones</h2>
                    <p>
                        En ningún caso LuisBolivar.dev o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de LuisBolivar.dev.
                    </p>

                    <h2 className="text-xl font-semibold">5. Modificaciones</h2>
                    <p>
                        LuisBolivar.dev puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, aceptas estar sujeto a la versión actual de estos términos de servicio.
                    </p>

                    <h2 className="text-xl font-semibold">6. Ley aplicable</h2>
                    <p>
                        Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Chile y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o ubicación.
                    </p>
                </div>
            </div>
        </div>
    );
}
