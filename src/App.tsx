import Carousel from "./components/Carousel";
import ThemeToggle from "./components/ThemeToggle";
import {
  education,
  experience,
  links,
  profile,
  projects,
  skills,
} from "./data/content";
import "./App.css";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="wrap site-header-inner">
          <a href="#top" className="logo">
            {profile.name}
          </a>
          <nav className="nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          {profile.photo ? (
            <img
              className="hero-photo"
              src={profile.photo}
              alt={profile.name}
            />
          ) : (
            <div className="hero-photo hero-photo-placeholder" aria-hidden="true" />
          )}
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-location">{profile.location}</p>
          <span className="status-badge">{profile.status}</span>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-links">
            <a className="btn btn-primary" href={`mailto:${links.email}`}>
              Email me
            </a>
            {links.resumePdf && (
              <a
                className="btn"
                href={links.resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                Resume (PDF)
              </a>
            )}
            {links.github && (
              <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {links.substack && (
              <a className="btn" href={links.substack} target="_blank" rel="noreferrer">
                Substack
              </a>
            )}
          </div>
        </section>

        <section id="experience" className="section wrap">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="card">
                <div className="card-head">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="card-subtitle">{job.company}</p>
                  </div>
                  <span className="dates">{job.dates}</span>
                </div>
                {job.note && <p className="note">{job.note}</p>}
                <ul>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section wrap">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.name} className="card">
                <div className="card-head">
                  <h3>{project.name}</h3>
                  {project.status && (
                    <span className="status-badge status-badge-sm">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="card-subtitle">{project.role}</p>
                <p>{project.description}</p>
                <ul className="tag-list">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.images && project.images.length > 0 && (
                  <Carousel images={project.images} alt={project.name} />
                )}
                {project.videoEmbed && (
                  <div
                    className={
                      project.videoOrientation === "portrait"
                        ? "video-embed video-embed-portrait"
                        : "video-embed"
                    }
                  >
                    <iframe
                      src={project.videoEmbed}
                      title={`${project.name} demo video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {!project.videoEmbed && project.video && (
                  <video className="video-self-hosted" controls src={project.video} />
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View project →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section wrap">
          <h2>Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skills-group">
                <h3>{category}</h3>
                <ul className="tag-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section wrap">
          <h2>Education</h2>
          <div className="grid">
            {education.map((item) => (
              <article key={item.degree} className="card">
                <h3>{item.degree}</h3>
                <p className="card-subtitle">{item.school}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section wrap contact-section">
          <h2>Get in touch</h2>
          <p>
            Open to new opportunities and interesting conversations — reach
            out anytime.
          </p>
          <a className="btn btn-primary" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p className="wrap">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}

export default App;
