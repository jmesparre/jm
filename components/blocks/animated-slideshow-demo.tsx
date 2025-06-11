import { HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover } from "@/components/ui/animated-slideshow"
import { useRouter } from "next/navigation"

  const SLIDES = [
  {
    id: "slide-1",
    title: "Diseño Gráfico",
    imageUrl:
      "test.png",
  },
  {
    id: "slide-2",
    title: "Desarrollo Web",
    imageUrl:
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-6",
    title: "Sistemas de gestion",
    imageUrl:
      "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-3",
    title: "Marketing Digital",
    imageUrl:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "slide-4",
    title: "Precios Fijos",
    imageUrl:
      "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function HoverSliderDemo () {
    const router = useRouter();

    const handleSlideClick = (id: string) => {
      if (id === "slide-1") {
        router.push("/servicios/desarrollo-web");
      } else if (id === "slide-2") {
        router.push("/servicios/servicios-de-diseno");
      }
      // Add more conditions for other slides if needed
    };

    return (
        <HoverSlider className="py-20 px-[5%] md:px-[12%] text-[#3d3929]">
      
      <div className="flex  flex-wrap md:items-center justify-baseline gap-6 md:gap-12">
        <div className="flex  flex-col space-y-2 md:space-y-3 ">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.title}
              index={index}
              className="cursor-pointer servicios-titulo text-[#004936] text-3xl sm:text-2xl md:text-4xl font-bold  tracking-tight"
              text={slide.title}
              onClick={() => handleSlideClick(slide.id)}
            />
          ))}
        </div>
        <HoverSliderImageWrap>
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="  ">
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
    )
}
