import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
