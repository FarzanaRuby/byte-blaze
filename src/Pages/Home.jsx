import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <h2>This is  home  page</h2>
             <Blogs></Blogs>
            <Bookmarks></Bookmarks> 
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            


        </div>
    );
};

export default Home;