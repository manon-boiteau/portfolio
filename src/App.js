import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Articles from "./containers/Articles";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import NoMatch from "./containers/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
