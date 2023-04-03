import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-transparent fixed bottom-0 right-0 m-6">
                <Link
                    href="https://instagram.com/daniel_cg5?igshid=ZDdkNTZiNTM="
                    className=" text-2xl"
                    target="_blank"
                >
                    <BsInstagram />
                </Link>
            </footer>
        </>
    );
};
