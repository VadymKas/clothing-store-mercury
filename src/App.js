import { useDispatch } from 'react-redux';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useEffect } from 'react';
import { getCategories } from './services/redux/api/getCategories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
