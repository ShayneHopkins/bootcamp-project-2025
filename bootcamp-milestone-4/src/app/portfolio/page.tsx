import connectDB from "../../database/db";
import ProjectModel, { type Project } from "../../database/projectSchema";

async function getProjects(): Promise<Project[]> {
  await connectDB();

  try {
    const projects = await ProjectModel.find()
      .sort({ date: -1 }) // newest first
      .lean<Project[]>();

    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="container section">
        <h1>Portfolio</h1>
        <p>No projects found. Check your MongoDB “projects” collection.</p>
      </main>
    );
  }

  return (
    <main className="container section">
      <h1>Portfolio</h1>
      <div id="portfolio-container">
        {projects.map((project) => (
          <div key={project.slug} className="card no-hover">
            <h2>{project.title}</h2>
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-img"
            />

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
