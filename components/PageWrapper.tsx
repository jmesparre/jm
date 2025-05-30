"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import ClickSpark from "@/components/ClickSpark";

const pageOrder = ["/", "/servicios", "/proyectos", "/contacto"];

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

  const currentPageIndex = pageOrder.indexOf(pathname);

  const navigateToPage = useCallback((direction: "up" | "down") => {
    if (isNavigatingRef.current) {
      console.log("Navigation already in progress, returning.");
      return;
    }

    let nextPagePath = "";
    if (direction === "down" && currentPageIndex < pageOrder.length - 1) {
      nextPagePath = pageOrder[currentPageIndex + 1];
    } else if (direction === "up" && currentPageIndex > 0) {
      nextPagePath = pageOrder[currentPageIndex - 1];
    }

    if (nextPagePath && nextPagePath !== pathname) {
      console.log(`Attempting to navigate to: ${nextPagePath}`);
      isNavigatingRef.current = true;
      router.push(nextPagePath);
      window.scrollTo(0, 0); // Scroll to top of the new page
      // Reset navigation flag after a short delay to allow animation to complete
      setTimeout(() => {
        isNavigatingRef.current = false;
        console.log("Navigation flag reset.");
      }, 500); // Set delay to 1 second
    } else {
      console.log("No valid next page path or already on target page.");
    }
  }, [currentPageIndex, pathname, router]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const isScrollable = scrollHeight > clientHeight;

        isAtTopRef.current = scrollTop === 0;
        isAtBottomRef.current = scrollTop + clientHeight >= scrollHeight - 1; // Added a small buffer for bottom detection

        // If content is not scrollable, consider it at both top and bottom
        if (!isScrollable) {
          isAtTopRef.current = true;
          isAtBottomRef.current = true;
        }
        // console.log(`Scroll: scrollTop=${scrollTop}, scrollHeight=${scrollHeight}, clientHeight=${clientHeight}, isAtTop=${isAtTopRef.current}, isAtBottom=${isAtBottomRef.current}`);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isNavigatingRef.current) {
        event.preventDefault(); // Prevent scrolling if navigation is in progress
        return;
      }

      // Debounce wheel events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (event.deltaY > 0 && isAtBottomRef.current) {
          // Scrolling down and at the bottom
          // console.log("Wheel down and at bottom, attempting navigation.");
          navigateToPage("down");
          event.preventDefault(); // Prevent default scroll
        } else if (event.deltaY < 0 && isAtTopRef.current) {
          // Scrolling up and at the top
          // console.log("Wheel up and at top, attempting navigation.");
          navigateToPage("up");
          event.preventDefault(); // Prevent default scroll
        }
      }, 50); // Short debounce for responsiveness

    };

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", handleScroll);
      currentContentRef.addEventListener("wheel", handleWheel, { passive: false }); // Add wheel listener
      // Initial check
      handleScroll();
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", handleScroll);
        currentContentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [pathname, navigateToPage]); // Re-run effect when pathname or navigateToPage changes

  return (
    <ClickSpark
      sparkColor='#004936'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div ref={contentRef} className="w-full h-full overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          key={pathname} // Key is crucial for AnimatePresence-like behavior
          className="w-full h-full" // Removed overflow-y-auto from here
        >
          {children}
        </motion.div>
      </div>
    </ClickSpark>
  );
}
