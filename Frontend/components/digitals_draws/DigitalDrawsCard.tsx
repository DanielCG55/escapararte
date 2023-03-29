import { CardGeneric } from "@/types/card";
import Image from "next/image";

export const DigitalDrawsCard: React.FC<CardGeneric> = ({
    imageSrc,
    title,
    author,
    description,
}) => {
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-8 ... ring-offset-0 ring-8 ring-blue-900/80 border-blue-500/80 box-border grow-0 relative min-w-[850px]">
                    <Image
                        src={imageSrc}
                        fill
                        alt=""
                        className=" object-cover "
                    />
                </div>

                <div className="border-2 border-transparent box-border text-blue-900/80">
                    <h1 className="text-6xl m-6 text-blue-900/80">{title}</h1>
                    <h2 className="text-3xl m-12 text-blue-900/80">{author}</h2>
                    <p className="m-10 text-xl">{description}</p>
                </div>
            </div>
        </>
    );
};
