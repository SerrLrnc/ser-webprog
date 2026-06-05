import Button from "../../components/Button.jsx";

const AboutPage = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="rounded-2xl bg-red-600 p-8 text-center">
                            <div className="text-7xl mb-2">👨‍💻</div>
                            <p className="text-white font-semibold">Mobile & Web Developer</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold uppercase text-red-600">About Me</p>
                            <h1 className="text-3xl font-bold text-gray-900 mt-1">Mobile & Web Application Student</h1>
                            <p className="mt-3 text-gray-600">
                                Passionate about backend development and security. I have beginner to basic skills in 
                                cybersecurity and MWA development.
                            </p>
                            <div className="mt-5 flex gap-3">
                                <Button to="/" variant="primary">Back Home</Button>
                                <Button to="/articles" variant="secondary">My Interests</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="border-b border-gray-200 bg-white px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold uppercase text-red-600">My Skills</p>
                        <h2 className="text-2xl font-bold text-gray-900">What I Bring</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            { icon: "🔧", title: "Backend", desc: "Development" },
                            { icon: "🔒", title: "Security", desc: "Cybersecurity" },
                            { icon: "📱", title: "Mobile", desc: "App Dev" },
                            { icon: "🌐", title: "Web", desc: "Application" }
                        ].map((skill, i) => (
                            <div key={i} className="text-center p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition">
                                <div className="text-3xl mb-1">{skill.icon}</div>
                                <p className="font-bold text-gray-900 text-sm">{skill.title}</p>
                                <p className="text-xs text-gray-500">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold uppercase text-red-600">My Journey</p>
                        <h2 className="text-2xl font-bold text-gray-900">Story & Goals</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { icon: "🎓", title: "Education", desc: "Studying MWA focusing on backend and security principles." },
                            { icon: "💻", title: "Experience", desc: "Backend systems, databases, and security implementation." },
                            { icon: "🎯", title: "Goals", desc: "Full-stack developer with cybersecurity expertise." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition">
                                <div className="text-4xl mb-2">{item.icon}</div>
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-white px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold uppercase text-red-600">Gallery</p>
                        <h2 className="text-2xl font-bold text-gray-900">Visual Journey</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
                        {[
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&h=150&fit=crop",
                            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=150&h=150&fit=crop",
                            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=150&fit=crop",
                            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop",
                            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=150&fit=crop",
                            "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=150&h=150&fit=crop"
                        ].map((img, i) => (
                            <div key={i} className="aspect-square rounded-lg overflow-hidden border border-gray-200">
                                <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button variant="primary">View Portfolio →</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;