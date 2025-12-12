import type { IComment } from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date | string): string {
  const d = new Date(time);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4 className="comment-user">{comment.user}</h4>
      <p className="comment-text">{comment.comment}</p>
      <span className="comment-time">{parseCommentTime(comment.time)}</span>
    </div>
  );
}
