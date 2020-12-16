import { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    function mobileScreen() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    mobileScreen();
    window.addEventListener("resize", mobileScreen);
    return () => window.removeEventListener("resize", mobileScreen);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
