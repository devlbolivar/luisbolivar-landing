import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Linkedin, Twitter, MessageCircle, Link2, Check } from 'lucide-react';

export default function BlogPost() {
    const { slug } = useParams();
    const [PostContent, setPostContent] = React.useState<any>(null);
    const [frontmatter, setFrontmatter] = React.useState<any>(null);
    const [copied, setCopied] = React.useState(false);

    React.useEffect(() => {
        const loadPost = async () => {
            try {
                const modules = import.meta.glob('../content/blog/*.mdx');
                const path = `../content/blog/${slug}.mdx`;

                if (modules[path]) {
                    const mod: any = await modules[path]();
                    setPostContent(() => mod.default);
                    setFrontmatter(mod.frontmatter);

                    // Update page title
                    document.title = `${mod.frontmatter.title} | Luis Bolívar`;
                }
            } catch (error) {
                console.error("Error loading post:", error);
            }
        };

        loadPost();
    }, [slug]);

    if (!PostContent || !frontmatter) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const shareUrl = window.location.href;
    const shareText = frontmatter?.title || 'Check this out!';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-4 h-4" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#0077b5]'
        },
        {
            name: 'Twitter',
            icon: <Twitter className="w-4 h-4" />,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#1DA1F2]'
        },
        {
            name: 'WhatsApp',
            icon: <MessageCircle className="w-4 h-4" />,
            url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
            color: 'hover:text-[#25D366]'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950">
            <article className="pt-32 pb-20">
                {/* Hero Header */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al blog
                    </Link>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                        <span className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            {new Date(frontmatter.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                            <User className="w-4 h-4 text-emerald-400" />
                            {frontmatter.author}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {frontmatter.title}
                    </h1>

                    <img
                        src={frontmatter.image}
                        alt={frontmatter.title}
                        className="w-full h-auto rounded-2xl border border-slate-800 shadow-2xl"
                    />
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-invert prose-emerald max-w-none 
            prose-h1:text-white prose-h2:text-white prose-h3:text-white
            prose-strong:text-emerald-400
            prose-code:text-emerald-300 prose-code:bg-slate-900 prose-code:px-1 prose-code:rounded
            prose-blockquote:border-emerald-500 prose-blockquote:bg-slate-900/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
          ">
                        <PostContent />
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <p className="text-slate-400 font-medium">¿Te gustó este artículo? ¡Compártelo!</p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 transition-all hover:scale-110 ${social.color} hover:bg-slate-800`}
                                    title={`Compartir en ${social.name}`}
                                >
                                    {social.icon}
                                </a>
                            ))}

                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                                title="Copiar enlace"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Link2 className="w-4 h-4" />}
                                <span className="text-sm font-medium">{copied ? '¡Copiado!' : 'Copiar Link'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
