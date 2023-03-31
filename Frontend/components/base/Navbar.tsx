import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export const Navbar = () => {
    const { user } = useUser();

    return (
        <nav className="flex border-8 border-y-slate-400 border-x-slate-500 bg-slate-300  justify-between p-10 text-4xl sticky top-0 z-50">
            <Link href={"/"} className="hover:text-orange-600">
                Home
            </Link>
            <Link
                href="/sections/pencil_draws_pages"
                className="hover:text-gray-500/50"
            >
                Pencil Draws
            </Link>
            <Link href="/sections/manga_page" className="hover:text-red-700/70">
                Mangas
            </Link>
            <Link href="/sections/oils" className="hover:text-yellow-600/25">
                Oils
            </Link>
            <Link
                href="/sections/digital_draws_pages"
                className="hover:text-orange-500/50"
            >
                Digital Draws
            </Link>

            <Link
                href="/sections/about_me_page"
                className="hover:text-orange-600"
            >
                About Me
            </Link>
            {!user && (
                <Link href="/api/auth/login" className="hover:text-orange-600">
                    Sign In
                </Link>
            )}
            {user && (
                <Link href="/api/auth/logout" className="hover:text-orange-600">
                    Logout
                </Link>
            )}
        </nav>
    );
};
