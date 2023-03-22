import React from "react";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
    return (
        <>
            <HomePage />
            <Navbar />
            {children}
        </>
    );
};


