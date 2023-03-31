import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
                <title>Escapararte</title>
            </Head>
            <div className=" bg-blue-900 grid place-items-center  gap-4 p-14 bg-[url('/fondo.jpg')] h-full ">
                <Link
                    className="  text-orange-600/80 hover:text-orange-800 text-9xl "
                    href={"/"}
                >
                    EscaparArte
                </Link>
                <Link
                    className="text-orange-600/95 hover:text-orange-700  text-2xl  grid place-self-end"
                    href={"/sections/about_me_page"}
                >
                    By Daniel Cortina
                </Link>
            </div>
        </>
    );
};
