import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4"

const demoData: Gallery4Props = {
  title: "Blog",
  description:
    "Explora nuestros artículos y guías sobre desarrollo web, diseño, SEO y estrategias digitales. Mantente al día con las últimas tendencias y consejos para potenciar tu presencia online y hacer crecer tu negocio.",
  items: [
    {
      id: "seo-para-emprendedores",
      title: "SEO para Emprendedores: Guía Básica para Posicionar tu Negocio",
      description: "Descubre los fundamentos del SEO y cómo aplicarlos para que tu pequeño negocio aparezca en los primeros resultados de Google. Consejos prácticos y fáciles de implementar.",
      href: "/blog/seo-para-emprendedores",
      image: "/papa.jpg"
    },
    {
      id: "elegir-cms-headless",
      title: "¿Cómo Elegir el Mejor CMS Headless para tu Proyecto?",
      description: "Analizamos las ventajas y desventajas de los CMS headless como Sanity y Strapi, y te ayudamos a decidir cuál es la mejor opción para gestionar tu contenido de forma flexible y escalable.",
      href: "/blog/elegir-cms-headless",
      image: "/papa.jpg"
    },
    {
      id: "tendencias-diseno-web-2024",
      title: "Tendencias de Diseño Web 2024: Lo que Necesitas Saber",
      description: "Explora las últimas tendencias en diseño UX/UI, desde el minimalismo hasta las animaciones interactivas, y cómo pueden mejorar la experiencia de usuario de tu sitio web.",
      href: "/blog/tendencias-diseno-web-2024",
      image: "/papa.jpg"
    },
    {
      id: "ventajas-nextjs",
      title: "Next.js: Por Qué es el Framework Ideal para tu Próximo Proyecto Web",
      description: "Profundiza en las características clave de Next.js, como el renderizado híbrido, la optimización de imágenes y las rutas API, que lo convierten en una potente herramienta para el desarrollo moderno.",
      href: "/blog/ventajas-nextjs",
      image: "/papa.jpg"
    },
    {
      id: "estrategias-e-commerce",
      title: "Estrategias Clave para Impulsar las Ventas de tu E-commerce",
      description: "Aprende sobre las mejores prácticas para optimizar tu tienda virtual, desde la experiencia de compra hasta la implementación de pasarelas de pago y la gestión de productos.",
      href: "/blog/estrategias-e-commerce",
      image: "/papa.jpg"
    }
  ],
};

function GalleryBlog() {
  return <Gallery4 {...demoData} />;
}

export { GalleryBlog };
