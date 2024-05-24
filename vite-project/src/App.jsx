// import Dashboard from './components/Dashboard';
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoutes, routesResolver } from "./router/router";
// import Login from "./components/Login";
// import HomePage from "./components/HomePage";
// import TerminatedContracts from "./components/TerminatedContracts";
// import FormNewContract from "./components/FormNewContract";

function App() {
  const accountPermissions = ["COMPANY"]; // replace with actual permissions
  const routes = createRoutes();
  const resolvedRoutes = routesResolver(routes, accountPermissions);
  return (
    <div className="light">
      <Router>
        <Routes>
          {resolvedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
