import Head from "next/head";
import Link from "next/link";

export const HomePage = () => {
    return (
        <>
            <Head>
                <title>Escapararte</title>
            </Head>
            <div className=" bg-blue-900">
                <Link
                    className="text-orange-600 flex  justify-center p-14 text-9xl  hover:text-orange-900"
                    href={"/"}
                >
                    ESCAPARARTE
                </Link>
                <p className="text-orange-600 p-4 text-2xl text-right">
                    By Daniel Cortina
                </p>
                
            </div>
            
        </>
    );
};