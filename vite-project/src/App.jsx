// import Dashboard from './components/Dashboard';
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
        {/* Outras rotas aqui */}
      </Routes>
    </Router>
  );
}

export default App;
