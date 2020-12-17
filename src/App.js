import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import useMobileScreen from "./hooks/useMobileScreen";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  useMobileScreen();
  const timelineRef = useRef(gsap.timeline({ defaults: {} }));
  const titleLinesRef = useRef([]);
  const overlayRef = useRef({
    screen: null,
    top: [],
    bottom: [],
  });
  const caseImagesRef = useRef([]);

  const appendsToRef = (refList) => (el) => {
    el && !refList.includes(el) && refList.push(el);
  };

  useEffect(() => {
    gsap.set(document.body, { visibility: "visible" }); // Prevents gsap gliching on load

    console.log("titleLinesRef.current", titleLinesRef.current);
    console.log("overlayRef.current", overlayRef.current);
    console.log("appendsToRef.current", caseImagesRef.current);

    timelineRef.current
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
      .to(overlayRef.current.top, {
        height: 0,
        ease: "Expo.easeInOut",
        duration: 1.6,
        stagger: {
          amount: 0.4,
        },
      })
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
      .set(overlayRef.current.screen, { display: "none" })
      .from(
        caseImagesRef.current,
        {
          scale: 1.4,
          ease: "Expo.easeInOut",
          duration: 1.6,
          stagger: {
            amount: 0.4,
          },
        },
        "-=1.8"
      );
  }, []);

  return (
    <div className="App">
      <IntroOverlay
        setScreenRef={(el) => (overlayRef.current.screen = el)}
        appendsToTop={appendsToRef(overlayRef.current.top)}
        appendsToBottom={appendsToRef(overlayRef.current.bottom)}
      />
      <Header />
      <Banner appendsToRef={appendsToRef(titleLinesRef.current)} />
      <Cases appendsToRef={appendsToRef(caseImagesRef.current)} />
    </div>
  );
}

export default App;
