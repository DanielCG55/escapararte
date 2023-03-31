import { CardGeneric } from "@/types/card";
import Image from "next/image";
import { DeleteButton } from "../shared/DeleteButton";
import { deleteCard } from "@/lib/api";


export const MangasCard: React.FC<CardGeneric> = ({
    _id,
    imageSrc,
    title,
    author,
    description,
}) => {
    return (
        <>
            <div className="flex m-8 p-20 h-[850px]">
                <div className="border-8  box-border bg-red-700/50 grow-0 border-y-red-900 border-x-red-600 relative min-w-[850px]">
                    <Image
                        src={imageSrc}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </div>

                <div className="border-2 border-transparent box-border text-slate-50/80">
                    <h1 className="text-6xl m-6 text-slate-50/80">{title}</h1>
                    <h2 className="text-3xl m-12 text-slate-50/80">{author}</h2>
                    <p className="m-10 text-xl">{description}</p>
                </div>
                <DeleteButton
                    onClick={() => {
                        deleteCard(_id);
                        mutate;
                    }}
                />
            </div>
        </>
    );
};
