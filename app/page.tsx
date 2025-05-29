"use client";

import Image from "next/image";
import NavigationComponent from "@/components/Navigation";
import DesktopNavbar from "@/components/DesktopNavbar";
import { useAnimate, useScroll, useMotionValueEvent, animate } from "motion/react";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { Preview } from "@/components/Preview";
import { Gallery4Demo } from "@/components/blocks/demo";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {  
  const [scope] = useAnimate();
  const [isAnimating, setIsAnimating] = useState(false); // State to prevent re-triggering
  const [currentSection, setCurrentSection] = useState('hero'); // State to track current section

  // Effect to disable scroll while animating
  useEffect(() => {
    const handleScrollAttempt = (event: WheelEvent | TouchEvent) => {
      if (isAnimating) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleScrollAttempt, { passive: false });
    window.addEventListener('touchmove', handleScrollAttempt, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScrollAttempt);
      window.removeEventListener('touchmove', handleScrollAttempt);
    };
  }, [isAnimating]); // Re-run effect when isAnimating changes

  const serviciosRef = useRef<HTMLDivElement>(null); // Ref for the servicios section
  const proyectosRef = useRef<HTMLDivElement>(null); // Ref for the proyectos section
  const contactoRef = useRef<HTMLDivElement>(null); // Ref for the contacto section
  const { scrollY } = useScroll(); // Track scroll position

  useEffect(() => {
    const blinkAnimation = animate(
      ".blink", // Assuming .blink is still used for the cursor animation
      { opacity: [1, 0, 1] },
      { duration: 1, repeat: Infinity }
    );

    return () => {
      blinkAnimation.stop();
    };
  }, [animate]);

  useLayoutEffect(() => {
    // The useMotionValueEvent hook is now called outside, its cleanup is handled automatically by React
    // We only need useLayoutEffect if we need to do something after render that depends on the DOM,
    // like getting offsetTop initially, but we moved that into the event handler.
    // If there's no other DOM-dependent logic needed here, we can potentially remove this useLayoutEffect.
    // For now, let's keep it but simplify its return.
    return () => {
      // No explicit cleanup needed here for the scroll event listener, as useMotionValueEvent handles it.
    };
  }, [scrollY, serviciosRef, proyectosRef, contactoRef, isAnimating, animate]); // Keep dependencies

  // Animation from Hero to Servicios
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const serviciosTop = serviciosRef.current?.offsetTop; // Get offsetTop here

    // Check if scrolling down, not currently animating, and within the hero section's scroll range
    if (serviciosTop !== undefined && previous !== undefined && latest > previous && latest < window.innerHeight && !isAnimating) {
      setIsAnimating(true);
      animate(
        latest, // Animate from current scroll position
        serviciosTop, // To the top of the servicios section
        {
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Corrected ease value
          onUpdate: (value) => {
            window.scrollTo(0, value); // Update scroll position manually
          },
          onComplete: () => {
            setCurrentSection('servicios'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 500); // 1 second delay
          },
        }
      );
    }
    // Check if scrolling up, not currently animating, and within the servicios section's scroll range AND current section is 'servicios'
    else if (serviciosTop !== undefined && previous !== undefined && latest < previous && latest >= serviciosTop - window.innerHeight / 2 && latest < serviciosTop && !isAnimating && currentSection === 'servicios') {
       setIsAnimating(true);
       animate(
         latest, // Animate from current scroll position
         0, // To the top of the hero section
         {
           duration: 1, // Animation duration in seconds
           ease: "easeInOut", // Corrected ease value
           onUpdate: (value) => {
             window.scrollTo(0, value); // Update scroll position manually
           },
          onComplete: () => {
            setCurrentSection('hero'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 500); // 1 second delay
          },
         }
       );
    }
  });

  // Animation from Servicios to Proyectos
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const serviciosTop = serviciosRef.current?.offsetTop;
    const proyectosTop = proyectosRef.current?.offsetTop;

    // Check if scrolling down, not currently animating, and within the servicios section's scroll range AND current section is 'servicios'
    if (serviciosTop !== undefined && proyectosTop !== undefined && previous !== undefined && latest > previous && latest >= serviciosTop && latest < proyectosTop && !isAnimating && currentSection === 'servicios') {
      setIsAnimating(true);
      animate(
        latest, // Animate from current scroll position
        proyectosTop, // To the top of the proyectos section
        {
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Corrected ease value
          onUpdate: (value) => {
            window.scrollTo(0, value); // Update scroll position manually
          },
          onComplete: () => {
            setCurrentSection('proyectos'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 500); // 1 second delay
          },
        }
      );
    }
    // Check if scrolling up, not currently animating, and within the proyectos section's scroll range AND current section is 'proyectos'
    else if (serviciosTop !== undefined && proyectosTop !== undefined && previous !== undefined && latest < previous && latest >= proyectosTop - window.innerHeight / 2 && latest < proyectosTop && !isAnimating && currentSection === 'proyectos') {
      setIsAnimating(true);
      animate(
        latest, // Animate from current scroll position
        serviciosTop, // To the top of the servicios section
        {
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Corrected ease value
          onUpdate: (value) => {
            window.scrollTo(0, value); // Update scroll position manually
          },
          onComplete: () => {
            setCurrentSection('servicios'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 500); // 1 second delay
          },
        }
      );
    }
  });

  // Animation from Proyectos to Contacto
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const proyectosTop = proyectosRef.current?.offsetTop;
    const proyectosHeight = proyectosRef.current?.offsetHeight; // Get height
    const contactoTop = contactoRef.current?.offsetTop;

    // Check if scrolling down, not currently animating, and past the end of the proyectos section minus 20px AND current section is 'proyectos'
    if (proyectosTop !== undefined && proyectosHeight !== undefined && contactoTop !== undefined && previous !== undefined && latest > previous && latest > proyectosTop + proyectosHeight - 520 && latest < contactoTop && !isAnimating && currentSection === 'proyectos') {
      setIsAnimating(true);
      animate(
        latest, // Animate from current scroll position
        contactoTop, // To the top of the contacto section
        {
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Corrected ease value
          onUpdate: (value) => {
            window.scrollTo(0, value); // Update scroll position manually
          },
          onComplete: () => {
            setCurrentSection('contacto'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000); // 1 second delay
          },
        }
      );
    }
    // Check if scrolling up, not currently animating, and within the contacto section's scroll range AND current section is 'contacto'
    else if (proyectosTop !== undefined && contactoTop !== undefined && previous !== undefined && latest < previous && latest >= contactoTop - window.innerHeight / 2 && latest < contactoTop && !isAnimating && currentSection === 'contacto') {
      setIsAnimating(true);
      animate(
        latest, // Animate from current scroll position
        proyectosTop, // To the top of the proyectos section
        {
          duration: 1, // Animation duration in seconds
          ease: "easeInOut", // Corrected ease value
          onUpdate: (value) => {
            window.scrollTo(0, value); // Update scroll position manually
          },
          onComplete: () => {
            setCurrentSection('proyectos'); // Update current section
            setTimeout(() => {
              setIsAnimating(false);
            }, 1000); // 1 second delay
          },
        }
      );
    }
  });
    

  return (
    <div className="relative logo">
      <div className="fixed top-0 left-0 z-10">
        <a href="#home">
          <Image src="/logosvgverde.svg" alt="Logo" width={50} height={50} className="mt-3 ml-5"/>
          <h3 className="top-3 left-22">Juan Manuel</h3>
        </a>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 right-0 z-10">
        <DesktopNavbar />
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-2 right-0 z-10">
        <NavigationComponent />
      </div>
      <main>
            <ClickSpark
            sparkColor='#004936'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
            >
        <section id="home" className="hero h-screen relative pt-20">
         
          <div className="absolute bottom-0 items-end justify-between p-4 md:pl-10 w-full" ref={scope}> {/* Changed layout */}
            <div className="flex flex-col items-start w-full"> {/* Text block */}
              <h1 className="text-3xl md:text-6xl font-bold mb-2">Desarrollador Web</h1>
              <div className="w-full w-line bg-verde mb-4"></div> {/* White line */}
              <h2 className=" text-xs md:text-base mb-6 sm:w-2/3 md:w-2/3">Hola mi nombre es Juan Manuel, creo soluciones basadas en la necesidad del clientes, creo soluciones basadas en la necesidad del clientes<i className="blink pl-1">_</i></h2>
            </div>
            <div className="absolute bottom-10 right-4 "> {/* Button block */}
              <button className="border cursor-pointer border-3 py-2 px-6 rounded-md hover:bg-[#9ec8f3] hover:text-[#0A433A] transition-colors duration-300">$ Ver Precios</button>
            </div>
          </div>
        
        </section>
        
        <section id="servicios" className="servicios h-screen flex items-end" ref={serviciosRef}> {/* Added ref */}
          <Preview />
        </section>
        <section id="proyectos" className="proyectos pt-20" ref={proyectosRef}> {/* Added ref */}
          <Gallery4Demo />
        </section>
        <section id="contacto" className="contacto h-screen bg-blue-200 flex items-center justify-center" ref={contactoRef}> {/* Added ref */}
          <div className="flex items-center">
            <h1 className="text-5xl text-foreground mr-4">Contacto</h1>
            <div className="h-16 w-px bg-foreground"></div> {/* Vertical line */}
          </div>
        </section>
          </ClickSpark>
      </main>
    </div>
  );
}
