import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    image: string;
    author: string;
}

export default function BlogPage() {
    const [posts, setPosts] = React.useState<BlogPost[]>([]);

    React.useEffect(() => {
        const loadPosts = async () => {
            const modules = import.meta.glob('../content/blog/*.mdx');
            const loadedPosts: BlogPost[] = [];

            for (const path in modules) {
                const mod = await modules[path]();
                const slug = path.split('/').pop()?.replace('.mdx', '') || '';
                // @ts-ignore
                const metadata = mod.frontmatter || {};

                loadedPosts.push({
                    slug,
                    ...metadata,
                });
            }

            setPosts(loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        };

        loadPosts();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950">


            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Automatización</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Estrategias, guías y casos de uso real sobre cómo escalar tu agencia usando tecnología.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-emerald-400 text-sm mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 mb-4 line-clamp-2">
                                    {post.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                                    Leer artículo <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

        </div>
    );
}
