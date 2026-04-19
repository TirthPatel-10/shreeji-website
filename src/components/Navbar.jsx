import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Shreeji Art</h2>
      <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/quote">Quote</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;