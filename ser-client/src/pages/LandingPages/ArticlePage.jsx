import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button';

const articlesData = {
    "my-interest-in-cybersecurity": {
        title: "My Interest in Cybersecurity",
        category: "Cybersecurity",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
        content: [
            "Cybersecurity has always fascinated me. The idea of protecting digital assets, understanding vulnerabilities, and staying one step ahead of threats is incredibly exciting.",
            "I've been learning about ethical hacking, penetration testing, and various security frameworks. It's amazing how much thought goes into securing systems.",
            "Some key areas I'm interested in: Network Security, Application Security, Cryptography, and Incident Response."
        ]
    },
    "my-interest-in-software-development": {
        title: "My Interest in Software Development",
        category: "Development",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        content: [
            "Software development allows me to turn ideas into reality. The ability to create something from nothing using code is what drives my passion.",
            "I've worked with various technologies including React, Node.js, Python, and databases. Each project teaches me something new.",
            "My favorite part is solving complex problems and seeing the final product come to life."
        ]
    },
    "my-interest-in-gaming": {
        title: "My Interest in Gaming",
        category: "Gaming",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
        content: [
            "Gaming isn't just a hobby; it's a way to connect with friends, develop strategic thinking, and enjoy immersive stories.",
            "I enjoy various genres including RPGs, strategy games, and competitive shooters. Each game offers unique challenges and experiences.",
            "Beyond playing, I'm also interested in game design and what makes games engaging and fun."
        ]
    },
    "my-interest-in-traveling": {
        title: "My Interest in Traveling",
        category: "Travel",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
        content: [
            "Traveling opens my mind to new cultures, perspectives, and ways of living. Every destination tells a unique story.",
            "I love trying local foods, meeting new people, and discovering places off the beaten path.",
            "Some of my favorite destinations include Japan, Italy, and Thailand. Each has its own charm and unforgettable experiences."
        ]
    }
};

function ArticlesPage() {
    const { name } = useParams();
    const article = articlesData[name];

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Article not found</h1>
                    <Link to="/articles" className="mt-4 inline-block text-red-600 hover:text-red-700">
                        ← Back to Articles
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mx-auto max-w-4xl">
                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-3">
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold">{article.title}</h1>
                        <p className="text-red-200 mt-2">{article.readTime}</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl px-6 py-12">
                {article.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                        {paragraph}
                    </p>
                ))}
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link to="/articles">
                        <Button variant="secondary">← Back to All Articles</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;