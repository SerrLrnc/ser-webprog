const articles = [
  {
    name: "getting-started-with-react",
    title: "Getting Started with React: A Complete Beginner's Guide",
    image: "🚀",
    imageUrl: "https://picsum.photos/id/0/400/250",
    category: "React Fundamentals",
    readTime: "8 min read",
    content: [
      "React has revolutionized the way we build web applications. Created by Facebook in 2013, it has become one of the most popular JavaScript libraries in the world.",
      "Why choose React? React uses a component-based architecture that makes your code reusable, maintainable, and easier to test. Instead of building entire pages, you build small, independent components that work together.",
      "Example of a simple React component:\nfunction WelcomeMessage() {\n  return (\n    <div className=\"greeting\">\n      <h1>Welcome to React!</h1>\n      <p>Start building amazing interfaces today.</p>\n    </div>\n  );\n}",
      "Key concepts to understand:\n- Components: The building blocks of any React app\n- JSX: JavaScript syntax extension that looks like HTML\n- Props: Data passed from parent to child components\n- State: Data that changes over time within a component",
      "To create your first React app, open your terminal and run:\nnpx create-react-app my-first-app\ncd my-first-app\nnpm start",
      "The Virtual DOM is one of React's secret weapons. Instead of directly manipulating the browser's DOM (which is slow), React creates a lightweight copy in memory and only updates what actually changed.",
      "Pro tip: Start with functional components and hooks. They're simpler to understand and are the modern way to write React applications."
    ]
  },
  {
    name: "understanding-usestate-hook",
    title: "Mastering the useState Hook: Managing State Like a Pro",
    image: "📊",
    category: "React Hooks",
    readTime: "6 min read",
    content: [
      "The useState hook is the foundation of state management in functional components. It allows your components to 'remember' information between renders.",
      "How useState works: It returns an array with two elements - the current state value and a function to update it. The array destructuring syntax makes it clean and readable.",
      "Basic useState example:\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
      "Working with objects in useState:\nconst [user, setUser] = useState({ name: '', age: 0 });\n\n// Update the entire object\nsetUser({ name: 'John', age: 25 });\n\n// Update only one property (spread operator)\nsetUser({ ...user, age: 26 });",
      "Common mistakes to avoid:\n- Don't call hooks inside loops, conditions, or nested functions\n- Always use the setter function to update state, never modify state directly\n- Remember that state updates are asynchronous - don't rely on the new value immediately",
      "Advanced pattern: Functional updates. When the new state depends on the previous state, use the functional form:\nsetCount(prevCount => prevCount + 1);\nsetCount(prevCount => prevCount + 1); // Each call uses the latest previous value",
      "Best practice: Keep state minimal. Don't store data that can be computed from existing state or props. This reduces bugs and improves performance."
    ]
  },
  {
    name: "useeffect-explained",
    title: "useEffect Deep Dive: Side Effects Made Simple",
    image: "🔄",
    category: "React Hooks",
    readTime: "10 min read",
    content: [
      "The useEffect hook lets you perform side effects in functional components. Think of it as componentDidMount, componentDidUpdate, and componentWillUnmount combined!",
      "What are side effects? Any operation that interacts with the outside world: data fetching, subscriptions, timers, manually changing the DOM, or logging.",
      "Basic useEffect syntax:\nimport { useEffect, useState } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    // This runs after every render (by default)\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(data => setUser(data));\n  }); // No dependency array = runs after every render\n  \n  return <div>{user?.name}</div>;\n}",
      "Controlling when useEffect runs with dependency array:\n// Runs only once (on mount)\nuseEffect(() => {\n  console.log('Component mounted');\n}, []); // Empty array\n\n// Runs when 'count' changes\nuseEffect(() => {\n  console.log(`Count changed to ${count}`);\n}, [count]);\n\n// Runs when 'count' OR 'name' changes\nuseEffect(() => {\n  console.log('Either count or name changed');\n}, [count, name]);",
      "Cleanup function - perfect for removing event listeners or canceling subscriptions:\nuseEffect(() => {\n  const timer = setInterval(() => {\n    console.log('Tick');\n  }, 1000);\n  \n  return () => {\n    clearInterval(timer); // Cleanup runs on unmount\n    console.log('Component unmounted, timer cleared');\n  };\n}, []);",
      "Real-world example: Fetching data with loading and error states:\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  \n  useEffect(() => {\n    fetch('https://api.example.com/data')\n      .then(res => res.json())\n      .then(data => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch(err => {\n        setError(err.message);\n        setLoading(false);\n      });\n  }, []);\n  \n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error}</p>;\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}",
      "Pro tip: Use multiple useEffect hooks for different concerns instead of one giant effect. This makes your code more readable and maintainable."
    ]
  },
  {
    name: "react-router-complete-guide",
    title: "React Router v6: The Complete Navigation Guide",
    image: "🧭",
    category: "React Router",
    readTime: "9 min read",
    content: [
      "React Router is the most popular routing library for React. It enables client-side routing, allowing users to navigate between pages without a full browser refresh.",
      "Installation:\nnpm install react-router-dom\n\nOr with yarn:\nyarn add react-router-dom",
      "Setting up the router in your app:\nimport { createBrowserRouter, RouterProvider } from 'react-router-dom';\nimport HomePage from './pages/HomePage';\nimport AboutPage from './pages/AboutPage';\nimport ArticlesPage from './pages/ArticlesPage';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <Layout />,\n    errorElement: <NotFoundPage />,\n    children: [\n      { index: true, element: <HomePage /> },\n      { path: 'about', element: <AboutPage /> },\n      { path: 'articles', element: <ArticlesPage /> },\n      { path: 'articles/:name', element: <ArticlePage /> },\n    ],\n  },\n]);\n\nfunction App() {\n  return <RouterProvider router={router} />;\n}",
      "Navigation with Link and NavLink:\nimport { Link, NavLink } from 'react-router-dom';\n\n// Basic link\n<Link to=\"/about\">About Us</Link>\n\n// NavLink with active styling\n<NavLink \n  to=\"/about\"\n  className={({ isActive }) => isActive ? 'active' : ''}\n>\n  About\n</NavLink>",
      "Using useParams to access URL parameters:\nimport { useParams } from 'react-router-dom';\n\nfunction ArticlePage() {\n  const { name } = useParams(); // 'name' matches :name in route\n  const article = articles.find(a => a.name === name);\n  return <div>{article?.title}</div>;\n}",
      "Programmatic navigation with useNavigate:\nimport { useNavigate } from 'react-router-dom';\n\nfunction LoginButton() {\n  const navigate = useNavigate();\n  \n  const handleLogin = () => {\n    // Do login logic\n    navigate('/dashboard'); // Redirect after login\n  };\n  \n  return <button onClick={handleLogin}>Login</button>;\n}",
      "Nested routes and Outlet:\nfunction Layout() {\n  return (\n    <div>\n      <NavBar />\n      <Outlet /> {/* Child routes render here */}\n      <Footer />\n    </div>\n  );\n}",
      "Protected routes example:\nfunction ProtectedRoute({ children }) {\n  const user = useAuth();\n  \n  if (!user) {\n    return <Navigate to=\"/login\" replace />;\n  }\n  \n  return children;\n}\n\n// Usage\n<Route \n  path=\"/dashboard\" \n  element={\n    <ProtectedRoute>\n      <Dashboard />\n    </ProtectedRoute>\n  } \n/>",
      "Best practices: Keep your routes organized, use layout routes for shared UI, and always include a 404 error route for unmatched paths."
    ]
  },
  {
    name: "building-responsive-tailwind",
    title: "Building Responsive Layouts with Tailwind CSS",
    image: "🎨",
    category: "Tailwind CSS",
    readTime: "7 min read",
    content: [
      "Tailwind CSS is a utility-first CSS framework that makes building responsive designs incredibly fast and intuitive. Instead of writing custom CSS, you compose utility classes directly in your HTML.",
      "Installation with Vite:\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\nUpdate your vite.config.js:\nimport tailwindcss from '@tailwindcss/vite';\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n});",
      "Responsive design made easy with breakpoint prefixes:\n// This button is full width on mobile, auto on desktop\n<button className=\"w-full md:w-auto\">Click me</button>\n\n// Text size adjusts based on screen size\n<p className=\"text-sm md:text-base lg:text-lg\">Responsive text</p>\n\n// Different layouts for different screens\n<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4\">\n  {items.map(item => <Card key={item.id} />)}\n</div>",
      "Available breakpoints in Tailwind:\n- sm: 640px (mobile landscape)\n- md: 768px (tablet)\n- lg: 1024px (laptop)\n- xl: 1280px (desktop)\n- 2xl: 1536px (large desktop)",
      "Dark mode with a single class:\n// Enable dark mode in tailwind.config.js\n// add: darkMode: 'class'\n\n// Usage\n<div className=\"bg-white dark:bg-zinc-900\">\n  <h1 className=\"text-black dark:text-white\">Dark mode ready</h1>\n</div>",
      "Customizing your theme in tailwind.config.js:\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        'brand-purple': '#7c3aed',\n        'brand-pink': '#ec4899',\n      },\n      fontFamily: {\n        'heading': ['Poppins', 'sans-serif'],\n      },\n    },\n  },\n};",
      "Using @apply for reusable component styles (useful in CSS files):\n.btn-primary {\n  @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition;\n}",
      "Pro tips:\n- Use flex and grid for layouts\n- Use gap instead of margin for spacing between items\n- Use arbitrary values for one-off designs: w-[342px]\n- Group related classes logically (layout first, then spacing, then colors)",
      "Example of a complete responsive card component:\n<div className=\"max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl\">\n  <div className=\"md:flex\">\n    <div className=\"md:shrink-0\">\n      <img className=\"h-48 w-full object-cover md:h-full md:w-48\" src=\"/card-image.jpg\" />\n    </div>\n    <div className=\"p-8\">\n      <h2 className=\"text-xl font-semibold text-zinc-900\">Responsive Card</h2>\n      <p className=\"mt-2 text-zinc-600\">This card adapts beautifully to any screen size!</p>\n    </div>\n  </div>\n</div>"
    ]
  },
  {
    name: "react-performance-optimization",
    title: "React Performance Optimization: Making Your Apps Lightning Fast",
    image: "⚡",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLE_MK3VRYqZO8SRe_XYfqCNVoMVgX_G8KQ&s", 
    category: "React Advanced",
    readTime: "12 min read",
    content: [
      "Performance matters! A fast React application provides better user experience, higher engagement, and better SEO rankings. Let's explore proven techniques to optimize your React apps.",
      "1. Use React.memo to prevent unnecessary re-renders:\nimport { memo } from 'react';\n\nconst ExpensiveComponent = memo(({ data }) => {\n  // This component only re-renders when 'data' changes\n  return <div>{/* complex rendering */}</div>;\n});",
      "2. useMemo for expensive calculations:\nimport { useMemo } from 'react';\n\nfunction ShoppingCart({ items }) {\n  const totalPrice = useMemo(() => {\n    // This calculation only runs when 'items' changes\n    return items.reduce((sum, item) => sum + item.price, 0);\n  }, [items]);\n  \n  return <div>Total: ${totalPrice}</div>;\n}",
      "3. useCallback for stable function references:\nimport { useCallback, useState } from 'react';\n\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n  \n  const handleClick = useCallback(() => {\n    console.log('Button clicked');\n  }, []); // Function reference never changes\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n      <ChildComponent onClick={handleClick} />\n    </div>\n  );\n}",
      "4. Lazy loading components with React.lazy and Suspense:\nimport { lazy, Suspense } from 'react';\n\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <HeavyComponent />\n    </Suspense>\n  );\n}",
      "5. Virtualize long lists with react-window:\nnpm install react-window\n\nimport { FixedSizeList as List } from 'react-window';\n\nfunction VirtualizedList({ items }) {\n  const Row = ({ index, style }) => (\n    <div style={style}>Item {items[index]}</div>\n  );\n  \n  return (\n    <List\n      height={400}\n      itemCount={items.length}\n      itemSize={35}\n      width=\"100%\"\n    >\n      {Row}\n    </List>\n  );\n}",
      "6. Code splitting at the route level:\nconst HomePage = lazy(() => import('./pages/HomePage'));\nconst AboutPage = lazy(() => import('./pages/AboutPage'));\nconst ArticlesPage = lazy(() => import('./pages/ArticlesPage'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<LoadingSpinner />}>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/about\" element={<AboutPage />} />\n        <Route path=\"/articles\" element={<ArticlesPage />} />\n      </Routes>\n    </Suspense>\n  );\n}",
      "7. Optimize images and assets:\n- Use modern formats (WebP, AVIF)\n- Implement lazy loading: <img loading=\"lazy\" src=\"image.jpg\" />\n- Use responsive images with srcSet\n- Consider using a CDN for static assets",
      "8. Avoid anonymous functions in render (they create new references each time):\n// Bad\n<button onClick={() => handleClick(id)}>Click</button>\n\n// Good\nconst handleButtonClick = useCallback(() => {\n  handleClick(id);\n}, [id]);\n\n<button onClick={handleButtonClick}>Click</button>",
      "9. Use the React DevTools Profiler to find performance bottlenecks:\n- Record a profiling session\n- Look for components that render too often\n- Look for expensive renders",
      "10. Monitor your app with Lighthouse:\n- Open DevTools → Lighthouse tab\n- Generate reports\n- Aim for 90+ scores in all categories",
      "Bonus tip: Always measure before optimizing! Use console.time() and React DevTools to identify real bottlenecks, not perceived ones."
    ]
  }
];

export default articles;