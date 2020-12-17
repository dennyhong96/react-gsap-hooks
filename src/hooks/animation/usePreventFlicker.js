import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";

// Prevents gsap gliching on load
function usePreventFlicker() {
  // useLayoutEffect runs before browser has a chance to paint (before useEffect)
  useLayoutEffect(() => {
    gsap.set(document.body, { css: { visibility: "hidden" } });
  }, []);

  useEffect(() => {
    gsap.set(document.body, { visibility: "visible" });
  }, []);

  return null;
}

export default usePreventFlicker;
