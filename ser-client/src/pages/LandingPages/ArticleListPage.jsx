import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const articles = [
    { 
        id: 1, 
        title: "My Interest in Cybersecurity", 
        category: "Cybersecurity", 
        readTime: "4 min read", 
        preview: "Exploring ethical hacking, network security, and protecting digital assets from cyber threats.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
        slug: "my-interest-in-cybersecurity" 
    },
    { 
        id: 2, 
        title: "My Interest in Software Development", 
        category: "Development", 
        readTime: "5 min read", 
        preview: "Building applications, solving problems, and creating solutions through code.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        slug: "my-interest-in-software-development" 
    },
    { 
        id: 3, 
        title: "My Interest in Gaming", 
        category: "Gaming", 
        readTime: "3 min read", 
        preview: "From competitive esports to immersive storytelling in gaming.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
        slug: "my-interest-in-gaming" 
    },
    { 
        id: 4, 
        title: "My Interest in Traveling", 
        category: "Travel", 
        readTime: "6 min read", 
        preview: "Exploring new cultures, trying local cuisines, and discovering hidden gems.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
        slug: "my-interest-in-traveling" 
    }
];

function ArticleListPage() {
    return (
        <div className="flex w-full flex-col gap-6">
            {/* Hero Section */}
            <section className="border-y-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8">
                        <Button to="/" variant="secondary">
                            ← Back Home
                        </Button>
                    </div>
                    <div className="text-left">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            My Interests
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl max-w-3xl">
                            Things I'm Passionate About
                        </h1>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg max-w-2xl">
                            A collection of my personal interests and hobbies that shape who I am today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Article Grid Section */}
            <section className="border-y-2 border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-left">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            Featured Interests
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-gray-900">What Drives Me</h2>
                        <p className="mt-1 text-sm text-gray-500">Click any card to read the full article</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {articles.map((article) => (
                            <article key={article.id} className="group rounded-2xl border-2 border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                                {/* Real Image Section */}
                                <div className="mb-4 flex aspect-video items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-maroon-100 to-maroon-200">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* Category */}
                                <div className="mt-2">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon-600">
                                        {article.category}
                                    </span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2 min-h-[3.5rem]">
                                    {article.title}
                                </h3>
                                
                                {/* Read Time */}
                                <p className="mt-1 text-xs text-gray-400">
                                    {article.readTime}
                                </p>
                                
                                {/* Preview */}
                                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3 min-h-[4.5rem]">
                                    {article.preview}
                                </p>
                                
                                {/* Button */}
                                <div className="mt-4 pt-2">
                                    <Link to={`/articles/${article.slug}`}>
                                        <Button className="w-full" variant="secondary">
                                            Read More →
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleListPage;