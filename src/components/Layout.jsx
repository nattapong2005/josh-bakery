import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <div className="container mx-auto flex-grow mt-auto "> */}
      <div className="flex-grow">
        {children}
        <Toaster position="bottom-right"/>
        {/* </div> */}
        </div>
      <Footer />
    </div>

    
  );
};

export default Layout;
