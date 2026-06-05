import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex flex-col">
            <NavBar />
            <main className="flex-grow pb-16 pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;