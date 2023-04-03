import { useCardList } from "@/hooks/context/useCardList";
import { CardForm } from "../forms/CardForm";
import { CardGeneric } from "@/types/card";
import { deleteCard } from "@/lib/api";
import { BaseCard } from "../shared/baseCard";

export const Oils = () => {
    const { data, mutate } = useCardList("oil");
    return (
        <>
            <div className="flex flex-col bg-[url('/carton_amarillo.avif')] bg-cover bg-fixed h-full text-orange-900">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-8xl p-16 text-orange-900">
                        Oils
                    </h1>
                    <h2 className="text-4xl m-16 p-10">
                        · En esta sección, podéis compartir cualquier lienzo que
                        queráis. Ya sea uno hecho por vosotros o, hechos por
                        alguien que conozcáis y queráis promocionar, podéis
                        aprovechar la etiqueta Description para explicar la
                        historia del cuadro.
                    </h2>
                    <CardForm category="oil" />
                </div>
                {data && (
                    <div>
                        {data.map((card: CardGeneric) => (
                            <BaseCard
                                style="oil"
                                key={card._id}
                                imageSrc={"/oleo.jpg"}
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
