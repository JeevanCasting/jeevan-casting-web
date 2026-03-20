import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const RouteLayout=()=> {
  return (
    <div>
        <Navbar/>
        <div className="">
         <Outlet/>
        </div>
        <Footer/>
    </div>
  );
}


export default RouteLayout;
