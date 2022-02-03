const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer__infos">
          <p>Manon Boiteau</p>
          <p>+33 6 69 03 49 01</p>
        </div>
        <div className="footer__social">
          <p>Follow me on:</p>
          <div>
            <a
              href="https://github.com/manon-boiteau"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/manon-boiteau/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
