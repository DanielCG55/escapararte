import { CardGeneric } from "@/types/card";
import { CardForm } from "../forms/CardForm";
import { useCardList } from "@/hooks/context/useCardList";
import { deleteCard } from "@/lib/api";
import { BaseCard } from "../shared/BaseCard";

export const DigitalDraws = () => {
    const { data, mutate } = useCardList("digital");

    return (
        <>
            <div className="bg-[url('/azul.webp')] bg-cover bg-fixed h-full text-[#01044d]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-8xl p-16 text-[#01044d]">
                        Digital Draws
                    </h1>
                    <h2 className="text-4xl m-16 p-10 text-[#01044d]">
                        · En esta página, podéis compartir cualquier cosa que
                        hayáis dibujado en una tablet, da igual la fuente de
                        inspiración(Mangas, Animes, Paisajes, Aqrquitectura,
                        etc...). Sentiros libres de compartir cualquier
                        dibujo.(Ejem, cualquiera no, ya me entendéis...)
                    </h2>
                    <CardForm category="digital" />
                </div>
                {data && (
                    <div>
                        {data.map((card: CardGeneric) => (
                            <BaseCard
                                style="digital"
                                key={card._id}
                                imageSrc={"/gohan2.jpg"}
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
