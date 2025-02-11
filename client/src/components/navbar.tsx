import { Link } from "react-router-dom"; // Import Link for routing
import "../styling/navbar.css"; // Import the CSS file
import Auth from '../utils/auth';
const Navbar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        {/* Slim Navbar */}
        <div className="navbar-slim">
          <Link to="/">Dashboard</Link> {/* Use Link instead of <a> */}
          <Link to="/courses">Courses</Link>
          {/* If you are already loggedIn, just display user */}
          {Auth.loggedIn() ? (<div> 
            <p><br></br><br /> </p>           
            <Link to="/account" >Account</Link>
            <button onClick={Auth.logout} className="signup-button" style={{margin: 30}}>Logout</button>
            </div>
           ) :
          (<Link to="/login">Log In</Link>
          )}
          
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
