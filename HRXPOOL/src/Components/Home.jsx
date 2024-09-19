import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Email from "./Email";
import Navbar from "./Navbar";
import Team from "./Team";

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Banner></Banner>
             <div className="w-[90%] mx-auto mb-48">
                <About></About>
                <Team></Team>
                <Contact></Contact>
                <Email></Email>
             </div>
        </div>
    );
};

export default Home;