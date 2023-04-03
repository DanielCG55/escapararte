import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { FaSignInAlt, FaSignOutAlt, FaHome } from "react-icons/fa";

export const Navbar = () => {
    const { user } = useUser();

    return (
        <nav className="flex border-8 border-y-slate-400 border-x-slate-500 bg-slate-300  justify-between p-3 text-3xl sticky top-0 z-50">
            <Link
                href={"/"}
                className="hover:text-orange-600 flex items-center gap-4"
            >
                <FaHome /> Home
            </Link>
            <Link
                href="/sections/pencil_draws_pages"
                className="hover:text-gray-500/50 flex gap-4"
            >
                Pencil Draws
            </Link>
            <Link href="/sections/manga_page" className="hover:text-[#f00]">
                Mangas
            </Link>
            <Link href="/sections/oils" className="hover:text-[#ffd38b]">
                Oils
            </Link>
            <Link
                href="/sections/digital_draws_pages"
                className="hover:text-[#15d7f9] flex gap-4"
            >
                Digital
            </Link>

            <Link
                href="/sections/about_me_page"
                className="hover:text-[#1b36fe]"
            >
                About
            </Link>
            {!user && (
                <Link
                    href="/api/auth/login"
                    className="hover:text-[#01010117] flex items-center gap-4"
                >
                    Login <FaSignInAlt />
                </Link>
            )}
            {user && (
                <Link
                    href="/api/auth/logout"
                    className="hover:text-[#01010117] flex items-center gap-4"
                >
                    Logout <FaSignOutAlt />
                </Link>
            )}
        </nav>
    );
};
