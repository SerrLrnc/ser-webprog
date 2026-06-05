import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const articles = [
    { 
        id: 1, 
        title: "My Interest in Cybersecurity", 
        category: "Cybersecurity", 
        readTime: "4 min read", 
        preview: "Exploring ethical hacking, network security, and protecting digital assets from cyber threats. Learn about penetration testing, security frameworks, and how to stay safe online.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
        slug: "my-interest-in-cybersecurity",
        fullContent: "Cybersecurity has always fascinated me..."
    },
    { 
        id: 2, 
        title: "My Interest in Software Development", 
        category: "Development", 
        readTime: "5 min read", 
        preview: "Building applications, solving problems, and creating solutions through code. My journey in software development from beginner to building full-stack applications.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
        slug: "my-interest-in-software-development",
        fullContent: "Software development allows me to turn ideas into reality..."
    },
    { 
        id: 3, 
        title: "My Interest in Gaming", 
        category: "Gaming", 
        readTime: "3 min read", 
        preview: "From competitive esports to immersive storytelling, gaming has always been a passion that drives creativity and strategic thinking.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
        slug: "my-interest-in-gaming",
        fullContent: "Gaming isn't just a hobby; it's a way to connect with friends..."
    },
    { 
        id: 4, 
        title: "My Interest in Traveling", 
        category: "Travel", 
        readTime: "6 min read", 
        preview: "Exploring new cultures, trying local cuisines, and discovering hidden gems around the world. Traveling broadens my perspective and enriches my life.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
        slug: "my-interest-in-traveling",
        fullContent: "Traveling opens my mind to new cultures, perspectives..."
    }
];

function ArticleListPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Enhanced */}
            <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>
                
                <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-200">
                            Welcome to My World
                        </p>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            My Interests & Passions
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">
                            A collection of my personal interests and hobbies that shape who I am today.
                        </p>
                        <div className="mt-8">
                            <Button to="/" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                                ← Back Home
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Interests Section */}
            <section className="bg-gray-50 px-6 py-16 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                            Explore
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Featured Interests
                        </h2>
                        <p className="mt-3 text-lg text-gray-600">
                            Click any card to read the full article
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {articles.map((article) => (
                            <article key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {article.preview}
                                    </p>
                                    
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