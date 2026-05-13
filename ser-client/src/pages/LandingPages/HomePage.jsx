import Button from "../../components/Button.jsx";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-br from-zinc-50 to-white border-y-2 border-zinc-200 px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-purple-600">
                ✨ Hero Section
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wireframe Studio</span>
                <br />
                Layout
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-3xl border-2 border-zinc-200 bg-white p-6 shadow-xl">
                <div className="flex min-h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <img 
                    src="https://placehold.co/400x300/7c3aed/ffffff?text=Wireframe+Illustration"
                    alt="Hero Illustration"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section - Enhanced */}
      <section className="border-y-2 border-zinc-200 bg-white px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-600">
              📊 KPI Section
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Quick overview blocks</h2>
            <p className="mt-2 text-zinc-500">Key metrics that define our success and growth</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-3 text-4xl">📁</div>
              <p className="text-4xl font-bold text-zinc-900">12</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-purple-600">
                Projects Completed
              </p>
              <p className="mt-2 text-xs text-zinc-500">Successfully delivered</p>
            </div>
            
            <div className="group rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-3 text-4xl">📄</div>
              <p className="text-4xl font-bold text-zinc-900">08</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-purple-600">
                Sections Created
              </p>
              <p className="mt-2 text-xs text-zinc-500">Modular components</p>
            </div>
            
            <div className="group rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-3 text-4xl">🖥️</div>
              <p className="text-4xl font-bold text-zinc-900">24</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-purple-600">
                Screens Designed
              </p>
              <p className="mt-2 text-xs text-zinc-500">Responsive layouts</p>
            </div>
            
            <div className="group rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-3 text-4xl">🎨</div>
              <p className="text-4xl font-bold text-zinc-900">04</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-purple-600">
                Layout Systems
              </p>
              <p className="mt-2 text-xs text-zinc-500">Versatile frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Enhanced */}
      <section className="border-y-2 border-zinc-200 bg-zinc-50 px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-600">
              🎯 Feature Cards
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Simple wireframe cards</h2>
            <p className="mt-2 text-zinc-500">Explore our core features and capabilities</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature Card One */}
            <article className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50">
                <img 
                  src="https://placehold.co/300x200/3b82f6/ffffff?text=Feature+1"
                  alt="Feature 1"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Rapid Prototyping</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Create interactive wireframes in minutes with our drag-and-drop components and pre-built templates.
              </p>
              <Button className="mt-4" variant="primary">
                Learn More →
              </Button>
            </article>

            {/* Feature Card Two */}
            <article className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-50">
                <img 
                  src="https://placehold.co/300x200/8b5cf6/ffffff?text=Feature+2"
                  alt="Feature 2"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Collaboration Tools</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Work seamlessly with your team in real-time, share feedback, and iterate on designs together.
              </p>
              <Button className="mt-4" variant="primary">
                Learn More →
              </Button>
            </article>

            {/* Feature Card Three */}
            <article className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-50">
                <img 
                  src="https://placehold.co/300x200/10b981/ffffff?text=Feature+3"
                  alt="Feature 3"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">Export & Code</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
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