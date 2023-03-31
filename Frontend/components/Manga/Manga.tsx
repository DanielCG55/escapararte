import axios from "axios";
import { useEffect, useState } from "react";
import { CardForm } from "../forms/CardForm";
import { BackGroundColor } from "../shared/BackGroundColor";
import { MangasCard } from "./MangasCard";

export const Manga = () => {
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
            <BackGroundColor bg_color="bg-red-700/70">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="flex justify-center text-8xl p-16 text-slate-50/80">
                        Mangas
                    </h1>
                    <h2 className="text-4xl m-16 p-10 text-slate-50/80">
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
                        {data.map((card) => (
                            <MangasCard
                                key={card._id}
                                imageSrc={"/freezer.jpg"}
                                title={card.title}
                                author={card.author}
                                description={card.description}
                                origin={card.origin}
                            />
                        ))}
                    </div>
                )}
            </BackGroundColor>
        </>
    );
};
