import connectDB from "../../../database/db";
import BlogModel, {
  type Blog,
  formatBlogDate,
} from "../../../database/blogSchema";
import Comment from "../../../components/Comment";
import Link from "next/link";
import AddComment from "../../../components/AddComment";

type Params = {
  slug: string;
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  await connectDB();

  const blog = (await BlogModel.findOne({ slug }).lean()) as Blog | null;

  if (!blog) {
    return (
      <main className="container section">
        <h1>Blog not found</h1>
        <p>
          <Link href="/blog">← Back to Blog</Link>
        </p>
      </main>
    );
  }

  const formattedDate = formatBlogDate(blog.date);

  return (
    <>
      <main className="container section">
        <h1>{blog.title}</h1>
        <small>{formattedDate}</small>
        <img src={blog.image} alt={blog.imageAlt} className="round" />
        <p className="mt-2">{blog.content}</p>

        <p className="mt-2">
          <Link href="/blog" className="btn">
            ← Back to Blog
          </Link>
        </p>
      </main>

      <section className="comments-section">
        <h2 className="comments-heading">Comments</h2>

        <div className="comments-inner">
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((c, index) => <Comment key={index} comment={c} />)
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </section>

      <AddComment slug={blog.slug} />
    </>
  );
}
