import { useEffect, useState } from "react";
import { debounce } from "../utils";

const useMobileScreen = (cssPropName = "--vh") => {
  const [dimensions, setDimensions] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    const registerMobieScreen = debounce(function () {
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });

      const vh = window.innerHeight * 0.01;
      console.log("triggered");
      // document.documentElement refers to the HTML
      document.documentElement.style.setProperty(cssPropName, `${vh}px`);
    }, 500);

    registerMobieScreen();
    window.addEventListener("resize", registerMobieScreen);

    return () => window.removeEventListener("resize", registerMobieScreen);
  }, [cssPropName]);

  return {
    dimensions,
  };
};

export default useMobileScreen;
