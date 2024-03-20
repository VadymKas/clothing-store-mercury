import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
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
