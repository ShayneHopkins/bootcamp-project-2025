export default function Resume() {
  return (
    <main className="container section">
      <h1>Resume</h1>

      {/* Rename to /resume.pdf if you change the actual filename */}
      <a href="/Resume.pdf" download>Download Resume</a>

      <div className="resume">
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="entry">
            <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
            <p className="entry-info">
              California Polytechnic State University, San Luis Obispo | Expected Graduation June 2029
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul className="course-list">
            <li>Hack4Impact HTML, CSS, & Git Starter Pack</li>
            <li>CSC 202 Data Structures</li>
            <li>CSC 490 Advanced Selected Topics</li>
            <li>Calculus III</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list">
            <li>Fluent in English, Spanish, and Italian</li>
            <li>Fluent in guitar and music theory</li>
            <li>Proficient in Java and Python programming, Microsoft Excel, Google Sheets, Windows OS, iOS, and MacOS</li>
            <li>Computer builder</li>
            <li>Strong public speaking, communication, and mentorship abilities</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          <div className="entry">
            <h3 className="entry-title">Widget Makers Employee</h3>
            <p className="entry-info">
              Widget Makers | June 2025 - September 2025 | 956 W Hyde Park Blvd, Inglewood, CA 90302
            </p>
            <p className="entry-description">
              Interned 40 hrs/week… Wrote and digitized maintenance guides for over 35 machines, including mills,
              laser cutters, 60 ton press brakes, etc. Operated sanders, grinders, lathes, and power tools to
              fabricate machine parts. Built an office.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">References</h2>
          <ul className="references-list">
            <li>
              Joey Weinmann, Widget Makers Owner |
              <a href="mailto:joey@widgetmakers.com"> joey@widgetmakers.com</a>
            </li>
            <li>
              Lane Gilchrist, S.T.E.M. Coalition Employee |
              <a href="mailto:lane.gilchrist@alphaogroup.com"> lane.gilchrist@alphaogroup.com</a> | (719) 331-5826
            </li>
            <li>
              Dr. Marty Hudson, Hudson Geotechnics |
              <a href="mailto:marty@hudsongeotechnics.com"> marty@hudsongeotechnics.com</a> | (424) 220-4541
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}