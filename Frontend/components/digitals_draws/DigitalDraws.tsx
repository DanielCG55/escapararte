import axios from "axios";
import { useEffect, useState } from "react";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { DigitalDrawsCard } from "./DigitalDrawsCard";

export const DigitalDraws = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:5000/get_all_cards").then((response) => {
            setData(response.data);
        });
    }, []);
    return (
        <>
            <BackGroundColor bg_color="bg-orange-500/50">
                <h1 className="flex justify-center text-8xl p-16 text-blue-900/90">
                    Digital Draws
                </h1>
                <h2 className="text-4xl m-16 p-10 text-blue-900/90">
                    · Como bien indica el nombre, esta sección está dirigida
                    para los dibujos hechos a lápiz. No importa
                    dónde(servilletas, papeles viejos, libretas antiguas), si
                    habéis hecho un dibujo y lo queréis compartir, este es
                    vuestro sitio.
                </h2>
                <CardForm />
                {data && (
                    <div>
                        {data.map((card) => (
                            <DigitalDrawsCard
                                key={card._id}
                                imageSrc={card.imageSrc}
                                title={card.title}
                                author={card.author}
                                description={card.description}
                            />
                        ))}
                    </div>
                )}
            </BackGroundColor>
        </>
    );
};
