import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-12 md:py-16 text-slate-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-80 transition-opacity">
                            <div className="bg-white text-slate-950 p-1 rounded-md">
                                <Zap className="h-5 w-5 fill-current" />
                            </div>
                            <span>LuisBolivar.dev</span>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Automatizamos tus operaciones para que dejes de perder leads y tiempo.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Servicios</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="/#pricing" className="hover:text-emerald-400 transition-colors">Audit Quick-Win</a></li>
                            <li><a href="/#pricing" className="hover:text-emerald-400 transition-colors">Automation Sprint</a></li>
                            <li><a href="/#pricing" className="hover:text-emerald-400 transition-colors">Revenue Ops Engine</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Compañía</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                            <li><a href="/#process" className="hover:text-emerald-400 transition-colors">Cómo funciona</a></li>
                            <li><a href="/#faq" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="/#about" className="hover:text-emerald-400 transition-colors">Sobre nosotros</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacidad</Link></li>
                            <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Términos</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} LuisBolivar.dev. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
