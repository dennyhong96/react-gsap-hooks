import useMobileScreen from "./hooks/useMobileScreen";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Cases from "./components/Cases";

function App() {
  useMobileScreen();

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
