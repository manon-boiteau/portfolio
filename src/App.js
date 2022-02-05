import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Articles from "./containers/Articles";
import Footer from "./containers/Footer";
import NoMatch from "./containers/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/" element={<Home />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
