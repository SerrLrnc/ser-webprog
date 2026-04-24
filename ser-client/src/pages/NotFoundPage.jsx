import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="min-h-[70vh] border-y-2 border-zinc-900 bg-gradient-to-br from-zinc-50 to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated 404 Graphic */}
          <div className="relative mb-8">
            <div className="text-[120px] font-bold leading-none sm:text-[150px]">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">0</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="h-40 w-40 rounded-full border-4 border-purple-600 animate-ping"></div>
            </div>
          </div>

          {/* Error Message */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-600">
            Page Not Found
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Oops! You've found a broken link
          </h1>
          <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base max-w-md mx-auto">
            The link you followed to get here must be broken, or the page may have been moved or deleted.
          </p>

          {/* Divider */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-zinc-300"></div>
            <span className="text-xs text-zinc-400">What would you like to do?</span>
            <div className="h-px w-12 bg-zinc-300"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/" variant="primary">
              🏠 Go Back Home
            </Button>
            <Button to="/articles" variant="secondary">
              📚 Browse Articles
            </Button>
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center rounded-full border-2 border-zinc-300 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-600 transition hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900"
            >
              ⬅️ Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-8 rounded-2xl border-2 border-zinc-200 bg-white p-4 text-left">
            <p className="text-sm font-semibold text-zinc-700 mb-2">🔍 You might be looking for:</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="text-purple-600 hover:underline">Home Page</a>
              </li>
              <li>
                <a href="/articles" className="text-purple-600 hover:underline">All Articles</a>
              </li>
              <li>
                <a href="/about" className="text-purple-600 hover:underline">About Wireframe Studio</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;