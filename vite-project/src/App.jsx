// import Dashboard from './components/Dashboard';
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import TerminatedContracts from "./components/TerminatedContracts";
import FormNewContract from "./components/FormNewContract";

function App() {
  return (
    <div className="theme-aqua">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route
            path="/terminatedContracts"
            element={<TerminatedContracts />}
          />
          <Route path="/newContract" element={<FormNewContract />} />
          {/* Outras rotas aqui */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
