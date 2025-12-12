"use client";

import { useState } from "react";

type AddCommentProps = {
  slug: string;
};

export default function AddComment({ slug }: AddCommentProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.trim() || !comment.trim()) {
      alert("Please fill out both your name and comment.");
      return;
    }

    try {
      setStatus("loading");

      const res = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        console.error("Error response from API:", data);
        alert(data?.message ?? "Error submitting comment");
        setStatus("error");
        return;
      }

      setStatus("success");
      setUser("");
      setComment("");
    } catch (err) {
      console.error("Network or JS error while submitting comment:", err);
      alert("Error submitting comment");
      setStatus("error");
    }
  };

  return (
    <section className="comments-section">
      <h2 className="comments-heading">Add a Comment</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        <label>
          Name
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Your name"
          />
        </label>

        <label>
          Comment
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write something nice…"
          />
        </label>

        <button type="submit" className="btn">
          {status === "loading" ? "Submitting..." : "Submit Comment"}
        </button>

        {status === "success" && (
          <p className="mt-1 text-mute">
            Comment submitted! Refresh to see it.
          </p>
        )}
      </form>
    </section>
  );
}
