import "../public/globals.css";
import { Global } from "@emotion/react";
import { Layout } from "@/components/base/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { SWRConfig } from "swr";
import { backendFetcher } from "@/lib/backendFetcher";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <SWRConfig value={{ fetcher: backendFetcher }}>
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
            </SWRConfig>
        </>
    );
}
