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
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <Button to="/" variant="secondary" className="mb-6">← Back Home</Button>
                    <div className="text-left max-w-2xl">
                        <p className="text-sm font-semibold uppercase text-red-600">My Interests</p>
                        <h1 className="text-3xl font-bold text-gray-900 mt-1">Things I'm Passionate About</h1>
                        <p className="mt-2 text-gray-600">A collection of my personal interests and hobbies that shape who I am today.</p>
                    </div>
                </div>
            </section>

            {/* Article Grid Section */}
            <section className="bg-white px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-left">
                        <p className="text-sm font-semibold uppercase text-red-600">Featured Interests</p>
                        <h2 className="text-2xl font-bold text-gray-900">What Drives Me</h2>
                        <p className="text-sm text-gray-500 mt-1">Click any card to read the full article</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {articles.map((article) => (
                            <article key={article.id} className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
                                {/* Image Section */}
                                <div className="mb-4 flex aspect-video items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* Category */}
                                <div className="mt-2">
                                    <span className="text-xs font-semibold uppercase text-red-600">
                                        {article.category}
                                    </span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
                                    {article.title}
                                </h3>
                                
                                {/* Read Time */}
                                <p className="mt-1 text-xs text-gray-400">
                                    {article.readTime}
                                </p>
                                
                                {/* Preview */}
                                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
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
}

export default ArticleListPage;