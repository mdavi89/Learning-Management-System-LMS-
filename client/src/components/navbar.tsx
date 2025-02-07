import { Link } from "react-router-dom"; // Import Link for routing
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        {/* Slim Navbar */}
        <div className="navbar-slim">
          <Link to="/">Dashboard</Link> {/* Use Link instead of <a> */}
          <Link to="/courses">Courses</Link>
          <Link to="/login">Log In</Link>
        </div>

        {/* Wide Navbar */}
        <div className="navbar-wide">
          <Link to="/syllabus">Syllabus</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/tests">Tests</Link>
          <Link to="/grades">Grades</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
