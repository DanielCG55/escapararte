import React from "react";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Index } from "@/pages";

export const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-[250px,_1fr,minmax(541px,auto)]">
                <HomePage />
                <Navbar />               
                <Footer />
                {children}
            </div>
        </>
    );
};

export default Layout;
