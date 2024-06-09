import { Outlet } from 'react-router-dom';
import Navbar from '../components/SharedCompo/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className='min-h-[calc(100vh-50px)] max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
