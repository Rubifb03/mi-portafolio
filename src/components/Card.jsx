export default function Card({ title, description, href, badge }) {
  return (
    <article className="card" role="article">
      {badge && <span className="badge">{badge}</span>}
      <h3 style={{ margin: "4px 0 6px" }}>{title}</h3>
      <p style={{ margin: "0 0 10px", color: "#475569" }}>{description}</p>
      {href && (
        <a className="btn" href={href} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      )}
    </article>
  );
}
