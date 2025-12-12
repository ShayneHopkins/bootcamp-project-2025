// src/app/blog/page.tsx
import connectDB from "../../database/db";
import BlogModel, { type Blog } from "../../database/blogSchema";
import BlogPreview from "../../components/blogPreview";

// This runs on the server and talks to MongoDB
async function getBlogs(): Promise<Blog[]> {
  await connectDB();

  try {
    // get all blogs sorted newest → oldest
    const blogs = await BlogModel.find().sort({ date: -1 }).lean();
    return blogs as unknown as Blog[];
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <main className="container section">
        <h1>Blog</h1>
        <p>No blogs found. Check your MongoDB collection.</p>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1>Blog</h1>

      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
