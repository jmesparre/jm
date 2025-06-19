"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import ClickSpark from "@/components/ClickSpark";

const pageOrder = [
  "/", "/servicios", "/servicios/desarrollo-web", "/servicios/servicios-de-diseno",
  "/servicios/e-commerce", "/servicios/posicionamiento-web", "/servicios/herramientas-de-gestion",
  "/servicios/precios-fijos", "/proyectos", "/sobre-mi", "/blog", "/contacto"
];

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isNavigatingRef = useRef(false);
  const isAtTopRef = useRef(true);
  const isAtBottomRef = useRef(false);
  const touchStartY = useRef(0);
  const touchMoveY = useRef(0);
  const SWIPE_THRESHOLD = 20;

  const currentPageIndex = pageOrder.indexOf(pathname);

  const navigateToPage = useCallback((direction: "up" | "down") => {
    if (isNavigatingRef.current) return;

    let nextPagePath = "";
    if (direction === "down" && currentPageIndex < pageOrder.length - 1) {
      nextPagePath = pageOrder[currentPageIndex + 1];
    } else if (direction === "up" && currentPageIndex > 0) {
      nextPagePath = pageOrder[currentPageIndex - 1];
    }

    if (nextPagePath && nextPagePath !== pathname) {
      isNavigatingRef.current = true;
      router.push(nextPagePath);
      window.scrollTo(0, 0);
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 500);
    }
  }, [currentPageIndex, pathname, router]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const isScrollable = scrollHeight > clientHeight;

        isAtTopRef.current = scrollTop <= 10;
        isAtBottomRef.current = scrollTop + clientHeight >= scrollHeight - 10;

        if (!isScrollable) {
          isAtTopRef.current = true;
          isAtBottomRef.current = true;
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isNavigatingRef.current) {
        event.preventDefault();
        return;
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        if (event.deltaY > 0 && isAtBottomRef.current) {
          navigateToPage("down");
          event.preventDefault();
        } else if (event.deltaY < 0 && isAtTopRef.current) {
          navigateToPage("up");
          event.preventDefault();
        }
      }, 50);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
      touchMoveY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isNavigatingRef.current) {
        event.preventDefault();
        return;
      }

      touchMoveY.current = event.touches[0].clientY;
      const deltaY = touchMoveY.current - touchStartY.current;

      if (Math.abs(deltaY) > 5) {
        const { scrollHeight, clientHeight } = contentRef.current || { scrollHeight: 0, clientHeight: 0 };
        const isScrollable = scrollHeight > clientHeight;

        if (isScrollable) {
          if ((isAtTopRef.current && deltaY > 0) || (isAtBottomRef.current && deltaY < 0)) {
            event.preventDefault();
          }
        } else {
          event.preventDefault();
        }
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isNavigatingRef.current) return;

      const deltaY = touchMoveY.current - touchStartY.current;

      if (Math.abs(deltaY) > SWIPE_THRESHOLD) {
        if (deltaY < 0 && isAtBottomRef.current) {
          navigateToPage("down");
          event.preventDefault();
        } else if (deltaY > 0 && isAtTopRef.current) {
          navigateToPage("up");
          event.preventDefault();
        }
      }

      touchStartY.current = 0;
      touchMoveY.current = 0;
    };

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", handleScroll);
      currentContentRef.addEventListener("wheel", handleWheel, { passive: false });
      currentContentRef.addEventListener("touchstart", handleTouchStart, { passive: true });
      currentContentRef.addEventListener("touchmove", handleTouchMove, { passive: false });
      currentContentRef.addEventListener("touchend", handleTouchEnd, { passive: false });
      handleScroll();
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", handleScroll);
        currentContentRef.removeEventListener("wheel", handleWheel);
        currentContentRef.removeEventListener("touchstart", handleTouchStart);
        currentContentRef.removeEventListener("touchmove", handleTouchMove);
        currentContentRef.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [pathname, navigateToPage]);

  // Forzar scroll al top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ClickSpark
      sparkColor="#004936"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        ref={contentRef}
        className="w-full h-screen overflow-y-auto" 
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.25 }}
          key={pathname}
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      </div>
    </ClickSpark>
  );
}
