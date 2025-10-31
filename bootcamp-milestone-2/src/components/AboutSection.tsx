export default function AboutSection() {
  return (
    <section className="section">
      <h1>About Me</h1>

      <div className="about">
        <div className="about-image">
          <img src="/galaxy.jpg" alt="Photo of a galaxy" width={300} height={300} />
        </div>

        <div className="about-text">
          <p>
            Hello! My name is <strong>Shayne Hopkins</strong>. I am a Freshman at
            <strong> Cal Poly SLO</strong> majoring in <strong>Computer Science</strong>.
            I love music theory, gaming, programming, and inside jokes.
          </p>
          <p>
            I am <em>really</em> looking forward to the opportunity to join
            <strong> Hack4Impact</strong>, and I can't wait to meet the team!
          </p>
        </div>
      </div>
    </section>
  );
}