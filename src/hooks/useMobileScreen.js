import { useEffect } from "react";

const useMobileScreen = (cssPropName = "--vh") => {
  useEffect(() => {
    function registerMobieScreen() {
      const vh = window.innerHeight * 0.01;

      // document.documentElement refers to the HTML
      document.documentElement.style.setProperty(cssPropName, `${vh}px`);
    }

    registerMobieScreen();
    window.addEventListener("resize", registerMobieScreen);

    return () => window.removeEventListener("resize", registerMobieScreen);
  }, [cssPropName]);

  return null;
};

export default useMobileScreen;
