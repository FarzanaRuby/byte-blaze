
import Nav from '../Component/Nav';
import { Outlet } from 'react-router-dom';

const Leyout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Leyout;