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
  const touchStartY = useRef(0);
  const touchMoveY = useRef(0);
  const SWIPE_THRESHOLD = 50; // Minimum vertical distance for a swipe

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
      }, 1000); // 1-second delay as requested
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
          navigateToPage("down");
          event.preventDefault(); // Prevent default scroll
        } else if (event.deltaY < 0 && isAtTopRef.current) {
          // Scrolling up and at the top
          navigateToPage("up");
          event.preventDefault(); // Prevent default scroll
        }
      }, 50); // Short debounce for responsiveness
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
      touchMoveY.current = event.touches[0].clientY; // Initialize touchMoveY
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isNavigatingRef.current) {
        event.preventDefault();
        return;
      }
      touchMoveY.current = event.touches[0].clientY;
      const deltaY = touchMoveY.current - touchStartY.current;

      // Prevent default scroll only if a swipe gesture is potentially happening
      // and we are at the top/bottom, to avoid interfering with normal page scrolling
      if (Math.abs(deltaY) > 10 && (isAtTopRef.current || isAtBottomRef.current)) {
        event.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      if (isNavigatingRef.current) {
        return;
      }

      const deltaY = touchMoveY.current - touchStartY.current;

      if (deltaY < -SWIPE_THRESHOLD && isAtBottomRef.current) {
        // Swiping up and at the bottom
        navigateToPage("down");
      } else if (deltaY > SWIPE_THRESHOLD && isAtTopRef.current) {
        // Swiping down and at the top
        navigateToPage("up");
      }
      // Reset touch positions
      touchStartY.current = 0;
      touchMoveY.current = 0;
    };

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", handleScroll);
      currentContentRef.addEventListener("wheel", handleWheel, { passive: false });
      currentContentRef.addEventListener("touchstart", handleTouchStart, { passive: false });
      currentContentRef.addEventListener("touchmove", handleTouchMove, { passive: false });
      currentContentRef.addEventListener("touchend", handleTouchEnd);
      // Initial check
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
