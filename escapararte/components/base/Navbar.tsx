import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="flex border-8 border-y-slate-400 border-x-slate-500 bg-slate-300  justify-between p-10 text-4xl sticky top-0 z-50">
            <Link href="/">Home</Link>
            <Link href="/sections/pencil_draws_pages">Pencil Draws</Link>
            <Link href="/sections/manga_page">Mangas</Link>
            <Link href="/sections/oils">Oils</Link>
            <Link href="/sections/digital_draws_pages">Digital Draws</Link>
            <Link href="/sections/sign_up_page">Sign up</Link>
            <Link href="/sections/about_me_page">About Me</Link>
        </nav>
    );
};
