import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article 
          key={article.name} 
          className="group rounded-2xl border-2 border-zinc-200 bg-white p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
        >
          {/* Image Section */}
          <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
            {article.imageUrl ? (
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-5xl">{article.image || '📄'}</div>
            )}
          </div>
          
          {/* Category */}
          <div className="mt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-purple-600">
              {article.category || `Article ${String(index + 1).padStart(2, '0')}`}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="mt-2 text-lg font-semibold text-zinc-900 line-clamp-2 min-h-[3.5rem]">
            {article.title}
          </h3>
          
          {/* Read Time */}
          <p className="mt-1 text-xs text-zinc-400">
            {article.readTime || '5 min read'}
          </p>
          
          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-zinc-600 line-clamp-3 min-h-[4.5rem]">
            {article.content[0]?.substring(0, 100)}...
          </p>
          
          {/* Button - Stays at bottom */}
          <div className="mt-4 pt-2">
            <Link to={`/articles/${article.name}`}>
              <Button className="w-full" variant="secondary">
                Read More →
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;