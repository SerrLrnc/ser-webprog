import Button from "../../components/Button.jsx";

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-8">
            {/* Hero Section */}
            <section className="bg-gray-50 border-y-2 border-gray-200 px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="text-left">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                                ✨ Hero Section
                            </p>
                            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Welcome to <span className="text-red-600">Wireframe Studio</span>
                                <br />
                                Layout
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                                Discover the art of wireframing with a simple layout system for hero content, key
                                numbers, and feature cards. Perfect for rapid prototyping and design systems.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button href="/about" variant="primary">
                                    Learn More →
                                </Button>
                                <Button href="/articles" variant="secondary">
                                    View Articles
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-3xl"></div>
                            <div className="relative rounded-3xl border-2 border-gray-200 bg-white p-6 shadow-xl">
                                <div className="flex min-h-80 items-center justify-center rounded-2xl bg-red-600">
                                    <img 
                                        src="https://placehold.co/400x300/ffffff/ffffff?text=Wireframe+Illustration"
                                        alt="Hero Illustration"
                                        className="rounded-xl shadow-lg opacity-0"
                                    />
                                    <span className="text-white text-4xl">🚀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KPI Section */}
            <section className="border-y-2 border-gray-200 bg-white px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                            📊 KPI Section
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">Quick overview blocks</h2>
                        <p className="mt-2 text-gray-500">Key metrics that define our success and growth</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">📁</div>
                            <p className="text-4xl font-bold text-gray-900">12</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Projects Completed
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Successfully delivered</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">📄</div>
                            <p className="text-4xl font-bold text-gray-900">08</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Sections Created
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Modular components</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">🖥️</div>
                            <p className="text-4xl font-bold text-gray-900">24</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Screens Designed
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Responsive layouts</p>
                        </div>
                        
                        <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-3 text-4xl">🎨</div>
                            <p className="text-4xl font-bold text-gray-900">04</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-red-600">
                                Layout Systems
                            </p>
                            <p className="mt-2 text-xs text-gray-500">Versatile frameworks</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="border-y-2 border-gray-200 bg-gray-50 px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-600">
                            🎯 Feature Cards
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-gray-900">Simple wireframe cards</h2>
                        <p className="mt-2 text-gray-500">Explore our core features and capabilities</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-blue-100">
                                <div className="text-5xl">🚀</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Rapid Prototyping</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Create interactive wireframes in minutes with our drag-and-drop components and pre-built templates.
                            </p>
                            <Button className="mt-4" variant="primary">
                                Learn More →
                            </Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-purple-100">
                                <div className="text-5xl">🤝</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Collaboration Tools</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Work seamlessly with your team in real-time, share feedback, and iterate on designs together.
                            </p>
                            <Button className="mt-4" variant="primary">
                                Learn More →
                            </Button>
                        </article>

                        <article className="group rounded-2xl border-2 border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-green-100">
                                <div className="text-5xl">📦</div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Export & Code</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Generate production-ready code and export your designs to multiple formats for development.
                            </p>
                            <Button className="mt-4" variant="primary">
                                Learn More →
                            </Button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;