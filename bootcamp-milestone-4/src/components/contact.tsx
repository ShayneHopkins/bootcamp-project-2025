"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";


const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSuccess("Message sent! I'll get back to you as soon as I can.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Error sending message. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="container section">
      <h1>Contact Me</h1>
      <p className="text-mute">
        Have a question or want to connect? Send me a message below.
      </p>

      <form onSubmit={handleSubmit} className="mt-2">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to say?"
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
          style={{ marginTop: "12px" }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p style={{ color: "#5cd489", marginTop: "10px" }}>{success}</p>
        )}
        {error && (
          <p style={{ color: "#ff7b7b", marginTop: "10px" }}>{error}</p>
        )}
      </form>
    </main>
  );
}
