import "../public/globals.css";
import { css, Global } from "@emotion/react";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Global
                styles={`
                @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

        body{
            margin: 0;
            padding: 0;
            font-family: "Kaushan Script";
        }
        
        `}
            />
            <Component {...pageProps} />
        </>
    );
}
