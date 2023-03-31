import axios from "axios";
import { useEffect, useState } from "react";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { PencilDrawsCard } from "./PencilDrawsCard";
import Image from "next/image";


export const PencilDraws = () => {
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
            <BackGroundColor bg_color="bg-gray-500/50">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-8xl p-16">
                        Pencil Draws
                    </h1>
                    <h2 className="text-4xl m-16 p-10">
                        · Como bien indica el nombre, esta sección está dirigida
                        para los dibujos hechos a lápiz. No importa
                        dónde(servilletas, papeles viejos, libretas antiguas),
                        si habéis hecho un dibujo y lo queréis compartir, este
                        es vuestro sitio.
                    </h2>
                    <CardForm />
                </div>
                {data && (
                    <div>
                        {data.map((e) => (
                            <PencilDrawsCard
                                key={e._id}
                                imageSrc={"/pencil.jpg"}
                                title={e.title}
                                author={e.author}
                                description={e.description}
                                origin={e.origin}
                            />
                        ))}
                    </div>
                )}
            </BackGroundColor>
        </>
    );
};
