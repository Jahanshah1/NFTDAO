import "./App.css";
import HomePage from "./pages/HomePage";
import DaoPage from "./pages/DaoPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dao" element={<DaoPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
