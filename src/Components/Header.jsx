import "../App.css";
function Header() {
  return (
    <>
      <header className="d-flex justify-content-center py-3 p-3 text-bg-dark">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Education & Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
