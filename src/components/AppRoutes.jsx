import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { RouteLinks } from '../utils/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={RouteLinks.home}
        element={<Home />}
      />
    </Routes>
  );
};

export default AppRoutes;
