import './index.css';
import ToastUI from './components/Toast/ToastUI';
import { createRoutes, routesResolver } from './router/router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const accountPermissions = ['COMPANY'];
  const routes = createRoutes();
  const resolvedRoutes = routesResolver(routes, accountPermissions);
  return (
    <div className="light">
      <ToastUI />
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
