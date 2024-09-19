import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Team from "./Team";

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Banner></Banner>
             <div >
                <About></About>
                <Team></Team>
             </div>
        </div>
    );
};

export default Home;