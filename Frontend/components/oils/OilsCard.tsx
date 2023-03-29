import Image from "next/image";
import { CardGeneric } from "@/types/card";

export const OilsCard: React.FC<CardGeneric> = ({
    imageSrc,
    title,
    author,
    description,
}) => {
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-[20px] ... ring-offset-0 ring-[10px] ring-amber-600/80 box-border  grow-0 border-amber-900/80 relative min-w-[850px]">
                    <Image
                        src={imageSrc}
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>

                <div className="border-2 border-transparent box-border">
                    <h1 className="text-6xl m-6 text-orange-900 ">{title}</h1>
                    <h2 className="text-3xl m-12 text-orange-900">{author}</h2>
                    <p className="m-10 text-xl text-orange-900">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};
