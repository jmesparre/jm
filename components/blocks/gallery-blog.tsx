import { Gallery4, Gallery4Props } from "@/components/blocks/gallery4"

const demoData: Gallery4Props = {
  title: "Blog",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.",
  items: [
    {
      id: "arami",
      title: "Estudio Arami - Wordpress",
      description:
        "Pagina web con wordpress para estudio de Diseño Industrial",
      href: "/",
      image:
        "arami.png"
      },
    {
      id: "coyuyo",
      title: "Fundacion Coyuyo",
      description:
        "Branding, Diseño web, React ",
      href: "/",
      image: "coyuyo.png"
    },
    {
      id: "Kesug",
      title: "Tienda Virtual - Wordpress",
      description:
      "Pagina web con wordpress para estudio de Diseño Industrial",
      href: "/",
      image:
        "/kesug.png"
       },
    {
      id: "nextjs",
      title: "Next.js: The React Framework for Production",
      description:
        "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
      href: "https://nextjs.org",
      image: "coyuyo.png"
     },
     {
      id: "nextj2s",
      title: "Next.js: The React Framework for Production",
      description:
        "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
      href: "https://nextjs.org",
      image: "coyuyo.png"
     },
  ],
};

function GalleryBlog() {
  return <Gallery4 {...demoData} />;
}

export { GalleryBlog };
