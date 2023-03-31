import "../public/globals.css";
import { Global } from "@emotion/react";
import { Layout } from "@/components/base/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { SWRConfig } from "swr/_internal";
import { backendFetcher } from "@/lib/backendFetcher";
import { getSession } from "@auth0/nextjs-auth0";

// const AuthenticatedApp: React.FC<{ children: any }> = ({ children }) => {
//     const [token, setToken] = useState("")
//
//
//
//     return (
//         <>
//             <UserProvider>
//                 <SWRConfig value={{ fetcher: backendFetcher(token) }}>
//                     {token && children} {!token && <div>Waiting</div>}
//                 </SWRConfig>
//             </UserProvider>
//         </>
//     );
// };

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <AuthenticatedApp> */}
            <Global
                styles={`
                @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

                body{
                    margin: 0;
                    padding: 0;
                    font-family: "Kaushan Script", cursive;
                }
                `}
            />
            <UserProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
            {/* </AuthenticatedApp> */}
        </>
    );
}
