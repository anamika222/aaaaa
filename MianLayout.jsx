import React from "react";
import Navbar from "../ShareComponent/Navbar";
import Footer from "../ShareComponent/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return(
       <div>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
       </div>
    );

    
};
export default MainLayout;