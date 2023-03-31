import { useCardList } from "@/hooks/context/useCardList";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { OilsCard } from "./OilsCard";
import { CardGeneric } from "@/types/card";

export const Oils = () => {
    const { data, mutate } = useCardList("oil");
    return (
        <>
            <BackGroundColor bg_color="bg-yellow-600/25">
                <div className="flex flex-col bg-[url('/carton_amarillo.avif')] bg-cover bg-fixed">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="flex justify-center text-8xl p-16 text-orange-900">
                            Oils
                        </h1>
                        <h2 className="text-4xl m-16 p-10 text-orange-900">
                            · Como bien indica el nombre, esta sección está
                            dirigida para los dibujos hechos a lápiz. No importa
                            dónde(servilletas, papeles viejos, libretas
                            antiguas), si habéis hecho un dibujo y lo queréis
                            compartir, este es vuestro sitio.
                        </h2>
                        <CardForm category="oil" />
                    </div>
                    {data && (
                        <div>
                            {data.map((card: CardGeneric) => (
                                <OilsCard
                                    key={card._id}
                                    imageSrc={"/oleo.jpg"}
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
