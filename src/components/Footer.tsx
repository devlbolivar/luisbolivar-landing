import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
                            <div className="bg-primary text-primary-foreground p-1 rounded-md">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span>LuisBolivar.dev</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Automatizamos tus operaciones para que dejes de perder leads y tiempo.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/#pricing" className="hover:text-foreground">Audit Quick-Win</a></li>
                            <li><a href="/#pricing" className="hover:text-foreground">Automation Sprint</a></li>
                            <li><a href="/#pricing" className="hover:text-foreground">Revenue Ops Engine</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Compañía</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/#process" className="hover:text-foreground">Cómo funciona</a></li>
                            <li><a href="/#faq" className="hover:text-foreground">Preguntas Frecuentes</a></li>
                            <li><a href="/#about" className="hover:text-foreground">Sobre nosotros</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/privacy" className="hover:text-foreground">Privacidad</Link></li>
                            <li><Link to="/terms" className="hover:text-foreground">Términos</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} LuisBolivar.dev. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
