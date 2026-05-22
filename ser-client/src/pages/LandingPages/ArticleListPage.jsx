// import Button from '../../components/Button.jsx';
// import ArticleList from '../../components/ArticleList.jsx';
// import articles from '../../assets/article-content.js';

// const ArticleListPage = () => {
//   return (
//     <div className="flex w-full flex-col gap-6">
//       {/* Hero Section - Fixed Layout */}
//       <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="mx-auto max-w-5xl">
//           {/* Back Button - Top aligned */}
//           <div className="mb-8">
//             <Button to="/" variant="secondary">
//               ← Back Home
//             </Button>
//           </div>
          
//           {/* Hero Content */}
//           <div className="text-left">
//             <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-600">
//               Articles
//             </p>
//             <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl max-w-3xl">
//               Featured articles in a simple card grid
//             </h1>
//             <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg max-w-2xl">
//               A clean wireframe section for article thumbnails, titles, short descriptions, and one 
//               clear action per card.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Article Grid Section */}
//       <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           {/* Section Header */}
//           <div className="mb-8 text-left">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-purple-600">
//               Featured Articles
//             </p>
//             <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Article card grid</h2>
//             <p className="mt-1 text-sm text-zinc-500">Click any article to read the full content</p>
//           </div>

//           {/* Article Grid */}
//           <ArticleList articles={articles} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ArticleListPage;