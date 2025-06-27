import "../App.css";
function Header({ selectedTab, setSelectedTab }) {
  return (
    <>
      <header className="d-flex justify-content-center py-3 p-3 text-bg-dark header">
        <ul className="nav nav-pills navbar">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Home" && "active"}`}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Education");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Education" && "active"}`}
            >
              Education
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Skills");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Skills" && "active"}`}
            >
              Skills
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Experience");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Experience" && "active"}`}
            >
              Experience
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Projects");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Projects" && "active"}`}
            >
              Projects
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Contact");
            }}
          >
            <a
              href="#"
              className={`nav-link  ${selectedTab == "Contact" && "active"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
