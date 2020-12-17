import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { Header, Navigation } from "./components";
import useMobileScreen from "./hooks/useMobileScreen";
import { usePreventFlicker } from "./hooks/animation";
import { Home, About, Approach, CaseStudies, Services } from "./pages";

function App() {
  useMobileScreen();
  usePreventFlicker();

  return (
    <Fragment>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/approach" component={Approach} />
          <Route exact path="/case-studies" component={CaseStudies} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </div>
      <Navigation />
    </Fragment>
  );
}

export default App;
