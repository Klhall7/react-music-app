import { Outlet } from 'react-router-dom';
import FooterNav from '../components/Footer';

const Layout = () => {
    return (
        <>
            <div className='outlet'>
            <Outlet />
            </div>
            <FooterNav/>
        </>
    );
};

export default Layout;