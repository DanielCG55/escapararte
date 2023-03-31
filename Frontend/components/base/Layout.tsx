import React from "react";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <div className="grid grid-rows-[250px,_1fr,minmax(541px,auto)]">
                <HomePage />
                <Navbar />
                {children}
            </div>
        </>
    );
};
