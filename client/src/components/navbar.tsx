import { useState } from "react"; // Import useState for managing state
import { Link } from "react-router-dom"; // Import Link for routing
import "../styling/navbar.css"; // Import the CSS file

import Auth from '../utils/auth';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="container">
      <div className="sidebar">
        {/* Slim Navbar */}
        <div className="navbar-slim">
          <Link to="/">Dashboard</Link> {/* Use Link instead of <a> */}
           <div className="dropdown">           

            <Link to="/courses" onClick={toggleDropdown}>Courses</Link> {/* Toggle dropdown on click */}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/javascriptClass">JavaScript</Link>
                <Link to="/typescriptClass">TypeScript</Link>
                <Link to="/pythonClass">Python</Link>
              </div>
              
            )}
            </div>
          {/* If you are already loggedIn, just display user */}
          {Auth.loggedIn() ? (<div> 
            <p><br></br><br /> </p>           
            <Link to="/account" >Account</Link>
            <button onClick={Auth.logout} className="signup-button" style={{margin: 30}}>Logout</button>
            </div>
           ) :
          (<div> <p><br></br><br /> </p> <Link to="/login">Log In</Link> </div>
          )}
        </div>
      </div>
        {/* Wide Navbar */}
         {Auth.loggedIn() ? (<div className="navbar-wide">
          <Link to="/syllabus">Syllabus</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="/tests">Tests</Link>
          <Link to="/grades">Grades</Link>
        </div>)
        : (<p></p>)}
        </div>
  );
};

export default Navbar;
