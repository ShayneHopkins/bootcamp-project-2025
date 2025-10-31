import type { Blog } from "../app/blogData";
import styles from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview({
  title,
  description,
  image,
  imageAlt,
  date,
  slug,
}: Blog) {
  return (
    <div className={`${styles.card} card`}>
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <img src={image} alt={imageAlt} className="web-blog-img" />
      <p>{description}</p>
      <small>{date}</small>
    </div>
  );
}
