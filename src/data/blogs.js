export const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks: A Deep Dive into useState and useEffect",
    excerpt:
      "Understanding React hooks fundamentally changes how you think about component state and side effects. Let's explore the patterns that separate beginners from advanced developers.",
    category: "React",
    categoryColor: "#E8702A",
    author: "Sarah Mitchell",
    authorRole: "Senior Frontend Engineer",
    authorInitials: "SM",
    date: "March 15, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["React", "JavaScript", "Hooks"],
    featured: true,
    views: 14200,
    content: `
<h2>What Are React Hooks?</h2>
<p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They completely changed how we approach component design and state management.</p>
<blockquote>Hooks allow you to reuse stateful logic without changing your component hierarchy — this makes it easy to share hooks among many components.</blockquote>
<h2>The useState Hook</h2>
<p>useState is the most fundamental hook. It returns a stateful value and a function to update it. Unlike class components, you can use multiple state variables without coupling them together.</p>
<ul>
  <li>Each piece of state is independent</li>
  <li>Updates trigger re-renders automatically</li>
  <li>State can be any JavaScript value: number, string, array, or object</li>
</ul>
<h2>The useEffect Hook</h2>
<p>useEffect lets you perform side effects in function components. Data fetching, subscriptions, and manually changing the DOM are all considered side effects. useEffect covers the same use cases as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
<p>The key insight with useEffect is the dependency array — it controls when your effect runs. An empty array means the effect runs only once on mount. Omitting it means it runs after every render.</p>
<h2>Building Custom Hooks</h2>
<p>One of the most powerful aspects of hooks is the ability to create your own. A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks. This lets you extract component logic into reusable functions.</p>
    `.trim(),
  },
  {
    id: 2,
    title: "Python for Data Science: From Pandas to Machine Learning",
    excerpt:
      "A comprehensive roadmap for anyone looking to transition into data science using Python. We cover the essential libraries, workflows, and mental models.",
    category: "Python",
    categoryColor: "#4E7352",
    author: "Dr. James Chen",
    authorRole: "Data Scientist & Educator",
    authorInitials: "JC",
    date: "March 10, 2025",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    tags: ["Python", "Data Science", "Pandas", "ML"],
    featured: true,
    views: 9800,
    content: `
<h2>Why Python for Data Science?</h2>
<p>Python has become the lingua franca of data science for good reason. Its readable syntax, vast ecosystem of libraries, and strong community support make it the perfect tool for exploratory data analysis, visualization, and machine learning.</p>
<h2>Pandas: The Data Manipulation Powerhouse</h2>
<p>Before you can analyze data, you need to wrangle it. Pandas provides DataFrames — two-dimensional labeled data structures — that make it intuitive to load, clean, filter, transform, and summarize your datasets.</p>
<blockquote>Mastering Pandas is probably the single highest-leverage skill in data science. Almost every workflow starts here.</blockquote>
<h2>NumPy for Numerical Computing</h2>
<p>NumPy provides the mathematical foundation for nearly all scientific computing in Python. Its array operations are implemented in C, making them dramatically faster than pure Python loops.</p>
<h2>Moving to Machine Learning with scikit-learn</h2>
<p>Once you understand your data through exploration, scikit-learn provides consistent, well-documented APIs for training and evaluating models — from linear regression to gradient boosting.</p>
    `.trim(),
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each Layout Tool",
    excerpt:
      "Both Grid and Flexbox are powerful layout tools, but they excel at different tasks. Learn the mental model that will make you a layout expert.",
    category: "CSS",
    categoryColor: "#C5922E",
    author: "Aisha Okonkwo",
    authorRole: "UI/UX Engineer",
    authorInitials: "AO",
    date: "March 5, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    tags: ["CSS", "Frontend", "Layout"],
    featured: false,
    views: 7400,
    content: `
<h2>The Core Mental Model</h2>
<p>The easiest way to think about the difference: Flexbox is one-dimensional — it lays out items along a single axis (row or column). CSS Grid is two-dimensional — it controls both rows and columns simultaneously.</p>
<h2>When to Use Flexbox</h2>
<p>Flexbox shines when you're aligning items in a single direction. Navigation bars, button groups, centering an element both horizontally and vertically, and any component where you want items to flexibly fill available space.</p>
<h2>When to Use Grid</h2>
<p>Grid is ideal for page-level layouts and complex two-dimensional arrangements. Card grids, magazine-style layouts, and any scenario where you need precise control over both rows and columns simultaneously.</p>
<blockquote>If you're designing the macro layout of a page, reach for Grid. If you're aligning items within a component, reach for Flexbox.</blockquote>
    `.trim(),
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js and Express: A Complete Guide",
    excerpt:
      "Learn how to design, build, and secure production-ready REST APIs using Node.js and Express. Covers routing, middleware, authentication, and best practices.",
    category: "Node.js",
    categoryColor: "#4E7352",
    author: "Marcus Rivera",
    authorRole: "Backend Engineer",
    authorInitials: "MR",
    date: "Feb 28, 2025",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Node.js", "Express", "API", "Backend"],
    featured: false,
    views: 6100,
    content: `
<h2>Why Express?</h2>
<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building APIs. Its simplicity is both its strength and its challenge — you have full control over architecture, which means you need to make thoughtful design decisions.</p>
<h2>Structuring Your Routes</h2>
<p>A well-structured Express app separates routes, controllers, and services. Routes define the URL patterns and HTTP methods. Controllers handle request/response logic. Services handle business logic and data access.</p>
<blockquote>The best REST API is one where the URL structure is self-documenting and the responses are predictable.</blockquote>
<h2>Middleware: The Heart of Express</h2>
<p>Middleware functions have access to the request and response objects, and the next middleware in the application's request-response cycle. This pattern enables powerful composition: authentication, logging, error handling, and request parsing are all implemented as middleware.</p>
    `.trim(),
  },
  {
    id: 5,
    title: "Introduction to TypeScript: Type Safety Without the Pain",
    excerpt:
      "TypeScript's reputation for complexity is mostly undeserved. Learn how to incrementally adopt TypeScript and let the type system work for you.",
    category: "TypeScript",
    categoryColor: "#2563EB",
    author: "Elena Vasquez",
    authorRole: "TypeScript Enthusiast",
    authorInitials: "EV",
    date: "Feb 20, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    tags: ["TypeScript", "JavaScript", "Types"],
    featured: false,
    views: 8900,
    content: `
<h2>What TypeScript Actually Is</h2>
<p>TypeScript is a superset of JavaScript — every valid JavaScript file is valid TypeScript. You're not learning a new language; you're learning to express what your JavaScript already means more explicitly.</p>
<h2>Basic Types</h2>
<p>TypeScript has primitive types (string, number, boolean), array types, object types, and more. The type system catches errors at compile time rather than runtime — which means you find bugs before your users do.</p>
<blockquote>TypeScript doesn't slow you down. Once configured, it speeds you up by giving you confidence that your refactors won't break things.</blockquote>
    `.trim(),
  },
  {
    id: 6,
    title: "Understanding Git: Branching, Merging, and Collaboration",
    excerpt:
      "Git can feel intimidating, but understanding a few core mental models makes everything click. This guide covers everything from basic commits to complex rebase workflows.",
    category: "Git",
    categoryColor: "#DC2626",
    author: "Tom Nguyen",
    authorRole: "DevOps Engineer",
    authorInitials: "TN",
    date: "Feb 12, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
    tags: ["Git", "Version Control", "Collaboration"],
    featured: false,
    views: 5300,
    content: `
<h2>The Git Mental Model</h2>
<p>Git stores snapshots of your project, not differences between files. Every commit is a full picture of your repository at a point in time. This is counterintuitive but once you internalize it, Git's behavior becomes predictable.</p>
<h2>Branching Without Fear</h2>
<p>Branches in Git are just pointers to commits — they're almost free to create. The best Git workflows embrace branching liberally: a branch for each feature, bug fix, or experiment.</p>
<blockquote>Commit early, commit often. It's always easier to squash commits later than to reconstruct what you did in a giant commit.</blockquote>
    `.trim(),
  },
];

export const categories = [
  "All",
  "React",
  "Python",
  "CSS",
  "Node.js",
  "TypeScript",
  "Git",
];
