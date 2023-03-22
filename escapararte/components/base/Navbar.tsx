import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="flex border-8 border-slate-400 m-12 justify-between p-10 text-4xl border-r-4">
            <Link href="/">Home</Link>
            <Link href="/sections/pencil_draws_pages">Pencil Draws</Link>
            <Link href="/sections/manga_page">Mangas</Link>
            <Link href="/sections/oils">Oils</Link>
            <Link href="/sections/digital_draws_pages">Digital Draws</Link>
            <Link href="/sections/sign_up">Sign up</Link>
            <Link href="/sections/about_me">About Me</Link>
        </nav>
    );
};
