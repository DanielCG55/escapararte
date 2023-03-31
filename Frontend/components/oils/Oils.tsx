import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { OilsCard } from "./OilsCard";

export const Oils = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:5000/get_all_cards", {
                params: { origin: window.location.href },
            })
            .then((response) => {
                setData(response.data);
            });
    }, []);

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
                        <CardForm />
                    </div>
                    {data && (
                        <div>
                            {data.map((card) => (
                                <OilsCard
                                    key={card._id}
                                    imageSrc={"/oleo.jpg"}
                                    title={card.title}
                                    author={card.author}
                                    description={card.description}
                                    origin={card.origin}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </BackGroundColor>
        </>
    );
};
