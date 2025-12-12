export default function Contact() {
  return (
    <main className="container section">
      <h1>Contact</h1>

      <form id="contact-form" className="card no-hover" action="#" method="post">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message: </label>
        <textarea id="message" required />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <br />
    </main>
  );
}