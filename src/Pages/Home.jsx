// import { Outlet } from "react-router-dom";
// import Footer from "../Component/Footer";
// import Nav from "../Component/Nav";
// import Blogs from "./Blogs";
// import Bookmarks from "./Bookmarks";
import Hero from "../Component/Hero";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className=" min-h-[calc(100vh-164px)] ">
       <Hero></Hero>
       <img src={wave} alt="" />
        </div>
    );
};

export default Home;