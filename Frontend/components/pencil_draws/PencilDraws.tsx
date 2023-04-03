import { useCardList } from "@/hooks/context/useCardList";
import { CardForm } from "../forms/CardForm";
import { CardGeneric } from "@/types/card";
import { deleteCard } from "@/lib/api";
import { BaseCard } from "../shared/baseCard";

export const PencilDraws = () => {
    const { data, mutate } = useCardList("pencil");

    return (
        <>
            <div className="bg-[url('/lapiz.avif')]  bg-cover bg-fixed h-full">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-6xl p-16">
                        Pencil Draws
                    </h1>
                    <h2 className="text-4xl mx-16 my-8">
                        · Como bien indica el nombre, esta sección está dirigida
                        para los dibujos hechos a lápiz. No importa
                        dónde(servilletas, papeles viejos, libretas antiguas),
                        si habéis hecho un dibujo y lo queréis compartir, este
                        es vuestro sitio.
                    </h2>
                    <CardForm category="pencil" />
                </div>
                {data && (
                    <div>
                        {data.map((card: CardGeneric) => (
                            <BaseCard
                                style="pencil"
                                key={card._id}
                                imageSrc={"/pencil.jpg"}
                                title={card.title}
                                author={card.author}
                                description={card.description}
                                category={card.category}
                                onClick={async () => {
                                    await deleteCard(card._id);
                                    mutate();
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
