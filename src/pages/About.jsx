import Avatar from "../images/Avatar.jpg";

export default function About() {
  return (
    <section className="card" style={{ marginTop: 16 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <img className="avatar" src={Avatar} alt="Mi foto" />
        <div className="About_me">
          <h2 style={{ margin: "0 0 6px" }}>Sobre mí</h2>
          <p style={{ margin: 0, color: "#475569" }} className="text-justify">
            Hola, soy Rubí Floreano, Desarrolladora Frontend. Me apasiona crear
            experiencias digitales que conecten a las personas con la
            tecnología. Comencé mi camino en la gestión digital y la atención al
            cliente, donde descubrí cómo la eficiencia y el diseño pueden
            transformar procesos y mejorar la experiencia del usuario. Hoy
            desarrollo interfaces web limpias, interactivas y optimizadas con
            HTML, CSS, JavaScript y React, integrando APIs y cuidando cada
            detalle visual. Me motiva seguir creciendo en proyectos que combinen
            diseño, inteligencia artificial y desarrollo web, aportando
            soluciones creativas y colaborando con equipos que valoren la
            innovación y la mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
}
