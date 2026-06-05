import Button from "../../components/Button.jsx";

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            {/* Hero Section */}
            <section className="border-y-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="rounded-3xl border-2 border-dashed border-maroon-300 bg-white p-6 shadow-lg">
                        <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-maroon-600 to-maroon-800">
                            <div className="text-center">
                                <div className="text-8xl mb-4">👨‍💻</div>
                                <p className="text-white font-semibold text-lg">Mobile & Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            About Me
                        </p>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            Mobile & Web Application Student
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
                            Passionate about backend development and security. I have beginner to basic skills in 
                            cybersecurity and MWA development.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button to="/" variant="primary">
                                Back Home
                            </Button>
                            <Button to="/articles" variant="secondary">
                                My Interests
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="border-y-2 border-gray-200 bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                        My Skills
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-900">What I Bring to the Table</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-maroon-500 bg-gradient-to-br from-white to-gray-50 p-5 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="text-4xl mb-3">🔧</div>
                        <p className="text-2xl font-bold text-gray-900">Backend</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-maroon-600">
                            Development
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-maroon-500 bg-gradient-to-br from-white to-gray-50 p-5 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="text-4xl mb-3">🔒</div>
                        <p className="text-2xl font-bold text-gray-900">Security</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-maroon-600">
                            Cybersecurity
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-maroon-500 bg-gradient-to-br from-white to-gray-50 p-5 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="text-4xl mb-3">📱</div>
                        <p className="text-2xl font-bold text-gray-900">Mobile</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-maroon-600">
                            App Dev
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-maroon-500 bg-gradient-to-br from-white to-gray-50 p-5 text-center transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="text-4xl mb-3">🌐</div>
                        <p className="text-2xl font-bold text-gray-900">Web</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-maroon-600">
                            Application
                        </p>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="border-y-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            My Journey
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-gray-900">My Story & Goals</h2>

                        <div className="mt-6 space-y-4">
                            <article className="rounded-3xl border-2 border-maroon-500 bg-white p-5 shadow-md transition-all hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-900">🎓 Education</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Currently studying Mobile & Web Application development, 
                                    focusing on backend technologies and security principles.
                                </p>
                            </article>
                            <article className="rounded-3xl border-2 border-maroon-500 bg-white p-5 shadow-md transition-all hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-900">💻 Experience</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    Working on backend systems, database management, and implementing 
                                    security measures for web applications.
                                </p>
                            </article>
                            <article className="rounded-3xl border-2 border-maroon-500 bg-white p-5 shadow-md transition-all hover:shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-900">🎯 Goals</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    To become a full-stack developer with expertise in cybersecurity, 
                                    building secure and scalable applications.
                                </p>
                            </article>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="rounded-3xl border-2 border-maroon-500 bg-white p-5 shadow-lg">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-maroon-600">
                            Visual Gallery
                        </p>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {[
                                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=200&fit=crop",
                                "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=200&h=200&fit=crop"
                            ].map((img, i) => (
                                <div key={i} className="flex aspect-square items-center justify-center rounded-[1.25rem] overflow-hidden bg-gradient-to-br from-maroon-100 to-maroon-200">
                                    <img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                        <Button className="mt-5 w-full" variant="primary">
                            View Portfolio →
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;