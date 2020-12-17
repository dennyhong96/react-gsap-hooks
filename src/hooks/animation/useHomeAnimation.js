import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Appends DOM refs to ref list for gsap stagger effect
const appendsToRef = (refList) => (el) => {
  el && !refList.includes(el) && refList.push(el);
};

// Responsible for Home page animation logic
const useHomeAnimation = () => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const timelineRef = useRef(gsap.timeline({ defaults: {} }));
  const titleLinesRef = useRef([]);
  const caseImagesRef = useRef([]);
  const overlayRef = useRef({
    screen: null,
    top: [],
    bottom: [],
  });

  useEffect(() => {
    timelineRef.current

      // Reveals title lines
      .from(
        titleLinesRef.current,
        {
          y: 100,
          skewY: 7,
          ease: "Power4.easeOut",
          duration: 1.8,
          stagger: {
            amount: 0.3,
          },
        },
        1
      )

      // Reveals top section
      .to(overlayRef.current.top, {
        height: 0,
        ease: "Expo.easeInOut",
        duration: 1.6,
        stagger: {
          amount: 0.4,
        },
      })

      // Reveals bottom section
      .to(
        overlayRef.current.bottom,
        {
          width: 0,
          ease: "Expo.easeInOut",
          duration: 1.6,
          stagger: {
            amount: 0.4,
          },
        },
        "-=0.8"
      )

      // Hides overlay
      .set(overlayRef.current.screen, { display: "none" })

      // Scales Image
      .from(
        caseImagesRef.current,
        {
          scale: 1.4,
          ease: "Expo.easeInOut",
          duration: 1.6,
          stagger: {
            amount: 0.4,
          },
          onComplete: setIsAnimationDone.bind(this, true),
        },
        "-=1.8"
      );
  }, []);

  return {
    // Exposes functions for registering refs and done indicator state
    setsOverlayScreen: (el) => (overlayRef.current.screen = el),
    appendsToOverTop: appendsToRef(overlayRef.current.top),
    appendsToOverlayBottom: appendsToRef(overlayRef.current.bottom),
    appendsToTitleLines: appendsToRef(titleLinesRef.current),
    appendsToCaseImages: appendsToRef(caseImagesRef.current),
    isAnimationDone,
  };
};

export default useHomeAnimation;
