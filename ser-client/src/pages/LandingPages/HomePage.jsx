import Button from "../../components/Button.jsx";

const HomePage = () => {
    return (
        <div className="relative flex w-full flex-col gap-2 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden border-y border-gray-200 px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=600&fit=crop"
                        alt=""
                        className="h-full w-full object-cover opacity-10"
                    />
                </div>
                
                {/* Background Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
                <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-maroon-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                
                {/* Content */}
                <div className="relative mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="text-left">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-maroon-600">
                                ✨ Yoyetz Studio
                            </p>
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Mobile & Web
                                <span className="block text-maroon-600">Application Developer</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-700 sm:text-lg">
                                Passionate about building secure, scalable applications. Specializing in backend development and cybersecurity.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button to="/about" variant="primary">About Me →</Button>
                                <Button to="/articles" variant="secondary">My Interests</Button>
                            </div>
                        </div>
                        
                        {/* Developer Card */}
                        <div className="relative rounded-3xl border border-white/20 bg-white/90 p-6 backdrop-blur-md shadow-2xl">
                            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-maroon-600 via-maroon-700 to-gray-900">
                                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
                                <div className="text-center">
                                    <div className="text-8xl mb-3">👨‍💻</div>
                                    <p className="text-white font-semibold text-xl">Yoyetz</p>
                                    <p className="text-white/90">Developer & Security Enthusiast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y-2 border-gray-200 bg-white px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            📊 My Stats
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">Quick Overview</h2>
                        <p className="mt-2 text-gray-700">Key metrics from my development journey</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-2 text-4xl">📚</div>
                            <p className="text-4xl font-bold text-gray-900">2+</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-maroon-600">
                                Years of Learning
                            </p>
                            <p className="mt-2 text-xs text-gray-700">Continuous growth</p>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-2 text-4xl">🔒</div>
                            <p className="text-4xl font-bold text-gray-900">Security</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-maroon-600">
                                Focus Area
                            </p>
                            <p className="mt-2 text-xs text-gray-700">Cybersecurity basics</p>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-2 text-4xl">🚀</div>
                            <p className="text-4xl font-bold text-gray-900">Backend</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-maroon-600">
                                Specialization
                            </p>
                            <p className="mt-2 text-xs text-gray-700">API & Database</p>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-2 text-4xl">📱</div>
                            <p className="text-4xl font-bold text-gray-900">MWA</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-maroon-600">
                                Course
                            </p>
                            <p className="mt-2 text-xs text-gray-700">Mobile & Web Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Interests Section */}
            <section className="border-y-2 border-gray-200 bg-gray-50 px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            🎯 What I Do
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">My Core Interests</h2>
                        <p className="mt-2 text-gray-700">What drives my passion for development</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Backend Card */}
                        <article className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                                    alt="Backend Development"
                                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                Building robust APIs, managing databases, and ensuring smooth server-side operations.
                            </p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </article>

                        {/* Cybersecurity Card */}
                        <article className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
                                    alt="Cybersecurity"
                                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                Protecting systems, identifying vulnerabilities, and implementing security best practices.
                            </p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </article>

                        {/* MWA Card */}
                        <article className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-2 hover:border-maroon-300 hover:shadow-2xl">
                            <div className="mb-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                                    alt="MWA Development"
                                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">MWA Development</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                Creating responsive, user-friendly applications for both mobile and web platforms.
                            </p>
                            <Button className="mt-4" variant="secondary">Learn More →</Button>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-maroon-900 px-6 py-14 sm:px-8 lg:px-12">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
                
                <div className="relative mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to see my work?</h2>
                    <p className="mt-4 text-lg text-gray-300">Explore my articles and interests to learn more about my journey in development.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button to="/articles" variant="primary">View My Articles</Button>
                        <Button to="/about" variant="secondary">About Me</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;