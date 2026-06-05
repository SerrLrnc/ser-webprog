import Button from "../../components/Button.jsx";

const HomePage = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="text-left">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                                ✨ Yoyetz Studio
                            </p>
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Mobile & Web
                                <span className="block text-red-600">Application Developer</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-700 sm:text-lg">
                                Passionate about building secure, scalable applications. Specializing in backend development and cybersecurity.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button to="/about" variant="primary">About Me →</Button>
                                <Button to="/articles" variant="secondary">My Interests</Button>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-red-600 p-8 text-center shadow-lg">
                            <div className="text-8xl mb-3">👨‍💻</div>
                            <p className="text-white font-semibold text-xl">Yoyetz</p>
                            <p className="text-red-100">Developer & Security Enthusiast</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-b border-gray-200 bg-white px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-semibold uppercase text-red-600">My Stats</p>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900">Quick Overview</h2>
                        <p className="mt-2 text-gray-600">Key metrics from my development journey</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-2">📚</div>
                            <p className="text-3xl font-bold text-gray-900">2+</p>
                            <p className="mt-1 text-sm font-semibold uppercase text-red-600">Years of Learning</p>
                            <p className="mt-1 text-xs text-gray-500">Continuous growth</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-2">🔒</div>
                            <p className="text-3xl font-bold text-gray-900">Security</p>
                            <p className="mt-1 text-sm font-semibold uppercase text-red-600">Focus Area</p>
                            <p className="mt-1 text-xs text-gray-500">Cybersecurity basics</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-2">🚀</div>
                            <p className="text-3xl font-bold text-gray-900">Backend</p>
                            <p className="mt-1 text-sm font-semibold uppercase text-red-600">Specialization</p>
                            <p className="mt-1 text-xs text-gray-500">API & Database</p>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-2">📱</div>
                            <p className="text-3xl font-bold text-gray-900">MWA</p>
                            <p className="mt-1 text-sm font-semibold uppercase text-red-600">Course</p>
                            <p className="mt-1 text-xs text-gray-500">Mobile & Web Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Interests Section */}
            <section className="border-b border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-semibold uppercase text-red-600">What I Do</p>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900">My Core Interests</h2>
                        <p className="mt-2 text-gray-600">What drives my passion for development</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-5xl mb-3">🔧</div>
                            <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
                            <p className="mt-2 text-gray-600">Building robust APIs, managing databases, and ensuring smooth server-side operations.</p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-5xl mb-3">🔒</div>
                            <h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
                            <p className="mt-2 text-gray-600">Protecting systems, identifying vulnerabilities, and implementing security best practices.</p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </div>
                        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                            <div className="text-5xl mb-3">📱💻</div>
                            <h3 className="text-xl font-semibold text-gray-900">MWA Development</h3>
                            <p className="mt-2 text-gray-600">Creating responsive, user-friendly applications for both mobile and web platforms.</p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 px-6 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-white">Ready to see my work?</h2>
                    <p className="mt-4 text-gray-300">Explore my articles and interests to learn more about my journey in development.</p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button to="/articles" variant="primary">View My Articles</Button>
                        <Button to="/about" variant="secondary">About Me</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;