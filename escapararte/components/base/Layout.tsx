import React from "react";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <HomePage />
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
