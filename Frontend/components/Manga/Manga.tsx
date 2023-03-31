import { CardGeneric } from "@/types/card";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { MangasCard } from "./MangasCard";
import { useCardList } from "@/hooks/context/useCardList";

export const Manga = () => {
    const { data, mutate } = useCardList("manga");

    return (
        <>
            <BackGroundColor bg_color="bg-red-700/70">
                <div className="bg-[url('/red.png')] bg-cover bg-fixed">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="flex justify-center text-8xl p-16 text-slate-50/80">
                            Mangas
                        </h1>
                        <h2 className="text-4xl m-16 p-10 text-slate-50/80">
                            · Como bien indica el nombre, esta sección está
                            dirigida para los dibujos hechos a lápiz. No importa
                            dónde(servilletas, papeles viejos, libretas
                            antiguas), si habéis hecho un dibujo y lo queréis
                            compartir, este es vuestro sitio.
                        </h2>
                        <CardForm category="manga" />
                    </div>
                    {data && (
                        <div>
                            {data.map((card: CardGeneric) => (
                                <MangasCard
                                    key={card._id}
                                    imageSrc={"/freezer.jpg"}
                                    title={card.title}
                                    author={card.author}
                                    description={card.description}
                                    category={card.category}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </BackGroundColor>
        </>
    );
};
