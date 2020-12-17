import { useEffect } from "react";
import { debounce } from "../utils";

const useMobileScreen = (cssPropName = "--vh") => {
  useEffect(() => {
    const registerMobieScreen = debounce(function () {
      const vh = window.innerHeight * 0.01;
      console.log("triggered");
      // document.documentElement refers to the HTML
      document.documentElement.style.setProperty(cssPropName, `${vh}px`);
    }, 500);

    registerMobieScreen();
    window.addEventListener("resize", registerMobieScreen);

    return () => window.removeEventListener("resize", registerMobieScreen);
  }, [cssPropName]);

  return null;
};

export default useMobileScreen;
