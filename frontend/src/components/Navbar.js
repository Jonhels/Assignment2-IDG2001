import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/bread.svg";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  // Function to format the path
  // Will be used to display the current location of the user in the navbar
  const formatPath = (path) => {
    if (path === "/") return "Home";
    return path.charAt(1).toUpperCase() + path.slice(2);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="A piece of bread" />
        <h1>Breadit</h1>
      </div>

      <h2>{formatPath(location.pathname)}</h2>
      <div className="right-section">
        {/* User can log in the idea is that the user has to log in to post something for a category */}
        {/* Should probably allow the user to go to a profile page if they're logged in */}
        <p>
          <Link to="/login" className="login-button">Login</Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
