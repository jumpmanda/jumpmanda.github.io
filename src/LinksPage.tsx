import ThemeToggle from "./components/ThemeToggle";
import { links, profile } from "./data/content";
import "./LinksPage.css";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

function LinksPage() {
  const items: LinkItem[] = [
    { label: "Full portfolio →", href: "/" },
    { label: "Email me", href: `mailto:${links.email}` },
    ...(links.resumePdf
      ? [{ label: "Resume (PDF)", href: links.resumePdf, external: true }]
      : []),
    ...(links.github
      ? [{ label: "GitHub", href: links.github, external: true }]
      : []),
    ...(links.linkedin
      ? [{ label: "LinkedIn", href: links.linkedin, external: true }]
      : []),
    ...(links.substack
      ? [{ label: "Substack", href: links.substack, external: true }]
      : []),
  ];

  return (
    <div className="links-page">
      <div className="links-theme-toggle">
        <ThemeToggle />
      </div>
      <main className="links-card">
        {profile.photo ? (
          <img className="links-photo" src={profile.photo} alt={profile.name} />
        ) : (
          <div className="links-photo links-photo-placeholder" aria-hidden="true" />
        )}
        <h1>{profile.name}</h1>
        <p className="links-title">{profile.title}</p>
        {profile.location && <p className="links-location">{profile.location}</p>}

        <nav className="links-list">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="links-item"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
}

export default LinksPage;
