import { CardGeneric } from "@/types/card";
import { CardForm } from "../forms/CardForm";
import { useCardList } from "@/hooks/context/useCardList";
import { deleteCard } from "@/lib/api";
import { BaseCard } from "../shared/baseCard";

export const Manga = () => {
    const { data, mutate } = useCardList("manga");

    return (
        <>
            <div className="bg-[url('/red.png')] bg-cover bg-fixed h-full">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-8xl p-16 text-slate-50/90">
                        Mangas
                    </h1>
                    <h2 className="text-4xl m-16 p-10 text-slate-50/90">
                        · Esta sección, está destinada para que compartáis todos
                        vuestros dibujos basados en animes. Deben estar
                        dibujados a mano. Ya tenemos una sección dedicada al
                        dibujo digital.
                    </h2>
                    <CardForm category="manga" />
                </div>
                {data && (
                    <div className="text-slate-50/80">
                        {data.map((card: CardGeneric) => (
                            <BaseCard
                                style="manga"
                                key={card._id}
                                imageSrc={"/freezer.jpg"}
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
