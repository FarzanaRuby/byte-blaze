import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <div className="hero   min-h-[calc(100vh-164px)] flex items-center justify-center">
                <div className="hero-content text-center ">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to <span className="text-5xl font-bold bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient  bg-300%" >
                        ByteBlaz </span> </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex gap-4  justify-center items-center">
                            <Link to={'/blogs'} href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-black">Button Text</span>
                            </Link>
                            <Link to={'/bookmarks'} href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-black">BookMarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;