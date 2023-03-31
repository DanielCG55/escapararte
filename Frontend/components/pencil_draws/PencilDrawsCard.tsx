import { CardGeneric } from "@/types/card";
import Image from "next/image";
import { DeleteButton } from "../shared/DeleteButton";



export const PencilDrawsCard: React.FC<CardGeneric & { onClick: any }> = ({
    _id,
    imageSrc,
    title,
    author,
    description,
    onClick,
}) => {
    
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-8   box-border grow-0 border-l-gray-800 border-b-gray-800 border-t-gray-500 border-r-gray-500 relative min-w-[850px]">
                    <Image
                        src={imageSrc}
                        fill
                        alt=""
                        className="object-contain "
                    />
                </div>
                <div className="border-2 border-transparent box-border">
                    <h1 className="text-6xl m-6">{title}</h1>
                    <h2 className="text-3xl m-12">{author}</h2>
                    <p className="m-10 text-xl">{description}</p>
                </div>
                <DeleteButton onClick={onClick} />
            </div>
        </>
    );
};
