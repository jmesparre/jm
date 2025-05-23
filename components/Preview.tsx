"use client"

import { useEffect, useRef } from "react"
import { useInView } from "motion/react"

import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"

const exampleImages = [
  {
    url: "0",
    author: "0",
    link: "0",
    title: "0",
  },
  {
    url: "/web.avif",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    author: "Desarrollo Web",
    services: ["Sitios web corporativos", "Páginas  promocionales", "E-commerces", "Desarrollo de aplicaciones web", "Páginas autogestionables"],
  },
  {
    url: "/diseño.avif",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "Servicios de Diseño",
    title: "Servicios de Diseño",
      services: ["Desarrollo de sitios web", "Sitios web corporativos", "Páginas  promocionales", "E-commerces", "Desarrollo de aplicaciones web", "Desarrollo en Wordpress"],

  },
  {
    url: "/empresa.avif",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "SEO",
    title: "Seo",
     services: ["Desarrollo de sitios web", "Sitios web corporativos", "Páginas  promocionales", "E-commerces", "Desarrollo de aplicaciones web", "Desarrollo en Wordpress"],
  },
]

function Item({
  index,
  image,
  link,
  services, // Add services prop
  onInView,
}: {
  index: number
  image: string
  link: string
  services?: string[] // Add services prop
  onInView: (inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      key={index}
      className="h-full w-1/2 flex justify-center items-center snap-center"
    >
      <div className="">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt={`Example ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
        {/* Conditionally render services list */}
        {isInView && services && services.length > 0 && (
          <ul className="servicio-desc text-xs md:text-base ">
            {services.map((service, serviceIndex) => (
              <li key={serviceIndex} className="">
                {service}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

function Preview() {
  const textRotateRef = useRef<TextRotateRef>(null)
  const slicedImages = exampleImages.slice(1)

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index)
    }
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-full relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-end dark:text-muted text-foreground">
          <div className="w-1/2">
            <TextRotate
              ref={textRotateRef}
              texts={slicedImages.map((image) => image.author)}
              mainClassName="text-sm verde sm:text-3xl md:text-4xl flex pt-2"
              splitLevelClassName="overflow-hidden pb-2"
              staggerFrom={"first"}
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.005}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            />
          </div>
        </div>
        <div className="absolute scrollbar-hide inset-0 overflow-auto snap-y snap-mandatory">
          {slicedImages.map((image, index) => (
            <Item
              key={index}
              index={index}
              image={image.url}
              link={image.link}
              services={image.services} // Pass services prop
              onInView={(inView) => handleInView(index, inView)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Preview }
