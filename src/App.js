import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// component
import { Nav, LogPage, Home, Dashboard } from "./components";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogPage" element={<LogPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
