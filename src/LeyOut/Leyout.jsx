
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router-dom';

const Leyout = () => {
    return (
        <div>
            <Nav></Nav>
           <div className='min-h-[calc(100vh-164px)]'>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Leyout;