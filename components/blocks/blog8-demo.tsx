import { Blog8 } from "@/components/blocks/blog8"

const demoData = {
  heading: "Proyectos",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi voluptates nisi iusto? Facere odit praesentium autem! Quod nam maxime nulla odit iste. Quo quos rerum saepe unde aperiam quam.",
  posts: [
    {
      id: "post-1",
      title:
        "Estudio Arami",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Diseño Web",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "test.png",
      tags: ["Diseño Web", "UI Development"],
    },
    {
      id: "post-2",
      title: "Tienda Virtual",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Diseño Web - Tienda Virtual",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "test.png",
      tags: ["Diseño Web", "CSS"],
    },
     {
      id: "post-3",
      title: "Turismo San Luis",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Diseño Web",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "test.png",
      tags: ["Diseño Web", "CSS"],
    },
  ],
};

function Blog8Demo() {
  return <Blog8 {...demoData} />;
}

export { Blog8Demo };
