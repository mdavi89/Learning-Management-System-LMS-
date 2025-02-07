import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import Navbar from "./components/navbar"; // Import your Navbar component

// Create simple components for each route
import Dashboard from "./pages/dashboard";
const Courses = () => <h2>Courses Page</h2>;
import Login from "./pages/Login";
import Syllabus from "./pages/syllabus";
const Lessons = () => <h2>Lessons Page</h2>;
const Quizzes = () => <h2>Quizzes Page</h2>;
const Tests = () => <h2>Tests Page</h2>;
const Grades = () => <h2>Grades Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Navbar />
        <div className="router-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
