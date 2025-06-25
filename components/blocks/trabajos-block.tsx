import { TrabajosPage } from "@/components/blocks/blog8"

const trabajosData = {
  heading: "Trabajos",
  description:
    "Explora una selección de nuestros trabajos más recientes, donde combinamos diseño innovador y desarrollo robusto para crear soluciones digitales que generan impacto. Cada proyecto es un testimonio de nuestra dedicación a la calidad y a los resultados tangibles.",
  posts: [
    {
      id: "proyecto-arami",
      title: "Estudio Arami: Diseño Web y Branding",
      summary: "Desarrollo de un sitio web moderno y una identidad de marca cohesiva para Estudio Arami, enfocándonos en una experiencia de usuario intuitiva y un diseño visual atractivo que refleja su profesionalismo.",
      label: "Diseño Web & Branding",
      author: "Estudio Arami",
      published: "10 Mar 2023",
      url: "/proyectos/estudio-arami",
      image: "/arami-trabajo.png",
      altText: "Sitio web y branding para Estudio Arami",
      tags: ["Diseño Web", "Branding", "UX/UI"],
    },
    {
      id: "proyecto-tienda-virtual",
      title: "E-commerce para Tienda de San Luis",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, gestión de inventario y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "E-commerce",
      author: "Tienda San Luis",
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
      id: "proyecto-barrio-privado",
      title: "Herramienta de gestion para barrio privado",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, gestión de inventario y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "Herramienta de Geastion",
      author: "Juan Manuel Esparré",
      published: "25 Sep 2023",
      url: "/proyectos/tienda-virtual",
      image: "/ayni-trabajo2.png",
      altText: "Herramienta de gestion barrio privado",
      tags: ["E-commerce", "Desarrollo Web", "Pagos Online"],
    },
    {
      id: "proyecto-kesug",
      title: "Sistema de Gestión para Kesug",
      summary: "Implementación de una tienda virtual completa con pasarelas de pago integradas, gestión de inventario y optimización para conversiones, brindando una plataforma de ventas eficiente y escalable.",
      label: "Tienda Virtual",
      author: "Juan Manuel Esparré",
      published: "18 Nov 2024",
      url: "https://tiendadigital.kesug.com",
      image: "/kesug-trabajo.png",
      altText: "Sistema de venta para Kesug",
      tags: ["E-commerce", "Desarrollo Web", "Automatización"],
    }
  ],
};

function TrabajosBlock() {
  return <TrabajosPage {...trabajosData} />;
}

export { TrabajosBlock };
