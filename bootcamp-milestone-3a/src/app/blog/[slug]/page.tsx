import BlogModel, { type Blog } from "../../../database/blogSchema";
import {formatBlogDate} from "../../../database/blogSchema";
import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await BlogModel.findOne({ slug }).lean<Blog | null>();

  if (!blog) {
    return (
      <main className="container section">
        <h1>Blog not found</h1>
        <p><Link href="/blog">← Back to Blog</Link></p>
      </main>
    );
  }

  const formattedDate = formatBlogDate(blog.date);

  return (
    <main className="container section">
      <h1>{blog.title}</h1>
      <small>{formattedDate}</small>
      <img src={blog.image} alt={blog.imageAlt} className="round" />
      <p className="mt-2">{blog.description}</p>

      <p className="mt-2">
        <Link href="/blog" className="btn">← Back to Blog</Link>
      </p>
    </main>
  );
}