import { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { gsap } from "gsap";

import Header from "./components/Header";
import useMobileScreen from "./hooks/useMobileScreen";
import Home from "./pages/Home";

function App() {
  useMobileScreen();

  useEffect(() => {
    // Prevents gsap gliching on load
    gsap.set(document.body, { visibility: "visible" });
  }, []);

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
