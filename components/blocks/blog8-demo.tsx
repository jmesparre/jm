import { Blog8 } from "@/components/blocks/blog8"

const demoData = {
  heading: "Trabajos",
  description:
    "Explora una selección de nuestros trabajos más recientes, donde combinamos diseño innovador y desarrollo robusto para crear soluciones digitales que generan impacto. Cada proyecto es un testimonio de nuestra dedicación a la calidad y a los resultados tangibles.",
  posts: [
    {
      id: "proyecto-arami",
      title: "Estudio Arami: Diseño Web y Branding",
      summary: "Desarrollo de un sitio web moderno y una identidad de marca cohesiva para Estudio Arami, enfocándonos en una experiencia de usuario intuitiva y un diseño visual atractivo que refleja su profesionalismo.",
      label: "Diseño Web & Branding",
      author: "Juan Manuel Esparré",
      published: "10 Mar 2023",
      url: "/proyectos/estudio-arami",
      image: "/arami-trabajo.png",
      altText: "Sitio web y branding para Estudio Arami",
      tags: ["Diseño Web", "Branding", "UX/UI"],
    },
    {
      id: "proyecto-tienda-virtual",
      title: "E-commerce para Tienda de Ropa Online",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, gestión de inventario y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "E-commerce",
      author: "Juan Manuel Esparré",
      published: "25 Sep 2023",
      url: "/proyectos/tienda-virtual",
      image: "/tienda-trabajo.png",
      altText: "Tienda virtual de ropa online",
      tags: ["E-commerce", "Desarrollo Web", "Pagos Online"],
    },
    {
      id: "proyecto-turismo-san-luis",
      title: "Plataforma de Turismo para San Luis",
      summary: "Creación de una plataforma interactiva para promover el turismo en San Luis, con funcionalidades de búsqueda de destinos, galerías de imágenes y un sistema de reservas simplificado.",
      label: "Desarrollo Web",
      author: "Juan Manuel Esparré",
      published: "01 Feb 2024",
      url: "/proyectos/turismo-san-luis",
      image: "/coyuyo-trabajo.png",
      altText: "Plataforma de turismo para San Luis",
      tags: ["Desarrollo Web", "Turismo", "UX/UI"],
    },
    {
      id: "proyecto-kesug",
      title: "Sistema de Gestión para Kesug",
      summary: "Desarrollo de una herramienta de gestión interna a medida para Kesug, optimizando sus procesos operativos y mejorando la eficiencia en la administración de recursos y proyectos.",
      label: "Herramientas de Gestión",
      author: "Juan Manuel Esparré",
      published: "18 Nov 2023",
      url: "/proyectos/kesug",
      image: "/kesug.png",
      altText: "Sistema de gestión para Kesug",
      tags: ["CRM/CMS", "Desarrollo Web", "Automatización"],
    }
  ],
};

function Blog8Demo() {
  return <Blog8 {...demoData} />;
}

export { Blog8Demo };
