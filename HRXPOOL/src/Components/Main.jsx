import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        // <div className="font-noto header scroll-smooth text-[#fff] overflow-hidden bg-[url('../../public/abstract-textured-backgound.jpg')] bg-cover bg-center h-screen w-full"
        // style={{ scrollBehavior: "smooth", color: "#fff" }}>
        //     <Outlet></Outlet>
        // </div>
        <div className="font-noto header nav-col  scroll-smooth text-[#fff] nav-col h-screen w-full"
        style={{ scrollBehavior: "smooth", color: "#fff" }}>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;