import Button from "../../components/Button.jsx";
import yoyetImg from "../../assets/images/yoyet.jpg";

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Hero Section */}
            <section className="bg-gray-50 border-y-2 border-gray-200 px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="text-left">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                                ✨ Yoyetz Studio
                            </p>
                            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Mobile & Web
                                <span className="block text-red-600">Application Developer</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                                Passionate about building secure, scalable applications. Specializing in backend development and cybersecurity.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button to="/about" variant="primary">
                                    About Me →
                                </Button>
                                <Button to="/articles" variant="secondary">
                                    My Interests
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-3xl"></div>
                            <div className="relative rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-xl overflow-hidden">
                                <img 
                                    src={yoyet.jpg} 
                                    alt="Yoyetz"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Stats Section */}
            <section className="border-y-2 border-gray-200 bg-white px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                            📊 My Stats
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">Quick Overview</h2>
                        <p className="mt-2 text-gray-500">Key metrics from my development journey</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">📚</div>
                            <p className="text-4xl font-bold text-gray-900">2+</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Years of Learning
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Continuous growth</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">🔒</div>
                            <p className="text-4xl font-bold text-gray-900">Security</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Focus Area
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Cybersecurity basics</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">🚀</div>
                            <p className="text-4xl font-bold text-gray-900">Backend</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Specialization
                            </p>
                            <p className="mt-2 text-xs text-gray-500">API & Database</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">📱</div>
                            <p className="text-4xl font-bold text-gray-900">MWA</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Course
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Mobile & Web Apps</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Core Interests Section */}
            <section className="border-y-2 border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                            🎯 What I Do
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">My Core Interests</h2>
                        <p className="mt-2 text-gray-500">What drives my passion for development</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-blue-100">
                                <div className="text-5xl">🔧</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Building robust APIs, managing databases, and ensuring smooth server-side operations.
                            </p>
                            <Button className="mt-4" variant="secondary">
                                Learn More →
                            </Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-purple-100">
                                <div className="text-5xl">🔒</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Protecting systems, identifying vulnerabilities, and implementing security best practices.
                            </p>
                            <Button className="mt-4" variant="secondary">
                                Learn More →
                            </Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-green-100">
                                <div className="text-5xl">📱💻</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">MWA Development</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Creating responsive, user-friendly applications for both mobile and web platforms.
                            </p>
                            <Button className="mt-4" variant="secondary">
                                Learn More →
                            </Button>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 px-6 py-16 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl text-center">
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