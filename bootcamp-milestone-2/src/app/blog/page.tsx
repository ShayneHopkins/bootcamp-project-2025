import blogs from "../blogData";              
import BlogPreview from "../../components/blogPreview";

export default function BlogPage() {
  return (
    <main className="container section">
      <h1>Blog</h1>

      <div
        id="blog-container"
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}