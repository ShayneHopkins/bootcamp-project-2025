import blogs, { type Blog } from "../../blogData";
import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = (blogs as Blog[]).find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="container section">
        <h1>Blog not found</h1>
        <p><Link href="/blog">← Back to Blog</Link></p>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1>{blog.title}</h1>
      <small>{blog.date}</small>
      <img src={blog.image} alt={blog.imageAlt} className="round" />
      <p className="mt-2">{blog.description}</p>

      <p className="mt-2">
        <Link href="/blog" className="btn">← Back to Blog</Link>
      </p>
    </main>
  );
}