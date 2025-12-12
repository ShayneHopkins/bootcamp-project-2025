import blogs from "../blogData";
import BlogPreview from "../../components/blogPreview";

export default function BlogPage() {
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
