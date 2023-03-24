
import { BackGroundColor } from "../shared/BackGroundColor";
import { OilsCard } from "./OilsCard";


export const Oils = () => {
    return (
        <>
            <BackGroundColor bg_color="bg-yellow-600/25">
                <h1 className="flex justify-center text-8xl p-16 text-orange-900">Oils</h1>
                <h2 className="text-4xl m-16 p-10 text-orange-900">
                    · Como bien indica el nombre, esta sección está dirigida
                    para los dibujos hechos a lápiz. No importa
                    dónde(servilletas, papeles viejos, libretas antiguas), si
                    habéis hecho un dibujo y lo queréis compartir, este es
                    vuestro sitio.
                </h2>
                <OilsCard/>
                <OilsCard/>
            </BackGroundColor>
        </>
    );
};
