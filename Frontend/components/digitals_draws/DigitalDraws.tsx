import { CardGeneric } from "@/types/card";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { DigitalDrawsCard } from "./DigitalDrawsCard";
import { useCardList } from "@/hooks/context/useCardList";

export const DigitalDraws = () => {
    const { data, mutate } = useCardList("digital");

    return (
        <>
            <BackGroundColor bg_color="bg-orange-500/50">
                <div className="bg-[url('/azul.webp')] bg-cover bg-fixed">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="flex justify-center text-8xl p-16 text-blue-900/90">
                            Digital Draws
                        </h1>
                        <h2 className="text-4xl m-16 p-10 text-blue-900/90">
                            · Como bien indica el nombre, esta sección está
                            dirigida para los dibujos hechos a lápiz. No importa
                            dónde(servilletas, papeles viejos, libretas
                            antiguas), si habéis hecho un dibujo y lo queréis
                            compartir, este es vuestro sitio.
                        </h2>
                        <CardForm category="digital" />
                    </div>
                    {data && (
                        <div>
                            {data.map((card: CardGeneric) => (
                                <DigitalDrawsCard
                                    key={card._id}
                                    imageSrc={"/gohan2.jpg"}
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
