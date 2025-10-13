import logo from "vinyl.png";

const Header = () => {
  return (
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        style={{ width: "70px", height: "70px" }}
        alt="logo"
      />
      <nav className="navigation">
        <ul>
          <li>
            <a href="/home" className="App-link">
              Homepage
            </a>
          </li>
          <li>
            <a href="/about" className="App-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/blog" className="App-link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <a href="/book" role="button" className="App-link">
        Book a consult
      </a>
    </header>
  );
};

export default Header;
