import "./styles.css";
import CardGallery from "./components/CardGallery";
import InfoTooltip from "./components/InfoTooltip";
import PopupAlert from "./components/PopupAlert";
import { usePopup } from "./hooks/usePopup";
import About from "./pages/About";
import { useState } from "react";

export default function App() {
  const contact = usePopup();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    contact.show();
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="My_port">Mi Portafolio</h1>
        <div className="toolbar">
          <InfoTooltip>
            Portafolio con React + Vite. Click en los proyectos para verlos.
          </InfoTooltip>
          <button
            className="btn"
            onClick={() =>
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contacto
          </button>
        </div>
      </header>

      <About />
      <CardGallery />

      <section id="contacto" className="card" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Contacto</h2>
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
          <label>
            Nombre
            <input
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Mensaje
            <textarea
              rows="4"
              required
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            />
          </label>
          <button className="btn" type="submit">
            Enviar
          </button>
        </form>
        <p style={{ marginTop: 8, color: "#64748b" }}>
          Este formulario muestra un popup de confirmación (demo). Integra tu
          backend o un servicio como Formspree si deseas enviar correos.
        </p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} · Hecho con Vite + React
      </footer>

      <PopupAlert
        open={contact.open}
        onClose={contact.hide}
        title="¡Gracias por tu mensaje!"
      >
        <p>
          Te responderé pronto. Si quieres, escríbeme por{" "}
          <a href="mailto:tu@correo.com">tu@correo.com</a>.
        </p>
      </PopupAlert>
    </div>
  );
}
