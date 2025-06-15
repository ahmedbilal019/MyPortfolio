import "../App.css";
function Header({ selectedTab, setSelectedTab }) {
  return (
    <>
      <header className="d-flex justify-content-center py-3 p-3 text-bg-dark">
        <ul className="nav nav-pills navbar">
          <li
            className="nav-item"
            onClick={() => {
              console.log("Home tab is clicked");
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
              console.log("education tab is clicked");
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
              console.log("skills tab is clicked");
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
              console.log("Experience tab is clicked");
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
              console.log("projects tab is clicked");
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
              console.log("contact tab is clicked");
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
