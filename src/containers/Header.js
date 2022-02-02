import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div>
          <Link to="/">
            <h1>MANON</h1>
          </Link>
          <p>Boiteau</p>
        </div>
        <nav>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
