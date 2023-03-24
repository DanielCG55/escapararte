import React from "react";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <HomePage />
            <Navbar />
            {children}
        </>
    );
};
