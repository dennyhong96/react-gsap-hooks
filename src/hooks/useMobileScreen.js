import { useEffect } from "react";

const useMobileScreen = () => {
  useEffect(() => {
    function mobileScreen() {
      const vh = window.innerHeight * 0.01;

      // document.documentElement refers to the HTML
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    mobileScreen();
    window.addEventListener("resize", mobileScreen);

    return () => window.removeEventListener("resize", mobileScreen);
  }, []);
  return null;
};

export default useMobileScreen;
