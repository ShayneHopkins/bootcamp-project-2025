export default function Portfolio() {
  return (
    <main className="container section">
      <h1>Portfolio</h1>

      <div className="project">
        <a href="/">
          <img
            src="/NGC_4414_(NASA-med).jpg"
            alt="Image of the Milky Way"
            width={300}
            height={300}
          />
        </a>
        <div className="project-details">
          <p className="project-name">Shayne's Super Awesome Radical Website of Epicness</p>
          <p className="project-description">
            This website aims to evoke the most <strong>fun</strong> out of
            <strong> anything</strong> that has ever been concieved!
          </p>
          <a href="/">Learn More!</a>
        </div>
      </div>
      <br />
    </main>
  );
}