import useMobileScreen from "./hooks/useMobileScreen";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  useMobileScreen();

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
