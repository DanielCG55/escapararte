import { CardGeneric } from "@/types/card";
import Image from "next/image";
import { DeleteButton } from "./DeleteButton";

interface CardProps extends CardGeneric {
    onClick: any;
    style: "pencil" | "oil" | "digital" | "manga";
    texto?: string;
}

export const BaseCard: React.FC<CardProps> = ({
    _id,
    imageSrc,
    title,
    author,
    description,
    onClick,
    style,
}) => {
    const styles = {
        pencil: "border-8   box-border border-l-gray-800 border-b-gray-800 border-t-gray-500 border-r-gray-500 relative min-w-[850px] text-black",
        oil: "border-[20px] ... ring-offset-0 ring-[10px] ring-amber-600/80 box-border  grow-0 border-amber-900/80 relative min-w-[850px] text-orange-900",
        digital:
            "border-8 ... ring-offset-0 ring-8 ring-blue-900/80 border-blue-500/80 box-border relative  min-w-[850px]",
        manga: "border-8  box-border bg-red-700/50 grow-0 border-y-red-900 border-x-red-600 relative min-w-[850px]",
    };
    return (
        <div className="flex m-8 p-20 h-[850px]">
            <div
                className={`box-border relative min-w-[850px] ${styles[style]}`}
            >
                <Image src={imageSrc} fill alt="" className="object-contain" />
            </div>

            <div className="border-2 border-transparent box-border">
                <h1 className="text-8xl m-6">{title}</h1>
                <h2 className="text-6xl m-12">{author}</h2>
                <p className="m-16 text-4xl">{description}</p>
                <DeleteButton onClick={onClick} />
            </div>
        </div>
    );
};
