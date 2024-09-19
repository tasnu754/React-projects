import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Team from "./Team";

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Banner></Banner>
             <div className="w-[90%] mx-auto">
                <About></About>
                <Team></Team>
                <Contact></Contact>
             </div>
        </div>
    );
};

export default Home;