import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="" />
                <title>Escapararte</title>
            </Head>
            <div className="grid place-items-center  gap-4 p-14 bg-[url('/fondo.jpg')] h-full ">
                <Link
                    className="  text-[#ce5214eb] hover:text-[#faba8ae2] text-9xl "
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
