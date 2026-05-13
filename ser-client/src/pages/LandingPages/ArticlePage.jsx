import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import articles from '../../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-6xl mb-4">📖</div>
            <h1 className="text-3xl font-bold text-zinc-900">Article not found</h1>
            <p className="mt-2 text-zinc-600">The article you're looking for doesn't exist.</p>
            <Button to="/articles" className="mt-6" variant="primary">
              ← Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Article Header */}
      <section className="border-y-2 border-zinc-900 bg-gradient-to-r from-zinc-50 to-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Button to="/articles" variant="secondary">
              ← Back to Articles
            </Button>
          </div>
          
          {/* Category and Read Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-2xl">{article.image || '📄'}</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-600">
              {article.category || 'Article'}
            </span>
            <span className="text-[11px] text-zinc-400">•</span>
            <span className="text-[11px] text-zinc-500">
              {article.readTime || '5 min read'}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          
          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500">
            <span>📅 {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>👨‍💻 Wireframe Studio</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Featured Image */}
          <div className="mb-10 overflow-hidden rounded-2xl border-2 border-zinc-900 bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg">
            <div className="flex aspect-video items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-3">{article.image || '📚'}</div>
                <p className="text-sm text-zinc-600">Illustration for {article.title}</p>
              </div>
            </div>
          </div>

          {/* Content with better formatting */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => {
              // Check if paragraph contains code example (has \n and indentation)
              const isCodeExample = paragraph.includes('function') || 
                                    paragraph.includes('const') || 
                                    paragraph.includes('import') ||
                                    paragraph.includes('Example:');
              
              if (isCodeExample) {
                return (
                  <div key={index} className="my-6 rounded-xl border-2 border-zinc-800 bg-zinc-900 p-4 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                      <code>{paragraph}</code>
                    </pre>
                  </div>
                );
              }
              
              // Check if it's a list item (starts with -)
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 text-base leading-7 text-zinc-700">
                    {paragraph.substring(2)}
                  </li>
                );
              }
              
              // Regular paragraph
              return (
                <p key={index} className="text-base leading-7 text-zinc-700 mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-10 border-t-2 border-zinc-200"></div>

          {/* Key Takeaways Section */}
          <div className="rounded-2xl bg-purple-50 border-2 border-purple-200 p-6 mb-8">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">✨ Key Takeaways</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="text-purple-600 mt-0.5">✓</span>
                <span>Master the core concepts of {article.title.split(' - ')[0]}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="text-purple-600 mt-0.5">✓</span>
                <span>Apply best practices in your own projects</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700">
                <span className="text-purple-600 mt-0.5">✓</span>
                <span>Build more efficient and maintainable React applications</span>
              </li>
            </ul>
          </div>

          {/* Navigation between articles */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-6 border-t-2 border-zinc-200">
            <Button to="/articles" variant="secondary">
              ← All Articles
            </Button>
            <div className="flex gap-3">
              <Button to="/" variant="secondary">
                🏠 Home
              </Button>
              <Button to="/about" variant="primary">
                About Us →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;