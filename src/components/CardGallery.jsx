import Card from "./Card";

// 💡 Aquí defines manualmente tus 4 proyectos destacados
const pinnedProjects = [
  {
    id: 1,
    title: "Social Gallery App",
    description:
      "Plataforma web tipo Instagram creada en el Sprint 18 del programa TripleTen. Permite registrarse, editar el perfil, subir y eliminar fotos, y dar 'me gusta'. Incluye autenticación, conexión backend–frontend y despliegue completo en servidor.",
    href: "http://dmfb.mooo.com/",
    badge: "Full Stack JS",
  },
  {
    id: 2,
    title: "R-Movies",
    description:
      "Aplicación web desarrollada con React + Vite para explorar películas populares mediante la API de The Movie Database (TMDB). Permite buscar por título, ver géneros, leer sinopsis y reproducir trailers desde una interfaz moderna y responsiva.",
    href: "https://github.com/Rubifb03/r-movies-react-app",
    badge: "React",
  },
  {
    id: 3,
    title: "Around API",
    description:
      "API REST desarrollada con Node.js, Express y MongoDB. Incluye rutas para usuarios y tarjetas, validación de datos, manejo de errores y operaciones CRUD completas. Implementa controladores, middlewares y validadores personalizados con Mongoose.",
    href: "https://github.com/Rubifb03/web_project_around_express",
    badge: "Node.js",
  },
  {
    id: 4,
    title: "Auth System Frontend",
    description:
      "Proyecto de autenticación y autorización desarrollado con React. Implementa registro y login de usuarios, rutas protegidas, manejo de tokens JWT con localStorage y un componente InfoTooltip para informar el estado de las acciones. Conectado a la API pública de TripleTen.",
    href: "https://github.com/Rubifb03/web_project_around_auth",
    badge: "React Auth",
  },
];

export default function CardGallery() {
  return (
    <section>
      <h2 className="Title_dos">Proyectos Destacados</h2>
      <div className="grid grid-2x2">
        {pinnedProjects.map((r) => (
          <Card
            key={r.id}
            title={r.title}
            description={r.description}
            href={r.href}
            badge={r.badge}
          />
        ))}
      </div>
    </section>
  );
}
